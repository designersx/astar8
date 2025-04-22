import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../component/Loader/Loader";
import { Link } from "react-router-dom";
import { getElementalNumber } from "../../lib/Store";

const ElementalNumber = () => {
  const [elementalNumbers, setElementalNumbers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchElementalNumbers = async () => {
    setLoading(true);
    try {
      const response = await getElementalNumber();
      console.log("response", response);
      setElementalNumbers(response.elemental_number || []);
    } catch (err) {
      console.error("Error fetching elemental numbers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElementalNumbers();

    const handleStorageChange = () => {
      fetchElementalNumbers();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle View Click
  const handleViewClick = (item) => {
    const newWindow = window.open("/elementalno/view", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("viewData", item);
  };

  // Handle Edit Click
  const handleEditClick = (item) => {
    const newWindow = window.open("/elementalno/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("editData", item);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2>Elemental Numbers</h2>
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
                  {elementalNumbers.map((number) => (
                    <tr key={number.id}>
                      <td>{number.number}</td>
                      <td>
                        {number.description.length > 100
                          ? `${number.description.slice(0, 100)}...`
                          : number.description}
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <Link
                            className="btn btn-info"
                            onClick={() => handleViewClick(number)}
                            title="View"
                          >
                            <IoIosEye size={18} />
                          </Link>
                          <Link
                            className="btn btn-primary"
                            onClick={() => handleEditClick(number)}
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
    </>
  );
};

export default ElementalNumber;
