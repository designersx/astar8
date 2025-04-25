import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { editVideoList } from "../../lib/Store";

export default function VideoEdit() {
  const initialData = JSON.parse(localStorage.getItem("editData")) || {
    id: "",
    video_title: "",
    video_link: "",
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
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.video_title.trim() || !data.video_link.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Video title and link are required.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the video details?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Updating Video...",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          console.log("Dataa", {
            id: data.id,
            video_title: data.video_title,
            video_link: data.video_link,
          });

          const response = await editVideoList({
            id: data.id,
            video_title: data.video_title,
            video_link: data.video_link,
          });

          if (response.status === true) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Video updated successfully!",
            }).then(() => {
              localStorage.setItem("editData", JSON.stringify(data));
              window.close();
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Update Failed",
              text: response.message || "Unexpected error occurred.",
            });
          }
        } catch (err) {
          console.error("Error updating video:", err);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update video. Please try again.",
          });
        }
      } else {
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  if (!data || !data.id) {
    return (
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>No data available to edit.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="pd-20 card-box mb-30">
        <h2>Edit Video</h2>
      </div>
      <div className="pd-20 card-box mb-30">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <strong>Video Title:</strong>
            <input
              type="text"
              name="video_title"
              className="form-control"
              value={data.video_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <strong>Video Link:</strong>
            <input
              type="text"
              name="video_link"
              className="form-control"
              value={data.video_link}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
