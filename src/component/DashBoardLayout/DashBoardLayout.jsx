import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header"

export default function DashBoardLayout() {
  return (
    <div className="dashboard-layout" style={{ display: "flex", height: "100vh" }}>
      <Header />                      
      <div
        className="page-content"
        style={{ flex: 1, overflowY: "auto" }}
      >
        <Outlet />                        {/* your “inner” pages go here */}
      </div>
    </div>
  );
}
