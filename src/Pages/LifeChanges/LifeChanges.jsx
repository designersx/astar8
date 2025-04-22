import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUnlock } from "react-icons/fa6";
import {
  getLifeChanges,
  getPersonalYear,
  getPlanetNumbers,
} from "../../lib/Store";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";

const LifeChanges = () => {
  const [lifeChanges, setlifeChanges] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Personal Year entries
  const fetchLifeChanges = async () => {
    setLoading(true);
    try {
      const response = await getLifeChanges();
      setlifeChanges(response.data || []);
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLifeChanges();
    const handleStorageChange = () => fetchLifeChanges();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/life_changes/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/life_changes/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Life Changes</h2>
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
                    <th>Ages</th>
                    <th>Years</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lifeChanges.map(({ id, numbers, ages, years }) => (
                    <tr key={id}>
                      <td>{numbers}</td>
                      <td>{ages}</td>
                      <td>{years}</td>
                      {/* <td>
                          {description.length > 100
                            ? `${description.slice(0, 100)}...`
                            : description}
                        </td> */}

                      <td>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button
                            className="btn btn-info"
                            onClick={() =>
                              handleView({
                                id,
                                numbers,
                                ages,
                                years,
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
                                numbers,
                                ages,
                                years,
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
                  {lifeChanges.length === 0 && (
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

export default LifeChanges;
