import React, { useContext, useState, useEffect } from "react";
import "../../styles/Style.css";
import logo from "../../Assests/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
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
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPasswordInvalid, setPasswordInvalid] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("rememberedEmail");
    const savedPassword = sessionStorage.getItem("rememberedPassword");
    const savedRememberMe = sessionStorage.getItem("rememberMe");

    if (savedRememberMe === "true" && savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
      setButtonDisabled(false);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = () => {
    setEmailInvalid(false);
    setPasswordInvalid(false);
    setError("");
    setErrorEmail("");
    setErrorPassword("");

    if (validateEmail(email) && password.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEmailInvalid(false);
    setPasswordInvalid(false);

    if (!validateEmail(email)) {
      setErrorEmail("Please include an '@' in the email address.");
      setEmailInvalid(true);
      setLoading(false);
      return;
    }

    if (password.trim() === "") {
      setErrorPassword("Password cannot be empty.");
      setPasswordInvalid(true);
      setLoading(false);
      return;
    }

    try {
      const response = await LoginApi(email, password);

      if (response.status === true) {
        localStorage.setItem("UserToken", response.token);
        localStorage.setItem("userId", response.user_id);
        localStorage.setItem("Role", response.role);
        localStorage.setItem("userEmail", response.email);
        localStorage.setItem("profilePic", response.profile_pic);
        localStorage.setItem("name", response.name);

        if (rememberMe) {
          sessionStorage.setItem("rememberedEmail", email);
          sessionStorage.setItem("rememberedPassword", password);
          sessionStorage.setItem("rememberMe", "true");
        } else {
          sessionStorage.removeItem("rememberedEmail");
          sessionStorage.removeItem("rememberedPassword");
          sessionStorage.removeItem("rememberMe");
        }

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
      } else if (response.status === 1) {
        setErrorEmail(response.error || "Invalid email address.");
        setEmailInvalid(true);
      } else if (response.status === 2) {
        setErrorPassword(response.error || "Incorrect password.");
        setPasswordInvalid(true);
      } else {
        setError(response.error || "An error occurred. Please try again.");
      }
    } catch (apiError) {
      console.error("Login API Error:", apiError.message);
      setError("A server error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center loginPage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6 imgCon">
            <img src={logo} alt="Logo" height="70%" width="70%" />
          </div>
          <div
            className="col-md-6 col-lg-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
                {errorEmail && (
                  <div className="error-message text-danger mb-3">
                    {errorEmail}
                  </div>
                )}

                <div
                  className={`input-group custom ${
                    isPasswordInvalid ? "error-border" : ""
                  }`}
                  style={{ position: "relative",marginBottom:"10px" }}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleInputChange();
                    }}
                    required
                    style={{ paddingRight: "35px" }}
                  />
                  {password && (
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </span>
                  )}
                </div>

                {errorPassword && (
                  <div className="error-message text-danger mb-1 mt-2">
                    {errorPassword}
                  </div>
                )}

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      {loading ? "Loading..." : "Login"}
                    </button>
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
