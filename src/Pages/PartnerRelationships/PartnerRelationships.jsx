import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getPartnerRelationship } from "../../lib/Store";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";

const PartnerRelationships = () => {
  const [partnerRelationship, setpartnerRelationship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchpartnerRelationship = async () => {
    setLoading(true);
    try {
      const response = await getPartnerRelationship();
      setpartnerRelationship(response.data || []);
      setCurrentPage(1); // Reset to first page on fetch
    } catch (err) {
      console.error("Error fetching partner relationships:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchpartnerRelationship();
    const handleStorageChange = () => fetchpartnerRelationship();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/partner_relationships/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/partner_relationships/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };

  // Pagination logic
  const totalPages = Math.ceil(partnerRelationship.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = partnerRelationship.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Partner Relationship</h2>
        </div>

        <div className="pd-20 card-box mb-30">
          {loading ? (
            <Loader />
          ) : (
            <div className="card-block table-border-style">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Numbers</th>
                    <th width="120px">Mate Number</th>
                    <th>Description</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map(({ id, number, mate_number, description, general_desc }) => (
                    <tr key={id}>
                      <td>{number}</td>
                      <td>{mate_number}</td>
                      <td>
                        {description.length > 100
                          ? `${description.slice(0, 100)}...`
                          : description}
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button
                            className="btn btn-info"
                            onClick={() =>
                              handleView({
                                id,
                                number,
                                mate_number,
                                description,
                                general_desc,
                              })
                            }
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              handleEdit({
                                id,
                                number,
                                mate_number,
                                description,
                                general_desc,
                              })
                            }
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {partnerRelationship.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ textAlign: "center" }}>
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Bootstrap-style Pagination */}
              {partnerRelationship.length > itemsPerPage && (
                <nav aria-label="Partner Relationship Pagination">
                  <ul className="pagination m-0 ">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                        Previous
                      </button>
                    </li>
                    {[...Array(totalPages)].map((_, idx) => {
                      const page = idx + 1;
                      return (
                        <li
                          key={page}
                          className={`page-item ${page === currentPage ? "active" : ""}`}
                        >
                          <button className="page-link" onClick={() => goToPage(page)}>
                            {page}
                          </button>
                        </li>
                      );
                    })}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => goToPage(currentPage + 1)}>
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

export default PartnerRelationships;
