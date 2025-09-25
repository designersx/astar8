import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarLoader } from "react-spinners"; // Import BarLoader
import { dashboardHistory } from "../../lib/Store";

const COLORS = {
  car: "#1E88E5",
  business: "#E53935",
  property: "#FB8C00",
  relation: "#43A047",
  other: "#8E24AA",
  travel: "#00ACC1",
};

const DashboardChart = () => {
  const [compDays, setCompDays] = useState("week");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLine, setSelectedLine] = useState("all");

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const response = await dashboardHistory();
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error("API response is not an array", response.data);
      }
    } catch (error) {
      console.log(error, "Error fetching history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSelectChange = (e) => {
    setCompDays(e.target.value);
  };

  const handleLineSelectionChange = (e) => {
    setSelectedLine(e.target.value); // Update selected line
  };

  // const filteredData = () => {
  //   const rawData = compDays === "month" ? data : data.slice(-7);
  //   return rawData.map((item) => ({
  //     date: item.date,
  //     car: item.car || 0,
  //     business: item.business || 0,
  //     property: item.property || 0,
  //     relation: item.relation || 0,
  //     other: item.other || 0,
  //     travel: item.travel || 0,
  //   }));
  // };

  const handleReset = () => {
    setSelectedLine("all"); // Reset to the default selection: 'car'
  };

  // New logic
  const toDate = (d) => new Date(d); // item.date is like "Fri Aug 01 2025"
  const now = new Date();
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);

  const getRangeData = () => {
    if (!Array.isArray(data) || data.length === 0) return [];

    if (compDays === "week") {
      // keep the last 7 points (already sorted from backend)
      return data.slice(-7);
    }

    if (compDays === "lastMonth") {
      // only last month dates
      return data.filter((item) => {
        const d = toDate(item.date);
        return d >= startOfLastMonth && d <= endOfLastMonth;
      });
    }

    // "month" -> only current month dates
    return data.filter((item) => {
      const d = toDate(item.date);
      return d >= startOfCurrentMonth; // up to today (data already capped)
    });
  };

  const normalize = (arr) =>
    arr.map((item) => ({
      date: item.date,
      car: item.car || 0,
      business: item.business || 0,
      property: item.property || 0,
      relation: item.relation || 0,
      other: item.other || 0,
      travel: item.travel || 0,
    }));

  const filteredData = () => normalize(getRangeData());

  // keep your “one-point” padding logic for nicer tooltip/line rendering
  const filteredData1 = () => {
    const arr = normalize(getRangeData());
    if (arr.length === 1) {
      return [
        { date: "", car: 0, business: 0, property: 0, relation: 0, other: 0, travel: 0 },
        arr[0],
      ];
    }
    return arr;
  };





  // Function to check if a line should be shown
  const shouldShowLine = (line) => {
    return selectedLine === "all" || selectedLine === line;
  };

  // const filteredData1 = () => {
  //   const rawSlice = compDays === "month" ? data : data.slice(-7);

  //   const arr = rawSlice.map((item) => ({
  //     date: item.date,
  //     car: item.car || 0,
  //     business: item.business || 0,
  //     property: item.property || 0,
  //     relation: item.relation || 0,
  //     other: item.other || 0,
  //     travel: item.travel || 0,
  //   }));

  //   if (arr.length === 1) {
  //     const single = arr[0];
  //     // first: zero values with an empty date
  //     const zeroPoint = {
  //       date: "",
  //       car: 0,
  //       business: 0,
  //       property: 0,
  //       relation: 0,
  //       other: 0,
  //       travel: 0,
  //     };
  //     // second: the real data on its actual date
  //     return [zeroPoint, single];
  //   }

  //   return arr;
  // };

  const CustomTooltip = ({ active }) => {
    if (!active) return null;

    const hoverData = filteredData1()[1] || {};
    // decide which keys to render
    const keysToShow =
      selectedLine === "all" ? Object.keys(COLORS) : [selectedLine];

    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>
          {hoverData.date}
        </p>
        {keysToShow.map((key) => (
          <p
            key={key}
            style={{
              margin: "4px 0",
              fontSize: 16,
              color: COLORS[key],
            }}
          >
            {key === "other"
              ? "Other Person's Compatibility"
              : `${key.charAt(0).toUpperCase() + key.slice(1)} Compatibility`}
            : {hoverData[key]}
          </p>
        ))}
      </div>
    );
  };



  return (
    <div className="row" style={{ marginTop: "15px" }}>
      <div className="col-lg-12 mb-30">
        <div className="card-box pd-30" style={{ paddingLeft: "20px" }}>
          {/* Title and Dropdown */}
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              {/* Title on the left */}
              <h4 className="h5 font-weight-bold">Compatibility User Record</h4>

              {/* Dropdowns on the right */}
              <div className="d-flex align-items-center">
                {/* Compatibility Type Dropdown */}
                <select
                  id="compatibility-select"
                  className="custom-select col-sm-3 col-md-2"
                  value={selectedLine}
                  onChange={handleLineSelectionChange}
                  style={{
                    marginRight: "10px",
                    cursor: "pointer",
                    width: "auto",
                    maxWidth: "fit-content",
                  }} // Set a fixed width for the dropdown
                >
                  <option value="all">Show All Compatibility</option>
                  {Object.keys(COLORS).map((key) => (
                    <option key={key} value={key}>
                      Show {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      Compatibility
                    </option>
                  ))}
                </select>

                {/* Time Period Dropdown */}
                <select
                  className="custom-select col-sm-3 col-md-2"
                  value={compDays}
                  onChange={handleSelectChange}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    width: "150px",
                    maxWidth: "fit-content",
                  }} // Set a fixed width for the dropdown
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="lastMonth">Last Month</option> {/* ⬅️ new */}
                </select>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          {selectedLine !== "all" && (
            <div className="d-flex justify-content-end mb-1">
              <span
                className="text-primary"
                style={{ cursor: "pointer", textDecoration: "none" }}
                onClick={handleReset}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                Reset Chart
              </span>
            </div>
          )}

          {/* Chart or Loader */}
          {loading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <BarLoader width={150} color="#1E88E5" loading={loading} />
              <h4 style={{ marginTop: "10px", color: "#555" }}>
                Loading Chart...
              </h4>
            </div>
          ) : filteredData().length === 1 ? (
            <ResponsiveContainer width="100%" height={450}>
              <LineChart
                data={filteredData1()}
                margin={{ top: 20, right: 30, left: -10, bottom: 50 }} // Increased bottom margin for legend
              >
                <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => {
                    const d = new Date(date);
                    return isNaN(d)
                      ? date
                      : d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                      });
                  }}
                  tick={{ fontSize: 13 }}
                />
                <YAxis tick={{ fontSize: 13 }} />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: "#ddd", strokeWidth: 2 }}
                />

                {/* Render the selected line(s) */}
                {Object.keys(COLORS).map((line) =>
                  shouldShowLine(line) ? (
                    <Line
                      key={line}
                      type="monotone"
                      dataKey={line}
                      stroke={COLORS[line]}
                      strokeWidth={2.5}
                      dot={false} // Disable the default dots
                      activeDot={{ r: 6 }} // Show dot on hover
                      name={
                        line === "other"
                          ? "Other Person's Compatibility"
                          : `${line.charAt(0).toUpperCase()}${line.slice(
                            1
                          )} Compatibility`
                      }
                    />
                  ) : null
                )}

                {/* Legend moved below */}
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{
                    bottom: "15px",
                    left: "20px",
                    // cursor: "pointer",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height={450}>
              <LineChart
                data={filteredData()}
                margin={{ top: 20, right: 30, left: -10, bottom: 50 }} // Increased bottom margin for legend
              >
                <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => {
                    const d = new Date(date);
                    return isNaN(d)
                      ? date
                      : d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                      });
                  }}
                  tick={{ fontSize: 13 }}
                />
                <YAxis tick={{ fontSize: 13 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                  cursor={{ stroke: "#ddd", strokeWidth: 2 }}
                />

                {/* Render the selected line(s) */}
                {Object.keys(COLORS).map((line) =>
                  shouldShowLine(line) ? (
                    <Line
                      key={line}
                      type="monotone"
                      dataKey={line}
                      stroke={COLORS[line]}
                      strokeWidth={2.5}
                      dot={false} // Disable the default dots
                      activeDot={{ r: 6 }} // Show dot on hover
                      name={
                        line === "other"
                          ? "Other Person's Compatibility"
                          : `${line.charAt(0).toUpperCase()}${line.slice(
                            1
                          )} Compatibility`
                      }
                    />
                  ) : null
                )}

                {/* Legend moved below */}
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{
                    bottom: "15px",
                    left: "20px",
                    // cursor: "pointer",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
