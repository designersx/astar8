import React from "react";
import Header from "../../component/Dashboard/Header";

const PaymentSetting = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2 style={{fontWeight:"600"}}>Payment Setting</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Sandbox setting :- Live Mode is enabled </strong>
              </div>
              <div className="form-group">
                <form
                  method="POST"
                  action="https://be.astar8.com/sandboxmode_status/3"
                  acceptCharset="UTF-8"
                  style={{ display: "inline" }}
                >
                  <input
                    name="_token"
                    type="hidden"
                    defaultValue="ncm5425lXLMQWyeDGyTB0PZZEb4jU8fKYDkIS6Ao"
                  />
                  <button
                    type="submit"
                    name="Delete"
                    className="btn btn-secondary alert-unblock InactiveLive"
                  >
                    Test
                  </button>
                </form>
                <button
                  type="submit"
                  name="Delete"
                  className="btn btn-success alert-block ActiveLive"
                >
                  Live
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Productuion setting :- Live Mode is enabled </strong>
              </div>
              <div className="form-group">
                <form
                  method="POST"
                  action="https://be.astar8.com/productionmode_status/5"
                  acceptCharset="UTF-8"
                  style={{ display: "inline" }}
                >
                  <input
                    name="_token"
                    type="hidden"
                    defaultValue="ncm5425lXLMQWyeDGyTB0PZZEb4jU8fKYDkIS6Ao"
                  />
                  <button
                    type="submit"
                    name="Delete"
                    className="btn btn-secondary alert-unblock InactiveLive"
                  >
                    Test
                  </button>
                </form>
                <button
                  type="submit"
                  name="Delete"
                  className="btn btn-success alert-block ActiveLive"
                >
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSetting;
