import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { getCompaitibiltyScale } from "../../lib/Store";

const CompatibilityPercentage = () => {
  const [compaitablePercentage, setCompaitablePercentage] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [compaitablePercentage]);

  const fetchCompaitablePercentage = async () => {
    setLoading(true);
    try {
      const response = await getCompaitibiltyScale();
      setCompaitablePercentage(response.data || []);
    } catch (err) {
      console.error("Error fetching compatibility data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompaitablePercentage();
    const handleStorage = () => fetchCompaitablePercentage();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleView = (item) => {
    localStorage.setItem("viewData", JSON.stringify(item));
    window.open("/compatibility_percentage/show", "_blank");
  };
  const handleEdit = (item) => {
    localStorage.setItem("editData", JSON.stringify(item));
    window.open("/compatibility_percentage/edit", "_blank");
  };

  // Pagination math
  const totalItems = compaitablePercentage.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentSlice = compaitablePercentage.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Compatibility Scale</h2>
        </div>

        <div className="pd-20 card-box mb-30">
          {loading ? (
            <Loader />
          ) : (
            <div className="card-block table-border-style">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Mate Number</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSlice.map((item) => (
                    <tr key={item.id}>
                      <td>{item.number}</td>
                      <td>{item.mate_number}</td>
                      <td>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button
                            className="btn btn-info"
                            onClick={() => handleView(item)}
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(item)}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {totalItems === 0 && (
                    <tr>
                      <td colSpan={3} className="text-center">
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {totalPages > 1 && (
                <nav aria-label="Compatibility pagination">
                  <ul className="pagination m-0">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, idx) => {
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
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompatibilityPercentage;
