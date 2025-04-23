import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { getHealthPrecautions } from "../../lib/Store";


const HealthPrecaution = () => {
  const [precautions, setPrecautions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Health Precautions
  const fetchPrecautions = async () => {
    setLoading(true);
    try {
      const response = await getHealthPrecautions();
      setPrecautions(response || []);
    } catch (err) {
      console.error("Error fetching health precautions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrecautions();

    const handleStorageChange = () => {
      fetchPrecautions();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle View Click
  const handleViewClick = (item) => {
    const newWindow = window.open("/healthprecaution/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  // Handle Edit Click
  const handleEditClick = (item) => {
    const newWindow = window.open("/healthprecaution/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Health Precautions</h2>
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
                  {precautions.map(({ id, number, description }) => (
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

export default HealthPrecaution;
