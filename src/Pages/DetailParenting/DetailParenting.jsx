import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUnlock } from "react-icons/fa6";
import {
  getBasicParenting,
  getChildren,
  getDetailedParenting,
  getPersonalYear,
  getPlanetNumbers,
} from "../../lib/Store";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";

const DetailParenting = () => {
  const [detailParent, setdetailParent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Children
  const fetchDetailParent = async () => {
    setLoading(true);
    try {
      const response = await getDetailedParenting();
      setdetailParent(response.data || []);
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailParent();
    const handleStorageChange = () => fetchDetailParent();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleView = (item) => {
    window.open("/detailparenting/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
  };

  const handleEdit = (item) => {
    window.open("/detailparenting/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Detailed Parenting Reading </h2>
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
                  {detailParent.map(({ id, number, description }) => (
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
                  {detailParent.length === 0 && (
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

export default DetailParenting;
