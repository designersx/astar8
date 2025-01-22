import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editLuckiestParameter } from "../../../lib/Store";

const LuckiestEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    number: "",
    lucky_colours: "",
    lucky_gems: "",
    lucky_metals: "",
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
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Helper function to count words
    const countWords = (text) => {
      return text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    };

    // Validation rules
    const MIN_WORDS = 1;
    const MAX_WORDS = 20;

    // Perform validation
    if (
      countWords(data.lucky_colours) < MIN_WORDS ||
      countWords(data.lucky_colours) > MAX_WORDS
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Lucky Colours must have between ${MIN_WORDS} and ${MAX_WORDS} words.`,
      });
      return;
    }

    if (
      countWords(data.lucky_gems) < MIN_WORDS ||
      countWords(data.lucky_gems) > MAX_WORDS
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Lucky Gems must have between ${MIN_WORDS} and ${MAX_WORDS} words.`,
      });
      return;
    }

    if (
      countWords(data.lucky_metals) < MIN_WORDS ||
      countWords(data.lucky_metals) > MAX_WORDS
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: `Lucky Metals must have between ${MIN_WORDS} and ${MAX_WORDS} words.`,
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update Luckiest Parameters",
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
            id: data.id.toString(),
            lucky_colours: data.lucky_colours,
            lucky_gems: data.lucky_gems,
            lucky_metals: data.lucky_metals,
          };

          const response = await editLuckiestParameter(updatedData);
          // console.log("dadasd",response)
          if (response.status === true) {
            setData(response.luckiest_parameter);
            localStorage.setItem(
              "editData",
              JSON.stringify(response.luckiest_parameter)
            );

            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Module updated successfully!",
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
              <div>
                <h2>Edit Number {data.number}</h2>
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
                  <strong>Lucky Colors:</strong>
                  <textarea
                    placeholder="Enter lucky colors"
                    className="form-control"
                    name="lucky_colours"
                    value={data.lucky_colours}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <strong>Lucky Gems:</strong>
                  <textarea
                    placeholder="Enter lucky gems"
                    className="form-control"
                    name="lucky_gems"
                    value={data.lucky_gems}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <strong>Lucky Metals:</strong>
                  <textarea
                    placeholder="Enter lucky metals"
                    className="form-control"
                    name="lucky_metals"
                    value={data.lucky_metals}
                    onChange={handleChange}
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

export default LuckiestEdit;
