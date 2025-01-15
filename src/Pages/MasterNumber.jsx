import React from "react";
import Header from "../component/Dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { IoIosEye } from "react-icons/io";
import "../styles/Style.css";
export default function MasterNumber() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Master Number</h2>
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
                <td>22</td>
                <td>
                  The master number 22 is somewhat similar to the 11 in that
                  both are magnetic and powerful. However, where the 11 deals
                  with the mental plane, the 22 deals more directly with the
                  physical plane. Perhaps this is why the 22 is often referred
                  to as the "master builder." In modern Numerology, the 22 is
                  a...
                </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/master_numbers/2"
                      title="View"
                      target="_blank"
                    >
                      <IoIosEye size={18} />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/master_numbers/2/edit"
                      title="Edit"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
