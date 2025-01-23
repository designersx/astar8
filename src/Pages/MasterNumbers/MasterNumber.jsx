import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { IoIosEye } from "react-icons/io";
import "../../styles/Style.css";
import { Link } from "react-router-dom";
import { getMasterNumber } from "../../lib/Store";
import Loader from "../../component/Loader/Loader";

export default function MasterNumber() {
  const [masterNumbers, setMasterNumbers] = useState([]);
  console.log("numberrr", masterNumbers);
  const [loading, setLoading] = useState(false);

  const fetchMasterNumbers = async () => {
    setLoading(true); 
    try {
      const response = await getMasterNumber(); 
      setMasterNumbers(response.master_numbers); 
    } catch (err) {
      console.log(err, "error");
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchMasterNumbers(); 

    const handleStorageChange = () => {
      fetchMasterNumbers(); 
    };

    window.addEventListener("storage", handleStorageChange); // Listen for storage changes

    return () => {
      window.removeEventListener("storage", handleStorageChange); // Cleanup listener on component unmount
    };
  }, []);

  const handleViewClick = (item) => {
    const newWindow = window.open("/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item; 
  };

  const handleEditClick = (item) => {
    const newWindow = window.open("/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item; 
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Master Number</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          {loading ? (
            <div className="text-center"><Loader/></div> 
          ) : (
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Number</th>
                  <th>Description</th>
                  <th width="280px">Action</th>
                </tr>
                {masterNumbers?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.number}</td>
                    <td>
                      {" "}
                      {item.description.length > 100
                        ? item.description.slice(0, 400) + "..."
                        : item.description}
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Link
                          className="btn btn-info"
                          onClick={() => handleViewClick(item)}
                          title="View"
                        >
                          <IoIosEye size={18} />
                        </Link>
                        <Link
                          className="btn btn-primary"
                          onClick={() => handleEditClick(item)} 
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
          )}
        </div>
      </div>
    </>
  );
}
