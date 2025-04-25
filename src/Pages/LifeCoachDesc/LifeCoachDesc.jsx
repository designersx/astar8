import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getLifeCoachdescription } from "../../lib/Store";
import Loader from "../../component/Loader/Loader";

const LifeCoachDesc = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("day");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const getDescription = async () => {
    try {
      setLoading(true);
      const response = await getLifeCoachdescription();
      setData(response.lifecoachDescriptions);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDescription();
    const handleStorageChange = () => {
      getDescription();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Filter data based on the selected tab
  const filteredData = data?.filter((item) =>
    selectedTab === "day" ? item.type === 1 : item.type === 2
  );

  // Paginate data
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle View Click
  const handleViewClick = (item) => {
    const newWindow = window.open("/lifecoach_descriptions/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("viewData", item);
  };

  // Handle Edit Click
  const handleEditClick = (item) => {
    const newWindow = window.open("/lifecoach_descriptions/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("editData", item);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6">
                <h2>Lifecoach Description List</h2>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            {/* Nav tabs */}
            <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
              <div className="pd-20 card-box">
                {loading ? (
                  <Loader />
                ) : (
                  <div className="tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link text-blue ${
                            selectedTab === "day" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTab("day");
                            setCurrentPage(1);
                          }}
                          role="tab"
                          aria-selected={selectedTab === "day"}
                        >
                          Day
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link text-blue ${
                            selectedTab === "week" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTab("week");
                            setCurrentPage(1);
                          }}
                          role="tab"
                          aria-selected={selectedTab === "week"}
                        >
                          Week
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      {/* Dat Column */}
                      <div
                        className={`tab-pane fade ${
                          selectedTab === "day" ? "active show" : ""
                        }`}
                        id="day"
                        role="tabpanel"
                      >
                        <div className="card-block table-border-style">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th width="120px">Star Type</th>
                                <th width="110px">Star Count</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th width="280px">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paginatedData?.map((item, index) => (
                                <tr key={item.id || index}>
                                  <td>
                                    {(currentPage - 1) * itemsPerPage +
                                      index +
                                      1}
                                  </td>
                                  <td>
                                    {item?.star_type === 1
                                      ? "Green Star"
                                      : item?.star_type === 2
                                      ? "Red Star"
                                      : item?.star_type === 3
                                      ? "Neutral"
                                      : "Unknown"}
                                  </td>
                                  <td>
                                    {item?.star_number === 1
                                      ? "One Star"
                                      : item?.star_number === 2
                                      ? "Two Star"
                                      : item?.star_number === 3
                                      ? "Three Star"
                                      : item?.star_number === 0
                                      ? "Neutral"
                                      : "Unknown"}
                                  </td>

                                  <td>{item?.number}</td>
                                  <td>
                                    {item?.description?.split(" ").length > 20
                                      ? item?.description
                                          .split(" ")
                                          .slice(0, 20)
                                          .join(" ") + "..."
                                      : item?.description}
                                  </td>
                                  <td>
                                    <div
                                      style={{ display: "flex", gap: "10px" }}
                                    >
                                      <a
                                        className="btn btn-info"
                                        onClick={() => handleViewClick(item)}
                                        title="View"
                                      >
                                        <IoIosEye size={18} color="white" />
                                      </a>
                                      <a
                                        className="btn btn-primary"
                                        onClick={() => handleEditClick(item)}
                                        title="Edit"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <FontAwesomeIcon
                                          icon={faPencilAlt}
                                          color="white"
                                        />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {/* Pagination */}
                          <div className="custom-pagination">
                            <nav aria-label="FavParameters pagination">
                              <ul className="pagination">
                                {/* Previous */}
                                <li
                                  className={`page-item ${
                                    currentPage === 1 ? "disabled" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() =>
                                      handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                  >
                                    Previous
                                  </button>
                                </li>

                                {/* Page numbers */}
                                {Array.from({ length: totalPages }, (_, i) => {
                                  const page = i + 1;
                                  return (
                                    <li
                                      key={page}
                                      className={`page-item ${
                                        currentPage === page ? "active" : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() => handlePageChange(page)}
                                      >
                                        {page}
                                      </button>
                                    </li>
                                  );
                                })}

                                {/* Next */}
                                <li
                                  className={`page-item ${
                                    currentPage === totalPages ? "disabled" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() =>
                                      handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                  >
                                    Next
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                      {/* Week Column */}
                      <div
                        className={`tab-pane fade ${
                          selectedTab === "week" ? "active show" : ""
                        }`}
                        id="week"
                        role="tabpanel"
                      >
                        <div className="card-block table-border-style">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th width="110px">Star Type</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th width="280px">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paginatedData.map((item, index) => (
                                <tr key={item.id || index}>
                                  <td>
                                    {(currentPage - 1) * itemsPerPage +
                                      index +
                                      1}
                                  </td>
                                  <td>
                                    {item?.star_type === 1
                                      ? "Green Star"
                                      : item?.star_type === 2
                                      ? "Red Star"
                                      : item?.star_type === 3
                                      ? "Neutral"
                                      : "Unknown"}
                                  </td>

                                  <td>{item?.number}</td>
                                  <td>
                                    {item?.description?.split(" ").length > 20
                                      ? item?.description
                                          .split(" ")
                                          .slice(0, 20)
                                          .join(" ") + "..."
                                      : item?.description}
                                  </td>
                                  <td>
                                    <div
                                      style={{ display: "flex", gap: "10px" }}
                                    >
                                      <a
                                        className="btn btn-info"
                                        onClick={() => handleViewClick(item)}
                                        title="View"
                                      >
                                        <IoIosEye size={18} color="white" />
                                      </a>
                                      <a
                                        className="btn btn-primary"
                                        onClick={() => handleEditClick(item)}
                                        title="Edit"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <FontAwesomeIcon
                                          icon={faPencilAlt}
                                          color="white"
                                        />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {/* Pagination */}
                          <div className="custom-pagination">
                            <nav aria-label="FavParameters pagination">
                              <ul className="pagination">
                                {/* Previous */}
                                <li
                                  className={`page-item ${
                                    currentPage === 1 ? "disabled" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() =>
                                      handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                  >
                                    Previous
                                  </button>
                                </li>

                                {/* Page numbers */}
                                {Array.from({ length: totalPages }, (_, i) => {
                                  const page = i + 1;
                                  return (
                                    <li
                                      key={page}
                                      className={`page-item ${
                                        currentPage === page ? "active" : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() => handlePageChange(page)}
                                      >
                                        {page}
                                      </button>
                                    </li>
                                  );
                                })}

                                {/* Next */}
                                <li
                                  className={`page-item ${
                                    currentPage === totalPages ? "disabled" : ""
                                  }`}
                                >
                                  <button
                                    className="page-link"
                                    onClick={() =>
                                      handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                  >
                                    Next
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeCoachDesc;
