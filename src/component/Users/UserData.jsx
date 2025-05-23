import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import Loader from "../Loader/Loader";
import {
  subscription1Action,
  cancel1Action,
  cancel3Action,
  subscription3Action,
  getAllUsers,
} from "../../lib/Store";
import { toast, Toaster } from "react-hot-toast";

export default function UserData({ user, currentPage, usersPerPage, loading }) {
  const onHandleNextPage = (id) => {
    localStorage.setItem("user_Detailed_id", id);
    window.open(`/userDetailedData`, "_blank");
  };
  const subscriptionspecialMonth = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to activate a subscription!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0199FE",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Activate!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Processing...",
            text: "Please wait while we activate your subscription.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });
          const token = localStorage.getItem("UserToken");
          const response = await subscription1Action(id, token);

          Swal.close();
          Swal.fire({
            title: "Activated!",
            text: "Subscription has been activated successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 0);
          });
        } catch (error) {
          Swal.close();
          Swal.fire("Error!", "Failed to activate subscription.", "error");
          console.error("Error activating 1-month subscription:", error);
        }
      }
    });
  };

  const subscription3Month = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to activate a 3-month subscription?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0199FE",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Activate!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Processing...",
            text: "Please wait while we activate your subscription.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });
          const token = localStorage.getItem("UserToken");
          const response = await subscription3Action(id, token);

          Swal.close();
          Swal.fire({
            title: "Activated!",
            text: "3 Month Subscription has been activated successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 0);
          });
        } catch (error) {
          Swal.close();
          Swal.fire("Error!", "Failed to activate subscription.", "error");
          console.error("Error activating 3-month subscription:", error);
        }
      }
    });
  };

  const CancelsubscriptionspecialMonth = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel the subscription?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0199FE",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Processing...",
            text: "Please wait while we cancel your subscription.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });
          const token = localStorage.getItem("UserToken");
          const response = await cancel1Action(id, token);
          Swal.close();
          Swal.fire({
            title: "Canceled!",
            text: "Subscription has been canceled successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 0);
          });
        } catch (error) {
          Swal.close();
          Swal.fire("Error!", "Failed to cancel subscription.", "error");
          console.error("Error canceling 1-month subscription:", error);
        }
      }
    });
  };

  const cancel3Actions = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel the 3-month subscription?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0199FE",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Processing...",
            text: "Please wait while we cancel your subscription.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });
          const token = localStorage.getItem("UserToken");
          const response = await cancel3Action(id, token);
          Swal.close();
          Swal.fire({
            title: "Canceled!",
            text: "3 Month Subscription has been canceled successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 0);
          });
        } catch (error) {
          Swal.close();
          Swal.fire("Error!", "Failed to cancel subscription.", "error");
          console.error("Error canceling 3-month subscription:", error);
        }
      }
    });
  };

  // const formatDate = (dateString) => {
  //   return dateString ? dateString.split("T")[0] : "";
  // };
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
  };
  return (
    <>
      <Toaster />
      <table
        className="table table-bordered"
        id="allDataTable"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "11%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "7%" }} />
          <col style={{ width: "9%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        <thead>
          <tr style={{textAlign:"center"}}>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Plan Status</th>
            <th>Payment Platform</th>
            <th>1 - Month Plan Action</th>
            <th>3 - Month Plan Action</th>
            <th>Action</th>
            <th>Plan Start Date</th>
            <th>Plan Renewal Date</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="10"
                style={{ textAlign: "center", padding: "15px 0" }}
              >
                <Loader />
              </td>
            </tr>
          ) : user && user.length > 0 ? (
            user.map((data, index) => {
              const rowNumber = (currentPage - 1) * usersPerPage + index + 1;
              return (
                <tr key={data.id}>
                  <td>{rowNumber}</td>
                  <td>{data.name}</td>
                  <td>{data.email || data.username || "--"}</td>
                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status === 0
                      ? "Free"
                      : data.subscription_status === 1
                      ? "Paid"
                      : data.subscription_status === 9
                      ? "Special Offer"
                      : "Free"}
                  </td>
                  <td style={{textAlign:"center"}}>
                    {data.platform === "ios" ? "iOS" : data.platform || "N/A"}
                  </td>
                  {/* 1-Month Subscription Button */}
                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status === 1 ? (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{
                          backgroundColor: "#0199FE",
                          color: "white",
                          cursor: "not-allowed",
                        }}
                        title="Subscription through Stripe"
                        disabled
                      >
                        Active
                      </button>
                    ) : data.subscription_status === 0 ||
                      data.subscription_status === null ? (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{
                          backgroundColor: "#0199FE",
                          color: "white",
                          cursor: "pointer",
                        }}
                        title="Click to Activate 1 Month Subscription"
                        onClick={() => subscriptionspecialMonth(data.id)}
                      >
                        Active
                      </button>
                    ) : data.subscription_status === 9 ? (
                      data.total_days > 0 && data.total_days <= 31 ? (
                        <button
                          type="submit"
                          name="subscribe"
                          className="btn btn-danger alert-subscribe"
                          title="Click to Deactivate 1 Month Subscription"
                          onClick={() =>
                            CancelsubscriptionspecialMonth(data.id)
                          }
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          type="submit"
                          name="subscribe"
                          className="btn alert-subscribe"
                          style={{
                            backgroundColor: "#0199FE",
                            color: "white",
                            cursor:
                              data.total_days > 31 ? "not-allowed" : "pointer",
                          }}
                          title="Click to Activate 1 Month Subscription"
                          onClick={() => subscriptionspecialMonth(data.id)}
                          disabled={data.total_days > 31}
                        >
                          Active
                        </button>
                      )
                    ) : null}
                  </td>
                  {/* 3-Month Subscription Button */}
                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status === 1 ? (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{
                          backgroundColor: "#0199FE",
                          color: "white",
                          cursor: "not-allowed",
                        }}
                        title="Subscription through Stripe"
                        disabled
                      >
                        Active
                      </button>
                    ) : data.subscription_status === 0 ||
                      data.subscription_status === null ? (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{
                          backgroundColor: "#0199FE",
                          color: "white",
                          cursor: "pointer",
                        }}
                        title="Click to Activate 3 Month Subscription"
                        onClick={() => subscription3Month(data.id)}
                      >
                        Active
                      </button>
                    ) : data.subscription_status === 9 ? (
                      data.total_days > 31 ? (
                        <button
                          type="submit"
                          name="subscribe"
                          className="btn btn-danger alert-subscribe"
                          title="Click to Deactivate 3 Month Subscription"
                          onClick={() => cancel3Actions(data.id)}
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          type="submit"
                          name="subscribe"
                          className="btn alert-subscribe"
                          style={{
                            backgroundColor: "#0199FE",
                            color: "white",
                            cursor:
                              data.total_days > 0 && data.total_days <= 31
                                ? "not-allowed"
                                : "pointer",
                          }}
                          title="Click to Activate 3 Month Subscription"
                          onClick={() => subscription3Month(data.id)}
                          disabled={
                            data.total_days > 0 && data.total_days <= 31
                          }
                        >
                          Active
                        </button>
                      )
                    ) : null}
                  </td>
                  <td className="userTableTd" style={{ paddingLeft: "19px" }}>
                    <a
                      className="btn btn-info btnButton"
                      style={{ padding: "2px 12px" }}
                      title="Click to View User Details"
                      onClick={() => onHandleNextPage(data.id)}
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ fontSize: "11px" }}
                      />
                    </a>
                  </td>
                  <td>
                    {data.subscription_status === 0 ||
                    data.subscription_status === null
                      ? "N/A"
                      : formatDate(data.start_date) || "N/A"}
                  </td>
                  <td>
                    {data.subscription_status === 0 ||
                    data.subscription_status === null
                      ? "N/A"
                      : formatDate(data.renewal_date) || "N/A"}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

