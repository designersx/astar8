import React, { useState } from "react";
import "../../styles/Style.css";
import Header from "../Dashboard/Header";
import { Link } from "react-router-dom";
import { ResetPasswordApi } from "../../lib/Store";
import { IoEye } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";


export default function ResetPassword() {
  const [formData, setFormData] = useState({
    email: localStorage.getItem("userEmail") || "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOldPasswordTyping, setIsOldPasswordTyping] = useState(false);
  const [isNewPasswordTyping, setIsNewPasswordTyping] = useState(false);
  const [isConfirmPasswordTyping, setIsConfirmPasswordTyping] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "oldPassword") {
      setIsOldPasswordTyping(value.length > 0);
    }
    if (name === "newPassword") {
      setIsNewPasswordTyping(value.length > 0);
    }
    if (name === "confirmPassword") {
      setIsConfirmPasswordTyping(value.length > 0);
    }
  };

  const togglePasswordVisibility = (type) => {
    if (type === "old") {
      setShowOldPassword(!showOldPassword);
    } else if (type === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (type === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }
    const token = localStorage.getItem("UserToken");
    try {
      const response = await ResetPasswordApi(
        formData.email,
        formData.oldPassword,
        formData.newPassword,
        token
      );
      if (response.status === true) {
        setSuccessMessage(response.message);
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setError(response.error);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      setError("An error occurred while resetting the password.");
    } finally {
      setLoading(false);
    }
  };
  const handleCloseMessage = () => {
    setError(null);
    setSuccessMessage("");
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <h2>Reset Password</h2>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <Link className="btn btn-primary" to="/dashboard">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form onSubmit={onHandleSubmit}>
            <div className="row mb-3">
              <label
                htmlFor="old_password"
                className="col-md-4 col-form-label text-md-end"
              >
                Old Password
              </label>
              <div className="col-md-6 position-relative">
                <input
                  id="old_password"
                  type={showOldPassword ? "text" : "password"} // Toggle between text and password
                  className="form-control"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={onHandleChange}
                  required
                />
                {isOldPasswordTyping && (
                  <span
                    className="eye-icon"
                    onClick={() => togglePasswordVisibility("old")}
                  >
                    {showOldPassword ? <IoEye size={20}/>  : <IoEyeOffSharp size={20}/>}
                  </span>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="new_password"
                className="col-md-4 col-form-label text-md-end"
              >
                New Password
              </label>
              <div className="col-md-6 position-relative">
                <input
                  id="new_password"
                  type={showNewPassword ? "text" : "password"} // Toggle between text and password
                  className="form-control"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={onHandleChange}
                  required
                />
                {isNewPasswordTyping && (
                  <span
                    className="eye-icon" 
                    onClick={() => togglePasswordVisibility("new")}
                  >
                    {showNewPassword ? <IoEye size={20}/> : <IoEyeOffSharp size={20}/>}
                  </span>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="confirm_password"
                className="col-md-4 col-form-label text-md-end"
              >
                Confirm New Password
              </label>
              <div className="col-md-6 position-relative">
                <input
                  id="confirm_password"
                  type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={onHandleChange}
                  required
                />
                {isConfirmPasswordTyping && (
                  <span
                    className="eye-icon"
                    onClick={() => togglePasswordVisibility("confirm")}
                  >
                    {showConfirmPassword ? <IoEye size={20}/> : <IoEyeOffSharp size={20}/>}
                  </span>
                )}
              </div>
            </div>
            {error && (
              <div
                className="alert alert-danger alert-dismissible"
                role="alert"
              >
                {error}
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseMessage}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            {successMessage && (
              <div
                className="alert alert-success alert-dismissible"
                role="alert"
              >
                {successMessage}
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseMessage}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <div className="row mb-0">
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  {loading ? "Loading..." : "  Reset Password"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
