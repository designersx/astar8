import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const BasicMoney = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2>Basic Money Matters</h2>
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
                    You may regard money as a means to an end, or as a way to
                    further your name, reputation, o...
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
                  <td>
                    You may be shy about making money, especially on your own.
                    One of the best ways for you to...
                  </td>
                  <td>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/basicmoney/83"
                      title="View"
                      target="_blank"
                    >
                      <i className="icon-copy ion-eye" />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/basicmoney/83/edit"
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

export default BasicMoney;