// // Test
// <table className="table table-bordered" id="allDataTable">
//   <tbody>
//     <tr>
//       <th>No</th>
//       <th>Name</th>
//       <th>Email</th>
//       <th>Subscription Status</th>
//       <th>Payment Platform</th>
//       <th>Subscription Action</th>
//       <th>3 Month Subscription Action</th>
//       <th>Action</th>
//       <th style={{ width: "9%" }}>Subscription Start Date</th>
//       <th>Subscription Renewal Date</th>
//     </tr>
//     {loading ? (
//       <tr>
//         <td colSpan="10" style={{ textAlign: "center", padding: "15px 0" }}>
//           <Loader />
//         </td>
//       </tr>
//     ) : user && user?.length > 0 ? (
//       user?.map((data, index) => {
//         // console.log(
//         //   `User ID: ${data.id}, Row Number: ${
//         //     index + 1
//         //   }, Page: ${currentPage}`
//         // );
//         const rowNumber = (currentPage - 1) * usersPerPage + index + 1;
//         // const rowNumber=index+1;
//         return (
//           <tr key={data.id}>
//             <td>{rowNumber}</td>
//             <td>{data.name}</td>
//             <td>{data.email || data.username || "--"}</td>
//             <td style={{ textAlign: "center" }}>
//               {/* {data.subscription_status === null
//                       ? data.subscription_status_admin === "ByAdmin" ||
//                         (data.subscription_status_admin === null &&
//                           data.start_date &&
//                           data.renewal_date)
//                         ? "Special Offer"
//                         : "Free"
//                       : data.subscription_status === 0
//                       ? "Free"
//                       : data.subscription_status === 1
//                       ? "Paid"
//                       : data.subscription_status === 9
//                       ? "Special Offer"
//                       : "Free"} */}

