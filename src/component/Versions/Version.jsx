import React, { useEffect, useState } from "react";
import "../../styles/Style.css";
import Header from "../Dashboard/Header";
import Swal from "sweetalert2";
import { getLatestVersions, updateVersion } from "../../lib/Store";

export default function Version() {
  const [androidVersion, setAndroidVersion] = useState("");
  const [iosVersion, setIosVersion] = useState("");

  const fetchVersion = async () => {
    try {
      const response = await getLatestVersions();
      setAndroidVersion(response?.android?.version);
      setIosVersion(response?.ios?.version);
      console.log(response, "smkadLKDNKNNN");
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchVersion();
  }, []);

  const handlePostVersion = async (platform, version) => {
    // Check if the version field is empty
    if (!version.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a version before updating.",
      });
      return;
    }

    // Confirm before updating using SweetAlert2
    const result = await Swal.fire({
      title: `Update ${platform} Version?`,
      text: `Are you sure you want to update ${platform} version to "${version}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const res = await updateVersion(platform, version);
        console.log(res, "res");
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: res.data.message,
        });
        fetchVersion();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error posting version.",
        });
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div
          className="card p-4"
          style={{
            marginTop: "15%",
            backgroundColor: "#fff",
            borderRadius: "15px",
          }}
        >
          <h2 className="text-center">Update Latest Mobile Version</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <label className="form-label">Android Version</label>
              <input
                type="text"
                className="form-control"
                value={androidVersion}
                onChange={(e) => setAndroidVersion(e.target.value)}
                required
                placeholder="Enter Android version"
              />
              <button
                className="btn btn-primary mt-2"
                onClick={() => handlePostVersion("Android", androidVersion)}
              >
                Update Android
              </button>
            </div>
            <div className="col-md-6">
              <label className="form-label">iOS Version</label>
              <input
                type="text"
                className="form-control"
                value={iosVersion}
                onChange={(e) => setIosVersion(e.target.value)}
                placeholder="Enter iOS version"
                required
              />
              <button
                className="btn btn-primary mt-2"
                onClick={() => handlePostVersion("Ios", iosVersion)}
              >
                Update iOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
