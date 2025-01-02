import React from "react";
import Header from "../../component/Dashboard/Header";

const SystemModules = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Module Types</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-right"></div>
            </div>
          </div>
        </div>
        {/* Tab panes */}
        <div className="pd-20 card-box mb-30">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Description</th>
                <th width="280px">Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Name Reading</td>
                <td>Name Reading description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/1"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/1/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>DOB Reading</td>
                <td>DOB Reading description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/2"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/2/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Magic Box</td>
                <td>Magic Box description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/3"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/3/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Elemental Number</td>
                <td>Elemental/Dominant Number description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/4"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/4/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Basic Health Reading</td>
                <td>Health Reading description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/5"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/5/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Health Precautions</td>
                <td>Health Precautions Description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/6"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/6/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Health Suggest Months</td>
                <td>Health Suggest Months description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/7"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/7/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Basic Parenting Reading</td>
                <td>Basic Parenting Reading description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/12"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/12/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Detailed Parenting Reading</td>
                <td>Detailed Parenting Reading description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/13"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/13/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Basic Money Matters</td>
                <td>Basic Money Matters description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/14"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/14/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Detailed Money Matters</td>
                <td>Detailed Money Matters description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/15"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/15/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Destiny Numbers</td>
                <td>Destiny Number description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/16"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/16/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Health Cycle</td>
                <td>1 Period = 52 day cycle</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/17"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/17/edit"
                    title="Edit"
                    target="_blank"
                  >
                    <i className="icon-copy ti-pencil-alt" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>Children</td>
                <td>Children Description is here</td>
                <td>
                  {/* <a class="btn btn-info" href="https://be.astar8.com/modules/20"><i class="icon-copy ion-eye"></i></a> */}
                  <a
                    className="btn btn-primary"
                    href="https://be.astar8.com/modules/20/edit"
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

export default SystemModules;
