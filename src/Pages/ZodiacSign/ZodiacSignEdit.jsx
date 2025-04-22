import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editZodiacSign } from "../../lib/Store";

const ZodiacSignEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {};
  const [data, setData] = useState({
    ...initialData,
    zodic_sign: initialData.zodic_sign || "",
    zodic_number: initialData.zodic_number || "",
    zodic_day: initialData.zodic_day || "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("editData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const MIN_WORDS = 1;
    const MAX_WORDS = 20;

    if (
      countWords(data.zodic_day) < MIN_WORDS ||
      countWords(data.zodic_sign) > MAX_WORDS
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Zodiac Day must have at least ${MIN_WORDS} word, and Zodiac Sign must have no more than ${MAX_WORDS} words.`,
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this Zodiac data?",
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
            zodic_sign: data.zodic_sign,
            zodic_number: data.zodic_number,
            zodic_day: data.zodic_day,
          };

          console.log("dasds",updatedData)

          const id = data.id;

          const response = await editZodiacSign(id, updatedData);
          if (response.status === true) {
            const newData = { ...data, ...updatedData };
            setData(newData);
            localStorage.setItem("editData", JSON.stringify(newData));
            Swal.fire(
              "Updated!",
              "Zodiac data updated successfully!",
              "success"
            ).then(() => {
              window.close();
            });
          } else {
            Swal.fire(
              "Error",
              response?.message || "Unexpected server response.",
              "warning"
            );
          }
        } catch (err) {
          console.error("API Error:", err);
          Swal.fire("Error", "Something went wrong. Try again later.", "error");
        }
      } else {
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  if (!data || !data.id) {
    return (
      <>
        {/* <Header /> */}
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
      {/* <Header /> */}
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <h2>Edit {data.title}</h2>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Title:</strong>
                  <input
                    type="text"
                    className="form-control"
                    value={data.title}
                    disabled
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Zodiac Sign:</strong>
                  <textarea
                    name="zodic_sign"
                    className="form-control"
                    rows="2"
                    value={data.zodic_sign}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Zodiac Number:</strong>
                  <textarea
                    name="zodic_number"
                    className="form-control"
                    rows="2"
                    value={data.zodic_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Zodiac Day:</strong>
                  <textarea
                    name="zodic_day"
                    className="form-control"
                    rows="2"
                    value={data.zodic_day}
                    onChange={handleChange}
                  />
                </div>
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

export default ZodiacSignEdit;
