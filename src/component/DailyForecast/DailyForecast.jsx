import React, { useState } from "react";
import "../../styles/Style.css";
import Header from "../../component/Dashboard/Header";
import AddDailyForcast from "./AddDailyForcast";
import DailyForecartList from "./DailyForecartList";

export default function DailyForecast() {
  const [activeTab, setActiveTab] = useState("preditionList");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h2 style={{ fontWeight: "700" }}>Daily Forecast</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <ul className="nav nav-tabs tabs" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link text-blue ${
                  activeTab === "preditionList" ? "active" : ""
                }`}
                data-toggle="tab"
                role="tab"
                onClick={() => handleTabClick("preditionList")}
              >
                Daily Forecast List
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text-blue ${
                  activeTab === "predictionform" ? "active" : ""
                }`}
                data-toggle="tab"
                role="tab"
                onClick={() => handleTabClick("predictionform")}
              >
                Add Daily Forecast
              </a>
            </li>
          </ul>
          {activeTab === "preditionList" && <DailyForecartList />}
          {activeTab === "predictionform" && <AddDailyForcast />}
        </div>
      </div>
    </>
  );
}
