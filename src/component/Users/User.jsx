// import React, { useEffect, useState } from "react";
// import "../../styles/Style.css";
// import Header from "../Dashboard/Header";
// import { getAllUsers, filterUsers, dashboardApi } from "../../lib/Store";
// import UserData from "./UserData";
// import { toast, Toaster } from "react-hot-toast";
// import { useLocation } from "react-router-dom";
// import Loader from "../Loader/Loader";
// export default function User() {

//   const location = useLocation();
//   const [user, setUser] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage, setUsersPerPage] = useState(11);
//   const [activeTab, setActiveTab] = useState("all");
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [filterName, setFilterName] = useState("");
//   const [filterEmail, setFilterEmail] = useState("");
//   const [filterSubscription, setFilterSubscription] = useState("");
//   const [filterPlatform, setFilterPlatform] = useState("");
//   const [filterloading, setfilterloading] = useState(false);
//   const [count, setTotalCount] = useState([]);
//   const [pageTokens, setPageTokens] = useState([]);

//   console.log(user, "user");

//   useEffect(() => {
//     const data = localStorage.getItem("totalUsers");
//     setTotalCount(data);
//   }, []);

//   useEffect(() => {
//     if (location.state && location.state.activeTab) {
//       setActiveTab(location.state.activeTab);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     // Reset state when activeTab changes
//     setLoading(true);
//     setUser([]);
//     setNextPageToken(null);
//     setPageTokens([]);
//     setTimeout(() => {
//       if (activeTab === "all") {
//         fetchUsers();
//       } else if (activeTab === "active") {
//         fetchUsers(1);
//       } else if (activeTab === "inactive") {
//         fetchUsers(0);
//       }
//     }, 0);
//     setCurrentPage(1);
//   }, [activeTab]);

//   const fetchUsers = async (status = null, pageNumber = 1, pageToken = null) => {
//     // Handle token history based on pageNumber
//     if (pageNumber === 1) {
//       pageToken = null;
//       setPageTokens([]);
//     } else {
//       setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
//     }

//     console.log("Using pageToken:", pageToken);
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("UserToken");
//       if (!token) {
//         throw new Error("User token not found");
//       }

//       // Determine `is_active` based on `activeTab`
//       const isActiveValue = null;
//       if (activeTab === "active") isActiveValue = 1;
//       else if (activeTab === "inactive") isActiveValue = 0;

//       // Construct API URL
//       let url = `/usr123erd6?page=${pageNumber}`;
//       if (isActiveValue !== null) url += `&is_active=${isActiveValue}`;
//       if (pageToken) url += `&pageToken=${pageToken}`;

//       console.log("Fetching users with:", { pageNumber, pageToken, isActiveValue });
//       const response = await getAllUsers(token, url);

//       console.log("API response.Users:", response.Users);

//       if (response && response.Users) {
//         // Apply filtering for valid emails
//         const filteredUsers = response.Users.filter((user) =>
//           user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
//         );
//         console.log("Filtered Users:", filteredUsers);

//         // For page 1, replace data; for subsequent pages, append data
//         setUser((prevUsers) => {
//           return pageNumber === 1 || pageNumber===2739? filteredUsers : [...filteredUsers];
//         });

//         setNextPageToken(response.nextPageToken || null);
//         setCurrentPage(pageNumber);
//         setUsersPerPage(response.User.count)
//       } else {
//         console.error("No users found in API response.");
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle Search Button Click
//   const handleSearch = async () => {
//     try {
//       setfilterloading(true);
//       const isFilterEmpty =
//         !filterName && !filterEmail && !filterSubscription && !filterPlatform;
//       if (isFilterEmpty) {
//         fetchUsers();
//       } else {
//         const data = await filterUsers(
//           filterName,
//           filterEmail,
//           filterSubscription,
//           filterPlatform
//         );
//         // Make sure you use the same data key (Users) here as in fetchUsers
//         if (data && data.users) {
//           setUser(data.users);
//           console.log("Filtered data.Users:", data.users);
//           setNextPageToken(data.nextPageToken);
//         } else {
//           console.error("No users found from filterUsers");
//         }
//       }
//       setCurrentPage(1);
//       setfilterloading(false);
//     } catch (error) {
//       console.error("Error fetching filtered users:", error);
//       setfilterloading(false);
//     }
//   };

//   const handleClear = () => {
//     setfilterloading(false);
//     setFilterName("");
//     setFilterEmail("");
//     setFilterSubscription("");
//     setFilterPlatform("");
//     fetchUsers();
//   };

