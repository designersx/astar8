import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Swal from "sweetalert2";
import { editModuleTypes } from "../../../lib/Store";

const ModuleEdit = () => {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    name: "",
    description: "",
  };
  const [editData, setEditData] = useState(initialData);

  const fetchModulesData = async () => {
    let finalData = {
      id: editData.id,
      name: editData.name,
      description: editData.description,
    };

    try {
      Swal.fire({
        title: "Loadingg...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await editModuleTypes(finalData);
      if (response.status === true) {
        const updatedData = {
          ...editData,
          name: response.module.name || "",
          description: response.module.description || "",
        };
        setEditData(updatedData);
        localStorage.setItem("editData", JSON.stringify(updatedData));

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Module updated successfully!",
        }).then(() => {
          // Close the window after successful update
          window.close();
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Warning!",
          text: response?.message || "Unexpected response from the server.",
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the module with the current data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchModulesData();
      } else {
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <h2>Edit Module</h2>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Name:</strong>
                  <input
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
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
                    cols={50}
                    rows={10}
                    value={editData.description}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
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

export default ModuleEdit;
