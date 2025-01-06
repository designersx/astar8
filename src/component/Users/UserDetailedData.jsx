import React, { useEffect, useState } from "react";
import Header from "../Dashboard/Header";
import { useLocation } from "react-router-dom";
import { userDetailedData } from "../../lib/Store";
import Loader from "../Loader/Loader";
export default function UserDetailedData() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [formattedDate, setFormattedDate] = useState(null);
  console.log(formattedDate, "formatted date");
  const id = location.state.id || {};
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const fetchUserDetailed = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("UserToken");
      const response = await userDetailedData(id, token);
      console.log(response, "sjaidjeiofjhoushnaudnhsajcnjnjuSNAUSnahs");
      if (response?.userdetails?.created_at?._seconds) {
        const formatted = formatTimestamp(
          response.userdetails.created_at._seconds
        );
        setFormattedDate(formatted);
      }
      setUserDetails(response);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) fetchUserDetailed();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!userDetails) {
    return <p>No user details available.</p>;
  }

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="pd-20 card-box mb-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Name: {userDetails.userdetails.name}</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    {/* <a class="btn btn-primary" href="https://be.astar8.com/users"> Back </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                <div className="pd-20 card-box height-100-p">
                  <div className="profile-photo profile_photo">
                    <img
                      src={
                        userDetails.userdetails.profile_pic
                          ? userDetails.userdetails.profile_pic
                          : "https://be.astar8.com/img/default-profile-img.png"
                      }
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <h5 className="text-center h5 mb-0">
                    {userDetails.userdetails.name}
                  </h5>
                  <p className="text-center text-muted font-14">
                    DOB: {userDetails.userdetails.dob}
                  </p>
                  <div className="profile-info">
                    <h5 className="mb-20 h5 text-blue">Personal Information</h5>
                    <ul>
                      <li>
                        <span>Gender:</span>
                        {userDetails.userdetails.gender}
                      </li>
                      <li>
                        <span>Email Address:</span>
                        {userDetails.userdetails.email}
                      </li>
                      <li>
                        <span>Relationship:</span>
                        {userDetails.userdetails.relationship}
                      </li>
                      <li>
                        <span>Occupation:</span>
                        {userDetails.userdetails.occupation}
                      </li>
                      <li>
                        <span>Joining Date:</span>
                        {formattedDate}
                      </li>
                      <li>
                        <span>Subscription Status</span>
                        {userDetails.userdetails.subscription_status}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                <div className="card-box height-100-p overflow-hidden">
                  <div className="profile-tab height-100-p">
                    <div className="tab height-100-p">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="timeline"
                          role="tabpanel"
                        >
                          <div className="pd-20">
                            <div className="profile-timeline">
                              <h5 className="mb-20 h5 text-blue">
                                Other Information
                              </h5>
                              <div className="profile-timeline-list">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                      <strong>Name Reading:</strong>
                                      <p>
                                        <b>Positive:</b>{" "}
                                        {userDetails.otherdetails.positive}
                                      </p>
                                      <p>
                                        <b>Negative:</b>{" "}
                                        {userDetails.otherdetails.negative}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                      <strong>Destiny Number:</strong>
                                      {userDetails.otherdetails.destiny_no}
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                      <strong>Destiny Description:</strong>
                                      <p>
                                        <b>Learn To Be:</b>{" "}
                                        {userDetails.otherdetails.Learn_to_be}
                                      </p>
                                      <p>
                                        <b>Learn Not To Be:</b>{" "}
                                        {
                                          userDetails.otherdetails
                                            .Learn_not_to_be
                                        }
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Fav Numbers:</strong>
                                      {userDetails.otherdetails.fav_number}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Unfav Numbers:</strong>
                                      {userDetails.otherdetails.unfav_number}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Fav Months:</strong>
                                      {userDetails.otherdetails.fav_months}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Unfav Months:</strong>
                                      {userDetails.otherdetails.unfav_months}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Fav Days:</strong>
                                      {userDetails.otherdetails.fav_days}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Unfav Days:</strong>
                                      {userDetails.otherdetails.unfav_days}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Lucky Colors: </strong>
                                      {userDetails.otherdetails.lucky_colors}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Lucky Metals: </strong>
                                      {userDetails.otherdetails.lucky_metals}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Zodiac sign:</strong>
                                      {userDetails.otherdetails.zodiac_sign}
                                    </div>
                                  </div>
                                  <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div className="form-group">
                                      <strong>Planet Name:</strong>
                                      {userDetails.otherdetails.Planet_name}
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                      <strong>Planet Description:</strong>
                                      {
                                        userDetails.otherdetails
                                          .Planet_description
                                      }
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                      <strong>Parenting:</strong>
                                      {
                                        userDetails.otherdetails
                                          .basic_parent_reading
                                      }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