//   const paginate = (pageNumber) => {
//     let tokenToSend = null;
//     if (pageNumber > currentPage) {
//       // Going forward: use the current nextPageToken
//       tokenToSend = nextPageToken;
//     } else if (pageNumber < currentPage) {
//       // Going backward: get the token from one page before
//       const tokensCopy = [...pageTokens];
//       tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
//       // Remove the last token as we’re going back one page
//       tokensCopy.pop();
//       setPageTokens(tokensCopy);
//     }
//     fetchUsers(
//       activeTab ===1,
//       pageNumber,
//       tokenToSend
//     );

//     window.scrollTo({
//       top: 300,
//       behavior: "smooth",
//     });
//   };

//   // const indexOfLastUser = currentPage * usersPerPage;
//   // const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   // const currentUsers = user?.slice(indexOfFirstUser, indexOfLastUser);

//   useEffect(() => {
//     setTotalPages(Math.ceil(user?.length / usersPerPage));
//   }, [user, usersPerPage]);

//   const goToFirstPage = () => {
//     setUser([]);
//     setNextPageToken(null);
//     setPageTokens([]); // Clear token history
//     setCurrentPage(1);
//     fetchUsers();
//   };

//   const goToLastPage = () => {
//     // Calculate last page number based on the total users stored in localStorage
//     const totalUsers = parseInt(localStorage.getItem("totalUsers"), 10) || 0;
//     const lastPageNumber = Math.ceil(totalUsers / usersPerPage);
//     // Call fetchUsers with a token if needed (here "true" is passed from your original code)
//     fetchUsers(
//       activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
//       lastPageNumber,
//       "true"
//     );
//     setCurrentPage(lastPageNumber);
//     window.scrollTo({
//       top: 300,
//       behavior: "smooth",
//     });
//   };

//   // const location = useLocation();
//   // const [user, setUser] = useState([]);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [usersPerPage, setUsersPerPage] = useState(10);
//   // const [activeTab, setActiveTab] = useState("all");
//   // const [totalPages, setTotalPages] = useState(0);
//   // const [loading, setLoading] = useState(false);
//   // const [nextPageToken, setNextPageToken] = useState(null);
//   // const [filterName, setFilterName] = useState("");
//   // const [filterEmail, setFilterEmail] = useState("");
//   // const [filterSubscription, setFilterSubscription] = useState("");
//   // const [filterPlatform, setFilterPlatform] = useState("");
//   // const [filterloading, setfilterloading] = useState(false);
//   // const [count, setTotalCount] = useState([]);
//   // const [pageTokens, setPageTokens] = useState([]);

//   // console.log(user, "user");

//   // useEffect(() => {
//   //   const data = localStorage.getItem("totalUsers");
//   //   setTotalCount(data);
//   // }, []);

//   // useEffect(() => {
//   //   if (location.state && location.state.activeTab) {
//   //     setActiveTab(location.state.activeTab);
//   //   }
//   // }, [location.state]);

//   // useEffect(() => {
//   //   setLoading(true);
//   //   setUser([]);
//   //   setNextPageToken(null);
//   //   setTimeout(() => {
//   //     if (activeTab === "all") {
//   //       fetchUsers();
//   //     } else if (activeTab === "active") {
//   //       fetchUsers(1);
//   //     } else if (activeTab === "inactive") {
//   //       fetchUsers(0);
//   //     }
//   //   }, 0);
//   //   setCurrentPage(1);
//   // }, [activeTab]);

//   // const fetchUsers = async (
//   //   status = null,
//   //   pageNumber = 1,
//   //   pageToken = null
//   // ) => {
//   //   // Handle token history based on pageNumber
//   //   if (pageNumber === 1) {
//   //     pageToken = null;
//   //     setPageTokens([]);
//   //   } else {
//   //     setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
//   //   }

//   //   console.log(pageToken, "pageToken");
//   //   setLoading(true);
//   //   try {
//   //     const token = localStorage.getItem("UserToken");
//   //     if (!token) {
//   //       throw new Error("User token not found");
//   //     }

//   //     // Determine `is_active` based on `activeTab`
//   //     let isActiveValue = null;
//   //     if (activeTab === "active") isActiveValue = 1;
//   //     else if (activeTab === "inactive") isActiveValue = 0;

//   //     // Construct API URL
//   //     let url = `/usr123erd6?page=${pageNumber}`;
//   //     if (isActiveValue !== null) url += `&is_active=${isActiveValue}`;
//   //     if (pageToken) url += `&pageToken=${pageToken}`;

