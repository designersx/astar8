import React from "react";
import Header from "../component/Dashboard/Header";
export default function DashBoard() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="">
          <div className="page-header">
            <div className="row ">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Dashboard</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="d-flex">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row clearfix progress-box ">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="card-box pd-30 height-100-p">
                <div className="progress-box text-center">
                  <h5 className="text-blue padding-top-10 h5"> Total User</h5>
                  <span className="d-block">
                    23020 Users <i className="fa fa-line-chart text-blue" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="card-box pd-30 height-100-p">
                <div className="progress-box text-center">
                  <h5 className="text-light-green padding-top-10 h5">
                    {" "}
                    Active Users{" "}
                  </h5>
                  <span className="d-block">
                    {" "}
                    17023 Users{" "}
                    <i className="fa text-light-green fa-line-chart" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="card-box pd-30 height-100-p">
                <div className="progress-box text-center">
                  <h5 className="text-light-orange padding-top-10 h5">
                    Daily Prediction
                  </h5>
                  <span className="d-block">
                    0 Like <i className="fa text-light-orange fa-line-chart" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <div className="card-box pd-30 height-100-p">
                <div className="progress-box text-center">
                  <h5 className="text-light-orange padding-top-10 h5">
                    Daily Prediction
                  </h5>
                  <span className="d-block">
                    0 Dislike{" "}
                    <i className="fa text-light-orange fa-line-chart" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:"35px"}}>
            <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
              <div className="card-box pd-30 height-100-p">
                <div className="compChart">
                  <h4 className="mb-30 h4">Compatibility User Record</h4>
                  <div className="col-sm-2 col-md-2">
                    <select
                      className="custom-select col-12"
                      name="compdays"
                      id="compdays"
                    >
                      <option value="week">Weekly</option>
                      <option value="month">Monthly</option>
                    </select>
                  </div>
                </div>
                <div className="compatibility" style={{ display: "none" }}>
                  <div className="loading" />
                </div>
                <div id="chart" className="chart" data-highcharts-chart={0}>
                  <div
                    id="highcharts-2ei86u3-0"
                    dir="ltr"
                    className="highcharts-container "
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: 1163,
                      height: 400,
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    }}
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily:
                          '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: 12,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={1163}
                      height={400}
                      viewBox="0 0 1163 400"
                    >
                      <desc>Created with Highcharts 6.0.7</desc>
                      <defs>
                        <clipPath id="highcharts-2ei86u3-1">
                          <rect
                            x={0}
                            y={0}
                            width={1112}
                            height={318}
                            fill="none"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        fill="#ffffff"
                        className="highcharts-background"
                        x={0}
                        y={0}
                        width={1163}
                        height={400}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={41}
                        y={10}
                        width={1112}
                        height={318}
                      />
                      <g className="highcharts-pane-group" />
                      <g className="highcharts-grid highcharts-xaxis-grid ">
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 199.5 10 L 199.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 358.5 10 L 358.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 517.5 10 L 517.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 675.5 10 L 675.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 834.5 10 L 834.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 993.5 10 L 993.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 1152.5 10 L 1152.5 328"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-grid-line"
                          d="M 40.5 10 L 40.5 328"
                          opacity={1}
                        />
                      </g>
                      <g className="highcharts-grid highcharts-yaxis-grid ">
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          className="highcharts-grid-line"
                          d="M 41 328.5 L 1153 328.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          className="highcharts-grid-line"
                          d="M 41 249.5 L 1153 249.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          className="highcharts-grid-line"
                          d="M 41 169.5 L 1153 169.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          className="highcharts-grid-line"
                          d="M 41 90.5 L 1153 90.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          className="highcharts-grid-line"
                          d="M 41 9.5 L 1153 9.5"
                          opacity={1}
                        />
                      </g>
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        x={41}
                        y={10}
                        width={1112}
                        height={318}
                      />
                      <g className="highcharts-axis highcharts-xaxis ">
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 199.5 328 L 199.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 358.5 328 L 358.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 517.5 328 L 517.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 675.5 328 L 675.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 834.5 328 L 834.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 993.5 328 L 993.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 1153.5 328 L 1153.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 40.5 328 L 40.5 338"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="#ccd6eb"
                          strokeWidth={1}
                          d="M 41 328.5 L 1153 328.5"
                        />
                      </g>
                      <g className="highcharts-axis highcharts-yaxis ">
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          d="M 41 10 L 41 328"
                        />
                      </g>
                      <path
                        fill="none"
                        className="highcharts-crosshair highcharts-crosshair-category undefined"
                        stroke="rgba(204,214,235,0.25)"
                        strokeWidth="158.85714285714286"
                        style={{ pointerEvents: "none" }}
                        visibility="hidden"
                        d="M 437.5 10 L 437.5 328"
                      />
                      <g className="highcharts-series-group">
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-line-series "
                          transform="translate(41,10) scale(1 1)"
                          clipPath="url(#highcharts-2ei86u3-1)"
                        >
                          <path
                            fill="none"
                            d="M 79.428571428571 298.125 L 238.28571428571 262.35 L 397.14285714286 174.9 L 556 298.125 L 714.85714285714 310.05 L 873.71428571429 318 L 1032.5714285714 318"
                            className="highcharts-graph"
                            stroke="#00789c"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            fill="none"
                            d="M 69.428571428571 298.125 L 79.428571428571 298.125 L 238.28571428571 262.35 L 397.14285714286 174.9 L 556 298.125 L 714.85714285714 310.05 L 873.71428571429 318 L 1032.5714285714 318 L 1042.5714285714 318"
                            strokeLinejoin="round"
                            visibility="visible"
                            stroke="rgba(192,192,192,0.0001)"
                            strokeWidth={22}
                            className="highcharts-tracker"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-line-series  highcharts-tracker"
                          transform="translate(41,10) scale(1 1)"
                        >
                          <path
                            fill="#00789c"
                            visibility="hidden"
                            d="M 397 174.9 A 0 0 0 1 1 397 174.9 Z"
                            className="highcharts-halo highcharts-color-undefined"
                            fillOpacity="0.25"
                          />
                          <path
                            fill="#00789c"
                            d="M 83 298.125 A 4 4 0 1 1 82.99999800000016 298.12100000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#00789c"
                            d="M 242 262.35 A 4 4 0 1 1 241.99999800000018 262.34600000066666 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#00789c"
                            d="M 401 174.9 A 4 4 0 1 1 400.9999980000002 174.89600000066667 Z"
                            className="highcharts-point "
                            strokeWidth="0.0007992249455124334"
                          />
                          <path
                            fill="#00789c"
                            d="M 560 298.125 A 4 4 0 1 1 559.9999980000001 298.12100000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#00789c"
                            d="M 718 310.05 A 4 4 0 1 1 717.9999980000001 310.04600000066665 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#00789c"
                            d="M 877 318 A 4 4 0 1 1 876.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#00789c"
                            d="M 1036 318 A 4 4 0 1 1 1035.9999980000002 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-series highcharts-series-1 highcharts-line-series "
                          transform="translate(41,10) scale(1 1)"
                          clipPath="url(#highcharts-2ei86u3-1)"
                        >
                          <path
                            fill="none"
                            d="M 79.428571428571 250.425 L 238.28571428571 302.1 L 397.14285714286 286.2 L 556 306.075 L 714.85714285714 298.125 L 873.71428571429 318 L 1032.5714285714 318"
                            className="highcharts-graph"
                            stroke="#ef1fdf"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            fill="none"
                            d="M 69.428571428571 250.425 L 79.428571428571 250.425 L 238.28571428571 302.1 L 397.14285714286 286.2 L 556 306.075 L 714.85714285714 298.125 L 873.71428571429 318 L 1032.5714285714 318 L 1042.5714285714 318"
                            strokeLinejoin="round"
                            visibility="visible"
                            stroke="rgba(192,192,192,0.0001)"
                            strokeWidth={22}
                            className="highcharts-tracker"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-1 highcharts-line-series  highcharts-tracker"
                          transform="translate(41,10) scale(1 1)"
                        >
                          <path
                            fill="#ef1fdf"
                            visibility="hidden"
                            d="M 397 286.2 A 0 0 0 1 1 397 286.2 Z"
                            className="highcharts-halo highcharts-color-undefined"
                            fillOpacity="0.25"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 83 250.425 A 4 4 0 1 1 82.99999800000016 250.42100000066668 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 242 302.1 A 4 4 0 1 1 241.99999800000018 302.09600000066666 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 401 286.2 A 4 4 0 1 1 400.9999980000002 286.19600000066663 Z"
                            className="highcharts-point "
                            strokeWidth={1}
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 560 306.075 A 4 4 0 1 1 559.9999980000001 306.07100000066663 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 718 298.125 A 4 4 0 1 1 717.9999980000001 298.12100000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 877 318 A 4 4 0 1 1 876.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ef1fdf"
                            d="M 1036 318 A 4 4 0 1 1 1035.9999980000002 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-series highcharts-series-2 highcharts-line-series "
                          transform="translate(41,10) scale(1 1)"
                          clipPath="url(#highcharts-2ei86u3-1)"
                        >
                          <path
                            fill="none"
                            d="M 79.428571428571 47.69999999999999 L 238.28571428571 302.1 L 397.14285714286 238.5 L 556 306.075 L 714.85714285714 318 L 873.71428571429 318 L 1032.5714285714 318"
                            className="highcharts-graph"
                            stroke="#ff686b"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            fill="none"
                            d="M 69.428571428571 47.69999999999999 L 79.428571428571 47.69999999999999 L 238.28571428571 302.1 L 397.14285714286 238.5 L 556 306.075 L 714.85714285714 318 L 873.71428571429 318 L 1032.5714285714 318 L 1042.5714285714 318"
                            strokeLinejoin="round"
                            visibility="visible"
                            stroke="rgba(192,192,192,0.0001)"
                            strokeWidth={22}
                            className="highcharts-tracker"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-2 highcharts-line-series  highcharts-tracker"
                          transform="translate(41,10) scale(1 1)"
                        >
                          <path
                            fill="#ff686b"
                            visibility="hidden"
                            d="M 397 238.5 A 0 0 0 1 1 397 238.5 Z"
                            className="highcharts-halo highcharts-color-undefined"
                            fillOpacity="0.25"
                          />
                          <path
                            fill="#ff686b"
                            d="M 83 47.69999999999999 A 4 4 0 1 1 82.99999800000016 47.69600000066665 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ff686b"
                            d="M 242 302.1 A 4 4 0 1 1 241.99999800000018 302.09600000066666 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ff686b"
                            d="M 401 238.5 A 4 4 0 1 1 400.9999980000002 238.49600000066667 Z"
                            className="highcharts-point "
                            strokeWidth={1}
                          />
                          <path
                            fill="#ff686b"
                            d="M 560 306.075 A 4 4 0 1 1 559.9999980000001 306.07100000066663 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ff686b"
                            d="M 718 318 A 4 4 0 1 1 717.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ff686b"
                            d="M 877 318 A 4 4 0 1 1 876.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#ff686b"
                            d="M 1036 318 A 4 4 0 1 1 1035.9999980000002 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-series highcharts-series-3 highcharts-line-series "
                          transform="translate(41,10) scale(1 1)"
                          clipPath="url(#highcharts-2ei86u3-1)"
                        >
                          <path
                            fill="none"
                            d="M 79.428571428571 234.52499999999998 L 238.28571428571 206.7 L 397.14285714286 234.52499999999998 L 556 170.92499999999998 L 714.85714285714 274.275 L 873.71428571429 318 L 1032.5714285714 318"
                            className="highcharts-graph"
                            stroke="#16a704"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            fill="none"
                            d="M 69.428571428571 234.52499999999998 L 79.428571428571 234.52499999999998 L 238.28571428571 206.7 L 397.14285714286 234.52499999999998 L 556 170.92499999999998 L 714.85714285714 274.275 L 873.71428571429 318 L 1032.5714285714 318 L 1042.5714285714 318"
                            strokeLinejoin="round"
                            visibility="visible"
                            stroke="rgba(192,192,192,0.0001)"
                            strokeWidth={22}
                            className="highcharts-tracker"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-3 highcharts-line-series  highcharts-tracker"
                          transform="translate(41,10) scale(1 1)"
                        >
                          <path
                            fill="#16a704"
                            visibility="hidden"
                            d="M 397 234.52499999999998 A 0 0 0 1 1 397 234.52499999999998 Z"
                            className="highcharts-halo highcharts-color-undefined"
                            fillOpacity="0.25"
                          />
                          <path
                            fill="#16a704"
                            d="M 83 234.52499999999998 A 4 4 0 1 1 82.99999800000016 234.52100000066665 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#16a704"
                            d="M 242 206.7 A 4 4 0 1 1 241.99999800000018 206.69600000066666 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#16a704"
                            d="M 401 234.52499999999998 A 4 4 0 1 1 400.9999980000002 234.52100000066665 Z"
                            className="highcharts-point "
                            strokeWidth={1}
                          />
                          <path
                            fill="#16a704"
                            d="M 560 170.92499999999998 A 4 4 0 1 1 559.9999980000001 170.92100000066665 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#16a704"
                            d="M 718 274.275 A 4 4 0 1 1 717.9999980000001 274.2710000006666 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#16a704"
                            d="M 877 318 A 4 4 0 1 1 876.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#16a704"
                            d="M 1036 318 A 4 4 0 1 1 1035.9999980000002 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-series highcharts-series-4 highcharts-line-series "
                          transform="translate(41,10) scale(1 1)"
                          clipPath="url(#highcharts-2ei86u3-1)"
                        >
                          <path
                            fill="none"
                            d="M 79.428571428571 318 L 238.28571428571 318 L 397.14285714286 318 L 556 318 L 714.85714285714 318 L 873.71428571429 318 L 1032.5714285714 318"
                            className="highcharts-graph"
                            stroke="#f5ee11"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                          <path
                            fill="none"
                            d="M 69.428571428571 318 L 79.428571428571 318 L 238.28571428571 318 L 397.14285714286 318 L 556 318 L 714.85714285714 318 L 873.71428571429 318 L 1032.5714285714 318 L 1042.5714285714 318"
                            strokeLinejoin="round"
                            visibility="visible"
                            stroke="rgba(192,192,192,0.0001)"
                            strokeWidth={22}
                            className="highcharts-tracker"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-4 highcharts-line-series  highcharts-tracker"
                          transform="translate(41,10) scale(1 1)"
                        >
                          <path
                            fill="#f5ee11"
                            visibility="hidden"
                            d="M 397 318 A 0 0 0 1 1 397 318 Z"
                            className="highcharts-halo highcharts-color-undefined"
                            fillOpacity="0.25"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 83 318 A 4 4 0 1 1 82.99999800000016 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 242 318 A 4 4 0 1 1 241.99999800000018 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 401 318 A 4 4 0 1 1 400.9999980000002 317.99600000066664 Z"
                            className="highcharts-point "
                            strokeWidth={1}
                          />
                          <path
                            fill="#f5ee11"
                            d="M 560 318 A 4 4 0 1 1 559.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 718 318 A 4 4 0 1 1 717.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 877 318 A 4 4 0 1 1 876.9999980000001 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                          <path
                            fill="#f5ee11"
                            d="M 1036 318 A 4 4 0 1 1 1035.9999980000002 317.99600000066664 Z"
                            className="highcharts-point"
                          />
                        </g>
                      </g>
                      <text
                        x={582}
                        textAnchor="middle"
                        className="highcharts-title"
                        style={{
                          color: "#333333",
                          fontSize: 18,
                          fill: "#333333",
                        }}
                        y={24}
                      />
                      <text
                        x={582}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        style={{ color: "#666666", fill: "#666666" }}
                        y={24}
                      />
                      <g
                        className="highcharts-legend"
                        transform="translate(82,361)"
                      >
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          x={0}
                          y={0}
                          width={999}
                          height={24}
                          visibility="visible"
                        />
                        <g>
                          <g>
                            <g
                              className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-0"
                              transform="translate(8,3)"
                            >
                              <path
                                fill="none"
                                d="M 0 11 L 16 11"
                                className="highcharts-graph"
                                stroke="#00789c"
                                strokeWidth={2}
                              />
                              <path
                                fill="#00789c"
                                d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z"
                                className="highcharts-point"
                              />
                              <text
                                x={21}
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fill: "#333333",
                                }}
                                textAnchor="start"
                                y={15}
                              >
                                <tspan>Car Compatibility Check</tspan>
                              </text>
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-1"
                              transform="translate(188.35678100585938,3)"
                            >
                              <path
                                fill="none"
                                d="M 0 11 L 16 11"
                                className="highcharts-graph"
                                stroke="#ef1fdf"
                                strokeWidth={2}
                              />
                              <path
                                fill="#ef1fdf"
                                d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z"
                                className="highcharts-point"
                              />
                              <text
                                x={21}
                                y={15}
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fill: "#333333",
                                }}
                                textAnchor="start"
                              >
                                <tspan>Business Compatibility Check</tspan>
                              </text>
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-2"
                              transform="translate(402.05926513671875,3)"
                            >
                              <path
                                fill="none"
                                d="M 0 11 L 16 11"
                                className="highcharts-graph"
                                stroke="#ff686b"
                                strokeWidth={2}
                              />
                              <path
                                fill="#ff686b"
                                d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z"
                                className="highcharts-point"
                              />
                              <text
                                x={21}
                                y={15}
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fill: "#333333",
                                }}
                                textAnchor="start"
                              >
                                <tspan>Property Compatibility Check</tspan>
                              </text>
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-3"
                              transform="translate(611.7539367675781,3)"
                            >
                              <path
                                fill="none"
                                d="M 0 11 L 16 11"
                                className="highcharts-graph"
                                stroke="#16a704"
                                strokeWidth={2}
                              />
                              <path
                                fill="#16a704"
                                d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z"
                                className="highcharts-point"
                              />
                              <text
                                x={21}
                                y={15}
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fill: "#333333",
                                }}
                                textAnchor="start"
                              >
                                <tspan>Relation Compatibility Check</tspan>
                              </text>
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-line-series highcharts-color-undefined highcharts-series-4"
                              transform="translate(819.4388427734375,3)"
                            >
                              <path
                                fill="none"
                                d="M 0 11 L 16 11"
                                className="highcharts-graph"
                                stroke="#f5ee11"
                                strokeWidth={2}
                              />
                              <path
                                fill="#f5ee11"
                                d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z"
                                className="highcharts-point"
                              />
                              <text
                                x={21}
                                y={15}
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  fill: "#333333",
                                }}
                                textAnchor="start"
                              >
                                <tspan>Other Compatibility Check</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="highcharts-axis-labels highcharts-xaxis-labels ">
                        <text
                          x="120.42857142856856"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 25, 2024</tspan>
                        </text>
                        <text
                          x="279.28571428571854"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 26, 2024</tspan>
                        </text>
                        <text
                          x="438.1428571428586"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 27, 2024</tspan>
                        </text>
                        <text
                          x="596.9999999999985"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 28, 2024</tspan>
                        </text>
                        <text
                          x="755.8571428571386"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 29, 2024</tspan>
                        </text>
                        <text
                          x="914.7142857142885"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Nov 30, 2024</tspan>
                        </text>
                        <text
                          x="1073.5714285714287"
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 12,
                            fill: "#1b00ff",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y={348}
                          opacity={1}
                        >
                          <tspan>Dec 01, 2024</tspan>
                        </text>
                      </g>
                      <g className="highcharts-axis-labels highcharts-yaxis-labels ">
                        <text
                          x={26}
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 14,
                            fill: "#1b00ff",
                          }}
                          textAnchor="end"
                          transform="translate(0,0)"
                          y={334}
                          opacity={1}
                        >
                          0
                        </text>
                        <text
                          x={26}
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 14,
                            fill: "#1b00ff",
                          }}
                          textAnchor="end"
                          transform="translate(0,0)"
                          y={255}
                          opacity={1}
                        >
                          20
                        </text>
                        <text
                          x={26}
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 14,
                            fill: "#1b00ff",
                          }}
                          textAnchor="end"
                          transform="translate(0,0)"
                          y={175}
                          opacity={1}
                        >
                          40
                        </text>
                        <text
                          x={26}
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 14,
                            fill: "#1b00ff",
                          }}
                          textAnchor="end"
                          transform="translate(0,0)"
                          y={96}
                          opacity={1}
                        >
                          60
                        </text>
                        <text
                          x={26}
                          style={{
                            color: "#1b00ff",
                            cursor: "default",
                            fontSize: 14,
                            fill: "#1b00ff",
                          }}
                          textAnchor="end"
                          transform="translate(0,0)"
                          y={16}
                          opacity={1}
                        >
                          80
                        </text>
                      </g>
                      <g
                        className="highcharts-label highcharts-tooltip highcharts-color-undefined"
                        style={{
                          cursor: "default",
                          pointerEvents: "none",
                          whiteSpace: "nowrap",
                        }}
                        transform="translate(221,-9999)"
                        opacity={0}
                        visibility="visible"
                      >
                        <path
                          fill="none"
                          className="highcharts-label-box highcharts-tooltip-box"
                          d="M 3.5 0.5 L 198.5 0.5 C 201.5 0.5 201.5 0.5 201.5 3.5 L 201.5 100.5 C 201.5 103.5 201.5 103.5 198.5 103.5 L 3.5 103.5 C 0.5 103.5 0.5 103.5 0.5 100.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                          isshadow="true"
                          stroke="#000000"
                          strokeOpacity="0.049999999999999996"
                          strokeWidth={5}
                          transform="translate(1, 1)"
                        />
                        <path
                          fill="none"
                          className="highcharts-label-box highcharts-tooltip-box"
                          d="M 3.5 0.5 L 198.5 0.5 C 201.5 0.5 201.5 0.5 201.5 3.5 L 201.5 100.5 C 201.5 103.5 201.5 103.5 198.5 103.5 L 3.5 103.5 C 0.5 103.5 0.5 103.5 0.5 100.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                          isshadow="true"
                          stroke="#000000"
                          strokeOpacity="0.09999999999999999"
                          strokeWidth={3}
                          transform="translate(1, 1)"
                        />
                        <path
                          fill="none"
                          className="highcharts-label-box highcharts-tooltip-box"
                          d="M 3.5 0.5 L 198.5 0.5 C 201.5 0.5 201.5 0.5 201.5 3.5 L 201.5 100.5 C 201.5 103.5 201.5 103.5 198.5 103.5 L 3.5 103.5 C 0.5 103.5 0.5 103.5 0.5 100.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                          isshadow="true"
                          stroke="#000000"
                          strokeOpacity="0.15"
                          strokeWidth={1}
                          transform="translate(1, 1)"
                        />
                        <path
                          fill="rgba(247,247,247,0.85)"
                          className="highcharts-label-box highcharts-tooltip-box"
                          d="M 3.5 0.5 L 198.5 0.5 C 201.5 0.5 201.5 0.5 201.5 3.5 L 201.5 100.5 C 201.5 103.5 201.5 103.5 198.5 103.5 L 3.5 103.5 C 0.5 103.5 0.5 103.5 0.5 100.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                          stroke="#00789c"
                          strokeWidth={1}
                        />
                        <text
                          x={8}
                          style={{
                            fontSize: 12,
                            color: "#333333",
                            fill: "#333333",
                          }}
                          y={20}
                        >
                          <tspan style={{ fontSize: 10 }}>Nov 27, 2024</tspan>
                          <tspan style={{ fill: "#00789c" }} x={8} dy={15}>
                            ●
                          </tspan>
                          <tspan dx={0}> Car Compatibility Check: </tspan>
                          <tspan style={{ fontWeight: "bold" }} dx={0}>
                            36
                          </tspan>
                          <tspan style={{ fill: "#ef1fdf" }} x={8} dy={15}>
                            ●
                          </tspan>
                          <tspan dx={0}> Business Compatibility Check: </tspan>
                          <tspan style={{ fontWeight: "bold" }} dx={0}>
                            8
                          </tspan>
                          <tspan style={{ fill: "#ff686b" }} x={8} dy={15}>
                            ●
                          </tspan>
                          <tspan dx={0}> Property Compatibility Check: </tspan>
                          <tspan style={{ fontWeight: "bold" }} dx={0}>
                            20
                          </tspan>
                          <tspan style={{ fill: "#16a704" }} x={8} dy={15}>
                            ●
                          </tspan>
                          <tspan dx={0}> Relation Compatibility Check: </tspan>
                          <tspan style={{ fontWeight: "bold" }} dx={0}>
                            21
                          </tspan>
                          <tspan style={{ fill: "#f5ee11" }} x={8} dy={15}>
                            ●
                          </tspan>
                          <tspan dx={0}> Other Compatibility Check: </tspan>
                          <tspan style={{ fontWeight: "bold" }} dx={0}>
                            0
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wrap pd-20 mb-20 card-box">
            ASTAR8 - Designed By{" "}
            <a href="https://www.designersx.us/" target="_blank">
              DesignersX
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
