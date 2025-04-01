import { React, useEffect, useState } from "react";
import Header from "../component/Dashboard/Header";
import { dashboardApi } from "../lib/Store";
import { useNavigate } from "react-router-dom";
import DashBoardLoader from "./../component/Loader/DashBoardLoader";
import DashboardChart from "../component/DashboardChart/DashboardChart";
export default function DashBoard() {
  const navigate = useNavigate();
  const [activeCount, setactiveCount] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [like, setlike] = useState([]);
  const [dislike, setdislike] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, null, window.location.href);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await dashboardApi();
      setactiveCount(response.activeCount);
      setTotalCount(response.totalCount);
      localStorage.setItem("totalUsers", response.totalCount);
      setlike(response.likesCount);
      setdislike(response.dislikesCount);
    } catch (err) {
      console.log(err, "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const navigateUsers = () => {
    navigate("/users");
  };

  const handleActiveUsers = () => {
    navigate("/users", { state: { activeTab: "active" } });
  };

  return (
    <>
      <Header />
      {loading ? (
        <>
          <div className="main-container">
            <DashBoardLoader />
          </div>
        </>
      ) : (
        <>
          <div className="main-container pb-4">
            <div className="">
              <div className="page-header">
                <div className="row ">
                  <div className="col-md-6 col-sm-12">
                    <div className="title">
                      <h3 style={{margin:"0px",fontWeight:"600"}}>Dashboard</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix progress-box ">
                <div
                  className="col-lg-3 col-md-6 col-sm-12 "
                  onClick={navigateUsers}
                  style={{ cursor: "pointer" }}
                  title="Total Users in Database"
                >
                  <div className="card-box pd-30 height-100-p">
                    <div className="progress-box text-center">
                      <h5 className="text-blue padding-top-10 h5">
                        {" "}
                        Total User
                      </h5>
                      <span className="d-block">
                        {totalCount} Users{" "}
                        <i className="fa fa-line-chart text-blue" />
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-12"
                  onClick={navigateUsers}
                  style={{ cursor: "pointer" }}
                  title="Total Active Users in Database"
                >
                  <div className="card-box pd-30 height-100-p">
                    <div className="progress-box text-center">
                      <h5 className="text-light-green padding-top-10 h5">
                        {" "}
                        Active Users{" "}
                      </h5>
                      <span className="d-block">
                        {" "}
                        {activeCount} Users{" "}
                        <i className="fa text-light-green fa-line-chart" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 " title="Today's Like Predictions">
                  <div className="card-box pd-30 height-100-p">
                    <div className="progress-box text-center">
                      <h5 className="text-light-orange padding-top-10 h5">
                        Daily Prediction
                      </h5>
                      <span className="d-block">
                        {like} Like{" "}
                        <i className="fa text-light-orange fa-line-chart" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 " title="Today's Dislike Predictions">
                  <div className="card-box pd-30 height-100-p">
                    <div className="progress-box text-center">
                      <h5 className="text-light-orange padding-top-10 h5">
                        Daily Prediction
                      </h5>
                      <span className="d-block">
                        {dislike} Dislike{" "}
                        <i className="fa text-light-orange fa-line-chart" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <DashboardChart/> */}
              <DashboardChart />
              <div className="footer-wrap pd-20 card-box mt-2">
                ASTAR8 - Designed By{" "}
                <a href="https://www.designersx.us/" target="_blank">
                  DesignersX
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
