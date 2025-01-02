import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
export default function UserData({ user, currentPage, usersPerPage, loading }) {
  return (
    <>
      <table className="table table-bordered" id="allDataTable">
        <tbody>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subscription Status</th>
            <th>Payment Platform</th>
            <th>Subscription Action</th>
            <th>3 Month Subscription Action</th>
            <th>Action</th>
          </tr>
          {loading ? (
            <div style={{marginLeft:"30px"}}>
              <Loader />
            </div>
          ) : user && user.length > 0 ? (
            user.map((data, index) => {
              const rowNumber = (currentPage - 1) * usersPerPage + index + 1;
              return (
                <tr key={data.id}>
                  <td>{rowNumber}</td>
                  <td>{data.name}</td>
                  <td>{data.email || data.username}</td>
                  <td style={{ textAlign: "center" }}>Free</td>
                  <td>{data.platform || "N/A"}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      name="subscribe"
                      className="btn btn-danger alert-subscribe"
                      title="Active Special subscription"
                    >
                      Active
                    </button>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      type="submit"
                      name="subscribe"
                      className="btn alert-subscribe"
                      style={{ backgroundColor: "#0199FE", color: "white" }}
                      title="Active Special subscription"
                    >
                      Active
                    </button>
                  </td>
                  <td className="userTableTd">
                    <a
                      className="btn btn-info btnButton"
                      style={{ padding: "2px 12px" }}
                      title="View"
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ fontSize: "11px" }}
                      />
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
