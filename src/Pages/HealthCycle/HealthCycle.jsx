import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FaUnlock } from "react-icons/fa6";


const HealthCycle = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Health Cycle</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Nav tabs */}
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
                    Their vitality is generally at its best. Health thatÔÇÖs
                    below normal quickly returns. Goo...
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
                      <a
                        className="btn" style={{background:"#28a745"}}
                        href="https://be.astar8.com/dobreading/73/edit"
                        title="Edit"
                        target="_blank"
                      >
                        <FaUnlock size={15} color="white"/>
                      </a>
                      
                    </div>
                    
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    The tendency toward rapid changes in health. Problems
                    develop with the stomach, bowels, bl...
                  </td>
                  <td>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/healthcycle/110"
                      title="View"
                      target="_blank"
                    >
                      <i className="icon-copy ion-eye" />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/healthcycle/110/edit"
                      title="Edit"
                      target="_blank"
                    >
                      <i className="icon-copy ti-pencil-alt" />
                    </a>
                    <form
                      method="POST"
                      action="https://be.astar8.com/healthcycle/110"
                      acceptCharset="UTF-8"
                      style={{ display: "inline" }}
                      onclick=""
                    >
                      <input
                        name="_method"
                        type="hidden"
                        defaultValue="DELETE"
                      />
                      <input
                        name="_token"
                        type="hidden"
                        defaultValue="AoTzZmniJdlb2Uex64yOSzZsaSaP7kmmF2VoRXzd"
                      />
                      <button
                        type="submit"
                        name="Delete"
                        className="btn btn-success alert-block"
                        title="Block"
                      >
                        <i className="icon-copy fi-unlock" />
                      </button>
                    </form>
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

export default HealthCycle;
