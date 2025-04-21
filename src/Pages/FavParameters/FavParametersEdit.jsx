import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editParameters } from "../../lib/Store";

const FavParametersEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    date: "",
    numbers: "",
    days: "",
    months: "",
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

    const updatedData = {
      numbers: e.target.numbers.value,
      days: e.target.days.value,
      months: e.target.months.value,
    };
    console.log("UpdatedData", updatedData);

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update these parameters?",
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

          const id = data.id;
          const monthId = data.month_id;
          const response = await editParameters(id, monthId, updatedData);
          console.log("ress",response)

          if (response.status === true) {
            const newData = { ...data, ...updatedData };
            setData(newData);
            localStorage.setItem("editData", JSON.stringify(newData));

            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Parameters updated successfully!",
            }).then(() => {
              window.close();
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Warning!",
              text: response?.message || "Unexpected server response.",
            });
          }
        } catch (err) {
          console.error("API Error:", err);
          Swal.fire({
            icon: "error",
            title: "API Error",
            text:
              err.response?.data?.message ||
              "Failed to execute API. Please check your network.",
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
          <h2>Edit Date {data?.date}</h2>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Date:</strong>
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={data.date}
                    disabled
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Numbers:</strong>
                  <input
                    type="text"
                    className="form-control"
                    name="numbers"
                    defaultValue={data.numbers}
                    placeholder="e.g. 1,4,8"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Days:</strong>
                  <input
                    type="text"
                    className="form-control"
                    name="days"
                    defaultValue={data.days}
                    placeholder="e.g. Sun,Sat"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <strong>Months:</strong>
                  <input
                    type="text"
                    className="form-control"
                    name="months"
                    defaultValue={data.months}
                    placeholder="e.g. Jan,Feb,Aug"
                  />
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary mt-3">
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

export default FavParametersEdit;
