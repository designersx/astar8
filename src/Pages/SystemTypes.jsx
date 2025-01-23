import React, { useState } from "react";
import Header from "../component/Dashboard/Header";
import "../styles/Style.css";

export default function SystemTypes() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("pythagorean");

  return (
    <>
      <Header />
      <div className="main-container">
        {/* Heading */}
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2 className="system-h2">System Types</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="pd-20 card-box mb-30">
          <ul className="nav nav-tabs tabs" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "pythagorean" ? "active" : ""
                }`}
                onClick={() => setActiveTab("pythagorean")}
                role="tab"
                aria-selected={activeTab === "pythagorean"}
              >
                Pythagorean System
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "chaldean" ? "active" : ""
                }`}
                onClick={() => setActiveTab("chaldean")}
                role="tab"
                aria-selected={activeTab === "chaldean"}
              >
                Chaldean System
              </a>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content tabs card-block">
            {/* Pythagorean System Tab */}
            {activeTab === "pythagorean" && (
              <div className="tab-pane active" id="pythagorean" role="tabpanel">
                <div className="card-block table-border-style">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                      </tr>
                      <tr>
                        <td>
                          <ul className="custom-ullist">
                            <li>A</li>
                            <li>J</li>
                            <li>S</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>B</li>
                            <li>K</li>
                            <li>T</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>C</li>
                            <li>L</li>
                            <li>U</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>D</li>
                            <li>M</li>
                            <li>V</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>E</li>
                            <li>N</li>
                            <li>W</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>F</li>
                            <li>O</li>
                            <li>X</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>G</li>
                            <li>P</li>
                            <li>Y</li>
                          </ul>
                        </td>
                        <td>
                          <ul className="custom-ullist">
                            <li>H</li>
                            <li>Q</li>
                            <li>Z</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>I</li>
                            <li>R</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Chaldean System Tab */}
            {activeTab === "chaldean" && (
              <div className="tab-pane active" id="chaldean" role="tabpanel">
                <div className="card-block table-border-style">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                      </tr>
                      <tr>
                        <td>
                          <ul className="custom-ullist">
                            <li>A</li>
                            <li>I</li>
                            <li>J</li>
                            <li>Q</li>
                            <li>Y</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>B</li>
                            <li>K</li>
                            <li>R</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>C</li>
                            <li>G</li>
                            <li>L</li>
                            <li>S</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>D</li>
                            <li>M</li>
                            <li>T</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>E</li>
                            <li>H</li>
                            <li>N</li>
                            <li>X</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>U</li>
                            <li>V</li>
                            <li>W</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>O</li>
                            <li>Z</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <ul className="custom-ullist">
                            <li>F</li>
                            <li>P</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
