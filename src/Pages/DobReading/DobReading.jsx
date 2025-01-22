import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../component/Loader/Loader";
import { Link } from "react-router-dom";
import { getDobReading } from "../../lib/Store";

const DobReading = () => {
  const [dobReadings, setDobReadings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDobReadings = async () => {
    setLoading(true);
    try {
      const response = await getDobReading();
      console.log("ress", response);
      setDobReadings(response.dob_reading || []);
    } catch (err) {
      console.error("Error fetching dob readings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDobReadings();

    const handleStorageChange = () => {
      fetchDobReadings();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleViewClick = (item) => {
    const newWindow = window.open("/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("viewData", item);
  };

  const handleEditClick = (item) => {
    const newWindow = window.open("/dobreading/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item)); 
    newWindow.dataFromParent = item;
    console.log("editData", item);
  };

  return (
    <div>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2>DOB Reading</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="pd-20 card-box mb-30">
          {loading ? (
            <Loader />
          ) : (
            <div className="card-block table-border-style">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th>Number</th>
                    <th>Description</th>
                    <th width="280px">Action</th>
                  </tr>
                  {dobReadings.map((reading) => (
                    <tr key={reading.id}>
                      <td>{reading.number}</td>
                      <td>
                        {reading.description.length > 100
                          ? `${reading.description.slice(0, 100)}...`
                          : reading.description}
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <Link
                            className="btn btn-info"
                            onClick={() => handleViewClick(reading)}
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </Link>
                          <Link
                            className="btn btn-primary"
                            onClick={() => handleEditClick(reading)}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </Link>
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
    </div>
  );
};

export default DobReading;
