import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const PrimaryNumbers = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Primary Numbers</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Number</th>
                <th>Description</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>The number 1 is masculine. It is ruled by the Sun...</td>
                <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/primaryno_types/1"
                    title="View"
                    target="_blank"
                  >
                    <IoIosEye size={18} />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/primaryno_types/1/edit"
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
                <td>The number 2 is feminine. The number 2 is ruled by...</td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/primaryno_types/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/primaryno_types/2/edit"
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

export default PrimaryNumbers;
