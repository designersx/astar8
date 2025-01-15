import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ZodiacSign = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Zodiac Signs</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Zodiac Sign</th>
                <th>Zodiac Number</th>
                <th>Zodiac Day</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>March 21-April 19</td>
                <td>ARIES</td>
                <td>9</td>
                <td>Tuesday</td>
                <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/zodic_signs/1/edit"
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
                <td>April 20-May 20</td>
                <td>TAURUS</td>
                <td>6</td>
                <td>Friday</td>
                <td>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/zodic_signs/2/edit"
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

export default ZodiacSign;
