import React, { useEffect, useState } from "react";
import Header from "../component/Dashboard/Header";
import "../styles/Style.css";
export default function Roles() {


  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2 style={{ fontWeight: "700" }}>Role Management</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right"></div>
            </div>
          </div>
        </div>
        <div class="pd-20 card-box mb-30">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th>No</th>
                <th>Name</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Super Admin</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sub admin</td>
              </tr>
              <tr>
                <td>4</td>
                <td>User</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