//   //     console.log("Fetching users with:", {
//   //       pageNumber,
//   //       pageToken,
//   //       isActiveValue,
//   //     });

//   //     const response = await getAllUsers(token, url);

//   //     console.log(response.Users, "response.users");
//   //     // if (response && response.Users) {
//   //     //   const filteredUsers = response.Users.filter((user) =>
//   //     //     user.email.match(/^[^\s@]+@[^\s@]+\.com$/)
//   //     //   );
//   //     //   setUser((prevUsers) =>
//   //     //     pageNumber === 1 ? filteredUsers : [...prevUsers, ...filteredUsers]
//   //     //   );

//   //     //   setNextPageToken(response.nextPageToken || null);

//   //     //   setCurrentPage(pageNumber);
//   //     // } else {
//   //     //   throw new Error("Failed to fetch users or no users found.");
//   //     // }
//   //     if (response && response.Users) {
//   //       const filteredUsers = response.Users.filter((user) =>
//   //         user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
//   //       );

//   //       // Single setUser call:
//   //       setUser((prevUsers) => {
//   //         if (pageNumber === 1) {
//   //           // For page 1, replace the data
//   //           return filteredUsers;
//   //         } else if (pageNumber === 2739) {
//   //           // For page 2739, also replace the data
//   //           return filteredUsers;
//   //         } else {
//   //           // For other pages, append
//   //           return [...prevUsers, ...filteredUsers];
//   //         }
//   //       });

//   //       setNextPageToken(response.nextPageToken || null);
//   //       setCurrentPage(pageNumber);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching users:", error.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // // 🔹 Handle Search Button Click
//   // const handleSearch = async () => {
//   //   try {
//   //     setfilterloading(true);
//   //     const isFilterEmpty =
//   //       !filterName && !filterEmail && !filterSubscription && !filterPlatform;
//   //     if (isFilterEmpty) {
//   //       fetchUsers();
//   //     } else {
//   //       const data = await filterUsers(
//   //         filterName,
//   //         filterEmail,
//   //         filterSubscription,
//   //         filterPlatform
//   //       );
//   //       setUser(data.users);
//   //       console.log(data.Users, "data of filter page");
//   //       setNextPageToken(data.nextPageToken);
//   //     }

//   //     setCurrentPage(1);
//   //     setfilterloading(false);
//   //   } catch (error) {
//   //     console.error("Error fetching users:", error);
//   //     setfilterloading(false);
//   //   }
//   // };

//   // const handleClear = () => {
//   //   setfilterloading(false);
//   //   setFilterName("");
//   //   setFilterEmail("");
//   //   setFilterSubscription("");
//   //   setFilterPlatform("");

//   //   fetchUsers();
//   // };

//   // const paginate = (pageNumber) => {
//   //   let tokenToSend = null;
//   //   if (pageNumber > currentPage) {
//   //     // Going forward: use the current nextPageToken
//   //     tokenToSend = nextPageToken;
//   //   } else if (pageNumber < currentPage) {
//   //     // Going backward: get the token from one page before
//   //     const tokensCopy = [...pageTokens];
//   //     tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
//   //     // Remove the last token as we’re going back one page
//   //     tokensCopy.pop();
//   //     setPageTokens(tokensCopy);
//   //   }
//   //   fetchUsers(
//   //     activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
//   //     pageNumber,
//   //     tokenToSend
//   //   );

//   //   window.scrollTo({
//   //     top: 300,
//   //     behavior: "smooth",
//   //   });
//   // };

//   // // const paginate = (pageNumber) => {
//   // //   let tokenToSend = pageNumber === 1 ? null : nextPageToken;

//   // //   console.log(tokenToSend,"TokenToSend")
//   // //   fetchUsers(
//   // //     activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
//   // //     pageNumber,
//   // //     tokenToSend
//   // //   );

//   // //   window.scrollTo({
//   // //     top: 300,
//   // //     behavior: "smooth",
//   // //   });
//   // // };

//   // const indexOfLastUser = currentPage * usersPerPage;
//   // const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   // const currentUsers = user?.slice(indexOfFirstUser, indexOfLastUser);

//   // useEffect(() => {
//   //   setTotalPages(Math.ceil(user?.length / usersPerPage));
//   // }, [user, usersPerPage]);

//   // // const goBackToFirstPage = () => {
//   // //   setUser([]);
//   // //   setNextPageToken(null);
//   // //   setCurrentPage(1);
//   // //   setActiveTab("all");
//   // //   fetchUsers();
//   // // };

