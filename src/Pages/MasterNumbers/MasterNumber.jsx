import React from "react";
import Header from "../../component/Dashboard/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { IoIosEye } from "react-icons/io";
import "../../styles/Style.css";
import { Link } from "react-router-dom";
export default function MasterNumber() {

  const numbers = [
    { id: 1, number: 22, description: "Description for number 22" },
    { id: 2, number: 33, description: "Description for number 33" },
  ];

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
              {numbers.map((item) => (
              <tr key={item.id}>
                
                <td>{item.number}</td>
                <td>
                {item.description}
                </td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link
                      // className="btn btn-info"
                      to="/Master/show"
                      state={{ number: item.number, description: item.description }}
                      // title="View"
                      // target="_blank"
                    >
                      <IoIosEye size={18} />
                    </Link>
                    <Link
                      className="btn btn-primary"
                      to="/Master/edit"
                      title="Edit"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Link>
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
