import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CompatibilityPercentage = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Compatibility Scale</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Numbers</th>
                <th>Mate Number</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
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
                <td>1</td>
                <td>2</td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/compatibility_percentage/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/compatibility_percentage/2/edit"
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
                    href="https://be.astar8.com/compatibility_percentage?page=2"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=3"
                  >
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=4"
                  >
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=5"
                  >
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=6"
                  >
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=7"
                  >
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=8"
                  >
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=9"
                  >
                    9
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="https://be.astar8.com/compatibility_percentage?page=2"
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

export default CompatibilityPercentage;