//   // const goToFirstPage = () => {
//   //   setUser([]);
//   //   setNextPageToken(null);
//   //   setPageTokens([]); // Clear token history
//   //   setCurrentPage(1);
//   //   fetchUsers();
//   // };

//   // const goToLastPage = () => {
//   //   // Calculate last page number based on the total users stored in localStorage
//   //   const totalUsers = parseInt(localStorage.getItem("totalUsers"), 10) || 0;
//   //   const lastPageNumber = Math.ceil(totalUsers / usersPerPage);
//   //   // Call fetchUsers with pageToken set to "true"
//   //   fetchUsers(
//   //     activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
//   //     lastPageNumber,
//   //     "true"
//   //   );
//   //   // Update currentPage state to reflect the last page
//   //   setCurrentPage(lastPageNumber);
//   //   window.scrollTo({
//   //     top: 300,
//   //     behavior: "smooth",
//   //   });
//   // };

//   return (
//     <>
//       <Header />
//       <Toaster />

//       <div className="main-container pb-5">
//         <div className=" xs-pd-20-10">
//           <div className="min-height-200px">
//             <div className="page-header">
//               <div className="row">
//                 <div className="col-md-6">
//                   <h2
//                     style={{
//                       fontWeight: "700",
//                     }}
//                   >
//                     Users Management
//                   </h2>
//                 </div>
//                 <div className="col-md-6">
//                   <h2
//                     style={{
//                       // fontWeight: "700",
//                       marginLeft: "61%",
//                       fontSize: "23px",
//                     }}
//                   >
//                     Total Users - {count}<br></br>
//                     Displayed Users - 10
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="row clearfix">
//               <div className="col-lg-12 col-md-12 col-sm-12 mb-30 ">
//                 <div className="pd-20 card-box ">
//                   <div className="usertable">
//                     <div
//                       style={{
//                         float: "right",
//                         display: "flex",
//                         gap: "10px",
//                         width: "65%",
//                       }}
//                       className="form-group filterInput"
//                     >
//                       <input
//                         type="text"
//                         className="form-control"
//                         style={{ width: 140 }}
//                         name="username"
//                         id="username"
//                         placeholder="Enter Name"
//                         value={filterName}
//                         onChange={(e) => setFilterName(e.target.value)}
//                       />
//                       <input
//                         type="text"
//                         className="form-control"
//                         style={{ width: 140 }}
//                         name="useremail"
//                         id="useremail"
//                         placeholder="Enter Email"
//                         value={filterEmail}
//                         onChange={(e) => setFilterEmail(e.target.value)}
//                       />
//                       <select
//                         name="usersubscription"
//                         className="form-control SelectBoxHeight"
//                         style={{ width: "78%" }}
//                         id="usersubscription"
//                         value={filterSubscription}
//                         onChange={(e) => setFilterSubscription(e.target.value)}
//                       >
//                         <option value="">Subscription</option>
//                         <option value={0}>Free</option>
//                         <option value={1}>Paid</option>
//                         <option value={9}>Special offer</option>
//                       </select>
//                       <select
//                         name="subscriptionPlatform"
//                         className="form-control SelectBoxHeight1"
//                         id="subscriptionPlatform"
//                         style={{ width: "84%" }}
//                         value={filterPlatform}
//                         onChange={(e) => setFilterPlatform(e.target.value)}
//                       >
//                         <option value="">Select Platform</option>
//                         <option value="iOS">iOS</option>
//                         <option value="Android">Android</option>
//                       </select>
//                       {/* 🔹 Search Button */}
//                       <button
//                         className="btn btn-primary"
//                         style={{ height: "40px" }}
//                         onClick={handleSearch}
//                       >
//                         {filterloading ? "Searching..." : "Search"}
//                       </button>
//                       <button
//                         className="btn btn-danger"
//                         style={{ height: "40px", marginLeft: "5px" }}
//                         onClick={handleClear}
//                       >
//                         Reset
//                       </button>
//                     </div>

