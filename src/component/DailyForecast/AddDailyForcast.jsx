import React, { useState, useEffect } from "react";
import "../../styles/Style.css";
import { addDailyForecast } from "../../lib/Store";
import Swal from "sweetalert2";
import { AiOutlineClose } from "react-icons/ai";

export default function AddDailyForecast({ onClose,onSuccess  }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [prediction, setPrediction] = useState("");
  const [userId] = useState(localStorage.getItem("userId"));
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Load token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("UserToken");
    setToken(storedToken);
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const trimmedPrediction = prediction.trim();
    const totalCharacters = trimmedPrediction.length;

    // Validation
    if (!trimmedPrediction) {
      Swal.fire("Oops!", "Prediction cannot be empty!", "warning");
      return;
    }
    if (totalCharacters > 5000) {
      Swal.fire(
        "Oops!",
        "Prediction cannot exceed 5000 characters!",
        "warning"
      );
      return;
    }

    setLoading(true);

    try {
      // Ensure the date is formatted as YYYY-MM-DD
      const formattedDate = new Date(date).toISOString().split("T")[0];

      const response = await addDailyForecast(
        token,
        formattedDate,
        trimmedPrediction,
        userId
      );

      if (response.status === "success") {
        // Clear the form and notify success
        setPrediction("");
        setDate(new Date().toISOString().split("T")[0]);
        await Swal.fire({
          title: "Success!",
          text: response.message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        if (onSuccess) {
          onSuccess(true); // indicate successful refresh
        }
        onClose();
      } else {
        // If the forecast already exists or another issue
        setMessage(response.error);
        Swal.fire("Already Exists!", response.response.data.message, "warning");
        setDate(new Date().toISOString().split("T")[0]);
        setPrediction("");
      }

      // Clear message after a timeout
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error submitting forecast:", error);
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // light black background
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // close modal when clicking outside the content
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "900px", // increased width
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Modal Heading */}
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Add Daily Forecast
        </h2>

        <form onSubmit={onHandleSubmit}>
          <div className="form-group">
            <label>
              <strong>Date:</strong>
            </label>
            <input
              type="date"
              className="form-control mt-1 pred_Date"
              name="prediction_date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>
              <strong>Daily Forecast Description:</strong>
            </label>
            <textarea
              placeholder="Enter your prediction"
              className="form-control prediction mt-1"
              style={{ height: "150px" }}
              name="prediction"
              value={prediction}
              onChange={(e) => setPrediction(e.target.value)}
            />
          </div>
          <div className="text-center submitBtn mt-3">
            <button type="submit" className="btn btn-primary alert-publish">
              {loading
                ? "Loading..."
                : date === new Date().toISOString().split("T")[0]
                ? "Publish"
                : "Schedule"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className="alert alert-info mt-3 position-relative"
            style={{ padding: "10px", borderRadius: "4px" }}
          >
            <span>{message}</span>
            <button
              className="close-btn"
              onClick={() => setMessage("")}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
        )}

        {/* Optional close button for the modal */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <AiOutlineClose size={24} color="#333" />
        </button>
      </div>
    </div>
  );
}
