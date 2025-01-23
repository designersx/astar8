import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../component/Loader/Loader";
import { Link } from "react-router-dom";
import { getMagicBox } from "../../lib/Store";

const MagicBox = () => {
  const [magicBoxData, setMagicBoxData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMagicBoxData = async () => {
    setLoading(true);
    try {
      const response = await getMagicBox();
      console.log("MagicBox Response:", response);
      setMagicBoxData(response.magic_box || []);
    } catch (err) {
      console.error("Error fetching magic box data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMagicBoxData();

    const handleStorageChange = () => {
      fetchMagicBoxData();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle View Click
  const handleViewClick = (item) => {
    const newWindow = window.open("/magicbox/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("View MagicBox Data:", item);
  };

  // Handle Edit Click
  const handleEditClick = (item) => {
    const newWindow = window.open("/magicbox/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("Edit MagicBox Data:", item);
  };

  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2>Magic Box</h2>
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
                  {magicBoxData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.number}</td>
                      <td>
                        {item.description.length > 100
                          ? `${item.description.slice(0, 100)}...`
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MagicBox;
