import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editMagicBox, editPrimaryNumber } from "../../../lib/Store";

const MagicBoxEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    number: "",
    description: "",
  };

  const [data, setData] = useState(initialData);
  const [box, setbox] = useState();
  const [many, setmany] = useState();
  const [few, setfew] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("editData"));
    if (storedData) {
      setData(storedData);
    }

    if (storedData) {
      if (storedData.description.includes("||")) {
        const [boxPart, manyPart, fewPart] = storedData.description.split("||");
        setbox(boxPart.trim());
        setmany(manyPart.trim());
        setfew(fewPart.trim());
      } else {
        setbox(storedData.description);
        setmany("");
        setfew("");
      }
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
        [box, many, few].some(
          (field) =>
            countWords(field) < MIN_WORDS || countWords(field) > MAX_WORDS
        )
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

          const updatedDescription = `${box} || ${many} || ${few}`;

          const updatedData = {
            id: data.id,
            number: data.number,
            description: updatedDescription,
          };

          const response = await editMagicBox(updatedData);

          if (response.status === true) {
            const newData = {
              ...data,
              description: response.updatedFields.description,
            };
            setData(newData);
            localStorage.setItem("editData", JSON.stringify(newData));

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
      <div className="main-container pb-3">
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
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Box Description:</strong>
                  <textarea
                    placeholder="Positive Description"
                    className="form-control description"
                    name="box"
                    cols={50}
                    rows={4}
                    value={box}
                    onChange={(e) => setbox(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <strong>Many's Description:</strong>
                  <textarea
                    placeholder="Negative Description"
                    className="form-control description"
                    name="many"
                    cols={50}
                    rows={4}
                    value={many}
                    onChange={(e) => setmany(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <strong>Few/No's Description:</strong>
                  <textarea
                    placeholder="Negative Description"
                    className="form-control description"
                    name="few"
                    cols={50}
                    rows={4}
                    value={few}
                    onChange={(e) => setfew(e.target.value)}
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

export default MagicBoxEdit;
