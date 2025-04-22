import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUnlock } from "react-icons/fa6";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { getPersonalWeek } from "../../lib/Store";

const PersonalWeek = () => {
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Personal Months entries
  const fetchWeeks = async () => {
    setLoading(true);
    try {
      const response = await getPersonalWeek();
      setWeeks(response.data || []);
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeeks();
    const handleStorageChange = () => fetchWeeks();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/personalweek/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/personalweek/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Personal Week (STATIC)</h2>
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
                    <th>Description</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map(
                    ({
                      id,
                      number,
                      description,
                      love_relationship,
                      health,
                      career,
                      travel,
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
                                  love_relationship,
                                  health,
                                  career,
                                  travel,
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
                                  love_relationship,
                                  health,
                                  career,
                                  travel,
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
                  {weeks.length === 0 && (
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

export default PersonalWeek;
