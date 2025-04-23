import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import Header from "../../component/Dashboard/Header";
import { getPaymentSettingData, paymentSettingChange } from "../../lib/Store"; // Assuming this is your API function
import Loader from "../../component/Loader/Loader";
import { BeatLoader } from "react-spinners";

const PaymentSetting = () => {
  const [productionMode, setProductionMode] = useState(); // Default to "live"
  console.log("productionMode", productionMode);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [screeLoading, setscreeLoading] = useState(false);

  useEffect(() => {
    const fetchPaymentData = async () => {
      setscreeLoading(true);
      try {
        const response = await getPaymentSettingData();
        console.log("response", response);
        if (response.message === "success") {
          setProductionMode(response?.production_setting?.mode);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setscreeLoading(false);
      }
    };
    fetchPaymentData();
  }, []);

  // Handler for changing Sandbox Mode
  // const handleSandboxModeChange = async (mode) => {
  //   const modes_type = mode === "test" ? 1 : 2; // Set 1 for test, 2 for live

  //   const confirmation = await Swal.fire({
  //     title: "Are you sure?",
  //     text: `Do you want to change the Sandbox Mode to ${mode}?`,
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, change it!",
  //   });

  //   if (!confirmation.isConfirmed) return;

  //   setIsLoading(true);

  //   Swal.fire({
  //     title: "Processing...",
  //     text: "Please wait while we update the mode.",
  //     allowOutsideClick: false,
  //     allowEscapeKey: false,
  //     showConfirmButton: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     },
  //   });

  //   try {
  //     const response = await paymentSettingChange({
  //       payment_setting: 1, // 1 = Sandbox
  //       modes_type,
  //     });

  //     if (response.status === 1) {
  //       setSandboxMode(mode);

  //       Swal.fire({
  //         icon: "success",
  //         title: "Success!",
  //         text: `Sandbox Mode changed to ${mode}!`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     } else {
  //       throw new Error("Failed to change Sandbox Mode. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating sandbox mode:", error);

  //     Swal.fire({
  //       icon: "error",
  //       title: "Error!",
  //       text: "Failed to change Sandbox Mode.",
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Handler for changing Production Mode
  const handleProductionModeChange = async (mode) => {
    const modes_type = mode === "Test" ? 1 : 2; // Set 1 for test, 2 for live

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
        payment_setting: 1, // 2 = Production
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
    backgroundColor: isActive ? "red" : "white", 
    color: isActive ? "white" : "black", 
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
      {/* <Header /> */}
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
            {screeLoading ? (
              <>
                <div style={{marginLeft:"47%"}}>
                  <BeatLoader size={13} color="black" />
                  <h6 className="text-h6 mt-3">Please Wait....</h6>
                </div>
              </>
            ) : (
              <>
                {/* Production Setting */}
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>
                      Production setting:{" "}
                      {productionMode === "Live"
                        ? "Live Mode is enabled"
                        : "Test Mode is enabled"}
                    </strong>
                  </div>
                  <div className="form-group">
                    <button
                      onClick={() => handleProductionModeChange("Test")}
                      style={getButtonStyle(productionMode === "Test")}
                    >
                      Test
                    </button>
                    <button
                      onClick={() => handleProductionModeChange("Live")}
                      style={getButtonStyle(productionMode === "Live")}
                    >
                      Live
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSetting;