//                     <div className="tab">
//                       <ul className="nav nav-tabs" role="tablist">
//                         <li className="nav-item">
//                           <a
//                             className={`nav-link text-blue ${
//                               activeTab === "all" ? "active" : ""
//                             }`}
//                             onClick={() => setActiveTab("all")}
//                           >
//                             All
//                           </a>
//                         </li>
//                         {/* <li className="nav-item">
//                           <a
//                             className={`nav-link text-blue ${
//                               activeTab === "active" ? "active" : ""
//                             }`}
//                             onClick={() => setActiveTab("active")}
//                           >
//                             Active
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a
//                             className={`nav-link text-blue ${
//                               activeTab === "inactive" ? "active" : ""
//                             }`}
//                             onClick={() => setActiveTab("inactive")}
//                           >
//                             Inactive
//                           </a>
//                         </li> */}
//                       </ul>

//                       <div className="tab-content">
//                         {/* All Users */}
//                         <div
//                           className={`tab-pane fade show ${
//                             activeTab === "all" ? "active" : ""
//                           }`}
//                           id="all"
//                           role="tabpanel"
//                         >
//                           <div className="card-block table-border-style alluserlist">
//                             <UserData
//                               user={user}
//                               currentPage={currentPage}
//                               usersPerPage={usersPerPage}
//                               loading={loading}
//                             />
//                           </div>
//                           {/* {currentPage > 1 && (
//                             <div>
//                               <button onClick={goBackToFirstPage} className="btn btn-primary" title="Click to Go Back First Page">
//                                 Go Back
//                               </button>
//                             </div>
//                           )} */}

//                           <div className="custom-pagination">
//                             <nav>
//                               <ul className="pagination">
//                                 <li className="page-item">
//                                   <span
//                                     className="page-link"
//                                     onClick={goToFirstPage}
//                                   >
//                                     First Page
//                                   </span>
//                                 </li>
//                                 <li
//                                   className={`page-item ${
//                                     currentPage === 1 ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       currentPage > 1 &&
//                                       paginate(currentPage - 1)
//                                     }
//                                   >
//                                     Previous
//                                   </span>
//                                 </li>
//                                 <li className="page-item active">
//                                   <span className="page-link">
//                                     {currentPage}
//                                   </span>
//                                 </li>
//                                 <li
//                                   className={`page-item ${
//                                     !nextPageToken ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       nextPageToken && paginate(currentPage + 1)
//                                     }
//                                   >
//                                     Next
//                                   </span>
//                                 </li>
//                                 <li className="page-item">
//                                   <span
//                                     className="page-link"
//                                     onClick={goToLastPage}
//                                   >
//                                     Last Page
//                                   </span>
//                                 </li>
//                               </ul>
//                             </nav>
//                           </div>
//                         </div>
//                         <div
//                           className={`tab-pane fade ${
//                             activeTab === "active" ? "show active" : ""
//                           }`}
//                           id="activeUser"
//                           role="tabpanel"
//                         >
//                           <div className="card-block table-border-style">
//                             <UserData
//                               user={user}
//                               currentPage={currentPage}
//                               usersPerPage={usersPerPage}
//                               loading={loading}
//                             />
//                           </div>
//                           <div className="custom-pagination">
//                             <nav>
//                               <ul className="pagination">
//                                 {/* Previous Button */}
//                                 <li
//                                   className={`page-item ${
//                                     currentPage === 1 ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       currentPage > 1 &&
//                                       paginate(currentPage - 1)
//                                     }
//                                   >
//                                     Previous
//                                   </span>
//                                 </li>

//                                 {/* Current Page Number */}
//                                 <li className="page-item active">
//                                   <span className="page-link">
//                                     {currentPage}
//                                   </span>
//                                 </li>

//                                 {/* Next Button */}
//                                 <li
//                                   className={`page-item ${
//                                     !nextPageToken ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       nextPageToken && paginate(currentPage + 1)
//                                     }
//                                   >
//                                     Next
//                                   </span>
//                                 </li>
//                               </ul>
//                             </nav>
//                           </div>
//                         </div>
//                         <div
//                           className={`tab-pane fade ${
//                             activeTab === "inactive" ? "show active" : ""
//                           }`}
//                           id="inactiveUser"
//                           role="tabpanel"
//                         >
//                           <div className="card-block table-border-style">
//                             <UserData
//                               user={user}
//                               currentPage={currentPage}
//                               usersPerPage={usersPerPage}
//                               loading={loading}
//                             />
//                           </div>
//                           <div className="custom-pagination">
//                             <nav>
//                               <ul className="pagination">
//                                 {/* Previous Button */}
//                                 <li
//                                   className={`page-item ${
//                                     currentPage === 1 ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       currentPage > 1 &&
//                                       paginate(currentPage - 1)
//                                     }
//                                   >
//                                     Previous
//                                   </span>
//                                 </li>

