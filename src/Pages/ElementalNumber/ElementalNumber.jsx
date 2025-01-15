import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ElementalNumber = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2>Elemental Number</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className="card-block table-border-style">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Number</th>
                  <th>Description</th>
                  <th width="280px">Action</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    Fire is your natural element, representing energy and force.
                  </td>
                  <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/elementalno/19"
                      title="View"
                      target="_blank"
                    >
                      <IoIosEye size={18} />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/elementalno/19/edit"
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
                    Water is your natural element, representing feelings and
                    emotions.
                  </td>
                  <td>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/elementalno/20"
                      title="View"
                      target="_blank"
                    >
                      <i className="icon-copy ion-eye" />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/elementalno/20/edit"
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
      </div>
    </>
  );
};

export default ElementalNumber;
