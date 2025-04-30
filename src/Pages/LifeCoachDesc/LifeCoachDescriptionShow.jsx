import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
export default function LifeCoachDescriptionShow() {
  const [showData, setshowData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log("ShoWdata", showData);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("viewData"));
    console.log(data, "data of lifecoach description");
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
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h2>
                Description of {showData?.type === 1 ? "Day" : "Week"}  for Number: {showData?.number} And {" "}
                  {showData?.star_type === 1
                    ? "Green Star"
                    : showData?.star_type === 2
                    ? "Red Star"
                    : showData?.star_type === 3
                    ? "Neutral"
                    : "Unknown"}
                </h2>
              </div>
            </div>
            
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Star Type: </strong>
                {showData?.star_type === 1
                  ? "Green Star"
                  : showData?.star_type === 2
                  ? "Red Star"
                  : showData?.star_type === 3
                  ? "Neutral"
                  : "Unknown"}
              </div>
            </div>
            {showData?.type === 1 ? (
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Star Count: </strong>
                  {showData?.star_number === 1
                    ? "One Star"
                    : showData?.star_number === 2
                    ? "Two Star"
                    : showData?.star_number === 3
                    ? "Three Star"
                    : showData?.star_number === 0
                    ? "Neutral"
                    : "Unknown"}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Number: </strong> {showData?.number}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Description: </strong>
                {showData?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
