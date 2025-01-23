import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Loader from "../../../component/Loader/Loader";

const PrimaryNumberShow = () => {
  const [showData, setshowData] = useState(null);
  console.log("dataa",showData)
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
      <div className="main-container pb-3">
        {loading ? (
          <Loader /> 
        ) : (
          <>
            <div className="pd-20 card-box mb-30">
              <div className="row" >
                <div className="col-md-6">
                  <div className="">
                    <h2>Primary Numbers</h2>
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
                    <strong>Description:</strong> {showData?.description}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Positive :</strong> {showData?.positive}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Negative :</strong> {showData?.negative}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Occupation :</strong> {showData?.occupations}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Health :</strong> {showData?.health}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Partners :</strong> {showData?.partners}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Time of The Year:</strong> {showData?.times_of_the_year}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Countries :</strong> {showData?.countries}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Tibbits  :</strong> {showData?.tibbits}
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

export default PrimaryNumberShow;
