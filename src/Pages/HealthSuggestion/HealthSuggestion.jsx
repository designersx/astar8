import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getHealthSuggestions } from "../../lib/Store";

const HealthSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Health Suggestions
  const fetchSuggestions = async () => {
    setLoading(true);
    try {
      const response = await getHealthSuggestions();
      setSuggestions(response || []);
    } catch (err) {
      console.error("Error fetching health suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();

    const handleStorageChange = () => fetchSuggestions();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handle View and Edit
  const handleViewClick = (item) => {
    const newWindow = window.open("/healthsuggestion/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEditClick = (item) => {
    const newWindow = window.open("/healthsuggestion/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Health Suggestion</h2>
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
                  {suggestions.map(({ id, number, description }) => (
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
                            onClick={() => handleViewClick({ id, number, description })}
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEditClick({ id, number, description })}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HealthSuggestion;
