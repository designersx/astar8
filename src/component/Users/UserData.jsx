import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";
import {
  subscription1Action,
  cancel1Action,
  cancel3Action,
  subscription3Action,
  getAllUsers,
} from "../../lib/Store";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function UserData({ user, currentPage, usersPerPage, loading }) {
  const navigate = useNavigate();

  const onHandleNextPage = (id) => {
  localStorage.setItem("user_Detailed_id", id);
    navigate(`/userDetailedData`);
  };

  const subscription1Month = async (id) => {
    try {
      const token = localStorage.getItem("UserToken");
      const data = await subscription1Action(id, token);
      window.location.reload();
      // getUserData();
      toast.success("1 Month Subscription Activated");
    } catch (error) {
      toast.error("Error Activating 1 Month Subscription");
      console.log(error, "error");
    }
  };

  const subscription3Month = async (id) => {
    try {
      const token = localStorage.getItem("UserToken");
      const data = await subscription3Action(id, token);
      window.location.reload();
      // getUserData();
      toast.success("3 Month Subscription Activated");
    } catch (error) {
      toast.error("Error Activating 3 Month Subscription");
      console.log(error, "error");
    }
  };

  const Cancelsubscription1Month = async (id) => {
    try {
      const token = localStorage.getItem("UserToken");
      const data = await cancel1Action(id, token);
      window.location.reload();
      // getUserData();
      toast.success("1 Month Subscription Canceled");
      console.log(data, "data");
    } catch (error) {
      toast.error("Error Cancelling 1 Month Subscription");
      console.log(error, "error");
    }
  };

  const cancel3Actions = async (id) => {
    try {
      const token = localStorage.getItem("UserToken");
      const data = await cancel3Action(id, token);
      window.location.reload();
      // getUserData();
      toast.success("3 Month Subscription Canceled");
      console.log(data, "data");
    } catch (error) {
      toast.error("Error Cancelling 3 Month Subscription");
      console.log(error, "error");
    }
  };

  return (
    <>
      <Toaster />
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
            <tr>
            <td colSpan="8" style={{ textAlign: "center", padding: "15px 0" }}>
              <Loader />
            </td>
          </tr>
          ) : user && user.length > 0 ? (
            user.map((data, index) => {
              const rowNumber = (currentPage - 1) * usersPerPage + index + 1;
              return (
                <tr key={data.id}>
                  <td>{rowNumber}</td>
                  <td>{data.name}</td>
                  <td>{data.email || data.username}</td>
                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status == null ? "Free" : "Paid"}
                  </td>
                  <td>{data.platform || "N/A"}</td>
                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status === 1 ? (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn btn-danger alert-subscribe"
                        title="Click to Inactivate Subscription"
                        onClick={() => Cancelsubscription1Month(data.id)}
                      >
                        InActive
                      </button>
                    ) : (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{ backgroundColor: "#0199FE", color: "white" }}
                        title="Click to Activate Subscription"
                        onClick={() => subscription1Month(data.id)}
                        disabled={data.subscription_status === 2}
                      >
                        Active
                      </button>
                    )}
                  </td>

                  <td style={{ textAlign: "center" }}>
                    {data.subscription_status === 2 ? (
                      <button
                        type="submit"
                        name="subscribe"
                         className="btn btn-danger alert-subscribe"
                        title="Click to InActivate subscription"
                        onClick={() => cancel3Actions(data.id)}
                      >
                        InActive
                      </button>
                    ) : (
                      <button
                        type="submit"
                        name="subscribe"
                        className="btn alert-subscribe"
                        style={{ backgroundColor: "#0199FE", color: "white" }}
                        title="Click to Activate Subscription"
                        onClick={() => subscription3Month(data.id)}
                        disabled={data.subscription_status === 1}
                      >
                        Active
                      </button>
                    )}
                  </td>

                  <td className="userTableTd">
                    <a
                      className="btn btn-info btnButton"
                      style={{ padding: "2px 12px" }}
                      title="View"
                      onClick={() => onHandleNextPage(data.id)}
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
