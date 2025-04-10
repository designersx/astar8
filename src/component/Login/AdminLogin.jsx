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
import ForgotPasswordModal from "./ForgetPasswordModal";

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
  const [showModal, setShowModal] = useState(false); // Modal state

  // State for tracking failed attempts and lockout
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);

  useEffect(() => {
    // Retrieve failed attempts and lockout time from localStorage
    const savedFailedAttempts = parseInt(
      localStorage.getItem("failedAttempts") || "0"
    );
    const savedLockoutTime = parseInt(
      localStorage.getItem("lockoutTime") || "0"
    );

    // Reset failed attempts and lockout time after timer has expired
    if (savedLockoutTime === 0) {
      localStorage.setItem("failedAttempts", "0");
      setFailedAttempts(0);
    }

    // If the user is locked out, use the lockout time stored in localStorage
    if (savedFailedAttempts >= 5) {
      setFailedAttempts(savedFailedAttempts);
      setIsLockedOut(true);
      setLockoutTime(savedLockoutTime);
    }

    // Load saved email and password if rememberMe is true
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedRememberMe === "true" && savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
      setButtonDisabled(false);
    }
  }, []);

  useEffect(() => {
    // When the user is locked out, start the countdown timer
    if (isLockedOut && lockoutTime > 0) {
      const timer = setInterval(() => {
        if (lockoutTime === 1) {
          // Reset lockout after timer ends
          setIsLockedOut(false);
          setLockoutTime(0);
          localStorage.removeItem("lockoutTime");

          // Reset failed attempts to 0
          setFailedAttempts(0);
          localStorage.setItem("failedAttempts", "0"); // Update localStorage with 0 failed attempts
        } else {
          setLockoutTime((prevTime) => {
            const newTime = prevTime - 1;
            // Update lockout time in localStorage
            localStorage.setItem("lockoutTime", newTime.toString());
            return newTime;
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isLockedOut, lockoutTime]);

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

    // Check if the user is locked out
    if (isLockedOut) {
      setError(
        `Too many failed attempts. Please wait ${lockoutTime} seconds before trying again.`
      );
      setLoading(false);
      return;
    }

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
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberedPassword", password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
          localStorage.removeItem("rememberMe");
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

        // Reset failed attempts and lockout data on successful login
        localStorage.removeItem("failedAttempts");
        localStorage.removeItem("lockoutTime");

        Navigate("/dashboard");
      } else if (response.status === 1) {
        setErrorEmail(response.error || "Invalid email address.");
        setEmailInvalid(true);

        // Only increment failed attempts if the user is not locked out
        if (!isLockedOut) {
          setFailedAttempts((prevAttempts) => {
            const newFailedAttempts = prevAttempts + 1;
            localStorage.setItem("failedAttempts", newFailedAttempts);
            return newFailedAttempts;
          });
        }
      } else if (response.status === 2) {
        setErrorPassword(response.error || "Incorrect password.");
        setPasswordInvalid(true);

        // Only increment failed attempts if the user is not locked out
        if (!isLockedOut) {
          setFailedAttempts((prevAttempts) => {
            const newFailedAttempts = prevAttempts + 1;
            localStorage.setItem("failedAttempts", newFailedAttempts);
            return newFailedAttempts;
          });
        }
      } else {
        setError(response.error || "An error occurred. Please try again.");
      }
    } catch (apiError) {
      console.error("Login API Error:", apiError.message);
      setError("A server error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }

    // Lockout logic if more than 5 failed attempts
    if (failedAttempts >= 4) {
      const lockoutTime = 50; // Lockout for 10 seconds (adjust to 2 minutes in production)
      setIsLockedOut(true);
      setLockoutTime(lockoutTime);
      localStorage.setItem("lockoutTime", lockoutTime);
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
                <h2 className="text-center text-primary">Welcome Back!</h2>
                <p className="text-center">
                  Please log in to continue your session
                </p>
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
                      setEmail(e.target.value.toLowerCase()); // force lowercase
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
                  style={{ position: "relative", marginBottom: "10px" }}
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
                        zIndex: "10",
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

                <div className="d-flex align-items-center mb-2 justify-content-between">
                  <div className="form-check mb-0 me-3">
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
                  {/* <button
                    type="button"
                    className="btn btn-link p-0 forgot-password-btn"
                    onClick={() => setShowModal(true)}
                  >
                    Forgot Password?
                  </button> */}
                </div>

                {isLockedOut && (
                  <div className="lockout-message text-danger mb-3">
                    Too many failed attempts. Please wait {lockoutTime} seconds
                    before trying again.
                  </div>
                )}

                <div className="row">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      disabled={isLockedOut || loading} // Disable the button if locked out or loading
                      style={{
                        cursor:
                          isLockedOut || loading ? "not-allowed" : "pointer",
                        opacity: isLockedOut || loading ? 0.6 : 1,
                      }}
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
      {/* ForgotPasswordModal with state to show/hide */}
      <ForgotPasswordModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
