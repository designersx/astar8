import React from "react";
import Header from "../../component/Dashboard/Header";

const FavParameters = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Fav Parameters</h2>
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
                          href="#jandata"
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
                          href="#febdata"
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
                          href="#mardata"
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
                          href="#aprdata"
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
                          href="#maydata"
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
                          href="#jundata"
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
                          href="#juldata"
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
                          href="#augdata"
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
                          href="#sepdata"
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
                          href="#octdata"
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
                          href="#nevdata"
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
                          href="#decdata"
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
                        id="jandata"
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
                                <td scope="row">1,4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/1/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/2/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/3/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/4/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/5/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/6/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/7/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/8/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/9/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/10/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/11/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/12/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/13/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/14/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/15/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/16/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/17/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/18/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/19/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/20/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,4,1</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/21/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/22/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,4,1</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/23/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/24/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/25/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,4,1</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/26/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,4,1</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/27/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/28/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/29/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,4,1</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/30/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/31/edit"
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
                        id="febdata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/32/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/33/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,4,1</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/34/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/35/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,4,1</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/36/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/37/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/38/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,4,1</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/39/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,4,1</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/40/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/41/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/42/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,4,1</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/43/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/44/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,4,1</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/45/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/46/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,4,1</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/47/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,4,1</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/48/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,4,1</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/49/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/50/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/51/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/52/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/53/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/54/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/55/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/56/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/57/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/58/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/59/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/60/edit"
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
                        id="mardata"
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
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/427/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/428/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/429/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/430/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/431/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/432/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/433/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/434/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/435/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/436/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/437/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/438/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/439/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/440/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/441/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/442/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/443/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/444/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/445/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/446/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/447/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/448/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/449/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/450/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/451/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/452/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/453/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/454/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/455/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/456/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/457/edit"
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
                        id="aprdata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/458/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/459/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/460/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/461/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/462/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/463/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/464/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/465/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/466/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/467/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/468/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/469/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/470/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/471/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/472/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/473/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/474/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/475/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/476/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/477/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/478/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/479/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/480/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/481/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/482/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/483/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/484/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/485/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/486/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/487/edit"
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
                        id="maydata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/488/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/489/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/490/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/491/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/492/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/493/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/494/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/495/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/496/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/497/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/498/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/499/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/500/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/501/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/502/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/503/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/504/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/505/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/506/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/507/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/508/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/509/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/510/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/511/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/512/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/513/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/514/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/515/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/516/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/517/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/518/edit"
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
                        id="jundata"
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
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/519/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/520/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/521/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/522/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/523/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/524/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/525/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/526/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/527/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/528/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/529/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/530/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/531/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/532/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/533/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/534/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/535/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/536/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/537/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/538/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,2,7</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/539/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/540/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,2,7</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/541/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/542/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,2,7</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/543/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/544/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/545/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/546/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,2,7</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/547/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/548/edit"
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
                        id="juldata"
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
                                <td scope="row">1,4,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/549/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/550/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,2,7</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/551/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/552/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,2,7</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/553/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/554/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/555/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,2,7</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/556/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/557/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/558/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/559/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,2,7</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/560/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/561/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,2,7</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/562/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/563/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/564/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,2,7</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/565/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/566/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/567/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/568/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,2,7</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/569/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,2,7</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/570/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,1,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/571/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/572/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/573/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,1,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/574/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,1,4</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/575/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/576/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/577/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,1,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/578/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/579/edit"
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
                        id="augdata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/580/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/581/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,1,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/582/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/583/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,1,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/584/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/585/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/586/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,1,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/587/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,1,4</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/588/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/589/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/590/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,1,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/591/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/592/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,1,4</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/593/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,2,7</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/594/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/595/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,1,4</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/596/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,1,4</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/597/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/598/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,1,4</td>
                                <td scope="row">Sun,Mon</td>
                                <td scope="row">Feb,Jul,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/599/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,1,4</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/600/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/601/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/602/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/603/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/604/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/605/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/606/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/607/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/608/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/609/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/610/edit"
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
                        id="sepdata"
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
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/611/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/612/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/613/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/614/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/615/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/616/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/617/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/618/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/619/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/620/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/621/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/622/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/623/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/624/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,5,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/625/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/626/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,6,5</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/627/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,5,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/628/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/629/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,5</td>
                                <td scope="row">Mon,Wed</td>
                                <td scope="row">Jun,Jul,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/630/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,5</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/631/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/632/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/633/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/634/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/635/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/636/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/637/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/638/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/639/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/640/edit"
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
                        id="octdata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/641/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/642/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/643/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/644/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/645/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/646/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/647/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/648/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/649/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/650/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/651/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/652/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/653/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,9</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/654/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/655/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/656/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/657/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/658/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/659/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/660/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/661/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,5</td>
                                <td scope="row">Sun,Wed</td>
                                <td scope="row">Feb,Jun,Aug,Sep</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/662/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/663/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/664/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/665/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/666/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/667/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/668/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/669/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/670/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/671/edit"
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
                        id="nevdata"
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
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/672/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/673/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/674/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/675/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/676/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/677/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/678/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/679/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/680/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/681/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/682/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/683/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/684/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,9,6</td>
                                <td scope="row">Tue,Wed,Fri</td>
                                <td scope="row">Apr,May,Jun,Sep,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/685/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,9,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/686/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/687/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,9,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/688/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,6,3</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/689/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,9</td>
                                <td scope="row">Sun,Tue</td>
                                <td scope="row">Feb,Apr,Aug,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/690/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,6</td>
                                <td scope="row">Mon,Fri</td>
                                <td scope="row">May,Jul,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/691/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,9,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/692/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/693/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/694/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/695/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/696/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/697/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/698/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/699/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/700/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/701/edit"
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
                        id="decdata"
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
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/702/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">2</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/703/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">3</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/704/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">4</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/705/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">5</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/706/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">6</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/707/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">7</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/708/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">8</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/709/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">9</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/710/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">10</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/711/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">11</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/712/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">12</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/713/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">13</td>
                                <td scope="row">4,1,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/714/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">14</td>
                                <td scope="row">5,6,3</td>
                                <td scope="row">Wed,Thu,Fri</td>
                                <td scope="row">Mar,May,Jun,Sep,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/715/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">15</td>
                                <td scope="row">6,3,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/716/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">16</td>
                                <td scope="row">7,2,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/717/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">17</td>
                                <td scope="row">8,3,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/718/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">18</td>
                                <td scope="row">9,3,6</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/719/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">19</td>
                                <td scope="row">1,4,3</td>
                                <td scope="row">Sun,Thu</td>
                                <td scope="row">Feb,Mar,Aug,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/720/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">20</td>
                                <td scope="row">2,7,3</td>
                                <td scope="row">Mon,Thu</td>
                                <td scope="row">Mar,Jul,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/721/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">21</td>
                                <td scope="row">3,6,9</td>
                                <td scope="row">Tue,Thu,Fri</td>
                                <td scope="row">Mar,Apr,May,Oct,Nov,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/722/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">22</td>
                                <td scope="row">4,1,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/723/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">23</td>
                                <td scope="row">5,6,8</td>
                                <td scope="row">Wed,Fri,Sat</td>
                                <td scope="row">Jan,May,Jun,Sep,Oct</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/724/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">24</td>
                                <td scope="row">6,8,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/725/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">25</td>
                                <td scope="row">7,2,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/726/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">26</td>
                                <td scope="row">8,6,3</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/727/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">27</td>
                                <td scope="row">9,8,6</td>
                                <td scope="row">Tue,Fri,Sat</td>
                                <td scope="row">Jan,Apr,May,Oct,Nov</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/728/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">28</td>
                                <td scope="row">1,4,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/729/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">29</td>
                                <td scope="row">2,7,8</td>
                                <td scope="row">Mon,Sat</td>
                                <td scope="row">Jan,Jul</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/730/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">30</td>
                                <td scope="row">3,8,6</td>
                                <td scope="row">Thu,Fri,Sat</td>
                                <td scope="row">Jan,Mar,May,Oct,Dec</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/731/edit"
                                    title="Edit"
                                    target="_blank"
                                  >
                                    <i className="icon-copy ti-pencil-alt" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td scope="row">31</td>
                                <td scope="row">4,1,8</td>
                                <td scope="row">Sun,Sat</td>
                                <td scope="row">Jan,Feb,Aug</td>
                                <td>
                                  <a
                                    className="btn btn-primary"
                                    href="https://be.astar8.com/fav_parameters/732/edit"
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

export default FavParameters;
