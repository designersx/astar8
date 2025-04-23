import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Dashboard/Header";

const CompaitablePartnerShow = () => {
  const [showData, setshowData] = useState(null);
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
                    <h2>Compatible Partner</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" style={{ gap: "10px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Numbers:</strong> {showData?.number}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Description :</strong>{" "}
                    <span>{showData.description}</span>
                  </div>
                  <div className="form-group">
                    <strong>More Compatible Months:</strong>{" "}
                    <span>{showData.more_compatible_months}</span>
                  </div>
                  <div className="form-group">
                    <strong>More Compatible Dates:</strong>{" "}
                    <span>{showData.more_compatible_dates}</span>
                  </div>
                  <div className="form-group">
                    <strong>Less Compatible Months:</strong>{" "}
                    <span>{showData.less_compatible_months}</span>
                  </div>
                  <div className="form-group">
                    <strong>Less Compatible Dates:</strong>{" "}
                    <span>{showData.less_compatible_dates}</span>
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

export default CompaitablePartnerShow;