//               {data.subscription_status === 0
//                 ? "Free"
//                 : data.subscription_status === 1
//                 ? "Paid"
//                 : data.subscription_status === 9
//                 ? "Special Offer"
//                 : "Free"}
//             </td>
//             <td>{data.platform === "ios" ? "iOS" : data.platform || "N/A"}</td>
//             {/* <td>{data.platform || "N/A"}</td> */}
//             {/* 1- month subscription button */}
//             {/* <td style={{ textAlign: "center" }}>
//                     {data.subscription_status === 9 || data.total_days <= 31 ? (
//                       <button
//                         type="submit"
//                         name="subscribe"
//                         className="btn btn-danger alert-subscribe"
//                         title="Click to Inactivate Subscription"
//                         onClick={() => CancelsubscriptionspecialMonth(data.id)}
//                         disabled={data.total_days > 0 && data.total_days >= 31}
//                       >
//                         InActive
//                       </button>
//                     ) : (
//                       <button
//                         type="submit"
//                         name="subscribe"
//                         className="btn alert-subscribe"
//                         style={{ backgroundColor: "#0199FE", color: "white" }}
//                         title="Click to Activate Subscription"
//                         onClick={() => subscriptionspecialMonth(data.id)}
//                         disabled={data.subscription_status === 0}
//                       >
//                         Active
//                       </button>
//                     )}
//                   </td> */}

//             {/* 3-month subscription button */}
//             {/* <td style={{ textAlign: "center" }}>
//                     {data.subscription_status === 9 || data.total_days > 31 ? (
//                       <button
//                         type="submit"
//                         name="subscribe"
//                         className="btn btn-danger alert-subscribe"
//                         title="Click to InActivate subscription"
//                         onClick={() => cancel3Actions(data.id)}
//                       >
//                         InActive
//                       </button>
//                     ) : (
//                       <button
//                         type="submit"
//                         name="subscribe"
//                         className="btn alert-subscribe"
//                         style={{ backgroundColor: "#0199FE", color: "white" }}
//                         title="Click to Activate Subscription"
//                         onClick={() => subscription3Month(data.id)}
//                         disabled={data.subscription_status === 0}
//                       >
//                         Active
//                       </button>
//                     )}
//                   </td> */}

