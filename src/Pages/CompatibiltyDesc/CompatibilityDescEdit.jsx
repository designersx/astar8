import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editCompaitibiltyDesc, editCompaitibiltyScale } from "../../lib/Store";

const CompatibilityDescEdit = () => {
  // 1. State shape for all six descriptions
  const [data, setData] = useState({
    id: "",
    number: "",
    mate_number: "",
    regular_or_spouse_desc: "",
    other_person_desc: "",
    name_reading_desc: "",
    car_vehicle_desc: "",
    house_property_desc: "",
    business_desc: "",
  });

  // Load from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem("editData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Define fields array once
  const descFields = [
    {
      key: "regular_or_spouse_desc",
      label: "Regular / Spousal Description",
      rows: 6,
    },
    {
      key: "withOtherPerson",
      label: "Other Person Description",
      rows: 6,
    },
    {
      key: "forNameReading",
      label: "Name Reading Description",
      rows: 6,
    },
    {
      key: "forCarOrVehicle",
      label: "Car/Vehicle Description",
      rows: 2,
    },
    {
      key: "forHouseOrProperty",
      label: "House/Property Description",
      rows: 2,
    },
    {
      key: "forBusiness",
      label: "Business Description",
      rows: 2,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 3. Validate only the fields the user actually filled in
    for (let { key, label } of descFields) {
      const text = (data[key] || "").trim();
      if (text) {
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        if (wordCount < 5 || wordCount > 500) {
          return Swal.fire({
            icon: "error",
            title: "Validation Error",
            text: `${label} must be between 5 and 500 words if provided.`,
          });
        }
      }
    }

    // 4. Confirm
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

    try {
      Swal.fire({
        title: "Updating…",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      // 5. Build payload, defaulting any empty string to "N/A"
      const payload = descFields.reduce((acc, { key }) => {
        const txt = (data[key] || "").trim();
        acc[key] = txt.length ? txt : "N/A";
        return acc;
      }, {});

      // console.log("dsad",payload)

      // send to API
      const resp = await editCompaitibiltyDesc(data.id, payload);

      if (resp.status === true) {
        const updated = { ...data, ...resp.data };
        setData(updated);
        localStorage.setItem("editData", JSON.stringify(updated));

        Swal.fire("Success", "Data updated successfully!", "success").then(() => {
          window.close();
        });
      } else {
        Swal.fire("Warning", resp.message || "Unexpected server response.", "warning");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "API Error",
        text: err.response?.data?.message || "Network error – please try again.",
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
          <h2>Edit Compatibility Description</h2>
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

            {/* 6. Render the six textareas with placeholder="N/A" */}
            {descFields.map(({ key, label, rows }) => (
              <div className="form-group" key={key}>
                <strong>{label}:</strong>
                <textarea
                  className="form-control"
                  name={key}
                  value={data[key]}
                  placeholder="N/A"
                  onChange={handleChange}
                  rows={rows}
                />
              </div>
            ))}

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

export default CompatibilityDescEdit;
