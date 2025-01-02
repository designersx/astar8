import React, { useContext, useState } from "react";
import "../../styles/Style.css";
import logo from "../../Assests/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { LoginApi } from "../../lib/Store";
import { useNavigate } from "react-router-dom";
import AppContext from "../../ContextApi/userContext";
export default function AdminLogin() {
  const { data, setData } = useContext(AppContext);
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isPasswordInvalid, setPasswordInvalid] = useState(false);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleInputChange = () => {
    setEmailInvalid(false);
    setPasswordInvalid(false);
    setError("");

    if (validateEmail(email) && password.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!validateEmail(email)) {
      setError("Please include an '@' in the email address.");
      setEmailInvalid(true);
      hasError = true;
    }

    if (password.trim() === "") {
      setError("Password cannot be empty.");
      setPasswordInvalid(true);
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await LoginApi(email, password);
      if (response.status === true) {
        localStorage.setItem("UserToken", response.token);
        localStorage.setItem("userId", response.user_id);
        localStorage.setItem("Role", response.role);
        localStorage.setItem("userEmail", response.email);
        localStorage.setItem("profilePic", response.profile_pic);
        localStorage.setItem("name", response.name);
        const savedData = {
          role: response.role,
          userToken: response.token,
          name: response.name,
          profilePic: response.profile_pic,
          userEmail: response.email,
          userId: response.user_id,
        };
        setData(savedData);
        Navigate("/dashboard");
      } else {
        setError(response.error || "An error occurred. Please try again.");
        setEmailInvalid(true);
        setPasswordInvalid(true);
      }
    } catch (apiError) {
      console.error("Login API Error:", apiError.message);
      setError(apiError.message);
    }
  };

  return (
    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center loginPage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7">
            <img src={logo} alt="Logo" height="60%" width="60%" />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="login-box bg-white box-shadow border-radius-10">
              <div className="login-title">
                <h2 className="text-center text-primary">Login</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className={`input-group custom ${
                    isEmailInvalid ? "error-border" : ""
                  }`}
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="Username"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      handleInputChange();
                    }}
                    required
                  />
                  {isEmailInvalid && (
                    <div className="input-group-append">
                      <span className="input-group-text text-danger">
                        <FontAwesomeIcon icon={faExclamationCircle} />
                      </span>
                    </div>
                  )}
                </div>
                {error && (
                  <div className="error-message text-danger mb-3">{error}</div>
                )}
                <div className={`input-group custom ${isPasswordInvalid}`}>
                  <input
                    id="password"
                    type="password"
                    placeholder="**********"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleInputChange();
                    }}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-group mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block"
                        // disabled={isButtonDisabled}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
