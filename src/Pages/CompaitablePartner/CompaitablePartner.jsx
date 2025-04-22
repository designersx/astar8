import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getCompatiblePartner } from "../../lib/Store";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";

const CompaitablePartner = () => {
  const [compatiblePartner, setcompatiblePartner] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchcompatiblePartner = async () => {
    setLoading(true);
    try {
      const response = await getCompatiblePartner();
      setcompatiblePartner(response.data || []);
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchcompatiblePartner();
    const handleStorageChange = () => fetchcompatiblePartner();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/compatible_partners/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/compatible_partners/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Compatible Partner </h2>
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
                    <th>Description</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {compatiblePartner.map(
                    ({
                      id,
                      number,
                      description,
                      more_compatible_months,
                      more_compatible_dates,
                      less_compatible_months,
                      less_compatible_dates,
                    }) => (
                      <tr key={id}>
                        <td>{number}</td>
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
                                  description,
                                  more_compatible_months,
                                  more_compatible_dates,
                                  less_compatible_months,
                                  less_compatible_dates,
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
                                  description,
                                  more_compatible_months,
                                  more_compatible_dates,
                                  less_compatible_months,
                                  less_compatible_dates,
                                })
                              }
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                  {compatiblePartner.length === 0 && (
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompaitablePartner;
