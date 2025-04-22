import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editLifeCycle } from "../../lib/Store";

const LifeCycleEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {};
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("editData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const countWords = (text = "") =>
    text
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0).length;

  const MIN_WORDS = 5;
  const MAX_WORDS = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // grab the three textareas
    const month = e.target.month.value;
    const date = e.target.date.value;
    const year = e.target.year.value;

    // validate each
    for (let [label, value] of [
      ["Cycle By Month", month],
      ["Cycle By Date", date],
      ["Cycle By Year", year],
    ]) {
      const words = countWords(value);
      if (words < MIN_WORDS || words > MAX_WORDS) {
        Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: `${label} must be between ${MIN_WORDS} and ${MAX_WORDS} words (you have ${words}).`,
        });
        return;
      }
    }

    // prepare payload
    const updatedData = {
      cycle_by_month: month,
      cycle_by_date: date,
      cycle_by_year: year,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update these fields?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (!result.isConfirmed) {
        Swal.fire("Cancelled", "No changes were made.", "info");
        return;
      }

      try {
        Swal.fire({
          title: "Updating...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        const response = await editLifeCycle(data.id, updatedData);

        if (response.status === true) {
          // merge new values into state + localStorage
          const newData = { ...data, ...updatedData };
          setData(newData);
          localStorage.setItem("editData", JSON.stringify(newData));

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Fields updated successfully!",
          }).then(() => window.close());
        } else {
          Swal.fire({
            icon: "warning",
            title: "Warning!",
            text: response.message || "Unexpected response from the server.",
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
    });
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
                disabled
                name="number"
                type="text"
                value={data.number}
              />
            </div>

            <div className="form-group">
              <strong>Cycle By Month:</strong>
              <textarea
                className="form-control"
                name="month"
                cols={40}
                rows={5}
                defaultValue={data.cycle_by_month}
              />
            </div>

            <div className="form-group">
              <strong>Cycle By Date:</strong>
              <textarea
                className="form-control"
                name="date"
                cols={40}
                rows={5}
                defaultValue={data.cycle_by_date}
              />
            </div>

            <div className="form-group">
              <strong>Cycle By Year:</strong>
              <textarea
                className="form-control"
                name="year"
                cols={40}
                rows={5}
                defaultValue={data.cycle_by_year}
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

export default LifeCycleEdit;
