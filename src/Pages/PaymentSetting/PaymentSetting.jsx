import React, { useState } from "react";
import Header from "../../component/Dashboard/Header";

const PaymentSetting = () => {
  // State to manage the active button for sandbox and production modes
  const [sandboxMode, setSandboxMode] = useState("live"); // "test" or "live"
  const [productionMode, setProductionMode] = useState("live"); // "test" or "live"

  // Handlers to toggle between "Test" and "Live" modes
  const handleSandboxModeChange = (mode) => {
    setSandboxMode(mode);
    // Add API call or form submission logic here for Sandbox
    console.log(`Sandbox Mode changed to: ${mode}`);
  };

  const handleProductionModeChange = (mode) => {
    setProductionMode(mode);
    // Add API call or form submission logic here for Production
    console.log(`Production Mode changed to: ${mode}`);
  };

  // Dynamic styles for the active/inactive buttons
  const getButtonStyle = (isActive) => ({
    backgroundColor: isActive ? "red" : "white", // Red for active, white for inactive
    color: isActive ? "white" : "black", // White text for active, black for inactive
    border: "1px solid #ccc",
    padding: "10px 20px",
    cursor: "pointer",
    marginRight: "10px",
    borderRadius: "5px",
  });

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2 style={{ fontWeight: "600" }}>Payment Setting</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className="row">
            {/* Sandbox Setting */}
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>
                  Sandbox setting:{" "}
                  {sandboxMode === "live"
                    ? "Live Mode is enabled"
                    : "Test Mode is enabled"}
                </strong>
              </div>
              <div className="form-group">
                <button
                  onClick={() => handleSandboxModeChange("test")}
                  style={getButtonStyle(sandboxMode === "test")}
                >
                  Test
                </button>
                <button
                  onClick={() => handleSandboxModeChange("live")}
                  style={getButtonStyle(sandboxMode === "live")}
                >
                  Live
                </button>
              </div>
            </div>

            {/* Production Setting */}
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>
                  Production setting:{" "}
                  {productionMode === "live"
                    ? "Live Mode is enabled"
                    : "Test Mode is enabled"}
                </strong>
              </div>
              <div className="form-group">
                <button
                  onClick={() => handleProductionModeChange("test")}
                  style={getButtonStyle(productionMode === "test")}
                >
                  Test
                </button>
                <button
                  onClick={() => handleProductionModeChange("live")}
                  style={getButtonStyle(productionMode === "live")}
                >
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSetting;
