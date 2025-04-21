import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editHealthSuggestions } from "../../lib/Store";
const HealthCycleEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    number: "",
    description: "",
  };
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("editData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const countWords = (text) => {
      return text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    };

    // Validation rules
    const MIN_WORDS = 5;
    const MAX_WORDS = 500;

    // Perform validation
    if (
      countWords(data.description) < MIN_WORDS ||
      countWords(data.description) > MAX_WORDS
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Description must have between ${MIN_WORDS} and ${MAX_WORDS} words.`,
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update Description",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Updating...",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          const updatedData = {
            id: data.id,
            description: e.target.description.value,
          };

          const response = await editHealthSuggestions(updatedData);
          console.log("ress", response);
          if (response.status === true) {
            const newData = {
              ...data,
              description: response.data.description,
            };
            setData(newData);
            localStorage.setItem("editData", JSON.stringify(newData));

            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Description updated successfully!",
            }).then(() => {
              window.close();
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Warning!",
              text: result?.message || "Unexpected response from the server.",
            });
          }
        } catch (err) {
          console.error("Error executing API:", err);
          Swal.fire({
            icon: "error",
            title: "API Error",
            text:
              err.response?.data?.message ||
              "Failed to execute API. Please check your network or try again later.",
          });
        }
      } else {
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  if (!data || !data.id) {
    return (
      <>
        <Header />
        <div className="main-container pb-3">
          <div className="pd-20 card-box mb-30">
            <h2>No data available to edit.</h2>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h2>Edit Number {data?.number}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Number:</strong>
                  <input
                    placeholder="Number"
                    className="form-control"
                    disabled
                    name="number"
                    type="number"
                    value={data.number}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Description:</strong>
                  <textarea
                    placeholder="Description"
                    className="form-control description"
                    name="description"
                    cols={40}
                    rows={10}
                    defaultValue={data.description}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HealthCycleEdit;
