import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editCompaitibiltyScale } from "../../lib/Store";

const CompatibilityPercentageEdit = () => {
  const [data, setData] = useState({
    id: "",
    number: "",
    mate_number: "",
    compatibility_number: "",
    compatibility_percentage: "",
    strength: "",
  });

  // Load initial data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("editData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  // Single change‐handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- Ensure these fields are strings ---
    const stringFields = [
      { key: "compatibility_number", label: "Compatibility Number" },
      { key: "compatibility_percentage", label: "Compatibility Percentage" },
      { key: "strength", label: "Strength" },
    ];

    for (let { key, label } of stringFields) {
      if (typeof data[key] !== "string" || data[key].trim() === "") {
        return Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: `${label} must be a non-empty text string.`,
        });
      }
    }

    // --- Validation: compatibility_percentage must be 0–100 ---
    const pct = parseFloat(data.compatibility_percentage);
    if (isNaN(pct) || pct < 0 || pct > 100) {
      return Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Compatibility percentage must be a number between 0 and 100.",
      });
    }

    // --- Validation: strength word‐count 5–500 ---
    const wordCount = data.strength
      .trim()
      .split(/\s+/)
      .filter((w) => w).length;
    if (wordCount < 2 || wordCount > 500) {
      return Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Strength must be between 5 and 500 words.",
      });
    }

    // --- Confirmation prompt ---
    const { isConfirmed } = await Swal.fire({
      title: "Confirm update",
      text: "Are you sure you want to save these changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    });
    if (!isConfirmed) {
      return Swal.fire("Cancelled", "No changes were made.", "info");
    }

    // --- Perform update ---
    try {
      Swal.fire({
        title: "Updating…",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const payload = {
        compatibility_number: data.compatibility_number,
        compatibility_percentage: data.compatibility_percentage,
        strength: data.strength,
      };

      const resp = await editCompaitibiltyScale(data.id, payload);
      console.log("dasda",resp)
      if (resp.status === true) {
        const updated = { ...data, ...resp.data };
        setData(updated);
        localStorage.setItem("editData", JSON.stringify(updated));
        Swal.fire("Success", "Data updated successfully!", "success").then(
          () => {
            window.close();
          }
        );
      } else {
        Swal.fire(
          "Warning",
          resp.message || "Unexpected server response.",
          "warning"
        );
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "API Error",
        text:
          err.response?.data?.message || "Network error – please try again.",
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
          <h2>Edit Compatibility Scale</h2>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>Number:</strong>
              <input
                type="text"
                className="form-control"
                name="number"
                value={data.number}
                disabled
              />
            </div>

            <div className="form-group">
              <strong>Mate Numbers:</strong>
              <input
                type="text"
                className="form-control"
                name="mate_number"
                value={data.mate_number}
                disabled
              />
            </div>

            <div className="form-group">
              <strong>Compatibility Number:</strong>
              <input
                type="text"
                className="form-control"
                name="compatibility_number"
                value={data.compatibility_number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <strong>Compatibility Percentage:</strong>
              <input
                type="number"
                className="form-control"
                name="compatibility_percentage"
                value={data.compatibility_percentage}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </div>

            <div className="form-group">
              <strong>Strength:</strong>
              <textarea
                className="form-control"
                name="strength"
                value={data.strength}
                onChange={handleChange}
                rows={3}
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

export default CompatibilityPercentageEdit;
