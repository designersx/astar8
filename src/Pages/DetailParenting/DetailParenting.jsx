import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const DetailParenting = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2>Detailed Parenting Reading</h2>
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
                    If your children were born on dates adding up to a 1, 4, or
                    9, chances are you'll have har...
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
                    Children born on dates adding up to 2, 7, or 6 are generally
                    harmonious. The reverse is tr...
                  </td>
                  <td>
                    <a
                      className="btn btn-info"
                      href="https://be.astar8.com/detailparenting/47"
                      title="View"
                      target="_blank"
                    >
                      <i className="icon-copy ion-eye" />
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://be.astar8.com/detailparenting/47/edit"
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

export default DetailParenting;
