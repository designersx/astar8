import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CompatibiltyDesc = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Compatibility Descriptions</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <a
                  className="btn btn-primary"
                  href="https://be.astar8.com/compatibility_description/create"
                >
                  Create
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Number</th>
                <th>Description</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Car/Vehicle</td>
                <td>1</td>
                <td>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly use...
                </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/dobreading/73"
                      title="View"
                      target="_blank"
                    >
                      <IoIosEye size={18} />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/dobreading/73/edit"
                      title="Edit"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Business</td>
                <td>1</td>
                <td>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly use...
                </td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/compatibility_description/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/compatibility_description/2/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="custom-pagination">
            <nav>
              <ul className="pagination">
                <li
                  className="page-item disabled"
                  aria-disabled="true"
                  aria-label="« Previous"
                >
                  <span className="page-link" aria-hidden="true">
                    ‹
                  </span>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_description?page=2"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_description?page=2"
                    rel="next"
                    aria-label="Next »"
                  >
                    ›
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompatibiltyDesc;
