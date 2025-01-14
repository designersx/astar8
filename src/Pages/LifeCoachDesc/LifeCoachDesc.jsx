import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const LifeCoachDesc = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Lifecoach Description List</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/* Nav tabs */}
              <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <div className="tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link text-blue active"
                          data-toggle="tab"
                          href="#day"
                          role="tab"
                          aria-selected="true"
                        >
                          Day
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-blue"
                          data-toggle="tab"
                          href="#week"
                          role="tab"
                          aria-selected="false"
                        >
                          Week
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="day"
                        role="tabpanel"
                      >
                        <div className="card-block table-border-style">
                          <table className="table table-striped">
                            <tbody>
                              <tr>
                                <th>S.No</th>
                                <th>Star Type</th>
                                <th>Star Count</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th width="280px">Action</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>Green star</td>
                                <td>One star</td>
                                <td>1</td>
                                <td>
                                  Favorable day for taking the initiative and
                                  making decisions.
                                </td>
                                <td>
                                <div style={{ display: "flex", gap: "10px" }}>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/1"
                                    title="View"
                                    target="_blank"
                                  >
                                    <IoIosEye size={18} />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/1/edit"
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
                                <td>Green star</td>
                                <td>Two star</td>
                                <td>1</td>
                                <td>
                                  Doubly favorable day for important
                                  decision-making and taking an independent,
                                  proactive approach.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/2"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/2/edit"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeCoachDesc;
