import React, { useEffect, useState } from "react";
import "../../styles/Style.css";
import Header from "../../component/Dashboard/Header";
import AddDailyForcast from "./AddDailyForcast";
import DailyForecartList from "./DailyForecartList";

export default function DailyForecast() {
  const [activeTab, setActiveTab] = useState("preditionList");
  const [userRole, setuserRole] = useState(localStorage.getItem("Role"));
  const [showModal, setShowModal] = useState(false);
  const [refresh1, setRefresh1] = useState(false);


  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRefresh = (isRefreshed) => {
    if (isRefreshed) {
      setRefresh1((prev) => !prev);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  

  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold mb-0">Daily Forecast</h2>
            <button className="btn btn-primary" onClick={handleModalOpen}>
              Add Forecast
            </button>
          </div>
        </div>

        <div className="pd-20 card-box mb-30" >
          {activeTab === "preditionList" && <DailyForecartList refresh1={refresh1} />}
        </div>
      </div>

      {/* Add Forecast Modal */}
      {showModal && (
        <AddDailyForcast onClose={handleModalClose} onSuccess={handleRefresh} />
      )}
    </>
  );
}
