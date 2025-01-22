import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Loader from "../../../component/Loader/Loader";

const LuckiestShow = () => {
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
      <Header />
      <div className="main-container">
        {loading ? (
          <Loader /> // Display loader if loading is true
        ) : (
          <>
            <div className="pd-20 card-box mb-30">
              <div className="row" >
                <div className="col-md-6">
                  <div className="">
                    <h2>Luckiest Parameters</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" style={{gap:"10px"}}>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Number:</strong> {showData?.number}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Lucky Colors:</strong> {showData?.lucky_colours}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Lucky Gems:</strong> {showData?.lucky_gems}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Lucky Metals:</strong> {showData?.lucky_metals}
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

export default LuckiestShow;
