import React, { useState } from "react";
import "./ForgetPasswordModal.css"; // Import the CSS file
import { forgotPasswordApi, resetPasswordLoginPageApi } from "../../lib/Store";
import { IoIosCloseCircle, IoIosEye, IoIosEyeOff } from "react-icons/io";  // Import eye icons
import OtpInput from "react-otp-input"; // Import react-otp-input

const ForgotPasswordModal = ({ show, onClose }) => {
  // State variables
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // OTP as a string
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [apiOtp, setApiOtp] = useState(""); // Store OTP received from API

  const [showNewPassword, setShowNewPassword] = useState(false); // To toggle visibility for newPassword
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To toggle visibility for confirmPassword

  // Handle sending OTP to the email
  const handleSendOtp = async () => {
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    setError(""); // Clear any previous errors

    const lowerCaseEmail = email.toLowerCase();

    try {
      const response = await forgotPasswordApi(lowerCaseEmail); // Assuming this is your API call
      if (response.status === true) {
        setApiOtp(response.otp); // Store OTP from the API response
        setOtpSent(true);
        setStep(2);
        setIsLoading(false);
        setError("OTP sent successfully. Please check your email.");
      } else {
        throw new Error("OTP not received from API.");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Failed to send OTP. Please try again.");
      console.error(err); // Log the error to help with debugging
    }
  };

  // Handle verifying the OTP entered by the user
  const handleVerifyOtp = () => {
    if (otp === apiOtp) {
      setError("OTP Verified Successfully");
      setTimeout(() => {
        setError("");
        setStep(3);
      }, 1000);
    } else {
      setError("Invalid OTP, please try again.");
    }
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    // Validate passwords
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Regex for password validation (8-16 characters, at least 1 uppercase, 1 number, 1 special character)
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must be 8-16 characters long, contain at least 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    setIsLoading(true);
    setError(""); // Clear any previous errors

    const data = {
      email: email.toLowerCase(),
      otp: apiOtp,
      newPassword: newPassword,
    };

    console.log("dataaa", data);

    try {
      const response = await resetPasswordLoginPageApi(data);
      console.log("resss", response);

      if (response.status === true) {
        setIsLoading(false);
        setError("Password reset successfully!");
        setTimeout(() => {
          setError("");
          setEmail("");
          setNewPassword("");
          setConfirmPassword("");
          setOtp("");
          setStep(1);
          setApiOtp("");
          onClose(); // Close the modal after successful reset
        }, 2000);
      } else if (response.status === 400) {
        setIsLoading(false);
        setError(response.response.data.message);
      } else {
        throw new Error("Password reset failed.");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Password reset failed. Please try again.");
      console.error(err); // Log the error to help with debugging
    }
  };

  const handleClose = () => {
    setError("");
    setEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setOtp("");
    setStep(1);
    setApiOtp("");
    onClose();
  };

  const handleChange = () => {
    setError("");
  };

  // Return null if modal is not shown
  if (!show) return null;

  return (
    <div className="modal show" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-backdrop"></div>

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {step === 1
                ? "Forgot Password"
                : step === 2
                ? "Verify OTP"
                : "Reset Password"}
            </h5>
            <div style={{ cursor: "pointer" }} onClick={handleClose}>
              <IoIosCloseCircle size={20} />
            </div>
          </div>

          <div className="modal-body" style={{ marginBottom: "5px" }}>
            {step === 1 && (
              <>
                <p>To reset your password, please enter your email address.</p>
                <input
                  type="email"
                  className="form-control mb-1"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleChange();
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer", // Disable cursor if button is disabled
                  }}
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </button>
                {error && <div className="text-danger mt-2">{error}</div>}
              </>
            )}

            {step === 2 && otpSent && (
              <>
                <p>
                  We have sent an OTP to your email:-<b>{email}</b>. Please
                  enter it below.
                </p>
                <div className="d-flex justify-content-center">
                  <OtpInput
                    value={otp}
                    onChange={(newOtp) => {
                      setOtp(newOtp);
                      setError("");
                    }} // Update OTP value
                    numInputs={6} // Number of OTP input fields
                    separator={<span>-</span>} // Separator between inputs
                    shouldAutoFocus={true} // Auto-focus on the first input field
                    renderInput={(props) => (
                      <input
                        {...props}
                        type="text" // Set type to "text" to avoid number arrows
                        inputMode="numeric" // Ensures numeric keyboard appears on mobile devices
                        pattern="[0-9]*" // Ensures only numeric values are allowed
                        onInput={(e) => {
                          // Remove any non-numeric characters
                          e.target.value = e.target.value.replace(/\D/g, "");
                        }}
                      />
                    )} // Render custom input element
                    inputStyle={{
                      width: "40px",
                      height: "40px",
                      margin: "0 5px",
                      border: "2px solid #ccc",
                      textAlign: "center",
                      fontSize: "20px",
                      borderRadius: "5px",
                      outline: "none",
                      marginBottom: "5px",
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={handleVerifyOtp}
                  disabled={otp.length !== 6 || isLoading}
                  style={{
                    cursor:
                      otp.length === 6 && !isLoading
                        ? "pointer"
                        : "not-allowed", // Change cursor based on the button state
                  }} // Disable if OTP length is not 6 or if isLoading is true
                >
                  {isLoading ? "Verifying OTP..." : "Verify OTP"}
                </button>
                {error && <div className="text-danger mt-2">{error}</div>}
              </>
            )}

            {step === 3 && (
              <>
              <p>Enter your new password and confirm it below.</p>
              <div style={{ position: "relative" }}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </div>
              <div style={{ position: "relative", marginTop: "10px" }}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handlePasswordReset}
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </button>
              {error && <div className="text-danger mt-2">{error}</div>}
            </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
