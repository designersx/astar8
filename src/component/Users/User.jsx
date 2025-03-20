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
  const [usersPerPage, setUsersPerPage] = useState(50);
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
  // console.log(subscriptionCount, "subscriptionCount");
  // console.log(filterCount, "filterCount");
  // overall total user count
  const [count, setTotalCount] = useState(0);
  const [pageTokens, setPageTokens] = useState([]);

  const [clearUrl, setclearUrl] = useState(false);

  const [previousPageToken, setPreviousPageToken] = useState(null);

  const [searchExecuted, setSearchExecuted] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    email: "",
    subscription: "",
    platform: "",
  });

  const isFilterActive =
    filterName || filterEmail || filterSubscription || filterPlatform;

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

      // For previous data
      if (pageToken === previousPageToken && previousPageToken !== null) {
        url += `&isPrevious=true`;
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
        setPreviousPageToken(response.previousPageToken || null);
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
      setSearchExecuted(false); // Reset before fetching new data

      const isFilterEmpty =
        !filterName && !filterEmail && !filterSubscription && !filterPlatform;
      if (isFilterEmpty) {
        fetchUsers();
        setSearchExecuted(false);
      } else {
        const data = await filterUsers(
          filterName,
          filterEmail,
          filterSubscription,
          filterPlatform
        );

        if (data && data.users) {
          setUser(data.users);
          setNextPageToken(data.nextPageToken);

          // ✅ Store the filters only when Search is clicked
          setSearchFilters({
            name: filterName,
            email: filterEmail,
            subscription: filterSubscription,
            platform: filterPlatform,
          });

          // ✅ Update counts only after search
          setSubscriptionCount(data.subscriptionCount);
          setFiltersCount(data.platformCount);
          setCombinedCount(data.combinedCount);
          setSearchExecuted(true);
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
    setclearUrl(true);
    setfilterloading(false);
    setFilterName("");
    setFilterEmail("");
    setFilterSubscription("");
    setFilterPlatform("");
    setSearchExecuted(false); // Hide filter-based cards on clear

    // Reset pagination state so that lastPageMode is turned off.
    setLastPageMode(false);
    setPageTokens([]);
    setNextPageToken(null);
    setPreviousPageToken(null);

    fetchUsers();
    setSubscriptionCount(null);
    setFiltersCount(null);
    setCombinedCount(null);
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

    if (lastPageMode) {
      if (pageNumber === 1) {
        goToFirstPage();
        return;
      } else if (pageNumber < currentPage) {
        // Navigating backwards in lastPageMode: use the previousPageToken
        tokenToSend = previousPageToken;
      } else if (pageNumber > currentPage) {
        // (If needed) navigating forward in lastPageMode: use nextPageToken
        tokenToSend = nextPageToken;
      }
    } else {
      // Normal (descending) pagination logic
      if (pageNumber > currentPage) {
        tokenToSend = nextPageToken;
        setPageTokens((prevTokens) => [...prevTokens, nextPageToken]);
      } else if (pageNumber < currentPage) {
        if (filterName || filterEmail || filterSubscription || filterPlatform) {
          const tokensCopy = [...pageTokens];
          tokenToSend = tokensCopy[tokensCopy.length - 2] || null;
          tokensCopy.pop();
          setPageTokens(tokensCopy);
        } else {
          tokenToSend = previousPageToken;
        }
      }
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

    if (pageNumber > totalPages) return;

    setLoading(true);

    if (filterName || filterEmail || filterSubscription || filterPlatform) {
      filterUsers(
        filterName,
        filterEmail,
        filterSubscription,
        filterPlatform,
        pageNumber,
        tokenToSend,
        lastPageMode ? nextPageToken : null
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
      fetchUsers(
        activeTab === "all" ? null : activeTab === "active" ? 1 : 0,
        pageNumber,
        tokenToSend,
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
              {/* ✅ This card always shows */}
              <div className="col">
                <div className="card text-center shadow-sm h-100">
                  <div className="card-body">
                    <h6 className="card-title text-muted mb-1">
                      Total Displayed Users
                    </h6>
                    <h3 className="card-text fw-bold mb-0 mt-2">
                      {user.length}
                    </h3>
                  </div>
                </div>
              </div>

              {/* ✅ Other cards show only after Search is clicked */}
              {searchExecuted && (
                <>
                  {searchFilters.platform && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
                            Platform “{searchFilters.platform}”
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {filterCount || 0}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {searchFilters.subscription && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
                            Subscription “
                            {searchFilters.subscription === "0"
                              ? "Free"
                              : searchFilters.subscription === "1"
                              ? "Paid"
                              : searchFilters.subscription === "9"
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

                  {searchFilters.platform && searchFilters.subscription && (
                    <div className="col">
                      <div className="card text-center shadow-sm h-100">
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-1">
                            {searchFilters.subscription === "0"
                              ? "Free"
                              : searchFilters.subscription === "1"
                              ? "Paid"
                              : searchFilters.subscription === "9"
                              ? "Special Offer"
                              : "N/A"}{" "}
                            {searchFilters.platform} Users
                          </h6>
                          <h3 className="card-text fw-bold mb-0">
                            {combinedCount || 0}
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
                  <div className="">
                    <div
                      style={{
                        float: "right",
                        display: "flex",
                        gap: "10px",
                        width: "100%",
                      }}
                      className="form-group filterInput"
                    >
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: "40%", padding: "7px" }}
                        name="username"
                        id="username"
                        placeholder="Enter Name"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)} // ✅ Updates live but doesn't affect cards yet
                      />
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: "45%", padding: "7px" }}
                        name="useremail"
                        id="useremail"
                        placeholder="Enter Email"
                        value={filterEmail}
                        onChange={(e) =>
                          setFilterEmail(e.target.value.toLowerCase())
                        }
                      />
                      <select
                        name="usersubscription"
                        className="form-control SelectBoxHeight"
                        style={{ width: "35%",cursor:"pointer" }}
                        id="usersubscription"
                        value={filterSubscription}
                        onChange={(e) => setFilterSubscription(e.target.value)} // ✅ Updates live but doesn’t affect cards
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
                        style={{ width: "35%",cursor:"pointer" }}
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
                          <div
                            className="card-block table-border-style alluserlist"
                            style={{
                              overflow: "auto",
                              minWidth: "1000px",
                              marginBottom: "17px",
                            }}
                          >
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
                              <ul
                                className="pagination"
                                style={{ marginBottom: "0px" }}
                              >
                                <li
                                  className={`page-item ${
                                    isFilterActive ? "disabled" : ""
                                  }`}
                                  style={{
                                    cursor: isFilterActive
                                      ? "not-allowed"
                                      : "pointer",
                                  }}
                                >
                                  <span
                                    className="page-link"
                                    onClick={() => {
                                      if (!isFilterActive) goToFirstPage();
                                    }}
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
                                <li
                                  className={`page-item ${
                                    isFilterActive ? "disabled" : ""
                                  }`}
                                  style={{
                                    cursor: isFilterActive
                                      ? "not-allowed"
                                      : "pointer",
                                  }}
                                >
                                  <span
                                    className="page-link"
                                    onClick={() => {
                                      if (!isFilterActive) goToLastPage();
                                    }}
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
