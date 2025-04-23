import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editCompatiblePartner } from "../../lib/Store";

const CompatiblePartnerEdit = () => {
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

    // pull out each field by its unique name
    const number = e.target.number.value;
    const description = e.target.description.value;
    const moreMonths = e.target.moreCompatibleMonths.value;
    const moreDates = e.target.moreCompatibleDates.value;
    const lessMonths = e.target.lessCompatibleMonths.value;
    const lessDates = e.target.lessCompatibleDates.value;

    // example validation (adjust as needed)
    const fieldsToValidate = [
      { label: "Description", value: description },
      { label: "More Compatible Months", value: moreMonths },
      { label: "More Compatible Dates", value: moreDates },
      { label: "Less Compatible Months", value: lessMonths },
      { label: "Less Compatible Dates", value: lessDates },
    ];
    for (let { label, value } of fieldsToValidate) {
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
        description: description,
        more_compatible_months: moreMonths,
        more_compatible_dates: moreDates,
        less_compatible_months: lessMonths,
        less_compatible_dates: lessDates,
      };

      const response = await editCompatiblePartner(data.id, updatedData);

      if (response.status === true) {
        // merge returned values (or fall back to what we sent)
        const newData = {
          ...data,
          ...updatedData,
          description: response.description ?? description,
          moreCompatibleMonths: response.moreCompatibleMonths ?? moreMonths,
          moreCompatibleDates: response.moreCompatibleDates ?? moreDates,
          lessCompatibleMonths: response.lessCompatibleMonths ?? lessMonths,
          lessCompatibleDates: response.lessCompatibleDates ?? lessDates,
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
                disabled
                name="number"
                type="text"
                value={data.number}
              />
            </div>

            <div className="form-group">
              <strong>Description:</strong>
              <textarea
                className="form-control"
                name="description"
                cols={40}
                rows={5}
                defaultValue={data.description}
              />
            </div>

            <div className="form-group">
              <strong>More Compatible Months:</strong>
              <textarea
                className="form-control"
                name="moreCompatibleMonths"
                cols={40}
                rows={2}
                defaultValue={data.more_compatible_months}
              />
            </div>

            <div className="form-group">
              <strong>More Compatible Dates:</strong>
              <textarea
                className="form-control"
                name="moreCompatibleDates"
                cols={40}
                rows={2}
                defaultValue={data.more_compatible_dates}
              />
            </div>

            <div className="form-group">
              <strong>Less Compatible Months:</strong>
              <textarea
                className="form-control"
                name="lessCompatibleMonths"
                cols={40}
                rows={2}
                defaultValue={data.less_compatible_months}
              />
            </div>

            <div className="form-group">
              <strong>Less Compatible Dates:</strong>
              <textarea
                className="form-control"
                name="lessCompatibleDates"
                cols={40}
                rows={2}
                defaultValue={data.less_compatible_dates}
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

export default CompatiblePartnerEdit;
