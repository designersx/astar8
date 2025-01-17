import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const PlanetNumbers = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Planet Number</h2>
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
                <th>Ruling Number</th>
                <th>Description</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Sun</td>
                <td>1</td>
                <td>
                  1 dominates the mount of Apollo (under the base of the third
                  finger). It would e...
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
                <td>Moon</td>
                <td>2</td>
                <td>
                  Dominates the mount of the Moon (fleshy area of the palm
                  opposite the thumb). It...
                </td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/planet_numbers/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/planet_numbers/2/edit"
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

export default PlanetNumbers;
