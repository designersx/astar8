import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { getFavParameters, getUnFavParameters } from "../../lib/Store";
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const monthNames = [
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

const FavParameters = () => {
  const [favParameters, setFavParameters] = useState([]);
  const [activeMonth, setActiveMonth] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cache, setCache] = useState({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // adjust as needed

  // Whenever favParameters changes, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [favParameters]);

  useEffect(() => {
    let isMounted = true;

    const fetchParameters = async (monthId) => {
      setLoading(true);
      try {
        const { status, results } = await getFavParameters(monthId);
        if (!isMounted) return;
        if (status) {
          setCache((prev) => ({ ...prev, [monthId]: results }));
          setFavParameters(results);
        } else {
          setFavParameters([]);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setFavParameters([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (cache[activeMonth]) {
      setFavParameters(cache[activeMonth]);
      setLoading(false);
    } else {
      fetchParameters(activeMonth);
    }

    return () => {
      isMounted = false;
    };
  }, [activeMonth, cache]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      // Only trigger reload if "editData" was updated
      if (event.key === "editData") {
        // Optional: add a small debounce if needed
        const fetchParameters = async () => {
          try {
            const { status, results } = await getFavParameters(activeMonth);
            if (status) {
              setCache((prev) => ({ ...prev, [activeMonth]: results }));
              setFavParameters(results);
            }
          } catch (error) {
            console.error("Failed to refetch after edit:", error);
          }
        };

        fetchParameters();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [activeMonth]);

  // Calculate pagination
  const totalItems = favParameters.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentSlice = favParameters.slice(startIdx, startIdx + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleEdit = (item) => {
    window.open("/fav_parameters/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };

  return (
    <>
      {/* <Header /> */}

      <div className="main-container ">
        <div className="pd-20 card-box mb-30">
          <h2>Fav Parameters</h2>
        </div>

        <div className="card shadow-sm" style={{ marginBottom: "20px" }}>
          <div className="row no-gutters">
            {/* Month Selector */}
            <div className="col-md-2 border-right">
              <div
                className="list-group list-group-flush"
                style={{ maxHeight: "470px", overflowY: "auto" }}
              >
                {monthNames.map((name, idx) => {
                  const monthId = idx + 1;
                  return (
                    <button
                      key={monthId}
                      type="button"
                      className={
                        "list-group-item list-group-item-action " +
                        (activeMonth === monthId ? "custom-active5" : "")
                      }
                      onClick={() => setActiveMonth(monthId)}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Data Pane */}
            <div className="col-md-10">
              <div className="card-body">
                <h5 className="card-title">
                  Month of {monthNames[activeMonth - 1]}
                </h5>

                {loading ? (
                  <div className="d-flex justify-content-center my-5">
                    <div
                      className="spinner-border"
                      role="status"
                      style={{ width: "3rem", height: "3rem" }}
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : totalItems > 0 ? (
                  <>
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead className="">
                          <tr>
                            <th>Date</th>
                            <th>Numbers</th>
                            <th>Days</th>
                            <th>Months</th>
                            <th style={{ width: "80px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentSlice.map((item) => (
                            <tr key={item.id}>
                              <td>{item.date}</td>
                              <td>{item.numbers}</td>
                              <td>{item.days}</td>
                              <td>{item.months}</td>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <button
                                  onClick={() => handleEdit(item)}
                                  title="Edit"
                                  className="btn btn-primary"
                                >
                                  <FontAwesomeIcon icon={faPencilAlt} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination controls */}
                    <nav aria-label="FavParameters pagination">
                      <ul className="pagination m-0">
                        <li
                          className={`page-item ${
                            currentPage === 1 && "disabled"
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => goToPage(currentPage - 1)}
                          >
                            Previous
                          </button>
                        </li>
                        {[...Array(totalPages)].map((_, idx) => {
                          const page = idx + 1;
                          return (
                            <li
                              key={page}
                              className={`page-item ${
                                page === currentPage ? "active" : ""
                              }`}
                            >
                              <button
                                className="page-link"
                                onClick={() => goToPage(page)}
                              >
                                {page}
                              </button>
                            </li>
                          );
                        })}
                        <li
                          className={`page-item ${
                            currentPage === totalPages && "disabled"
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => goToPage(currentPage + 1)}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </>
                ) : (
                  <p className="text-muted">
                    No data available for {monthNames[activeMonth - 1]}.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavParameters;
