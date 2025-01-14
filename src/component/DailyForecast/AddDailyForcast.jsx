import React, { useState, useEffect } from "react";
import "../../styles/Style.css";
import { addDailyForecast } from "../../lib/Store";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function AddDailyForcast() {
  const [date, setDate] = useState("");
  const [prediction, setPrediction] = useState("");
  const [user_id, setuserId] = useState(localStorage.getItem("userId"));
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setDate(currentDate);
    const storedToken = localStorage.getItem("UserToken");
    setToken(storedToken);
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const wordCount = prediction.trim().split(/\s+/).length; // Calculate word count

    if (!prediction.trim()) {
      Swal.fire("Oops!", "Prediction can't be empty!", "warning");
      return;
    }
    if (wordCount < 10) {
      Swal.fire("Oops!", "Prediction must have at least 10 words!", "warning");
      return;
    }
    if (wordCount > 3000) {
      Swal.fire("Oops!", "Prediction can't exceed 3000 words!", "warning");
      return;
    }

    setLoading(true);

    try {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const trimmedPrediction = prediction.trim().replace(/\n/g, " "); // Replace newlines with spaces
      const response = await addDailyForecast(
        token,
        formattedDate,
        trimmedPrediction,
        user_id
      );

      if (response.status === "success") {
        setPrediction("");
        setDate(new Date().toISOString().split("T")[0]); // Reset date to the current date
        setMessage(response.message);
      } else {
        setMessage(response.error);
      }
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error, "Error");
      setMessage("Error: " + error);
    } finally {
      setLoading(false);
    }
  };
  const closeMessage = () => {
    setMessage("");
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-xs-2 col-sm-2 col-md-2" />
        <div className="col-xs-8 col-sm-8 col-md-8 mb-2">
          <form method="POST" onSubmit={onHandleSubmit}>
            <input
              name="_token"
              type="hidden"
              defaultValue="ks4GGbNmxoDtCtrrU2mTuoWiQQqbTBwD5mDcBT98"
            />
            <input
              type="hidden"
              name="_token"
              defaultValue="ks4GGbNmxoDtCtrrU2mTuoWiQQqbTBwD5mDcBT98"
            />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Date:</strong>
                  <input
                    placeholder="Date"
                    className="form-control mt-1 pred_Date"
                    name="prediction_date"
                    type="date"
                    value={date}
                    min={new Date().toISOString().split("T")[0]} // Restrict to the current date
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Daily Forecast:</strong>
                  <textarea
                    placeholder="Prediction"
                    className="form-control prediction mt-1"
                    style={{ height: "150px" }}
                    name="prediction"
                    // cols={50}
                    // rows={10}
                    value={prediction}
                    onChange={(e) => setPrediction(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 text-center submitBtn mt-2">
                <button
                  type="submit"
                  className="btn btn-primary alert-publish"
                  onClick={() =>
                    setDate(new Date().toISOString().split("T")[0])
                  }
                >
                  {loading
                    ? "Loading..."
                    : date === new Date().toISOString().split("T")[0]
                    ? "Publish"
                    : "Schedule"}
                </button>
              </div>
            </div>
          </form>

          {message && (
            <div className="alert alert-info mt-3">
              <span>{message}</span>
              {/* Close button */}
              <button
                className="close-btn"
                onClick={closeMessage}
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
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2" />
      </div>
    </>
  );
}
