import React, { useState, useEffect } from "react";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
export default function DestinyShow() {
  const [showData, setshowData] = useState(null);
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
      {/* <Header /> */}
      <div className="main-container">
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
                    <strong>Description:</strong>
                    <br />
                    <strong>Learn To Be:</strong>{" "}
                    <span style={{marginBottom:"10px"}}>{positive}</span>
                    <br />
                    <strong>Learn Not To Be:</strong>{" "}
                    <span style={{marginBottom:"10px"}}>{negative}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
