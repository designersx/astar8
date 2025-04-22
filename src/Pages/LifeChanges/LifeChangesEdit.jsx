import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editLifeChanges } from "../../lib/Store";

const LifeChangesEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {};
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("editData"));
    if (stored) setData(stored);
  }, []);

  const countWords = (text = "") =>
    text
      .trim()
      .split(/\s+/)
      .filter((w) => w.length).length;

  const MIN_WORDS = 2;
  const MAX_WORDS = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // grab both fields
    const agesValue = e.target.ages.value;
    const yearsText = e.target.years.value;
    const wordCount = countWords(yearsText);

    // validate years
    if (wordCount < MIN_WORDS || wordCount > MAX_WORDS) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Years must be between ${MIN_WORDS} and ${MAX_WORDS} words (you have ${wordCount}).`,
      });
      return;
    }

    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update Ages and Years?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    });

    if (!isConfirmed) {
      Swal.fire("Cancelled", "No changes were made.", "info");
      return;
    }

    try {
      Swal.fire({
        title: "Updating...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const updatedData = {
        ages: agesValue,
        years: yearsText,
      };
      const response = await editLifeChanges(data.id, updatedData);

      if (response.status === true) {
        // merge in whatever the API returned (or fall back to our values)
        const newData = {
          ...data,
          ages: response.ages ?? agesValue,
          years: response.years ?? yearsText,
        };
        setData(newData);
        localStorage.setItem("editData", JSON.stringify(newData));

        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Ages and Years updated successfully!",
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
          <h2>Edit Number {data.numbers}</h2>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>Number:</strong>
              <input
                className="form-control"
                disabled
                name="number"
                type="text"
                value={data.numbers}
              />
            </div>

            <div className="form-group">
              <strong>Ages:</strong>
              {/* now editable */}
              <input
                className="form-control"
                name="ages"
                type="text"
                defaultValue={data.ages}
              />
            </div>

            <div className="form-group">
              <strong>Years:</strong>
              <textarea
                className="form-control"
                name="years"
                cols={40}
                rows={5}
                defaultValue={data.years}
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

export default LifeChangesEdit;
