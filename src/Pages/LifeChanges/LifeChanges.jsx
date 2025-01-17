import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const LifeChanges = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Life Changes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Numbers</th>
                <th>Ages</th>
                <th>Years</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  10, 13, 19, 28, 31, 37, 40, 46, 49, 55, 58, 64, 67, 73, 76,
                  82, 85, 91, 94
                </td>
                <td>1, 4 sum sequ</td>
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
                <td>
                  11, 16, 20, 25, 29, 34, 38, 43, 47, 52, 56, 61, 65, 70, 74,
                  79, 83, 88, 92, 97
                </td>
                <td>2, 7 sum sequ</td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/life_changes/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/life_changes/2/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LifeChanges;
