import React, { useEffect, useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import {
  cancelButtonScheduled,
  getDailyLikeDislike,
  getForecastData,
  publishButtonScheduled,
} from "../../lib/Store";
import { FaUpload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

export default function DailyForecartList({ refresh1 }) {
  const [ForecastData, setForecastData] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [selectedTab, setSelectedTab] = useState("all");
  const [loading, setLoading] = useState(false);
  const [refreshData, setrefreshData] = useState(false);
  const [userPhoto, setuserPhoto] = useState(
    localStorage.getItem("profilePic")
  );
  const llyodProfilePic = "https://dev.astar8.com/uploads/1737091948321.png";
  const userRole = localStorage.getItem("Role");

  const name = localStorage.getItem("name");
  const token = localStorage.getItem("UserToken");

  const fetchForecastData = async (status = "all") => {
    try {
      setLoading(true);
      setForecastData([]);
      const response = await getForecastData(token, status);
      // console.log(response, "ASDFGHJ");
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
    setrefreshData(false);
  }, [refreshData, refresh1]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    if (tab === "published") {
      fetchForecastData(1);
    } else if (tab === "scheduled") {
      fetchForecastData(0);
    } else if (tab === "topLiked") {
      fetchForecastData(2);
    } else {
      fetchForecastData("all");
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
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to publish this prediction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, publish it!",
      cancelButtonText: "No, cancel",
    });

    if (!confirmResult.isConfirmed) {
      return;
    }

    Swal.fire({
      title: "Publishing...",
      text: "Please wait while the prediction is being published.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await publishButtonScheduled(e);
      if (response.status === 200) {
        Swal.fire({
          title: "Published!",
          text: response.message,
          icon: "success",
          timer: 1000,
        });
        setrefreshData(true);
        setTimeout(() => {
          setrefreshData(false);
        }, 500);
      } else {
        Swal.fire({
          title: "Published Failed!",
          text: response?.response.data.message,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while publishing the prediction.",
        icon: "error",
      });
      console.error("Error publishing data:", error);
    }
  };

  const cancelButton = async (e) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this prediction?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });

    if (!confirmResult.isConfirmed) {
      return;
    }

    Swal.fire({
      title: "Cancelling...",
      text: "Please wait while the prediction is being cancelled.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await cancelButtonScheduled(e);
      if (response.status === 200) {
        Swal.fire({
          title: "Cancelled!",
          text: response.message,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        setrefreshData(true);
      } else {
        Swal.fire({
          title: "Cancelled Failed!",
          text: response?.response.data.message,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while cancelling the prediction.",
      });
      console.error("Error cancelling data:", error);
    }
  };

  return (
    <>
      <div className="tab-content tabs card-block">
        {/* Horizontal Tab Buttons */}
        <div
          className="tab-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <button
            className={`btn ${
              selectedTab === "all" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleTabChange("all")}
            disabled={loading}
            style={{ cursor: loading ? "default" : "pointer" }}
          >
            All
          </button>
          <button
            className={`btn ${
              selectedTab === "published" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleTabChange("published")}
            disabled={loading}
            style={{ cursor: loading ? "default" : "pointer" }}
          >
            Published
          </button>
          <button
            className={`btn ${
              selectedTab === "scheduled" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleTabChange("scheduled")}
            disabled={loading}
            style={{ cursor: loading ? "default" : "pointer" }}
          >
            Scheduled
          </button>
          <button
            className={`btn ${
              selectedTab === "topLiked" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleTabChange("topLiked")}
            disabled={loading}
            style={{ cursor: loading ? "default" : "pointer" }}
          >
            Popular Forecast
          </button>
        </div>

        {/* Forecast List */}
        <div
          className="forecast-list"
          style={{ maxHeight: "410px", overflowY: "scroll" }}
        >
          {loading ? (
            <>
              <div style={{ height: "55vh", overflow: "hidden" }}>
                <Loader />
              </div>
            </>
          ) : (
            <div
              className="pd-20"
              style={{ minHeight: "200px", paddingTop: "0px" }}
            >
              {ForecastData.filter((forecast) => {
                if (selectedTab === "all" || selectedTab === "topLiked")
                  return true;
                if (selectedTab === "published")
                  return forecast.publish_status === 1;
                if (selectedTab === "scheduled")
                  return forecast.publish_status === 0;
                return false;
              }).length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    color: "#666",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    margin: "20px 0",
                  }}
                >
                  No forecasts found
                </div>
              ) : (
                <>
                  {ForecastData.filter((forecast) => {
                    if (selectedTab === "all" || selectedTab === "topLiked")
                      return true;
                    if (selectedTab === "published")
                      return forecast.publish_status === 1;
                    if (selectedTab === "scheduled")
                      return forecast.publish_status === 0;
                    return false;
                  })
                    .slice(0, displayCount)
                    .map((forecast, index) => (
                      <div
                        key={forecast?.id}
                        style={{
                          display: "flex",
                          gap: "12px",
                          padding: "16px",
                          marginBottom: "16px",
                          alignItems: "flex-start",
                          borderBottom: "1px solid darkgrey",
                          // border:
                          // selectedTab === "topLiked" && index === 0
                          //   ? "2px solid gold"
                          //   : "1px solid darkgrey",
                        }}
                      >
                        {/* Left Side Image */}
                        <div style={{ flex: "0 0 80px" }}>
                          <img
                            src={
                              userRole === "2"
                                ? llyodProfilePic
                                : userPhoto
                                ? userPhoto
                                : "https://be.astar8.com/img/default-profile-img.png"
                            }
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://be.astar8.com/img/default-profile-img.png";
                            }}
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
                              {userRole === "2"
                                ? "Lloyd Strayhorn"
                                : name
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
                                display: "flex",
                                gap: "10px",
                              }}
                            >
                              {selectedTab === "topLiked" && index === 0 && (
                                <div
                                  style={{
                                    // position: "absolute",
                                    backgroundColor: "gold",
                                    padding: "4px 8px",
                                    borderRadius: "4px",
                                    color: "#000",
                                    fontWeight: "bold",
                                    top: "8px",
                                    left: "8px",
                                    // zIndex: 1,
                                  }}
                                >
                                  Most Liked Forecast
                                </div>
                              )}
                              {typeof forecast.prediction_date === "object" &&
                              "_seconds" in forecast.prediction_date &&
                              "_nanoseconds" in forecast.prediction_date
                                ? formatDate(
                                    convertFirestoreTimestampToDate(
                                      forecast.prediction_date
                                    )
                                  )
                                : formatDate(forecast.prediction_date)}
                            </span>
                          </div>

                          {/* Forecast Text */}
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

                          {/* Action Buttons */}
                          {forecast.publish_status === 0 ? (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "35px",
                                marginTop: "5px",
                                marginBottom: "16px",
                              }}
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                title="Click to Publish prediction now"
                                onClick={() => publishButton(forecast?.id)}
                              >
                                <FaUpload size={20} />
                              </div>
                              <div
                                title="Click to Cancel Prediction"
                                style={{ cursor: "pointer" }}
                                onClick={() => cancelButton(forecast?.id)}
                              >
                                <IoCloseCircle size={20} />
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "16px",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <div
                                  style={{
                                    padding: "4px 8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  <AiFillLike color="green" /> {forecast.likes}
                                </div>
                                <div
                                  style={{
                                    padding: "4px 8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                  }}
                                >
                                  <AiFillDislike color="red" />{" "}
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
                                Reply Count: {forecast.replyCount || 0}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  {displayCount <
                    ForecastData.filter((forecast) => {
                      if (selectedTab === "all" || selectedTab === "topLiked")
                        return true;
                      if (selectedTab === "published")
                        return forecast.publish_status === 1;
                      if (selectedTab === "scheduled")
                        return forecast.publish_status === 0;
                      return false;
                    }).length && (
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";
// import {
//   cancelButtonScheduled,
//   getDailyLikeDislike,
//   getForecastData,
//   publishButtonScheduled,
// } from "../../lib/Store";
// import { FaUpload } from "react-icons/fa";
// import { IoCloseCircle } from "react-icons/io5";
// import Loader from "../Loader/Loader";
// import Swal from "sweetalert2";

// export default function DailyForecartList({ refresh1 }) {
//   const [ForecastData, setForecastData] = useState([]);
//   const [displayCount, setDisplayCount] = useState(5);
//   const [selectedTab, setSelectedTab] = useState("all");
//   const [loading, setLoading] = useState(false);
//   const [refreshData, setrefreshData] = useState(false);
//   const [userPhoto, setuserPhoto] = useState(
//     localStorage.getItem("profilePic")
//   );

//   const name = localStorage.getItem("name");
//   const token = localStorage.getItem("UserToken");

//   const fetchForecastData = async (status = "all") => {
//     try {
//       setLoading(true);
//       setForecastData([]);
//       const response = await getForecastData(token, status);
//       // console.log(response, "ASDFGHJ");
//       setForecastData(response?.predictions || []);
//     } catch (error) {
//       console.error("Error fetching forecast data:", error);
//       setForecastData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchForecastData();
//     setrefreshData(false);
//   }, [refreshData, refresh1]);

//   const handleTabChange = (tab) => {
//     // console.log("handleTabbb", tab);
//     setSelectedTab(tab);

//     if (tab === "published") {
//       fetchForecastData(1);
//     } else if (tab === "scheduled") {
//       fetchForecastData(0);
//     } else {
//       fetchForecastData("all");
//     }
//   };

//   const handleLoadMore = () => {
//     setDisplayCount((prevCount) => prevCount + 5);
//   };

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "short", day: "numeric" };
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", options);
//   };

//   function convertFirestoreTimestampToDate(timestamp) {
//     const { _seconds } = timestamp;
//     const date = new Date(_seconds * 1000); // Convert seconds to milliseconds
//     const year = date.getUTCFullYear();
//     const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
//     const day = String(date.getUTCDate()).padStart(2, "0");

//     return `${year}-${month}-${day}`;
//   }

//   // Cancel and publish
//   const publishButton = async (e) => {
//     // Step 1: Confirmation Alert
//     const confirmResult = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to publish this prediction?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, publish it!",
//       cancelButtonText: "No, cancel",
//     });

//     if (!confirmResult.isConfirmed) {
//       return; // Exit if user cancels the confirmation
//     }

//     // Step 2: Show Loading Alert
//     Swal.fire({
//       title: "Publishing...",
//       text: "Please wait while the prediction is being published.",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       // Step 3: API Call
//       const response = await publishButtonScheduled(e);

//       if (response.status === 200) {
//         // Step 4: Success Alert

//         Swal.fire({
//           title: "Published!",
//           text: response.message,
//           icon: "success",
//           timer: 1000,
//         });
//         setrefreshData(true);
//         setTimeout(() => {
//           setrefreshData(false);
//         }, 500);
//       } else {
//         Swal.fire({
//           title: "Published Failed!",
//           text: response?.response.data.message,
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       // Step 5: Error Alert
//       Swal.fire({
//         title: "Error!",
//         text: "An error occurred while publishing the prediction.",
//         icon: "error",
//       });
//       console.error("Error publishing data:", error);
//     }
//   };

//   const cancelButton = async (e) => {
//     // Step 1: Confirmation Alert
//     const confirmResult = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to cancel this prediction?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, cancel it!",
//       cancelButtonText: "No, keep it",
//     });

//     if (!confirmResult.isConfirmed) {
//       return;
//     }

//     // Step 2: Show Loading Alert
//     Swal.fire({
//       title: "Cancelling...",
//       text: "Please wait while the prediction is being cancelled.",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       // Step 3: API Call
//       const response = await cancelButtonScheduled(e);
//       console.log("ressssss", response);
//       if (response.status === 200) {
//         // Step 4: Success Alert

//         Swal.fire({
//           title: "Cancelled!",
//           text: response.message,
//           icon: "success",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//         setrefreshData(true);
//       } else {
//         Swal.fire({
//           title: "Cancelled Failed!",
//           text: response?.response.data.message,
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       // Step 5: Error Alert
//       Swal.fire({
//         title: "Error!",
//         text: "An error occurred while cancelling the prediction.",
//       });
//       console.error("Error cancelling data:", error);
//     }
//   };

//   const isFutureDate = (date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Reset time to the start of the day
//     return date > today;
//   };

//   return (
//     <>
//       <div className="tab-content tabs card-block">
//         {/* Horizontal Tab Buttons */}
//         <div
//           className="tab-buttons"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px",
//             marginBottom: "15px",
//           }}
//         >
//           <button
//             className={`btn ${
//               selectedTab === "all" ? "btn-primary" : "btn-secondary"
//             }`}
//             onClick={() => handleTabChange("all")}
//             disabled={loading}
//             style={{ cursor: loading ? "default" : "pointer" }}
//           >
//             All
//           </button>
//           <button
//             className={`btn ${
//               selectedTab === "published" ? "btn-primary" : "btn-secondary"
//             }`}
//             onClick={() => handleTabChange("published")}
//             disabled={loading}
//             style={{ cursor: loading ? "default" : "pointer" }}
//           >
//             Published
//           </button>
//           <button
//             className={`btn ${
//               selectedTab === "scheduled" ? "btn-primary" : "btn-secondary"
//             }`}
//             onClick={() => handleTabChange("scheduled")}
//             disabled={loading}
//             style={{ cursor: loading ? "default" : "pointer" }}
//           >
//             Scheduled
//           </button>
//         </div>

//         {/* Forecast List */}
//         <div
//           className="forecast-list"
//           style={{ maxHeight: "500px", overflowY: "scroll" }}
//         >
//           {loading ? (
//             <Loader />
//           ) : (
//             <div className="pd-20">
//               {ForecastData.filter((forecast) => {
//                 if (selectedTab === "all") return true;
//                 if (selectedTab === "published")
//                   return forecast.publish_status === 1;
//                 if (selectedTab === "scheduled")
//                   return forecast.publish_status === 0;
//                 return false;
//               }).length === 0 ? (
//                 <div
//                   style={{
//                     textAlign: "center",
//                     padding: "40px 20px",
//                     color: "#666",
//                     fontSize: "16px",
//                     fontFamily: "sans-serif",
//                     backgroundColor: "#f8f9fa",
//                     borderRadius: "8px",
//                     margin: "20px 0",
//                   }}
//                 >
//                   No forecasts found
//                 </div>
//               ) : (
//                 <>
//                   {ForecastData.filter((forecast) => {
//                     if (selectedTab === "all") return true;
//                     if (selectedTab === "published")
//                       return forecast.publish_status === 1;
//                     if (selectedTab === "scheduled")
//                       return forecast.publish_status === 0;
//                     return false;
//                   })
//                     .slice(0, displayCount)
//                     .map((forecast) => (
//                       <div
//                         key={forecast?.id}
//                         style={{
//                           display: "flex",
//                           gap: "12px",
//                           padding: "16px",
//                           marginBottom: "16px",
//                           alignItems: "flex-start",
//                           borderBottom: "1px solid darkgrey",
//                         }}
//                       >
//                         {/* Left Side Image */}
//                         <div style={{ flex: "0 0 80px" }}>
//                           <img
//                             src={
//                               userPhoto
//                                 ? userPhoto
//                                 : "https://be.astar8.com/img/default-profile-img.png"
//                             }
//                             onError={(e) => {
//                               e.target.onerror = null;
//                               e.target.src =
//                                 "https://be.astar8.com/img/default-profile-img.png";
//                             }}
//                             alt="Profile"
//                             style={{
//                               width: "90%",
//                               borderRadius: "50%",
//                               objectFit: "cover",
//                             }}
//                           />
//                         </div>

//                         {/* Right Side Content */}
//                         <div
//                           style={{
//                             flex: "1",
//                             display: "flex",
//                             flexDirection: "column",
//                           }}
//                         >
//                           {/* Top Section: Name and Date */}
//                           <div
//                             style={{
//                               display: "flex",
//                               justifyContent: "space-between",
//                               alignItems: "center",
//                               marginBottom: "8px",
//                             }}
//                           >
//                             <h5
//                               style={{
//                                 margin: 0,
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                                 color: "#44aeff",
//                               }}
//                             >
//                               {name
//                                 .split(" ")
//                                 .map(
//                                   (word) =>
//                                     word.charAt(0).toUpperCase() +
//                                     word.slice(1).toLowerCase()
//                                 )
//                                 .join(" ")}
//                             </h5>
//                             <span
//                               style={{
//                                 fontSize: "15px",
//                                 color: "#888",
//                               }}
//                             >
//                               {typeof forecast.prediction_date === "object" &&
//                               "_seconds" in forecast.prediction_date &&
//                               "_nanoseconds" in forecast.prediction_date
//                                 ? formatDate(
//                                     convertFirestoreTimestampToDate(
//                                       forecast.prediction_date
//                                     )
//                                   )
//                                 : formatDate(forecast.prediction_date)}
//                             </span>
//                           </div>

//                           {/* Forecast Text */}
//                           <p
//                             style={{
//                               margin: 0,
//                               fontSize: "16px",
//                               color: "black",
//                               fontFamily: "sans-serif",
//                             }}
//                           >
//                             {forecast.prediction}
//                           </p>

//                           {/* Action Buttons */}
//                           {forecast.publish_status === 0 ? (
//                             <div
//                               style={{
//                                 display: "flex",
//                                 justifyContent: "flex-end",
//                                 gap: "35px",
//                                 marginTop: "5px",
//                                 marginBottom: "16px",
//                               }}
//                             >
//                               <div
//                                 style={{ cursor: "pointer" }}
//                                 title="Click to Publish prediction now"
//                                 onClick={() => publishButton(forecast?.id)}
//                               >
//                                 <FaUpload size={20} />
//                               </div>
//                               <div
//                                 title="Click to Cancel Prediction"
//                                 style={{ cursor: "pointer" }}
//                                 onClick={() => cancelButton(forecast?.id)}
//                               >
//                                 <IoCloseCircle size={20} />
//                               </div>
//                             </div>
//                           ) : (
//                             <div
//                               style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                                 marginTop: "16px",
//                               }}
//                             >
//                               <div style={{ display: "flex" }}>
//                                 <div
//                                   style={{
//                                     padding: "4px 8px",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "4px",
//                                   }}
//                                 >
//                                   <AiFillLike color="green" /> {forecast.likes}
//                                 </div>
//                                 <div
//                                   style={{
//                                     padding: "4px 8px",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "4px",
//                                   }}
//                                 >
//                                   <AiFillDislike color="red" />{" "}
//                                   {forecast.dislikes}
//                                 </div>
//                               </div>
//                               <a
//                                 style={{
//                                   fontSize: "15px",
//                                   color: "#666",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 Reply Count: {forecast.replyCount || 0}
//                               </a>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   {displayCount <
//                     ForecastData.filter((forecast) => {
//                       if (selectedTab === "all") return true;
//                       if (selectedTab === "published")
//                         return forecast.publish_status === 1;
//                       if (selectedTab === "scheduled")
//                         return forecast.publish_status === 0;
//                       return false;
//                     }).length && (
//                     <button
//                       style={{
//                         padding: "10px 20px",
//                         marginTop: "20px",
//                         cursor: "pointer",
//                         backgroundColor: "#44aeff",
//                         color: "#fff",
//                         border: "none",
//                         borderRadius: "4px",
//                       }}
//                       onClick={handleLoadMore}
//                     >
//                       Load More
//                     </button>
//                   )}
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
