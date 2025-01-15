import React from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const VideosPage = () => {
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
                  href="https://be.astar8.com/videos/create"
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
              <tr>
                <td>1</td>
                <td>THE MASTER TEACHER OF NUMBERS LLOYD STRAYHORN : Yo...</td>
                <td>
                  <img
                    src="https://be.astar8.com/thumbnail/default_thumbnail.png"
                    alt="Video Thumbnail"
                    width="100%"
                    height="100%"
                  />
                </td>
                <td>https://youtu.be/P0kWtme93YY</td>
                <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/videos/1"
                    title="View"
                    target="_blank"
                  >
                    <IoIosEye size={18} />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/videos/1/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Brother Rich</td>
                <td>
                  <img
                    src="https://be.astar8.com/thumbnail/default_thumbnail.png"
                    alt="Video Thumbnail"
                    width="100%"
                    height="100%"
                  />
                </td>
                <td>https://youtu.be/gxkOlNIHgAs</td>
                <td>
                  <a
                    className="btn btn-info"
                    href="https://be.astar8.com/videos/2"
                    title="View"
                    target="_blank"
                  >
                    <i className="icon-copy ion-eye" />
                  </a>
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/videos/2/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
