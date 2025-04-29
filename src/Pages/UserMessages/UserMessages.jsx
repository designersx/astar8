import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import "./UserMessage.css";
import "../../styles/Style.css";
import "../../component/UserMessage/ChatComp.css";
import ChatList from "../../component/UserMessage/ChatList";
import ChatDetails from "../../component/UserMessage/ChatDetails";
import { getAdminUserMessages } from "../../lib/Store";

const UserMessages = () => {
  const [usersList, setUsersList] = useState();
  // console.log("userListtt", usersList);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sample, setsample] = useState(0);
  const [userId, setuserId] = useState(localStorage.getItem("userId") || "");
  const [userRole, setuserRole] = useState(localStorage.getItem("Role") || "");
  // console.log("userRolee",userRole)
  const llyadId = "6";

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const oneMonthBefore = new Date();
    oneMonthBefore.setMonth(currentDate.getMonth() - 1);

    const today = currentDate.toISOString().split("T")[0];
    setToDate(today);
    setFromDate(oneMonthBefore.toISOString().split("T")[0]);
  }, []);

  const fetchUserList = async () => {
    const receiverId = userRole === "1" ? userId : llyadId;
    const finalDate = {
      receiver_id: receiverId,
      from: fromDate,
      to: toDate,
    };
    const response = await getAdminUserMessages(finalDate);
    // console.log("ress",response)
    setUsersList(response?.data);
  };

  useEffect(() => {
    fetchUserList();
  }, [fromDate, toDate, selectedUser, sample]);

  const handleUserSelect = (userId) => {
    const user = usersList?.find((u) => u.user_id === userId);
    setSelectedUser(user);
  };

  const handleFromDateChange = (e) => {
    const selectedFromDate = e.target.value;
    const maxDateAllowed = new Date(toDate);
    maxDateAllowed.setMonth(maxDateAllowed.getMonth() - 3);

    // Ensure 'fromDate' is not later than 'toDate' and within the 3-month range
    if (new Date(selectedFromDate) > new Date(toDate)) {
      alert("'From' date cannot be later than 'To' date.");
      return;
    } else if (new Date(selectedFromDate) < maxDateAllowed) {
      alert("Date range cannot exceed 3 months.");
      return;
    }

    setFromDate(selectedFromDate);
  };

  const handleToDateChange = (e) => {
    const selectedToDate = e.target.value;
    const minDateAllowed = new Date(fromDate);
    minDateAllowed.setMonth(minDateAllowed.getMonth() + 3);

    // Ensure 'toDate' is not earlier than 'fromDate' and within the 3-month range
    if (new Date(selectedToDate) < new Date(fromDate)) {
      alert("'To' date cannot be earlier than 'From' date.");
      return;
    } else if (new Date(selectedToDate) > minDateAllowed) {
      alert("Date range cannot exceed 3 months.");
      return;
    }

    setToDate(selectedToDate);
  };

  const onMessageSent = () => {
    // Trigger the re-fetch of the user list whenever a message is sent
    setsample((prevValue) => prevValue + 1);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        {/* Header Section */}
        <div className="page-header">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="title">
                <h2 className="font-weight-bold">User Messages</h2>
              </div>
            </div>
            {/* Date  */}
            <div className="col-md-8 col-sm-12 text-right">
              <div className="datesearch">
                <div className="d-flex">
                  <span className="input-b">
                    <b>From:</b> &nbsp;
                  </span>
                  <input
                    className="form-control dateselected filter w-25"
                    id="messagefilterFrom"
                    value={fromDate}
                    onChange={handleFromDateChange}
                    max={toDate}
                    name="filterdateFrom"
                    type="date"
                  />
                </div>

                <div className="d-flex">
                  <span className="input-b">
                    <b>To:</b> &nbsp;
                  </span>
                  <input
                    className="form-control dateselected filter w-25"
                    id="messagefilterTo"
                    value={toDate}
                    onChange={handleToDateChange}
                    min={fromDate}
                    max={new Date().toISOString().split("T")[0]} // Dynamically set max to today's date
                    name="filterdateTo"
                    type="date"
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg btnclr"
                  onClick={() => {
                    const currentDate = new Date();
                    const oneMonthBefore = new Date();
                    oneMonthBefore.setMonth(currentDate.getMonth() - 1);

                    setFromDate(oneMonthBefore.toISOString().split("T")[0]);
                    setToDate(currentDate.toISOString().split("T")[0]);
                  }}
                >
                  CLEAR FILTER
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Chat Box */}
        <div className="">
          <div className="app-container">
            <div className="chat-interface">
              <ChatList users={usersList} onSelectUser={handleUserSelect} />
              <ChatDetails user={selectedUser} onMessageSent={onMessageSent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMessages;
