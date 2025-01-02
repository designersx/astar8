import React from "react";
import Header from "../../component/Dashboard/Header";

const LifeCoachDesc = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <h2>Lifecoach Description List</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {/* Nav tabs */}
              <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
                <div className="pd-20 card-box">
                  <div className="tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link text-blue active"
                          data-toggle="tab"
                          href="#day"
                          role="tab"
                          aria-selected="true"
                        >
                          Day
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-blue"
                          data-toggle="tab"
                          href="#week"
                          role="tab"
                          aria-selected="false"
                        >
                          Week
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="day"
                        role="tabpanel"
                      >
                        <div className="card-block table-border-style">
                          <table className="table table-striped">
                            <tbody>
                              <tr>
                                <th>S.No</th>
                                <th>Star Type</th>
                                <th>Star Count</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th width="280px">Action</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>Green star</td>
                                <td>One star</td>
                                <td>1</td>
                                <td>
                                  Favorable day for taking the initiative and
                                  making decisions.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/1"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/1/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Green star</td>
                                <td>Two star</td>
                                <td>1</td>
                                <td>
                                  Doubly favorable day for important
                                  decision-making and taking an independent,
                                  proactive approach.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/2"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/2/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Green star</td>
                                <td>Three star</td>
                                <td>1</td>
                                <td>
                                  Exceptionally favorable day to step out on
                                  faith, starting something new that you can
                                  call your own
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/3"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/3/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Red star</td>
                                <td>One star</td>
                                <td>1</td>
                                <td>
                                  Not the best day to be pushy to get what you
                                  want. May meet with resistance.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/4"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/4/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Red star</td>
                                <td>Two star</td>
                                <td>1</td>
                                <td>
                                  A selfish attitude may be your undoing if you
                                  insist upon having things your way.
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/5"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/5/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Red star</td>
                                <td>Three star</td>
                                <td>1</td>
                                <td>
                                  If your intentions are just looking out for
                                  yourself, itÔÇÖs likely to undermine the very
                                  things you...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/6"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/6/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Neutral</td>
                                <td>Neutral</td>
                                <td>1</td>
                                <td>
                                  A day to start a new, and plant the seeds of
                                  your desires. Anything started today may last
                                  for a wee...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/7"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/7/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="custom-pagination">
                            <nav>
                              <ul className="pagination">
                                <li
                                  className="page-item disabled"
                                  aria-disabled="true"
                                  aria-label="« Previous"
                                >
                                  <span
                                    className="page-link"
                                    aria-hidden="true"
                                  >
                                    ‹
                                  </span>
                                </li>
                                <li
                                  className="page-item active"
                                  aria-current="page"
                                >
                                  <span className="page-link">1</span>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=2"
                                  >
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=3"
                                  >
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=4"
                                  >
                                    4
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=5"
                                  >
                                    5
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=6"
                                  >
                                    6
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=7"
                                  >
                                    7
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=8"
                                  >
                                    8
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=9"
                                  >
                                    9
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=day&week=1&day=2"
                                    rel="next"
                                    aria-label="Next »"
                                  >
                                    ›
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="week" role="tabpanel">
                        <div className="card-block table-border-style">
                          <table className="table table-striped">
                            <tbody>
                              <tr>
                                <th>S.No</th>
                                <th>Star Type</th>
                                <th>Number</th>
                                <th>Description</th>
                                <th width="280px">Action</th>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>Green star</td>
                                <td>1</td>
                                <td>
                                  Have a take-charge attitude and go after what
                                  you want. Have confidence and the courage of
                                  your co...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/64"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/64/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Red star</td>
                                <td>1</td>
                                <td>
                                  Not the best week to be pushy, selfish, or
                                  overly insistent. May encounter resistance or
                                  a possible...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/65"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/65/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Neutral</td>
                                <td>1</td>
                                <td>
                                  Usually a week for new beginnings, and
                                  self-assertiveness. This Personal Week also
                                  brings focus, sta...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/66"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/66/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Green star</td>
                                <td>2</td>
                                <td>
                                  Expect others to reach out for advice or
                                  assistance. Good to put plans in place of a
                                  detailed nature...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/67"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/67/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Red star</td>
                                <td>2</td>
                                <td>
                                  Team efforts may be lacking; avoid rushing
                                  into matters, or impatience forcing you to
                                  start over aga...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/68"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/68/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Neutral</td>
                                <td>2</td>
                                <td>
                                  The aim of this week is balance, cooperation,
                                  teamwork, and relationships. The energy of the
                                  week i...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/69"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/69/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Green star</td>
                                <td>3</td>
                                <td>
                                  An element of luck or good fortune is on your
                                  side. A period of prosperity, abundance, and
                                  an opport...
                                </td>
                                <td>
                                  <a
                                    className="btn btn-info"
                                    href="https://be.astar8.com/lifecoach_descriptions/70"
                                    title="View"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ion-eye" />
                                  </a>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/lifecoach_descriptions/70/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="custom-pagination">
                            <nav>
                              <ul className="pagination">
                                <li
                                  className="page-item disabled"
                                  aria-disabled="true"
                                  aria-label="« Previous"
                                >
                                  <span
                                    className="page-link"
                                    aria-hidden="true"
                                  >
                                    ‹
                                  </span>
                                </li>
                                <li
                                  className="page-item active"
                                  aria-current="page"
                                >
                                  <span className="page-link">1</span>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=week&day=1&week=2"
                                  >
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=week&day=1&week=3"
                                  >
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=week&day=1&week=4"
                                  >
                                    4
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="https://be.astar8.com/lifecoach_descriptions?page=week&day=1&week=2"
                                    rel="next"
                                    aria-label="Next »"
                                  >
                                    ›
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeCoachDesc;
