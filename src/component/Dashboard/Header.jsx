import React, { useContext, useState } from "react";
import "../../styles/Style.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  faFile,
  faHouse,
  faChevronDown,
  faChevronUp,
  faPencilAlt,
  faDesktop,
  faList,
  faUser,
  faBook,
  faBox,
  faComment,
  faTimes,
  faClock,
  faSitemap,
  faVideo,
  faWallet,
  faStethoscope,
  faFileAlt,
  faGlobe,
  faChartLine,
  faRecycle,
  faHeart,
  faHandshake,
  faMoneyBill,
  faChartBar,
  faCog,
  faDollarSign,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../ContextApi/userContext";
export default function Dashboard() {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const Name = localStorage.getItem("name");
  const img = localStorage.getItem("profilePic");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [userRole, setUserRole] = useState(localStorage.getItem("Role") || "");

  const toggleDropdowns = () => {
    console.log("Toggling dropdown", isOpen);
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onHandleLogout = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("UserToken");
    localStorage.removeItem("name");
    localStorage.removeItem("profilePic");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");

    navigate("/");
  };
  const onSideClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-left" onClick={toggleSidebar}>
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="header-right">
          <div className="user-notification">
            <div className="dropdown">
              <div className="dropdown-menu dropdown-menu-right">
                <div className="notification-list mx-h-350 customscroll mCustomScrollbar _mCS_1 mCS_no_scrollbar">
                  <div
                    id="mCSB_1"
                    className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
                    style={{ maxHeight: 0 }}
                    tabIndex={0}
                  >
                    <div
                      id="mCSB_1_container"
                      className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                      style={{ position: "relative", top: 0, left: 0 }}
                      dir="ltr"
                    >
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="https://be.astar8.com/img/img.jpg"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            <h3>John Doe</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed...
                            </p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://be.astar8.com/img/photo1.jpg"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            <h3>Lea R. Frith</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed...
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="mCSB_1_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
                      style={{ display: "none" }}
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_1_dragger_vertical"
                          className="mCSB_dragger"
                          style={{
                            position: "absolute",
                            minHeight: 30,
                            top: 0,
                          }}
                        >
                          <div
                            className="mCSB_dragger_bar"
                            style={{ lineHeight: 30 }}
                          />
                        </div>
                        <div className="mCSB_draggerRail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-info-dropdown">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                <span className="user-icon">
                  <img
                    style={{ height: "44px" }}
                    src={
                      img
                        ? img
                        : "https://be.astar8.com/img/default-profile-img.png"
                    }
                    alt=""
                  />
                </span>
                <span className="user-name">
                  {Name.split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}
                </span>
                <i
                  className={`fa ${
                    isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"
                  } ml-2`}
                ></i>
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right dropdown-menu-icon-list ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <Link className="dropdown-item" to="/profile">
                  <i className="fa fa-user-circle mr-2" /> Profile
                </Link>
                <Link className="dropdown-item" to="/reset">
                  <i className="fa fa-cogs mr-2" /> Reset Password
                </Link>
                <a className="dropdown-item" onClick={onHandleLogout}>
                  <i className="fa fa-sign-out mr-2" />
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`left-side-bar ${isSidebarOpen ? "open" : ""}`}>
        <div className="brand-logo" style={{ marginTop: "24px" }}>
          <a >
            <img
              src="https://be.astar8.com/img/Logo.png"
              alt=""
              className="light-logo"
            />
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <FontAwesomeIcon icon={faTimes} onClick={onSideClose} />
          </div>
        </div>
        <div className="menu-block customscroll mCustomScrollbar _mCS_2">
          <div
            id="mCSB_2"
            className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
            tabIndex={0}
            style={{ maxHeight: "none" }}
          >
            <div
              id="mCSB_2_container"
              className="mCSB_container"
              style={{ position: "relative", top: 0, left: 0 }}
              dir="ltr"
            >
              <div className="sidebar-menu">
                {userRole === "1" ? (
                  <ul id="accordion-menu">
                    <Link to="/dashboard" className="dropdown-toggle no-arrow">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span className="mtext">Home</span>
                    </Link>

                    <li className="dropdown">
                      <Link
                        to="/usermessages"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="mtext">User Messages</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/DailyForecast"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="mtext">Daily Forecast</span>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        to="/general-settings"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faCog} />
                        </span>
                        <span className="mtext">General Setting</span>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link to="/payment" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span className="mtext">Payment Setting</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/users" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="mtext">Users</span>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul id="accordion-menu">
                    <Link to="/dashboard" className="dropdown-toggle no-arrow">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span className="mtext">Home</span>
                    </Link>
                    <li className="dropdown">
                      <Link to="/roles" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </span>
                        <span className="mtext">Roles</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-option="off"
                        onClick={toggleDropdowns}
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faDesktop} />
                        </span>
                        <span className="mtext">Systems</span>
                        <span className="ml-2">
                          <FontAwesomeIcon
                            icon={isOpen ? faChevronUp : faChevronDown}
                          />
                        </span>
                      </a>
                      {isOpen && (
                        <ul className="submenu" style={{ display: "block" }}>
                          <li>
                            <Link to="/systemtype">
                              <span>
                                <FontAwesomeIcon icon={faMinus} /> System Types
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/modules">
                              <span>
                                <FontAwesomeIcon icon={faMinus} /> Module Types
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="dropdown">
                      <Link to="/Master" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faList} />
                        </span>
                        <span className="mtext">Master Numbers</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/namereading"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="mtext">Name Reading</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/dobreading"
                        className="dropdown-toggle no-arrow"
                      >
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="mtext">DOB Reading</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/luckiest_parameters"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faDesktop} />
                        </span>
                        <span className="mtext">Luckiest Parameter</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/primaryno_types"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faList} />
                        </span>
                        <span className="mtext">Primary Number</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/magicbox" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faBox} />
                        </span>
                        <span className="mtext">Magic Box</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/usermessages"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="mtext">User Messages</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/DailyForecast"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="mtext">Daily Forecast</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/elementalno"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="mtext">Elemental Numbers</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/destinyno"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faSitemap} />
                        </span>
                        <span className="mtext">Destiny Numbers</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/videos" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faVideo} />
                        </span>
                        <span className="mtext">Videos</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/lifecoach_descriptions"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faFile} />
                        </span>
                        <span className="mtext">Lifecoach Descriptions</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/subscription_price"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faWallet} />
                        </span>
                        <span className="mtext">Subscription Prices</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faStethoscope} />
                        </span>
                        <span className="mtext">Health</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/healthreading">
                            Health Reading
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/healthprecaution">
                            Health Precautions
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/healthsuggestion">
                            Health Suggestion
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/healthcycle">
                            Health Cycle
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faFileAlt} />
                        </span>

                        <span className="mtext">Personal</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/personalyear">
                            Personal Year
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/personalmonth">
                            Personal Month
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/personalweek">
                            Personal Week
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/personalday">
                            Personal Day
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faGlobe} />
                        </span>
                        <span className="mtext">Universal</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/universalyear">
                            Universal Year
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/universalmonth">
                            Universal Month
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/universalday">
                            Universal Day
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faDesktop} />
                        </span>
                        <span className="mtext">Fav Unfav</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/fav_parameters">
                            Fav Parameters
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/unfav_parameters">
                            Unfav Parameters
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/zodic_signs"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        <span className="mtext">Zodiac Signs</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/planet_numbers"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faGlobe} />
                        </span>
                        <span className="mtext">Planet Number</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/life_cycles"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faRecycle} />
                        </span>
                        <span className="mtext">Life Cycle</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/life_changes"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faRecycle} />
                        </span>
                        <span className="mtext">Life Changes</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/compatible_partners"
                        className="dropdown-toggle no-arrow"
                      >
                        <span>
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="mtext">Compatible Partner</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/partner_relationships"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="mtext">Partner Relationship</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/childrens"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faUser} />
                        </span>

                        <span className="mtext">Children</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faHandshake} />
                        </span>
                        <span className="mtext">Parenting</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/basicparenting">
                            Basic Parenting
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/detailparenting">
                            Detailed Parenting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javascript:;"
                        className="dropdown-toggle"
                        data-option="off"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faMoneyBill} />
                        </span>
                        <span className="mtext">Money Matters</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://be.astar8.com/basicmoney">
                            Basic Money Matters
                          </a>
                        </li>
                        <li>
                          <a href="https://be.astar8.com/detailedmoney">
                            Detailed Money Matters
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/compatibility_percentage"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faChartBar} />
                        </span>
                        <span className="mtext">Compatibility Scale</span>
                      </Link>
                    </li>
                    {/* <li class="dropdown">
              <a href="https://be.astar8.com/commons" class="dropdown-toggle no-arrow">
                  <span class="micon dw dw-library"></span><span class="mtext">common</span>
              </a>
          </li> */}
                    <li className="dropdown">
                      <Link
                        to="/compatibility_description"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faBook} />
                        </span>
                        <span className="mtext">Compatibility Description</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/general-settings"
                        className="dropdown-toggle no-arrow"
                      >
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faCog} />
                        </span>
                        <span className="mtext">General Setting</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/payment" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span className="mtext">Payment Setting</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/users" className="dropdown-toggle no-arrow">
                        <span className="sideBarIcon">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="mtext">Users</span>
                      </Link>
                    </li>
                    {/* <li class="dropdown">
              <a href="https://be.astar8.com/versions" class="dropdown-toggle no-arrow">
                  <span class="micon dw dw-analytics-8"></span><span class="mtext">Version</span>

              </a>
          </li> */}
                    {/*  */}
                    {/* <li class="dropdown">
              <a href="https://be.astar8.com/import" class="dropdown-toggle no-arrow">
                  <span class="micon dw dw-library"></span><span class="mtext">Import</span>
              </a>
          </li> */}
                  </ul>
                )}
              </div>
            </div>
            <div
              id="mCSB_2_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
              style={{ display: "block" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_2_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: 30,
                    display: "block",
                    height: 27,
                    maxHeight: 218,
                    top: 0,
                  }}
                >
                  <div
                    className="mCSB_dragger_bar"
                    style={{ lineHeight: 30 }}
                  />
                </div>
                <div className="mCSB_draggerRail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
