import React, { useState } from "react";
import Swal from "sweetalert2";
import { addVideo } from "../../lib/Store";
import { useNavigate } from "react-router-dom";

export default function AddVideo() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoTitle.trim() || !videoLink.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Video title and video link are required.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this video?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Adding Video...",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          const payload = {
            video_title: videoTitle,
            video_link: videoLink,
          };

          const response = await addVideo(payload);

          if (response.status === true) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Video added successfully!",
            }).then(() => {
              navigate("/videos");
            });
          } else {
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: response.message || "Unexpected error occurred.",
            });
          }
        } catch (err) {
          console.error("Error adding video:", err);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add video. Please try again.",
          });
        }
      } else {
        Swal.fire("Cancelled", "No changes were made.", "info");
      }
    });
  };

  return (
    <div className="main-container">
      <div className="pd-20 card-box mb-30">
        <div className="row">
          <div className="col-md-6">
            <h2>Add New Video</h2>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <strong>Video Title:</strong>
                <input
                  placeholder="Video Title"
                  className="form-control"
                  name="video_title"
                  type="text"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <strong>Video Link:</strong>
                <input
                  placeholder="Video Link"
                  className="form-control"
                  name="video_link"
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
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
  );
}
