import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Dashboard/Header";

const HealthReadingShow = () => {
  const [showData, setshowData] = useState(null);
  console.log("data", showData);
  const [loading, setLoading] = useState(true);
  const [positive, setPositive] = useState("");
  const [negative, setNegative] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("viewData"));
    console.log(data, "abcdata");
    if (data) {
      setshowData(data);
      setLoading(false);
    } else {
      setLoading(false);
    }

    if (data) {
      if (data.description.includes("||")) {
        const [positivePart, negativePart] = data.description.split("||");
        setPositive(positivePart.trim());
        setNegative(negativePart.trim());
      } else {
        setPositive(data.description);
        setNegative("");
      }
    }
  }, []);
  return (
    <>
      <Header />
      <div className="main-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="pd-20 card-box mb-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Health Reading</h2>
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
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HealthReadingShow;
