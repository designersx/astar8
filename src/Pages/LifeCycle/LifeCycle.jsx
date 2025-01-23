import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const LifeCycle = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Life Cycle</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Number</th>
                <th>Cycle By Month</th>
                <th>Cycle By Date</th>
                <th>Cycle By Year</th>
                <th width="280px">Action</th>
              </tr>
              
              <tr>
                <td>2</td>
                <td>
                  The number 2 in the first cycle governs those born in
                  Februa...
                </td>
                <td>
                  An important turn of events for the better should come your...
                </td>
                <td>
                  As you enter this final cycle of life about your 56th year,...
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
                <td>3</td>
                <td>
                  You're likely to be influenced by a third party other than
                  a...
                </td>
                <td>
                  Under this cycle, pride, ambition, independence, and a
                  desir...
                </td>
                <td>
                  As you enter your 57th birthday, this final stage should
                  pro...
                </td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/life_cycles/3"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/life_cycles/3/edit"
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

export default LifeCycle;
