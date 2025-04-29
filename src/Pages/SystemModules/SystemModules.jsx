import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getModuleTypes } from "../../lib/Store";
import Loader from "../../component/Loader/Loader"; // Assuming you have a Loader component
import { FaEdit } from "react-icons/fa";

const SystemModules = () => {
  const [modulesData, setmodulesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchModulesData = async () => {
    setLoading(true); // Start the loader before fetching data
    try {
      const response = await getModuleTypes();
      setmodulesData(response);
    } catch (err) {
      console.log(err, "error");
    } finally {
      setLoading(false); // Stop the loader after fetching is complete
    }
  };

  useEffect(() => {
    fetchModulesData();

    const handleStorageChange = () => {
      fetchModulesData();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleEditClick = (item) => {
    const newWindow = window.open("/modules/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item;
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Module Types</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right"></div>
            </div>
          </div>
        </div>
        {/* Tab panes */}
        <div className="pd-20 card-box mb-30">
          {loading ? (
            <div className="text-center">
              <Loader />
            </div>
          ) : (
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th width="280px">Action</th>
                </tr>
                {modulesData?.modules?.map((module, index) => (
                  <tr key={module.id}>
                    <td>{index + 1}</td>
                    <td>{module.name}</td>
                    <td>{module.description}</td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Link
                          className="btn btn-primary"
                          onClick={() => handleEditClick(module)}
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

export default SystemModules;