//                                 {/* Current Page Number */}
//                                 <li className="page-item active">
//                                   <span className="page-link">
//                                     {currentPage}
//                                   </span>
//                                 </li>

//                                 {/* Next Button */}
//                                 <li
//                                   className={`page-item ${
//                                     !nextPageToken ? "disabled" : ""
//                                   }`}
//                                 >
//                                   <span
//                                     className="page-link"
//                                     onClick={() =>
//                                       nextPageToken && paginate(currentPage + 1)
//                                     }
//                                   >
//                                     Next
//                                   </span>
//                                 </li>
//                               </ul>
//                             </nav>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import "../../styles/Style.css";
import Header from "../Dashboard/Header";
import { getAllUsers, filterUsers, dashboardApi } from "../../lib/Store";
import UserData from "./UserData";
import { toast, Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function User() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // This value is used to compute totalPages from the overall count.
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("all");
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterSubscription, setFilterSubscription] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterloading, setfilterloading] = useState(false);
  const [subscriptionCount, setSubscriptionCount] = useState(null);
  const [filterCount, setFiltersCount] = useState(null);
  console.log(subscriptionCount,"subscriptionCount");
  console.log(filterCount,"filterCount")
  // overall total user count
  const [count, setTotalCount] = useState(0);
  const [pageTokens, setPageTokens] = useState([]);

  // Get overall count from localStorage and calculate totalPages based on usersPerPage
  useEffect(() => {
    const data = localStorage.getItem("totalUsers");
    const total = data ? parseInt(data, 10) : 0;
    setTotalCount(total);
    setTotalPages(Math.ceil(total / usersPerPage));
  }, [usersPerPage]);

  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  useEffect(() => {
    // Reset state when activeTab changes
    setLoading(true);
    setUser([]);
    setNextPageToken(null);
    setPageTokens([]);
    setTimeout(() => {
      if (activeTab === "all") {
        fetchUsers();
      } else if (activeTab === "active") {
        fetchUsers(1);
      } else if (activeTab === "inactive") {
        fetchUsers(0);
      }
    }, 0);
    setCurrentPage(1);
  }, [activeTab]);

  const fetchUsers = async (
    status = null,
    pageNumber = 1,
    pageToken = null
  ) => {
    setUser([]);
    setLoading(true);
    // Handle token history based on pageNumber
    if (pageNumber === 1) {
      pageToken = null;
      setPageTokens([]);
    } else {
      setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
    }

    console.log("Using pageToken:", pageToken);
    try {
      const token = localStorage.getItem("UserToken");
      if (!token) {
        throw new Error("User token not found");
      }

      // Determine `is_active` based on activeTab
      let isActiveValue = null;
      if (activeTab === "active") isActiveValue = 1;
      else if (activeTab === "inactive") isActiveValue = 0;

      // Construct API URL
      let url = `/usr123erd6?page=${pageNumber}`;
      if (isActiveValue !== null) url += `&is_active=${isActiveValue}`;
      if (pageToken) url += `&pageToken=${pageToken}`;

      console.log("Fetching users with:", {
        pageNumber,
        pageToken,
        isActiveValue,
      });
      const response = await getAllUsers(token, url);

      console.log("API response.Users:", response.Users);

      if (response && response.Users) {
        // Apply filtering for valid emails
        // const filteredUsers = response.Users.filter((user) =>
        //   user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        // );
        const filteredUsers = response?.Users;
        console.log("Filtered Users:", filteredUsers);

        // For page 1 (or special case page 2739) replace data; otherwise, append.
        setUser((prevUsers) =>
          pageNumber === 1 || pageNumber === 2739
            ? filteredUsers
            : [...filteredUsers]
        );

        setNextPageToken(response.nextPageToken || null);
        setCurrentPage(pageNumber);
        // Optionally update usersPerPage from response if needed:
        // setUsersPerPage(response.User.count)
      } else {
        console.error("No users found in API response.");
      }
    } catch (error) {
      console.error("Error fetching users:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Search Button Click
  const handleSearch = async () => {
    try {
      setfilterloading(true);
      const isFilterEmpty =
        !filterName && !filterEmail && !filterSubscription && !filterPlatform;
      if (isFilterEmpty) {
        fetchUsers();
      } else {
        const data = await filterUsers(
          filterName,
          filterEmail,
          filterSubscription,
          filterPlatform
        );
        if (data && data.users) {
          setUser(data.users);
          console.log("Filtered data.Users:", data.users);
          setNextPageToken(data.nextPageToken);
          setSubscriptionCount(data.subscriptionCount);
          setFiltersCount(data.platformCount);
        } else {
          console.error("No users found from filterUsers");
        }
      }
      setCurrentPage(1);
      setfilterloading(false);
    } catch (error) {
      console.error("Error fetching filtered users:", error);
      setfilterloading(false);
    }
  };

  const handleClear = () => {
    setfilterloading(false);
    setFilterName("");
    setFilterEmail("");
    setFilterSubscription("");
    setFilterPlatform("");
    fetchUsers();
    setSubscriptionCount("");
    setFilterPlatform("")
  };

  // const paginate = (pageNumber) => {
  //   let tokenToSend = null;
  //   if (pageNumber > currentPage) {
  //     // Going forward: use the current nextPageToken
  //     tokenToSend = nextPageToken;
  //   } else if (pageNumber < currentPage) {
  //     // Going backward: get the token from one page before
  //     const tokensCopy = [...pageTokens];
  //     tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
  //     tokensCopy.pop();
  //     setPageTokens(tokensCopy);
  //   }
  //   // Prevent navigating beyond total pages
  //   if (pageNumber > totalPages) return;
  //   fetchUsers(
  //     activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
  //     pageNumber,
  //     tokenToSend
  //   );
  //   window.scrollTo({
  //     top: 300,
  //     behavior: "smooth",
  //   });
  // };


  const paginate = (pageNumber) => {
    let tokenToSend = null;
    if (pageNumber > currentPage) {
      tokenToSend = nextPageToken;
    } else if (pageNumber < currentPage) {
      const tokensCopy = [...pageTokens];
      tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
      tokensCopy.pop();
      setPageTokens(tokensCopy);
    }
  
    if (pageNumber > totalPages) return;
  
    if (filterName || filterEmail || filterSubscription || filterPlatform) {
      // If filters are applied, use `filterUsers` instead of `fetchUsers`
      filterUsers(filterName, filterEmail, filterSubscription, filterPlatform, pageNumber, tokenToSend)
        .then((data) => {
          if (data && data.users) {
            setUser(data.users);
            setNextPageToken(data.nextPageToken);
            setSubscriptionCount(data.subscriptionCount);
            setFiltersCount(data.platformCount);
            setCurrentPage(pageNumber);
          } else {
            console.error("No users found from filterUsers");
          }
        })
        .catch((error) => console.error("Error fetching filtered users:", error));
    } else {
      // If no filters, use the normal `fetchUsers`
      fetchUsers(
        activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
        pageNumber,
        tokenToSend
      );
    }
  
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  

  
  const goToFirstPage = () => {
    setUser([]);
    setNextPageToken(null);
    setPageTokens([]); // Clear token history
    setCurrentPage(1);
    fetchUsers();
  };

  const goToLastPage = () => {
    // Calculate last page number using the overall total count
    const totalUsers = count;
    const lastPageNumber = Math.ceil(totalUsers / usersPerPage);
    fetchUsers(
      activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
      lastPageNumber,
      "true"
    );
    setCurrentPage(lastPageNumber);
    // Optionally clear nextPageToken since you're on the last page
    setNextPageToken(null);
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <Toaster />

      <div className="main-container pb-5">
        <div className="xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6">
                  <h2 style={{ fontWeight: "700" }}>Users Management</h2>
                </div>
                <div className="col-md-6">
                  <h2
                    style={{
                      marginLeft: "61%",
                      fontSize: "23px",
                    }}
                  >
                    Total Users - {count}
                  </h2>
                </div>
              </div>
            </div>

            {/* Filter Summary: row of small cards */}
            <div className="row g-3 my-3">
              {/* 1) Always show total filtered users in the first column */}
              <div className="col-md-4">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title text-uppercase text-muted mb-1">
                      Total Filtered Users
                    </h6>
                    <h3 className="card-text fw-bold mb-0">{user.length}</h3>
                  </div>
                </div>
              </div>

              {/* 2) If NO filterPlatform & NO filterSubscription, show one box saying "Please select a filter..." */}
              {!filterPlatform && !filterSubscription ? (
                <div className="col-md-8">
                  <div className="card text-center shadow-sm h-100">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h6 className="card-title text-uppercase text-muted mb-2">
                        No Additional Filters
                      </h6>
                      <h5 className="card-text fw-bold mb-0">
                        Please select a filter to show more stats
                      </h5>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* 3) If filterPlatform is chosen, show the platform card */}
                  {filterPlatform && (
                    <div className="col-md-4">
                      <div className="card text-center shadow-sm">
                        <div className="card-body">
                          <h6 className="card-title text-uppercase text-muted mb-1">
                            Platform “{filterPlatform}”
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {filterCount || 0}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4) If filterSubscription is chosen, show the subscription card */}
                  {filterSubscription && (
                    <div className="col-md-4">
                      <div className="card text-center shadow-sm">
                        <div className="card-body">
                          <h6 className="card-title text-uppercase text-muted mb-1">
                            Subscription “
                            {filterSubscription === "0"
                              ? "Free"
                              : filterSubscription === "1"
                              ? "Paid"
                              : filterSubscription === "9"
                              ? "Special Offer"
                              : "N/A"}
                            ”
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {subscriptionCount || 0}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <div className="usertable">
                    <div
                      style={{
                        float: "right",
                        display: "flex",
                        gap: "10px",
                        width: "65%",
                      }}
                      className="form-group filterInput"
                    >
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: 140 }}
                        name="username"
                        id="username"
                        placeholder="Enter Name"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: 140 }}
                        name="useremail"
                        id="useremail"
                        placeholder="Enter Email"
                        value={filterEmail}
                        onChange={(e) => setFilterEmail(e.target.value)}
                      />
                      <select
                        name="usersubscription"
                        className="form-control SelectBoxHeight"
                        style={{ width: "78%" }}
                        id="usersubscription"
                        value={filterSubscription}
                        onChange={(e) => setFilterSubscription(e.target.value)}
                      >
                        <option value="">Subscription</option>
                        <option value={0}>Free</option>
                        <option value={1}>Paid</option>
                        <option value={9}>Special offer</option>
                      </select>
                      <select
                        name="subscriptionPlatform"
                        className="form-control SelectBoxHeight1"
                        id="subscriptionPlatform"
                        style={{ width: "84%" }}
                        value={filterPlatform}
                        onChange={(e) => setFilterPlatform(e.target.value)}
                      >
                        <option value="">Select Platform</option>
                        <option value="iOS">iOS</option>
                        <option value="Android">Android</option>
                      </select>
                      <button
                        className="btn btn-primary"
                        style={{ height: "40px" }}
                        onClick={handleSearch}
                      >
                        {filterloading ? "Searching..." : "Search"}
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ height: "40px", marginLeft: "5px" }}
                        onClick={handleClear}
                      >
                        Reset
                      </button>
                    </div>

                    <div className="tab">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className={`nav-link text-blue ${
                              activeTab === "all" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("all")}
                          >
                            All
                          </a>
                        </li>
                        {/* Additional tabs can be added here */}
                      </ul>

                      <div className="tab-content">
                        <div
                          className={`tab-pane fade show ${
                            activeTab === "all" ? "active" : ""
                          }`}
                          id="all"
                          role="tabpanel"
                        >
                          <div className="card-block table-border-style alluserlist">
                            <UserData
                              user={user}
                              currentPage={currentPage}
                              usersPerPage={usersPerPage}
                              loading={loading}
                              totalCount={count}
                            />
                          </div>

                          <div className="custom-pagination">
                            <nav>
                              <ul className="pagination">
                                <li className="page-item">
                                  <span
                                    className="page-link"
                                    onClick={goToFirstPage}
                                  >
                                    First Page
                                  </span>
                                </li>
                                <li
                                  className={`page-item ${
                                    currentPage === 1 ? "disabled" : ""
                                  }`}
                                >
                                  <span
                                    className="page-link"
                                    onClick={() =>
                                      currentPage > 1 &&
                                      paginate(currentPage - 1)
                                    }
                                  >
                                    Previous
                                  </span>
                                </li>
                                <li className="page-item active">
                                  <span className="page-link">
                                    {currentPage} / {totalPages}
                                  </span>
                                </li>
                                <li
                                  className={`page-item ${
                                    currentPage === totalPages || !nextPageToken
                                      ? "disabled"
                                      : ""
                                  }`}
                                >
                                  <span
                                    className="page-link"
                                    onClick={() => {
                                      if (
                                        currentPage !== totalPages &&
                                        nextPageToken
                                      )
                                        paginate(currentPage + 1);
                                    }}
                                  >
                                    Next
                                  </span>
                                </li>
                                <li className="page-item">
                                  <span
                                    className="page-link"
                                    onClick={goToLastPage}
                                  >
                                    Last Page
                                  </span>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        {/* Additional tab panes for "active" and "inactive" can be added similarly */}
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