//             {/* 1-Month Subscription Button */}
//             <td style={{ textAlign: "center" }}>
//               {data.subscription_status === 1 ? (
//                 // Paid Users: Disabled button
//                 <button
//                   type="submit"
//                   name="subscribe"
//                   className="btn alert-subscribe"
//                   style={{
//                     backgroundColor: "#0199FE",
//                     color: "white",
//                     cursor: "not-allowed",
//                   }}
//                   title="Subscription through Stripe"
//                   disabled
//                 >
//                   Active
//                 </button>
//               ) : data.subscription_status === 0 ||
//                 data.subscription_status === null ? (
//                 // Free Users: Always active button
//                 <button
//                   type="submit"
//                   name="subscribe"
//                   className="btn alert-subscribe"
//                   style={{
//                     backgroundColor: "#0199FE",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                   title="Click to Activate 1 Month Subscription"
//                   onClick={() => subscriptionspecialMonth(data.id)}
//                 >
//                   Active
//                 </button>
//               ) : data.subscription_status === 9 ? (
//                 // Special Users: Use date logic
//                 data.total_days > 0 && data.total_days <= 31 ? (
//                   <button
//                     type="submit"
//                     name="subscribe"
//                     className="btn btn-danger alert-subscribe"
//                     title="Click to Deactivate 1 Month Subscription"
//                     onClick={() => CancelsubscriptionspecialMonth(data.id)}
//                   >
//                     Deactivate
//                   </button>
//                 ) : (
//                   <button
//                     type="submit"
//                     name="subscribe"
//                     className="btn alert-subscribe"
//                     style={{
//                       backgroundColor: "#0199FE",
//                       color: "white",
//                       cursor: data.total_days > 31 ? "not-allowed" : "pointer",
//                     }}
//                     title="Click to Activate 1 Month Subscription"
//                     onClick={() => subscriptionspecialMonth(data.id)}
//                     disabled={data.total_days > 31}
//                   >
//                     Active
//                   </button>
//                 )
//               ) : null}
//             </td>

//             {/* 3-Month Subscription Button */}
//             <td style={{ textAlign: "center" }}>
//               {data.subscription_status === 1 ? (
//                 // Paid Users: Disabled button
//                 <button
//                   type="submit"
//                   name="subscribe"
//                   className="btn alert-subscribe"
//                   style={{
//                     backgroundColor: "#0199FE",
//                     color: "white",
//                     cursor: "not-allowed",
//                   }}
//                   title="Subscription through Stripe"
//                   disabled
//                 >
//                   Active
//                 </button>
//               ) : data.subscription_status === 0 ||
//                 data.subscription_status === null ? (
//                 // Free Users: Always active button
//                 <button
//                   type="submit"
//                   name="subscribe"
//                   className="btn alert-subscribe"
//                   style={{
//                     backgroundColor: "#0199FE",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                   title="Click to Activate 3 Month Subscription"
//                   onClick={() => subscription3Month(data.id)}
//                 >
//                   Active
//                 </button>
//               ) : data.subscription_status === 9 ? (
//                 // Special Users: Use date logic
//                 data.total_days > 31 ? (
//                   <button
//                     type="submit"
//                     name="subscribe"
//                     className="btn btn-danger alert-subscribe"
//                     title="Click to Deactivate 3 Month Subscription"
//                     onClick={() => cancel3Actions(data.id)}
//                   >
//                     Deactivate
//                   </button>
//                 ) : (
//                   <button
//                     type="submit"
//                     name="subscribe"
//                     className="btn alert-subscribe"
//                     style={{
//                       backgroundColor: "#0199FE",
//                       color: "white",
//                       cursor:
//                         data.total_days > 0 && data.total_days <= 31
//                           ? "not-allowed"
//                           : "pointer",
//                     }}
//                     title="Click to Activate 3 Month Subscription"
//                     onClick={() => subscription3Month(data.id)}
//                     disabled={data.total_days > 0 && data.total_days <= 31}
//                   >
//                     Active
//                   </button>
//                 )
//               ) : null}
//             </td>

//             <td className="userTableTd" style={{ paddingLeft: "19px" }}>
//               <a
//                 className="btn btn-info btnButton"
//                 style={{ padding: "2px 12px" }}
//                 title="Click to View User Details"
//                 onClick={() => onHandleNextPage(data.id)}
//               >
//                 <FontAwesomeIcon icon={faEye} style={{ fontSize: "11px" }} />
//               </a>
//             </td>

//             <td>
//               {data.subscription_status === 0 ||
//               data.subscription_status === null
//                 ? "N/A"
//                 : formatDate(data.start_date) || "N/A"}
//             </td>
//             <td>
//               {data.subscription_status === 0 ||
//               data.subscription_status === null
//                 ? "N/A"
//                 : formatDate(data.renewal_date) || "N/A"}
//             </td>
//           </tr>
//         );
//       })
//     ) : (
//       <tr>
//         <td colSpan="10" style={{ textAlign: "center" }}>
//           No results found
//         </td>
//       </tr>
//     )}
//   </tbody>
// </table>;
