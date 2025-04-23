import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getLuckiestParameter, getLuckiestParameters } from "../../lib/Store";
import Loader from "../../component/Loader/Loader";
import { Link } from "react-router-dom";

const LuckiestParameters = () => {
  const [luckiestParams, setLuckiestParams] = useState([]);
  console.log("lucc", luckiestParams);
  const [loading, setLoading] = useState(false);

  const fetchLuckiestParameters = async () => {
    setLoading(true);
    try {
      const response = await getLuckiestParameter();
      setLuckiestParams(response.luckiest_parameters);
    } catch (err) {
      console.log("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLuckiestParameters();

    const handleStorageChange = () => {
      fetchLuckiestParameters();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleViewClick = (item) => {
    const newWindow = window.open("/luckiest_parameters/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("viewData", item);
  };

  const handleEditClick = (item) => {
    const newWindow = window.open("/luckiest_parameters/edit", "_blank");
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
            <div className="col-md-6">
              <div className="">
                <h2>Luckiest Parameters</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="pd-20 card-box mb-30">
          {loading ? (
            <Loader />
          ) : (
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Number</th>
                  <th>Lucky Colors</th>
                  <th>Lucky Gems</th>
                  <th width="280px">Action</th>
                </tr>
                {luckiestParams?.map((param) => (
                  <tr key={param.id}>
                    <td>{param.number}</td>
                    <td>{param.lucky_colours}</td>
                    <td>{param.lucky_gems}</td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Link
                          className="btn btn-info"
                          onClick={() => handleViewClick(param)}
                          title="View"
                        >
                          <IoIosEye size={18} />
                        </Link>
                        <Link
                          className="btn btn-primary"
                          onClick={() => handleEditClick(param)}
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
};

export default LuckiestParameters;
