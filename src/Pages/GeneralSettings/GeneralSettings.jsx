import React from "react";
import Header from "../../component/Dashboard/Header";

const GeneralSettings = () => {
  return (
    <>
      <Header />
      <div class="main-container">
        <div class="pd-20 card-box mb-30">
          <div class="row">
            <div class="col-md-6">
              <div class="" >
                <h2 style={{fontWeight:"600"}}>General Setting</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="pd-20 card-box mb-30">
          <form
            method="POST"
            action=""
            accept-charset="UTF-8"
            id="form1"
          >
            <input
              name="_token"
              type="hidden"
              value="xHBXYSgQMJuuN3SqvwDvNn0Ik8JZkq4Lc3IyPYdk"
            />
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                  <strong>Number of New users :</strong>
                  <select
                    name="number_of_user"
                    id="number_of_user"
                    class="form-control"
                    placeholder="Select..."
                  >
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                    <option value="300">300</option>
                    <option value="350">350</option>
                    <option value="400">400</option>
                    <option value="450">450</option>
                    <option value="500">500</option>
                  </select>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary free-subscribe">
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

export default GeneralSettings;
