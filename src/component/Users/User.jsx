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
  const [lastPageMode, setLastPageMode] = useState(false);
  const [combinedCount, setCombinedCount] = useState(null);
  console.log(subscriptionCount, "subscriptionCount");
  console.log(filterCount, "filterCount");
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
    pageToken = null,
    ascendingDocId = null // <-- New argument
  ) => {
    setUser([]);
    setLoading(true);

    // If this is the first page, reset page tokens
    if (pageNumber === 1) {
      pageToken = null;
      setPageTokens([]);
    } else {
      setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
    }

    try {
      const token = localStorage.getItem("UserToken");
      if (!token) {
        throw new Error("User token not found");
      }

      let isActiveValue = null;
      if (activeTab === "active") isActiveValue = 1;
      else if (activeTab === "inactive") isActiveValue = 0;

      // Build the URL
      let url = `/usr123erd6?page=${pageNumber}`;
      if (isActiveValue !== null) url += `&is_active=${isActiveValue}`;

      // If pageToken is 'true', we want ascending mode on the backend
      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }

      // If we are in ascending mode AND we have a doc ID, append ascendingDocId
      if (pageToken === "true" && ascendingDocId) {
        url += `&ascendingDocId=${ascendingDocId}`;
      }

      console.log("fetchUsers -> final URL:", url);

      const response = await getAllUsers(token, url);
      console.log("API response:", response);

      if (response && response.Users) {
        // For page 1 or the last page, replace data; otherwise, append
        setUser((prevUsers) => {
          if (pageNumber === 1 || pageNumber === totalPages) {
            return response.Users;
          }
          // Otherwise, append uniquely
          const uniqueUsers = [
            ...new Map(
              [...prevUsers, ...response.Users].map((u) => [u.id, u])
            ).values(),
          ];
          return uniqueUsers;
        });

        setNextPageToken(response.nextPageToken || null);
        setCurrentPage(pageNumber);
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
          setCombinedCount(data.combinedCount);
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
    setFilterPlatform("");
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

  // const paginate = (pageNumber) => {

  //   let tokenToSend = null;

  //   if (pageNumber > currentPage) {
  //     tokenToSend = nextPageToken;  // Ensure nextPageToken is used when going forward
  //   } else if (pageNumber < currentPage) {
  //     const tokensCopy = [...pageTokens];
  //     tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
  //     tokensCopy.pop();
  //     setPageTokens(tokensCopy);
  //   }

  //   console.log("Paginate Function Call - Next Page Token:", tokenToSend); // Debugging Log

  //   if (pageNumber > totalPages) return;

  //   if (filterName || filterEmail || filterSubscription || filterPlatform) {
  //     filterUsers(filterName, filterEmail, filterSubscription, filterPlatform, pageNumber, tokenToSend)
  //       .then((data) => {
  //         if (data && data.users) {
  //           setUser(data.users);
  //           setNextPageToken(data.nextPageToken); // Ensure nextPageToken is updated
  //           setSubscriptionCount(data.subscriptionCount);
  //           setFiltersCount(data.platformCount);
  //           setCurrentPage(pageNumber);
  //         } else {
  //           console.error("No users found from filterUsers");
  //         }
  //       })
  //       .catch((error) => console.error("Error fetching filtered users:", error));
  //   } else {
  //     fetchUsers(
  //       activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
  //       pageNumber,
  //       tokenToSend
  //     );
  //   }

  //   window.scrollTo({
  //     top: 300,
  //     behavior: "smooth",
  //   });
  // };

  // const paginate = (pageNumber) => {
  //   let tokenToSend = null;

  //   if (pageNumber > currentPage) {
  //     tokenToSend = nextPageToken; // Ensure nextPageToken is used when going forward
  //   } else if (pageNumber < currentPage) {
  //     const tokensCopy = [...pageTokens];
  //     tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
  //     tokensCopy.pop();
  //     setPageTokens(tokensCopy);
  //   }

  //   console.log("Paginate Function Call - Next Page Token:", tokenToSend); // Debugging Log

  //   if (pageNumber > totalPages) return;

  //   setLoading(true); // 🔥 Show loading before making API call

  //   if (filterName || filterEmail || filterSubscription || filterPlatform) {
  //     filterUsers(
  //       filterName,
  //       filterEmail,
  //       filterSubscription,
  //       filterPlatform,
  //       pageNumber,
  //       tokenToSend
  //     )
  //       .then((data) => {
  //         if (data && data.users) {
  //           setUser(data.users);
  //           setNextPageToken(data.nextPageToken);
  //           setSubscriptionCount(data.subscriptionCount);
  //           setFiltersCount(data.platformCount);
  //           setCurrentPage(pageNumber);
  //         } else {
  //           console.error("No users found from filterUsers");
  //         }
  //       })
  //       .catch((error) =>
  //         console.error("Error fetching filtered users:", error)
  //       )
  //       .finally(() => setLoading(false)); // 🔥 Hide loading after response
  //   } else {
  //     fetchUsers(
  //       activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
  //       pageNumber,
  //       tokenToSend
  //     ).finally(() => setLoading(false)); // 🔥 Hide loading after response
  //   }

  //   window.scrollTo({
  //     top: 300,
  //     behavior: "smooth",
  //   });
  // };

  const paginate = (pageNumber) => {
    let tokenToSend = null;

    // If in lastPageMode, we're in ascending order
    if (lastPageMode) {
      // If user navigates to page 1, we reset everything
      if (pageNumber === 1) {
        goToFirstPage();
        return;
      } else {
        // Stay in ascending mode => always use "true"
        tokenToSend = "true";
      }
    } else {
      // Normal (descending) pagination logic
      if (pageNumber > currentPage) {
        // Going forward
        tokenToSend = nextPageToken;
        setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
      } else if (pageNumber < currentPage) {
        // Going backward
        const tokensCopy = [...pageTokens];
        tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
        tokensCopy.pop();
        setPageTokens(tokensCopy);
      }

      // If user clicks page 1, explicitly reset
      if (pageNumber === 1) {
        tokenToSend = null;
        setPageTokens([]);
      }
    }

    console.log(
      "paginate -> pageNumber:",
      pageNumber,
      "tokenToSend:",
      tokenToSend
    );

    // Prevent navigating beyond total pages
    if (pageNumber > totalPages) return;

    setLoading(true);

    // If filters are active, you might call filterUsers here.
    // If no filters, call fetchUsers directly.
    if (filterName || filterEmail || filterSubscription || filterPlatform) {
      // Example if your filterUsers function can also accept ascendingDocId:
      filterUsers(
        filterName,
        filterEmail,
        filterSubscription,
        filterPlatform,
        pageNumber,
        tokenToSend,
        lastPageMode ? nextPageToken : null // optional ascendingDocId
      )
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
        .catch((error) =>
          console.error("Error fetching filtered users:", error)
        )
        .finally(() => setLoading(false));
    } else {
      // No filters => normal fetch
      fetchUsers(
        activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
        pageNumber,
        tokenToSend,
        // If we're in lastPageMode, pass nextPageToken as ascendingDocId
        lastPageMode ? nextPageToken : null
      ).finally(() => setLoading(false));
    }

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const goToFirstPage = () => {
    // Turn off lastPageMode
    setLastPageMode(false);

    // Reset tokens
    setUser([]);
    setNextPageToken(null);
    setPageTokens([]);
    setCurrentPage(1);

    // Make the API call with no pageToken
    fetchUsers(
      activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
      1,
      null
    );

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const goToLastPage = () => {
    const totalUsers = count;
    const lastPageNumber = Math.ceil(totalUsers / usersPerPage);

    // Turn on lastPageMode
    setLastPageMode(true);

    // Always send "true" when going to last page
    fetchUsers(
      activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
      lastPageNumber,
      "true"
    );
    setCurrentPage(lastPageNumber);

    // Optionally store "true" in nextPageToken or clear it
    setNextPageToken("true");

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
            <div className="row row-cols-1 row-cols-md-4 g-3 my-3">
              {/* Card 1: Total Displayed Users */}
              <div className="col">
                <div className="card text-center shadow-sm h-100">
                  <div className="card-body">
                    <h6 className="card-title text-muted mb-1">
                      Total Displayed Users
                    </h6>
                    <h3 className="card-text fw-bold mb-0">{user.length}</h3>
                  </div>
                </div>
              </div>

              {/* If no platform/subscription filters, show a single wide card prompting user to select filters */}
              {!filterPlatform && !filterSubscription ? (
                <div className="col-12">
                  <div className="card text-center shadow-sm h-100">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h6 className="card-title text-muted mb-2">
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
                  {/* Card 2: Platform Count (Only if filterPlatform is chosen) */}
                  {filterPlatform && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
                            Platform “{filterPlatform}”
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {filterCount || 0}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 3: Subscription Count (Only if filterSubscription is chosen) */}
                  {filterSubscription && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
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

                  {/* Card 4: Intersection (Only if both filters are chosen) */}
                  {filterPlatform && filterSubscription && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
                            {filterSubscription === "0"
                              ? "Free"
                              : filterSubscription === "1"
                              ? "Paid"
                              : filterSubscription === "9"
                              ? "Special Offer"
                              : "N/A"}{" "}
                             {filterPlatform}  Users
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {combinedCount || 0}
                          </h3>
                          {/* or user.length if you prefer to show the actual displayed user count */}
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
                        Clear
                      </button>
                    </div>

                    <div className="tab">
                      <ul className="nav nav-tabs" role="tablist">
                        {/* <li className="nav-item">
                          <a
                            className={`nav-link text-blue ${
                              activeTab === "all" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("all")}
                          >
                            All
                          </a>
                        </li> */}
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
                                    {currentPage}
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
