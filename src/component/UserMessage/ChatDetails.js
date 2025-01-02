import React, { useEffect, useState, useRef } from "react";
import { TfiEmail } from "react-icons/tfi";
import { SiMinutemailer } from "react-icons/si";
import { getUserChatMessages, setSeenMessages } from "../../lib/Store";
import { io } from "socket.io-client";
import { BeatLoader } from "react-spinners";

const ChatDetails = ({ user, onMessageSent }) => {
  const adminId = 6;
  const [userChatMessages, setUserChatMessages] = useState([]);
  // console.log("userrr", userChatMessages);
  const [messageInput, setMessageInput] = useState("");
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const messagesEndRef = useRef(null);

  const fetchUserChats = async () => {
    setLoading(true);
    const response = await getUserChatMessages(user?.user_id);
    setUserChatMessages(response.messages);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchUserChats();
  }, [user]);

  // Initialize socket connection
  useEffect(() => {
    const newSocket = io("http://localhost:5000"); // Replace with your backend URL
    setSocket(newSocket);

    newSocket.on("connect", () => {
      newSocket.emit("register", { userId: 6 }); // Replace 6 with the actual user ID
    });

    // Listen for real-time messages
    newSocket.on("receive-message", (data) => {
      console.log("Received message:", data);
      const data1 = {
        created: data.timestamp,
        message: data.message,
        messageId: data.messageId,
        receiverId: data.recipientId,
        senderId: data.userId,
        updated: data.timestamp,
      };
      setUserChatMessages((prevMessages) => [...prevMessages, data1]);
      onMessageSent();
    });

    return () => newSocket.disconnect();
  }, []);

  // Send a message to the server
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const messageData = {
      userId: "6",
      recipientId: user?.user_id,
      message: messageInput,
    };

    socket.emit("send-message", messageData);
    setMessageInput("");
    onMessageSent();
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", options);
  };

  // useEffect(() => {
  //   console.log("trigger done");
  // }, [userChatMessages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [userChatMessages]);

  useEffect(() => {
    const setSeenMessage = async () => {
      if (user) {
        console.log("checkUserrr---------0", user.user_id);
        const finalDate = {
          userId: user.user_id,
          isSeen: 1,
        };

        try {
          const response = await setSeenMessages(finalDate);
          console.log("Message seen response:", response);
        } catch (error) {
          console.error("Error setting message as seen:", error);
        }
      }
    };

    setSeenMessage();
  }, [userChatMessages]);

  return (
    <div className="" style={{ flex: 2, height: "72vh" }}>
      {user ? (
        <>
          <div
            className="d-flex flex-column h-100"
            style={{
              overflow: "hidden",
            }}
          >
            {/* Upper Div with Dark Blue Background */}
            <div
              className="d-flex align-items-center justify-content-center pb-2 pt-2"
              style={{ background: "#0b132b" }}
            >
              {/* User Photo and Details */}
              <div className="text-center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto", // Centers the image horizontally if needed
                  }}
                >
                  <img
                    src={
                      user.user_profile_pic ||
                      "https://be.astar8.com/images/dummy.jpg"
                    }
                    alt="Loading"
                    className="rounded-circle"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h5 className="mb-1 mt-1" style={{ color: "#44aeff" }}>
                  {user.user_name}
                </h5>
                <p className="mb-0 small" style={{ color: "#a4a4a4" }}>
                  DOB: {formatDate(user.user_dob)}
                </p>
                <p className="mb-0 small" style={{ color: "#a4a4a4" }}>
                  EMAIL: {user.user_username || "Pending!"}
                </p>
                <p className="mb-0 small" style={{ color: "#a4a4a4" }}>
                  Joining Date: {formatDate(user.user_created_at)}
                </p>
              </div>
            </div>

            {/* Messages Section */}
            <div
              className="flex-grow-1 p-4"
              style={{
                overflowY: "auto",
                maxHeight: "calc(100vh - 250px)",
                background: "#f7f8fa",
              }}
            >
              {loading ? (
                <div className="text-center">
                  <BeatLoader color="black" size={10} />
                </div> // Loading indicator
              ) : (
                <div>
                  {userChatMessages?.map((message) => (
                    <div
                      key={message.messageId}
                      style={{ gap: "15px" }}
                      className={`d-flex mb-3  ${
                        message.senderId === user?.user_id
                          ? "justify-content-start"
                          : "justify-content-end"
                      }`}
                    >
                      {message.senderId === user?.user_id && (
                        <img
                          src={
                            message.profilePic ||
                            "https://be.astar8.com/images/dummy.jpg"
                          }
                          alt="User profile"
                          className="rounded-circle me-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div
                        className="p-3 rounded"
                        style={{
                          background:
                            message.senderId === user?.user_id
                              ? "#ecf0f4"
                              : "#d1e7dd",
                          wordWrap: "break-word",
                          maxWidth: "70%",
                        }}
                      >
                        {message.message}
                        <p
                          className="small mb-0 mt-1"
                          style={{ color: "#a4a4a4", textAlign: "right" }}
                        >
                          {formatDate(message.updated || message.timestamp)} at{" "}
                          {formatTime(message.updated || message.timestamp)}
                        </p>
                      </div>
                      {message.senderId !== user?.user_id && (
                        <img
                          src={
                            message.profilePic ||
                            "https://be.astar8.com/images/dummy.jpg"
                          }
                          alt="User profile"
                          className="rounded-circle ms-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Field Section */}
            <div
              className="p-3 border-top"
              style={{
                background: "#fff",
              }}
            >
              <div className="d-flex align-items-center">
                <div className="pr-2">
                  <TfiEmail size={25} />
                </div>

                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="w-100 border-0 me-2"
                  placeholder="Type your message..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(); // Trigger message send on Enter key press
                    }
                  }}
                  style={{
                    outline: "none",
                    background: "#f7f8fa",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                />
                <div
                  className="pl-1"
                  style={{ cursor: "pointer" }}
                  onClick={handleSendMessage}
                >
                  <SiMinutemailer size={25} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="default-message text-center p-4 font-weight-bold">
          No Message Found
        </div>
      )}
    </div>
  );
};

export default ChatDetails;
