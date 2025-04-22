import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getLifeCycle } from "../../lib/Store";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";

const LifeCycle = () => {
  const [lifeCycle, setlifeCycle] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Personal Year entries
  const fetchLifeCycle = async () => {
    setLoading(true);
    try {
      const response = await getLifeCycle();
      setlifeCycle(response.data || []);
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLifeCycle();
    const handleStorageChange = () => fetchLifeCycle();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/life_cycles/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/life_cycles/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Life Cycle</h2>
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
                    <th>Cycle By Month</th>
                    <th>Cycle By Date</th>
                    <th>Cycle By Year</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {lifeCycle.map(
                    ({
                      id,
                      number,
                      cycle_by_month,
                      cycle_by_date,
                      cycle_by_year,
                    }) => (
                      <tr key={id}>
                        <td>{number}</td>
                        <td>
                          {cycle_by_month?.length > 100
                            ? `${cycle_by_month?.slice(0, 100)}...`
                            : cycle_by_month}
                        </td>
                        <td>
                          {cycle_by_date?.length > 100
                            ? `${cycle_by_date?.slice(0, 100)}...`
                            : cycle_by_date}
                        </td>
                        <td>
                          {cycle_by_year?.length > 100
                            ? `${cycle_by_year?.slice(0, 100)}...`
                            : cycle_by_year}
                        </td>
                        {/* <td>
                          {cycle_by_month?.length > 100
                            ? `${cycle_by_month?.slice(0, 100)}...`
                            : cycle_by_month}
                        </td> */}

                        <td>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <button
                              className="btn btn-info"
                              onClick={() =>
                                handleView({
                                  id,
                                  number,
                                  cycle_by_month,
                                  cycle_by_date,
                                  cycle_by_year,
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
                                  cycle_by_month,
                                  cycle_by_date,
                                  cycle_by_year,
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
                  {lifeCycle?.length === 0 && (
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

export default LifeCycle;
