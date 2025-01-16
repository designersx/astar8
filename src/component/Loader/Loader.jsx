import React from "react";
import "./Loader.css";
import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-start vh-100">
        <div className=" mt-5">
          <div className="">
            <BeatLoader size={13} color="black" />
          </div>
        </div>
        <h6 className="text-h6 mt-3">
          Please Wait....
        </h6>
      </div>
    </>
  );
}
