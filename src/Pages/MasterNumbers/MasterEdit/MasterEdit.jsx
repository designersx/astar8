import React from "react";
import Header from "../../../component/Dashboard/Header";


const MasterEdit = () => {
  return (
    <>
    <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Edit Number 11</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                {/* <a class="btn btn-primary" href="https://be.astar8.com/master_numbers"> Back </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <form
            method="POST"
            action="https://be.astar8.com/master_numbers/1"
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
                  <strong>Number:</strong>
                  <input
                    placeholder="Number"
                    className="form-control"
                    disabled=""
                    name="number"
                    type="number"
                    defaultValue={11}
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
                    defaultValue={
                      "11 is a magnetic number. Those with it are usually considered visionary, inventive, romantic, and inspirational. Master number II vibrates with revelation, abstract impressions, and things from on high. In Astrology, the master number 11 is assigned to the zodiac signs of Leo and Aquarius. For those carrying the 11 vibrations in their name or date of birth to realize and maintain its power, they must strive to raise themselves to the highest possible levels of human understanding and wisdom. Love, peace, harmony, justice, and equality are strongly associated with the number 11. One of the callings of an 11-person is to light the world through lofty ideas; it can also mean tests of determination or aggressiveness. The 11 is composed of two 1s. The number 1 by itself represents the Sun-it is powerful, authoritative, and independent. However, when you add the two together, you get the single number 2, which represents all things gentle, artistic, and imaginative. Although the 11 under modern numerology is a master number and represents the highest qualities, the original meaning of this compound number under the Chaldean system of numbers is different. In the Chaldean or mystic, design, the 11 offers a warning to occultists. It denotes hidden dangers and great trials and difficulties."
                    }
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

export default MasterEdit;
