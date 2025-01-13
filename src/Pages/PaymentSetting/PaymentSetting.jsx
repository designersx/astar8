import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import Header from "../../component/Dashboard/Header";
import { paymentSettingChange } from "../../lib/Store"; // Assuming this is your API function

const PaymentSetting = () => {
  const [sandboxMode, setSandboxMode] = useState("live"); // Default to "live"
  const [productionMode, setProductionMode] = useState("live"); // Default to "live"
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handler for changing Sandbox Mode
  const handleSandboxModeChange = async (mode) => {
    const modes_type = mode === "test" ? 1 : 2; // Set 1 for test, 2 for live

    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to change the Sandbox Mode to ${mode}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    });

    if (!confirmation.isConfirmed) return;

    setIsLoading(true);

    Swal.fire({
      title: "Processing...",
      text: "Please wait while we update the mode.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await paymentSettingChange({
        payment_setting: 1, // 1 = Sandbox
        modes_type,
      });

      if (response.status === 1) {
        setSandboxMode(mode);

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `Sandbox Mode changed to ${mode}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to change Sandbox Mode. Please try again.");
      }
    } catch (error) {
      console.error("Error updating sandbox mode:", error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to change Sandbox Mode.",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for changing Production Mode
  const handleProductionModeChange = async (mode) => {
    const modes_type = mode === "test" ? 1 : 2; // Set 1 for test, 2 for live

    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to change the Production Mode to ${mode}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    });

    if (!confirmation.isConfirmed) return;

    setIsLoading(true);

    Swal.fire({
      title: "Processing...",
      text: "Please wait while we update the mode.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await paymentSettingChange({
        payment_setting: 2, // 2 = Production
        modes_type,
      });

      if (response.status === 1) {
        setProductionMode(mode);

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `Production Mode changed to ${mode}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Failed to change Production Mode. Please try again.");
      }
    } catch (error) {
      console.error("Error updating production mode:", error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to change Production Mode.",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Dynamic styles for buttons
  const getButtonStyle = (isActive) => ({
    backgroundColor: isActive ? "red" : "white", // Red for active, white for inactive
    color: isActive ? "white" : "black", // White text for active, black for inactive
    border: "1px solid #ccc",
    padding: "10px 20px",
    cursor: isLoading ? "not-allowed" : "pointer", // Disable cursor when loading
    marginRight: "10px",
    borderRadius: "5px",
    opacity: isLoading ? 0.6 : 1, // Dim buttons when loading
    pointerEvents: isLoading ? "none" : "auto", // Prevent interaction when loading
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
