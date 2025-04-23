import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editPartnerRelationship } from "../../lib/Store";

const PartnerRelationshipEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {};
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("editData"));
    if (stored) setData(stored);
  }, []);

  const countWords = (text = "") =>
    text.trim().split(/\s+/).filter((w) => w.length).length;

  const MIN_WORDS = 2;
  const MAX_WORDS = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // grab just the two editable fields
    const description = e.target.description.value;
    const generalDesc = e.target.general_desc.value;

    // validate both
    for (let { label, value } of [
      { label: "Description", value: description },
      { label: "General Description", value: generalDesc },
    ]) {
      const wc = countWords(value);
      if (wc < MIN_WORDS || wc > MAX_WORDS) {
        await Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: `${label} must be between ${MIN_WORDS} and ${MAX_WORDS} words (you have ${wc}).`,
        });
        return;
      }
    }

    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update these fields?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    });
    if (!isConfirmed) {
      return Swal.fire("Cancelled", "No changes were made.", "info");
    }

    try {
      Swal.fire({
        title: "Updating...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const updatedData = {
        description,
        general_desc: generalDesc,
      };

      const response = await editPartnerRelationship(data.id, updatedData);

      if (response.status === true) {
        const newData = {
          ...data,
          // merge what came back (or fall back)
          description: response.description ?? description,
          general_desc: response.general_desc ?? generalDesc,
        };
        setData(newData);
        localStorage.setItem("editData", JSON.stringify(newData));

        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Fields updated successfully!",
        });
        window.close();
      } else {
        Swal.fire({
          icon: "warning",
          title: "Warning!",
          text: response.message || "Unexpected response from the server.",
        });
      }
    } catch (err) {
      console.error("API Error:", err);
      Swal.fire({
        icon: "error",
        title: "API Error",
        text:
          err.response?.data?.message ||
          "Failed to execute API. Please check your network or try again later.",
      });
    }
  };

  if (!data.id) {
    return (
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <h2>No data available to edit.</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <h2>Edit Number {data.number}</h2>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>Number:</strong>
              <input
                className="form-control"
                name="number"
                type="text"
                value={data.number}
                disabled
              />
            </div>

            <div className="form-group">
              <strong>Mate Number:</strong>
              <input
                className="form-control"
                name="mate_number"
                type="text"
                value={data.mate_number}
                disabled
              />
            </div>

            <div className="form-group">
              <strong>Description:</strong>
              <textarea
                className="form-control"
                name="description"
                rows={6}
                defaultValue={data.description}
              />
            </div>

            <div className="form-group">
              <strong>General Description:</strong>
              <textarea
                className="form-control"
                name="general_desc"
                rows={6}
                defaultValue={data.general_desc}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnerRelationshipEdit;
