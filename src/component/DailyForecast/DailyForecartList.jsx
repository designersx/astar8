import React, { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { cancelButtonScheduled, getDailyLikeDislike, getForecastData, publishButtonScheduled } from "../../lib/Store";
import { FaUpload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Loader from "../Loader/Loader";

export default function DailyForecartList() {
  const [ForecastData, setForecastData] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [selectedTab, setSelectedTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [userPhoto, setuserPhoto] = useState(
    localStorage.getItem("profilePic")
  );
  // console.log("foreCastData", ForecastData);

  const name = localStorage.getItem("name");
  const token = localStorage.getItem("UserToken");

  const fetchForecastData = async (status = "all") => {
    try {
      setLoading(true);
      const response = await getForecastData(token, status);
      console.log(response, "ASDFGHJ");
      setForecastData(response?.predictions || []);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    if (tab === "published") {
      fetchForecastData(1);
    } else if (tab === "scheduled") {
      fetchForecastData(0);
    } else {
      fetchForecastData();
    }
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  function convertFirestoreTimestampToDate(timestamp) {
    const { _seconds } = timestamp;
    const date = new Date(_seconds * 1000); // Convert seconds to milliseconds
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // Cancel and publish 
  const publishButton = async (e) => {
    console.log("publushh",e)
    try {
      const response = await publishButtonScheduled(e);
      console.log(response.response.data.message, "ressponse publish---");
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  const cancelButton = async (e) => {
    console.log("cancel",e)
    try {
      const response = await cancelButtonScheduled(e);
      console.log(response.response.data.message, "ressponse cancel---");
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  

  return (
    <>
      <div className="tab-content tabs card-block">
        <div className="tab-pane active" id="predictionlist" role="tabpanel">
          <div className="card-block table-border-style">
            <div className="">
              <div className="col-md-12 col-sm-12 mb-30">
                <div className="">
                  <div className="tab">
                    <div className="row clearfix">
                      {/* Left Content */}
                      <div className="col-md-3 col-sm-12">
                        <ul
                          className="nav flex-column vtabs nav-tabs customtab"
                          role="tablist"
                        >
                          <li
                            className="nav-item"
                            style={{ textAlign: "start" }}
                          >
                            <a
                              className={`nav-link ${
                                selectedTab === "all" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("all")}
                            >
                              All
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{ textAlign: "start" }}
                          >
                            <a
                              className={`nav-link ${
                                selectedTab === "published" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("published")}
                            >
                              Published
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            style={{ textAlign: "start" }}
                          >
                            <a
                              className={`nav-link ${
                                selectedTab === "scheduled" ? "active" : ""
                              }`}
                              onClick={() => handleTabChange("scheduled")}
                            >
                              Scheduled
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Right Content */}
                      <div
                        className="col-md-9 col-sm-12 mb-4"
                        style={{ maxHeight: "500px", overflowY: "scroll" }}
                      >
                        <div className="tab-content tabs card-block">
                          <div
                            className="tab-pane fade active show"
                            id="All"
                            role="tabpanel"
                          >
                            {loading ? (
                              <>
                                <Loader />
                              </>
                            ) : (
                              <div className="pd-20">
                                {ForecastData.slice(0, displayCount).map(
                                  (forecast) => (
                                    <div
                                      key={forecast?.id}
                                      style={{
                                        display: "flex",
                                        gap: "12px",
                                        padding: "16px",
                                        marginBottom: "16px",
                                        alignItems: "flex-start",
                                        borderBottom: "1px solid darkgrey",
                                      }}
                                    >
                                      {/* Left Side Image */}
                                      <div style={{ flex: "0 0 80px" }}>
                                        <img
                                          src={userPhoto} // change from local storage
                                          alt="Profile"
                                          style={{
                                            width: "90%",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                          }}
                                        />
                                      </div>

                                      {/* Right Side Content */}
                                      <div
                                        style={{
                                          flex: "1",
                                          display: "flex",
                                          flexDirection: "column",
                                        }}
                                      >
                                        {/* Top Section: Name and Date */}
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "8px",
                                          }}
                                        >
                                          <h5
                                            style={{
                                              margin: 0,
                                              fontSize: "16px",
                                              fontWeight: "bold",
                                              color: "#44aeff",
                                            }}
                                          >
                                            {name
                                              .split(" ")
                                              .map(
                                                (word) =>
                                                  word.charAt(0).toUpperCase() +
                                                  word.slice(1).toLowerCase()
                                              )
                                              .join(" ")}
                                          </h5>
                                          <span
                                            style={{
                                              fontSize: "15px",
                                              color: "#888",
                                            }}
                                          >
                                            {typeof forecast.prediction_date ===
                                              "object" &&
                                            "_seconds" in
                                              forecast.prediction_date &&
                                            "_nanoseconds" in
                                              forecast.prediction_date
                                              ? formatDate(
                                                  convertFirestoreTimestampToDate(
                                                    forecast.prediction_date
                                                  )
                                                )
                                              : formatDate(
                                                  forecast.prediction_date
                                                )}
                                          </span>
                                        </div>

                                        {/* Paragraph Content */}
                                        <p
                                          style={{
                                            margin: 0,
                                            fontSize: "16px",
                                            color: "black",
                                            fontFamily: "sans-serif",
                                          }}
                                        >
                                          {forecast.prediction}
                                        </p>

                                        {/* Button Section */}
                                        {selectedTab === "scheduled" ? (
                                          <>
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent:"end",
                                                gap: "35px",
                                                marginTop:"5px",
                                                marginBottom: "16px",
                                              }}
                                            >
                                              <div
                                                onClick={() =>
                                                  publishButton(forecast?.id)
                                                }
                                              >
                                                <FaUpload size={14}/>
                                              </div>
                                              <div
                                                onClick={() =>
                                                  cancelButton(forecast?.id)
                                                }
                                              >
                                                <IoCloseCircle size={16}/>
                                              </div>

                                              
                                            </div>
                                          </>
                                        ) : (
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              marginTop: "16px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "flex",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  padding: "4px 8px",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  gap: "4px",
                                                }}
                                              >
                                                <AiFillLike color="green" />{" "}
                                                {forecast.likes}
                                              </div>
                                              <div
                                                style={{
                                                  padding: "4px 8px",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  gap: "4px",
                                                }}
                                              >
                                                <AiFillDislike color="red" />
                                                {forecast.dislikes}
                                              </div>
                                            </div>
                                            <a
                                              style={{
                                                fontSize: "15px",
                                                color: "#666",
                                                textDecoration: "none",
                                              }}
                                            >
                                              Reply Count: 0{" "}
                                              {forecast.replyCount}
                                            </a>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )
                                )}
                                {displayCount < ForecastData.length && (
                                  <button
                                    style={{
                                      padding: "10px 20px",
                                      marginTop: "20px",
                                      cursor: "pointer",
                                      backgroundColor: "#44aeff",
                                      color: "#fff",
                                      border: "none",
                                      borderRadius: "4px",
                                    }}
                                    onClick={handleLoadMore}
                                  >
                                    Load More
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
