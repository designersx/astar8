import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Dashboard/Header";

const PersonalYearShow = () => {
  const [showData, setshowData] = useState(null);
  console.log("asdsa",showData)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("viewData"));
    if (data) {
      setshowData(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="main-container pb-2">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="pd-20 card-box mb-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Number: {showData?.number}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" style={{ gap: "10px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Number:</strong> {showData?.number}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Description:</strong>{" "}
                    <span>{showData.description}</span>
                  </div>
                  <div className="form-group">
                    <strong>Love/Realationship:</strong>{" "}
                    <span>{showData.love_relationship}</span>
                  </div>
                  <div className="form-group">
                    <strong>Health:</strong>{" "}
                    <span>{showData.health}</span>
                  </div>
                  <div className="form-group">
                    <strong>Career:</strong>{" "}
                    <span>{showData.career}</span>
                  </div>
                  <div className="form-group">
                    <strong>Travel:</strong>{" "}
                    <span>{showData.travel}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PersonalYearShow;
