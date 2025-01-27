import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Videos } from "../../lib/Store";
import { useNavigate } from "react-router-dom";
const default_thumbnail = require("../../../src/Assests/img/video_thumbnail.png");
const VideosPage = () => {
  const navigate=useNavigate()
  const [video, setVideo] = useState([]);
  const getAllVideoList = async () => {
    try {
      const response = await Videos();
      setVideo(response.video_list);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getAllVideoList();
    const handleStorageChange = () => {
      getAllVideoList();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle View Click
  const handleViewClick = (item) => {
    const newWindow = window.open("/video_page/show", "_blank");
    localStorage.setItem("viewData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("viewData", item);
  };

  // Handle Edit Click
  const handleEditClick = (item) => {
    const newWindow = window.open("/video_page/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
    newWindow.dataFromParent = item;
    console.log("editData", item);
  };

  const goNewAddVideo=()=>{
    navigate(`/Add_video`)
  }

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Video List</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <a
                  className="btn btn-primary"
                 onClick={goNewAddVideo}
                >
                  Add Video
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Link</th>
                <th width="280px">Action</th>
              </tr>
              {video?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.video_title}</td>
                  <td>
                    <img
                      src={item?.video_thumbnail || default_thumbnail}
                      alt="Video Thumbnail"
                      width="100%"
                      height="100%"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = default_thumbnail;
                      }}
                    />
                  </td>
                  <td>{item?.video_link}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <a
                        className="btn btn-info"
                        title="View"
                        target="_blank"
                        onClick={() => handleViewClick(item)}
                      >
                        <IoIosEye size={18} />
                      </a>
                      <a
                        className="btn btn-primary"
                        title="Edit"
                        target="_blank"
                        onClick={() => handleEditClick(item)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
