import React from "react";
import Header from "../../../component/Dashboard/Header";


const ModuleEdit = () => {
  return (
    <>
    <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Edit Module</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                {/* <a class="btn btn-primary" href="https://be.astar8.com/modules"> Back </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form
            method="POST"
            action="https://be.astar8.com/modules/1"
            acceptCharset="UTF-8"
          >
            <input name="_method" type="hidden" defaultValue="PATCH" />
            <input
              name="_token"
              type="hidden"
              defaultValue="FdPw7bLpKxnPUnI2hMhPrgiuFakX7OtLuCmlb8MI"
            />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Name:</strong>
                  <input
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    type="text"
                    defaultValue="Name Reading"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="form-group">
                  <strong>Description:</strong>
                  <textarea
                    placeholder="Description"
                    className="form-control description"
                    name="description"
                    cols={50}
                    rows={10}
                    defaultValue={"Name Reading description is here"}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModuleEdit;
