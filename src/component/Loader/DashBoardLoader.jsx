import React from "react";
import "./DashboardLoader.css";
import { MoonLoader } from "react-spinners";

export default function DashBoardLoader() {
  return (
    <>
      <div className="">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "70vh" }}
        >
          <div className="">
            <MoonLoader size={50} />
          </div>
          <h6 className="text-h6 mt-3">
            Loading Details, please hold on...
          </h6>
        </div>
      </div>
    </>
  );
}
