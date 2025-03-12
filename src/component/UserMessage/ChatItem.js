import React, { useEffect, useState } from "react";
import { setSeenMessages } from "../../lib/Store";
import { ClipLoader } from "react-spinners";

const ChatItem = ({ user, onSelectUser }) => {
  // console.log("chatitemmmmm", user);
  const [unseenMessagesCount, setUnseenMessagesCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const count = user.messages.filter(
      (message) => message.messageSeenStatus === 0
    ).length;
    // console.log("countttt",count)
    setUnseenMessagesCount(count);
  }, [user]);

  // console.log("unseeen Messs", unseenMessagesCount);

  const mostRecentMessage = user.messages.sort(
    (a, b) => new Date(b.message_created_at) - new Date(a.message_created_at)
  )[0];

  const setSeenMessage = async (id) => {
    setisLoading(true);
    const finalDate = {
      userId: id,
      isSeen: 1,
    };
    const response = await setSeenMessages(finalDate);
    if (response.status === 200) {
      setisLoading(false);
    }
    onSelectUser(id);
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <ClipLoader color="white" size={60} />
          <div style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1rem" }}>
            Loading...
          </div>
        </div>
      )}
      <div className="chat-item py-2  border-bottom">
        <div
          onClick={() => setSeenMessage(user.user_id)}
          className="d-flex align-items-start text-decoration-none"
          style={{ cursor: "pointer" }}
        >
          {/* Profile Picture */}
          <div className="me-3 pr-3" style={{  height: "60px" }}>
            <img
              src={
                user.user_profile_pic
                  ? user.user_profile_pic
                  : "https://be.astar8.com/img/default-profile-img.png"
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://be.astar8.com/img/default-profile-img.png";
              }}
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          {/* User Details */}
          <div className="flex-grow-1">
            {/* Top Row: Name and DOJ */}
            <div className="d-flex justify-content-between align-items-center mb-1 ">
              <h6 className="mb-0 font-weight-bold" style={{ width: "70%" }}>
                {user.user_name}
              </h6>
              <span className="text-muted small">
                {formatDate(mostRecentMessage.message_created_at)}
              </span>
            </div>

            {/* Bottom Row: DOB and Placeholder */}
            <div
              className="d-flex justify-content-between text-muted "
              style={{ fontSize: "12px" }}
            >
              <span>
                DOB: {formatDate(user.user_dob)} | DOJ:{" "}
                {formatDate(user.user_created_at)}
              </span>
              {user.messages &&
                user.messages.length > 0 &&
                unseenMessagesCount > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      animation: "pulse 1.5s infinite",
                    }}
                  >
                    {unseenMessagesCount}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatItem;
