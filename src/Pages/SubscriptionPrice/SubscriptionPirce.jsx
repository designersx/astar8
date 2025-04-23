import React from "react";
import Header from "../../component/Dashboard/Header";

const SubscriptionPirce = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Subscription Price List</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <a
                  className="btn btn-success"
                  // href="https://be.astar8.com/subscription_prize/create"
                >
                  {" "}
                  Create New Prediction{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          {/* Tab panes */}
          <div className="tab-content tabs card-block">
            <div className="tab-pane active" id="all" role="tabpanel">
              <div className="card-block table-border-style">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>No</th>
                      <th>Price</th>
                      <th>Created Date</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>$ 2.99</td>
                      <td>07-February-2023</td>
                    </tr>
                  </tbody>
                </table>
                <div className="custom-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPirce;
