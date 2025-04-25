import React, { useState, useEffect } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Dashboard/Header";

const CompatibilityDescShow = () => {
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
                    <h2>
                      Number {showData?.number} | Mate Number{" "}
                      {showData?.mate_number}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" style={{ gap: "8px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Number:</strong> <span>{showData.number}</span>
                  </div>
                  <div className="form-group">
                    <strong>Mate Number :</strong>{" "}
                    <span>{showData.mate_number || "N/A"}</span>
                  </div>
                  <div className="form-group">
                    <strong>Regular / Spousal Description:</strong>{" "}
                    <span>{showData.regular_or_spouse_desc || "N/A"}</span>
                  </div>
                  <div className="form-group">
                    <strong>Other Person Description:</strong>{" "}
                    <span>{showData.withOtherPerson || "N/A"}</span>
                  </div>
                  
                  <div className="form-group">
                    <strong>Name Reading Description:</strong>{" "}
                    <span>{showData.forNameReading || "N/A"}</span>
                  </div>
                  <div className="form-group">
                    <strong>Car/Vehicle Description:</strong>{" "}
                    <span>{showData.forCarOrVehicle || "N/A"}</span>
                  </div>
                  <div className="form-group">
                    <strong>House/Property Description:</strong>{" "}
                    <span>{showData.forHouseOrProperty || "N/A"}</span>
                  </div>
                  <div className="form-group">
                    <strong>Business Description:</strong>{" "}
                    <span>{showData.forBusiness || "N/A"}</span>
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

export default CompatibilityDescShow;
