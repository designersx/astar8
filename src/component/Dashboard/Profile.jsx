import React, { useEffect, useState, useRef, useContext } from "react";
import "../../styles/Style.css";
import Header from "./Header";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { GetUserData, updateImage, UpdateProfile } from "../../lib/Store";
import AppContext from "../../ContextApi/userContext";
export default function Profile() {
  const { data, setData } = useContext(AppContext);
  const [user, setUser] = useState({});
  const [formattedDate, setFormattedDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [loading,setLoading]=useState(false)
  const fileInputRef = useRef(null);
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const getUserDetails = async () => {
    const email = localStorage.getItem("userEmail");
    const token = localStorage.getItem("UserToken");
    try {
      const response = await GetUserData(email, token);
      if (response) {
        setUser(response.user);
        console.log(response.user, "huhkj");
        setImageSrc(response.user.profile_pic);
        localStorage.setItem("profilePic", response.user.profile_pic);
        const { _seconds } = response.user.created_at;
        const dateObject = new Date(_seconds * 1000);
        const formattedDate = dateObject.toISOString().split("T")[0]; 
        console.log(formattedDate, "formattedDate");
        setFormattedDate(formattedDate);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const onModalClose = () => {
    setIsModalOpen(false);
  };
  const onUpdateClick = () => {
    setIsModalOpen(true);
    setUpdatedUsername(user.username);
    // setUpdatedEmail(user.username);
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setUpdatedUsername(value);
    // if (name === "username") setUpdatedEmail(value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        localStorage.setItem("profilePic", reader.result);
        const formData = new FormData();
        const userId = localStorage.getItem("userId");
        if (userId) {
          formData.append("userId", userId);
        }
        formData.append("image", file);
        sendImageToAPI(formData);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendImageToAPI = async (formData) => {
    try {
      const token = localStorage.getItem("UserToken");
      const response = await updateImage(token, formData);
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const id = localStorage.getItem("userId");
      const name = updatedUsername;
      // const username = updatedEmail;
      const token = localStorage.getItem("UserToken");
      const response = await UpdateProfile(id, name, token);
      if (response && response.status === true) {
        setIsModalOpen(false);
        getUserDetails();
      } else {
        console.error("Profile update failed:", response);
      }
    } catch (error) {
      console.log(error, "error");
    }finally{
      setLoading(false)
    }
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="min-height-200px">
          <div className="pd-20 card-box mb-30">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <h2 style={{ fontWeight: "700" }}>Profile</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-right">
                  <Link className="btn btn-primary" to="/dashboard">
                    {" "}
                    Back{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
              <div className="pd-20 card-box height-100-p">
                <div className="row">
                  <div
                    className="profile-photo profile_photo"
                    style={{ width: "170px !important", marginTop: 25 }}
                  >
                    <h5
                      className="mb-20 h5 text-center"
                      style={{
                        color: "#e600e1",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Profile Image
                    </h5>
                    <form
                      className="mt-3"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          style={{
                            display: "none",
                          }}
                        />
                        {/* Edit Icon with Circular Background */}
                        <div
                          style={{
                            position: "absolute",
                            top: "-10px",
                            right: "-15px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                            height: "30px",
                          }}
                          onClick={handleIconClick}
                        >
                          <MdModeEditOutline
                            style={{ top: "7px", verticalAlign: "baseline" }}
                          />
                        </div>
                      </div>
                      <img
                        src={imageSrc ? imageSrc : "https://be.astar8.com/img/default-profile-img.png"}
                        alt="Profile"
                        height="160px"
                        width="160px"
                        style={{
                          // borderRadius: "10px", // Slightly rounded corners
                          objectFit: "cover",
                        }}
                      />
                    </form>
                  </div>
                </div>
                <h5
                  className="text-center h5 mb-0 mt-5"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  {user.username || "Unknown User"}
                </h5>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
              <div className="card-box height-100-p overflow-hidden">
                <div className="profile-tab height-100-p">
                  <div className="tab height-100-p">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="timeline"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <div className="profile-timeline">
                            <h5
                              className="mb-20 h5 pb-2"
                              style={{
                                color: "#e600e1",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              Personal Information
                            </h5>
                            <div className="profile-timeline-list">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                  <div className="form-group">
                                    <strong>Name : </strong>
                                    {user?.username || "Unknown User"}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xs-8 col-sm-8 col-md-8 pb-2">
                                  <div className="form-group">
                                    <strong>Email Address : </strong>
                                    {user?.email}
                                  </div>
                                  <div className="form-group">
                                    <strong>Role : </strong>
                                    {user?.role}
                                  </div>
                                  <div className="form-group">
                                    <strong>Joining Date : </strong>
                                    {formattedDate || "N/A"}
                                  </div>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={onUpdateClick}
                                  >
                                    Update Profile
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Edit Profile
            </h4>
            <button type="button" className="close" onClick={onModalClose}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <strong>Name: </strong>
                <input
                  placeholder="Name"
                  className="form-control"
                  name="name"
                  type="text"
                  value={updatedUsername || ""}
                  onChange={onHandleChange}
                />
              </div>
              <div className="form-group">
                <strong>Email: </strong>
                <input
                  placeholder="Email"
                  className="form-control"
                  name="username"
                  type="text"
                  value={user.email || ""}
                  onChange={onHandleChange}
                  disabled
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onModalClose}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {loading ? 'Loading...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
