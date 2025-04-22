import React, { useEffect, useState } from "react";
import Header from "../../../component/Dashboard/Header";
import Loader from "../../../component/Loader/Loader";

const MagicBoxShow = () => {
  const [showData, setshowData] = useState(null);
  console.log("dataa", showData);
  const [box, setbox] = useState();
  const [many, setmany] = useState();
  const [few, setfew] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("viewData"));
    if (data) {
      setshowData(data);
      setLoading(false);
    } else {
      setLoading(false);
    }

    if (data) {
      if (data.description.includes("||")) {
        const [boxPart, manyPart, fewPart] = data.description.split("||");
        setbox(boxPart.trim());
        setmany(manyPart.trim());
        setfew(fewPart.trim());
      } else {
        setbox(data.description);
        setmany("");
        setfew("");
      }
    }
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="main-container pb-3">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="pd-20 card-box mb-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Primary Numbers</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="row" >
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Number:</strong> {showData?.number}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
                    <strong>Description:</strong> 
                    <p>BOX #1: {box}</p>
                    <p>Many 1s: {many}</p>
                    <p>Few/No 1s: {few}</p>
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

export default MagicBoxShow;
