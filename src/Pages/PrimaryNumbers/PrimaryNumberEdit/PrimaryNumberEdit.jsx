import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Swal from "sweetalert2";
import {editPrimaryNumber } from "../../../lib/Store";

const PrimaryNumberEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    number: "",
    description: "",
    positive: "",
    negative: "",
    occupations: "",
    health: "",
    partners: "",
    times_of_the_year: "",
    countries: "",
    tibbits: "",
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("editData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const countWords = (text) => {
      return text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    };

    const MIN_WORDS = 1;
    const MAX_WORDS = 500;

    for (let key in data) {
      if (
        typeof data[key] === "string" &&
        (countWords(data[key]) < MIN_WORDS || countWords(data[key]) > MAX_WORDS)
      ) {
        Swal.fire({
          icon: "error",
          title: "Validation error",
          text: `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } must have between ${MIN_WORDS} and ${MAX_WORDS} words.`,
        });
        return;
      }
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the field?",
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

          const response = await editPrimaryNumber(data);

          if (response.status === true) {
            setData(data);
            localStorage.setItem("editData", JSON.stringify(data));

            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Primary number details updated successfully!",
            }).then(() => {
              window.close();
            });
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
            title: "API error",
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
        <div className="main-container">
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
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <h2>Edit number {data.number}</h2>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="number">
                    <strong>Number:</strong>
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="form-control"
                    disabled
                    value={data.number}
                  />
                </div>
                {[
                  "description",
                  "positive",
                  "negative",
                  "occupations",
                  "health",
                  "partners",
                  "times_of_the_year",
                  "countries",
                  "tibbits",
                ].map((field, index) => (
                  <div key={index} className="form-group">
                    <strong>
                      {field.replace(/_/g, " ").charAt(0).toUpperCase() +
                        field.replace(/_/g, " ").slice(1)}
                      :
                    </strong>
                    <textarea
                      id={field}
                      name={field}
                      placeholder={`Enter ${field.replace(/_/g, " ")}`}
                      className="form-control description"
                      rows={4}
                      value={data[field]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <div className="col-md-12 text-center">
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

export default PrimaryNumberEdit;
