import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import Loader from "../Loader/Loader";

const ChatList = ({ users, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (users !== undefined) {
      setLoading(false);
    }
  }, [users]);

  const filteredUsers = users?.filter((user) =>
    user.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("filterdUserss",filteredUsers)

  return (
    <div className="chat-list bg-light-gray">
      <div className="chat-search">
        <span className="ti-search" />
        <input
          type="text"
          placeholder="Search Contact"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="notification-list">
        {loading ? (
          <Loader />
        ) : filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
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
