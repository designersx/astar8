import React from "react";
import Header from "../../component/Dashboard/Header";

const UnfavParamaters = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Unfav Parameters</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className=" col-md-12 col-sm-12 mb-30">
            <div className="pd-20 card-box">
              <div className="tab">
                <div className="row clearfix">
                  <div className="col-md-3 col-sm-12">
                    <ul
                      className="nav flex-column vtabs nav-tabs customtab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#jandata1"
                        >
                          Jan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#febdata1"
                        >
                          Feb
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#mardata1"
                        >
                          Mar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#aprdata1"
                        >
                          Apr
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#maydata1"
                        >
                          May
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#jundata1"
                        >
                          Jun
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#juldata1"
                        >
                          Jul
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#augdata1"
                        >
                          Aug
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#sepdata1"
                        >
                          Sep
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#octdata1"
                        >
                          Oct
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#nevdata1"
                        >
                          Nov
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          role="tab"
                          aria-selected="true"
                          href="#decdata1"
                        >
                          Dec
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="tab-content tabs card-block">
                      <div
                        className="tab-pane fade show active"
                        id="jandata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of January</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/61"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/61/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,5,4</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/62"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/62/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/63"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/63/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/64"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/64/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/65"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/65/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/66"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/66/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/67"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/67/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/68"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/68/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,4,5</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/69"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/69/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/70"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/70/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,5,4</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/71"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/71/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/72"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/72/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/73"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/73/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/74"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/74/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/75"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/75/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/76"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/76/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/77"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/77/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,5,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/78"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/78/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/79"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/79/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,6,8</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/80"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/80/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/81"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/81/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/82"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/82/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,6,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/83"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/83/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/84"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/84/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/85"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/85/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/86"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/86/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,6,8</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/87"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/87/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/88"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/88/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/89"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/89/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,8,6</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/90"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/90/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  {/*  <a class="btn btn-info" href="https://be.astar8.com/unfav_parameters/91"><i class="icon-copy ion-eye"></i></a> */}
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/91/edit"
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
                      <div
                        className="tab-pane fade"
                        id="febdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of February</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/92/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/93/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,8,6</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/94/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/95/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/96/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/97/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/98/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/99/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,6,8</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/100/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/101/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/102/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,8,6</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/103/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/104/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/105/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/106/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/107/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/108/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,8,6</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/109/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/110/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/111/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/112/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,5,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/113/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/114/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,5,8</td>
                                <td scope="row">Sun,Wed,Sat</td>
                                <td scope="row">Jan,Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/115/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,5</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/116/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/117/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,5,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/118/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/119/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,5</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/120/edit"
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
                      <div
                        className="tab-pane fade"
                        id="mardata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of March</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/121/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8,5</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/122/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/123/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,5,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/124/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">8,4,</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/125/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,5,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/126/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,5,</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/127/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/128/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,5,</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/129/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/130/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8,5</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/131/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/132/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,5,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/133/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">8,4,</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/134/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,5,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/135/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,5,</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/136/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,5,</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/137/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,5,</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/138/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/139/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,5</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/140/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/141/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/142/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">8,3,2</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/143/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,2,</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/144/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,4,</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/145/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5,2</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/146/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,7,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/147/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/148/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/149/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/150/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/151/edit"
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
                      <div
                        className="tab-pane fade"
                        id="aprdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of April</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/152/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/153/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/154/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/155/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">8,3,2</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/156/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,2</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/157/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/158/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5,2</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/159/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,7,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/160/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/161/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/162/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/163/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/164/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">8,3,2</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/165/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,2</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/166/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/167/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,5,2</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/168/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,7,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/169/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/170/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,4</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/171/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/172/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">8,6</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/173/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">8,3,4</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/174/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,1</td>
                                <td scope="row">Sun</td>
                                <td scope="row">Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/175/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/176/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/177/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/178/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/179/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,4,8</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/180/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/181/edit"
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
                      <div
                        className="tab-pane fade"
                        id="maydata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of May</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/182/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/183/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/184/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/185/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,4,8</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/186/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,1</td>
                                <td scope="row">Sun</td>
                                <td scope="row">Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/187/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/188/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/189/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/190/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/191/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/192/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/193/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/194/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,4,8</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/195/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,1</td>
                                <td scope="row">Sun</td>
                                <td scope="row">Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/196/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/197/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/198/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/199/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/200/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,4</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/201/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/202/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/203/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/204/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/205/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/206/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/207/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/208/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/209/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/210/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/211/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/212/edit"
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
                      <div
                        className="tab-pane fade"
                        id="jundata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of June</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/213/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/214/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/215/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/216/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/217/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/218/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/219/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/220/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/221/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/222/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/223/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/224/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/225/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/226/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/227/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/228/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/229/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/230/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/231/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/232/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/233/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/234/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8,9</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/235/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,8,9</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/236/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/237/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5,9</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/238/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/239/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/240/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/241/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,8,9</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/242/edit"
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
                      <div
                        className="tab-pane fade"
                        id="juldata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of July</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">8,6,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/243/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/244/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,8,9</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/245/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/246/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8,9</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/247/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,8,9</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/248/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/249/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5,9</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/250/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/251/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/252/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/253/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,8,9</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/254/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/255/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,8,9</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/256/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,8,9</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/257/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/258/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,5,9</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/259/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,8,6</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/260/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/261/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/262/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,8,9</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/263/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,9</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/264/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/265/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,8,9</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/266/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/267/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/268/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,8,6</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/269/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/270/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/271/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/272/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,3,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/273/edit"
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
                      <div
                        className="tab-pane fade"
                        id="augdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of August</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/274/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/275/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/276/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,3,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/277/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/278/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/279/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/280/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/281/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,8,6</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/282/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/283/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/284/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/285/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,3,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/286/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,6,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/287/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/288/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/289/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">5,6</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/290/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,8,6</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/291/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/292/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/293/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/294/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,3,8</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/295/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/296/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,3,8</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/297/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/298/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/299/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/300/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/301/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/302/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/303/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/304/edit"
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
                      <div
                        className="tab-pane fade"
                        id="sepdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of September</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/305/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/306/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/307/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/308/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/309/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,3,8</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/310/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,3</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/311/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/312/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/313/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/314/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/315/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/316/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/317/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/318/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,3,8</td>
                                <td scope="row">Sun,Thu,Sat</td>
                                <td scope="row">Jan,Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/319/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,3</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/320/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/321/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,3,8</td>
                                <td scope="row">Mon,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/322/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/323/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8,3</td>
                                <td scope="row">Tue,Thu,Sat</td>
                                <td scope="row">Jan,Mar,Apr,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/324/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/325/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/326/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/327/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/328/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/329/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/330/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,4,8</td>
                                <td scope="row">Sun,Mon,Sat</td>
                                <td scope="row">Jan,Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/331/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/332/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,4,8</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/333/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,4,8</td>
                                <td scope="row">Sun,Wed,Sat</td>
                                <td scope="row">Jan,Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/334/edit"
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
                      <div
                        className="tab-pane fade"
                        id="octdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of October</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/335/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,4,8</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/336/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/337/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/338/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/339/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/340/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/341/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/342/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,4,8</td>
                                <td scope="row">Sun,Mon,Sat</td>
                                <td scope="row">Jan,Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/343/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/344/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,4,8</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/345/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/346/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/347/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/348/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/349/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/350/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/351/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,4,8</td>
                                <td scope="row">Sun,Mon,Sat</td>
                                <td scope="row">Jan,Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/352/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/353/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,4,8</td>
                                <td scope="row">Sun,Tue,Sat</td>
                                <td scope="row">Jan,Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/354/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/355/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/356/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">3,8</td>
                                <td scope="row">Thu,Sat</td>
                                <td scope="row">Jan,Mar,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/357/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/358/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/359/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5,2</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/360/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/361/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,July,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/362/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/363/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/364/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/365/edit"
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
                      <div
                        className="tab-pane fade"
                        id="nevdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of November</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,July,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/366/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/367/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/368/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/369/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">3,2</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/370/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/371/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/372/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/373/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/374/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,July,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/375/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/376/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/377/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,8,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/378/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">3,2</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/379/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,8,2</td>
                                <td scope="row">Sun,Mon,Sat</td>
                                <td scope="row">Jan,Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/380/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,9</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/381/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">5,2,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/382/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/383/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">8,6,2</td>
                                <td scope="row">Mon,Fri,Sat</td>
                                <td scope="row">Jan,May,July,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/384/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,8</td>
                                <td scope="row">Tue,Sat</td>
                                <td scope="row">Jan,Apr.Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/385/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/386/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,8,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/387/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/388/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,5,8</td>
                                <td scope="row">Sun,Wed,Sat</td>
                                <td scope="row">Jan,Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/389/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">8,5</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/390/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/391/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,5,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/392/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/393/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,8,5</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/394/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/395/edit"
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
                      <div
                        className="tab-pane fade"
                        id="decdata1"
                        role="tabpanel"
                      >
                        <div className="pd-20">
                          <h3>Month Of December</h3>
                          <table className="table table-striped">
                            <tbody>
                              <tr />
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Numbers</th>
                                <th scope="col">Days</th>
                                <th scope="col">Months</th>
                                <th scope="col">Action</th>
                              </tr>
                              <tr>
                                <td scope="row">1</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/396/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">9,5,8</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/397/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/398/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/399/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/400/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">4,5,8</td>
                                <td scope="row">Sun,Wed,Sat</td>
                                <td scope="row">Jan,Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/401/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">8,5</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/402/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/403/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">2,5,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/404/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/405/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">9,5,8</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/406/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/407/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/408/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/409/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">4,5,8</td>
                                <td scope="row">Sun,Wed,Sat</td>
                                <td scope="row">Jan,Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/410/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">8,5</td>
                                <td scope="row">Wed,Sat</td>
                                <td scope="row">Jan,Jun,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/411/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/412/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">2,5,4</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/413/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">6,8</td>
                                <td scope="row">Fri,Sat</td>
                                <td scope="row">Jan,May,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/414/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">9,5,8</td>
                                <td scope="row">Tue,Wed,Sat</td>
                                <td scope="row">Jan,Apr,Jun,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/415/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/416/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/417/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">8,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/418/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/419/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/420/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/421/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">2,4,5</td>
                                <td scope="row">Sun,Mon,Wed</td>
                                <td scope="row">Feb,Jun,Jul,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/422/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/423/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">9,4,5</td>
                                <td scope="row">Sun,Tue,Wed</td>
                                <td scope="row">Feb,Apr,Jun,Aug,Sep,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/424/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">5,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/425/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">6,5</td>
                                <td scope="row">Wed,Fri</td>
                                <td scope="row">May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/unfav_parameters/426/edit"
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

export default UnfavParamaters;
