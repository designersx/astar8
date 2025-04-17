import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUnlock } from "react-icons/fa6";
import {
  getHealthCycle,
  deleteHealthCycle,
} from "../../lib/Store";

const HealthCycle = () => {
  const [cycles, setCycles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Health Cycles
  const fetchCycles = async () => {
    setLoading(true);
    try {
      const response = await getHealthCycle();
      setCycles(response || []);
    } catch (err) {
      console.error("Error fetching health cycles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCycles();
    const handleStorageChange = () => fetchCycles();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/healthcycle/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/healthcycle/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    setLoading(true);
    try {
      await deleteHealthCycle(id);
      fetchCycles();
    } catch (err) {
      console.error("Error deleting health cycle:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Health Cycle</h2>
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
                  {cycles.map(({ id, number, description }) => (
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
                            onClick={() => handleView({ id, number, description })}
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEdit({ id, number, description })}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </button>
                          <button
                            className="btn"
                            style={{ background: "#28a745" }}
                            onClick={() => handleDelete(id)}
                            title="Delete"
                          >
                            <FaUnlock size={15} color="white" />
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

export default HealthCycle;
