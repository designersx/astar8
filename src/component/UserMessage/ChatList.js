import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import Loader from "../Loader/Loader";

const ChatList = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (users !== undefined) {
      setLoading(false);
    }
  }, [users]);

  const unreadCount =
    users?.reduce((acc, user) => {
      if (
        user.messages &&
        user.messages[0] &&
        user.messages[0].messageSeenStatus === 0
      ) {
        return acc + 1;
      }
      return acc;
    }, 0) || 0;

  // Filter users based on search term and active filter.
  // For "unread", check if any message has messageSeenStatus === 0.
  const filteredUsers = users?.filter((user) => {
    const matchName = user.user_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchFilter =
      activeFilter === "all" ||
      (activeFilter === "unread" &&
        user.messages &&
        user.messages.some((msg) => msg.messageSeenStatus === 0));
    return matchName && matchFilter;
  });

  // Sort the filtered users by the recent message's created time (most recent first)
  const sortedUsers = filteredUsers?.sort((a, b) => {
    const aDate = new Date(a.messages[0].message_created_at);
    const bDate = new Date(b.messages[0].message_created_at);
    return bDate - aDate;
  });

  return (
    <div className="chat-list">
      <div className="chat-search">
        <span className="ti-search" />
        <input
          type="text"
          placeholder="Search Contact"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="d-flex my-2 ml-2 mb-1" style={{ gap: "10px" }}>
        <button
          disabled={loading}
          className={`btn btn-sm rounded-pill ${
            activeFilter === "all" ? "btn-primary" : "btn-outline-secondary"
          }`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          disabled={loading}
          className={`btn btn-sm rounded-pill ms-2 ${
            activeFilter === "unread" ? "btn-primary" : "btn-outline-secondary"
          }`}
          onClick={() => setActiveFilter("unread")}
        >
          Unread ({unreadCount})
        </button>
      </div>

      <div className="notification-list">
        {loading ? (
          <Loader />
        ) : sortedUsers && sortedUsers.length > 0 ? (
          sortedUsers.map((user) => (
            <ChatItem
              key={user.user_id}
              user={user}
              onSelectUser={onSelectUser}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No user found</p>
        )}
      </div>
    </div>
  );
};

export default ChatList;
