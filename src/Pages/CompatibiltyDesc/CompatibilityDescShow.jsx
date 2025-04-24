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
                    <h2>Compatibility Description</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" style={{ gap: "8px" }}>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Type:</strong> {{
                          1: "Car/Vehicle",
                          2: "Business",
                          3: "Property",
                          4: "Other Person",
                          5: "Spouse/Partner",
                          6: "Name Reading",
                        }[showData?.type] || "Unknown"}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Number:</strong>{" "}
                    <span>{showData.number}</span>
                  </div>
                  <div className="form-group">
                    <strong>Description :</strong>{" "}
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

export default CompatibilityDescShow;
