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

const allLinesActive = Object.keys(COLORS).reduce((acc, key) => {
  acc[key] = true;
  return acc;
}, {});

const DashboardChart = () => {
  const [compDays, setCompDays] = useState("week");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeLines, setActiveLines] = useState(allLinesActive);
  const [selectedLine, setSelectedLine] = useState(null); // Track which line is selected

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

  const filteredData = () => {
    const rawData = compDays === "month" ? data : data.slice(-7);
    return rawData.map((item) => ({
      date: item.date,
      car: item.car || 0,
      business: item.business || 0,
      property: item.property || 0,
      relation: item.relation || 0,
      other: item.other || 0,
      travel: item.travel || 0,
    }));
  };

  const handleLegendClick = (e) => {
    const clickedKey = e.dataKey;

    // If the same option is clicked again, show all lines
    if (selectedLine === clickedKey) {
      setActiveLines(allLinesActive);
      setSelectedLine(null);
    } else {
      // Otherwise, highlight only the selected line
      setActiveLines({
        car: false,
        business: false,
        property: false,
        relation: false,
        other: false,
        travel: false,
        [clickedKey]: true,
      });
      setSelectedLine(clickedKey);
    }
  };

  const handleReset = () => {
    setActiveLines(allLinesActive);
    setSelectedLine(null);
  };

  return (
    <div className="row" style={{ marginTop: "35px" }}>
      <div className="col-lg-12 mb-30">
        <div className="card-box pd-30" style={{ paddingLeft: "20px" }}>
          {/* Title and Dropdown */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="h5 font-weight-bold">Compatibility User Record</h4>

            <select
              className="custom-select col-sm-3 col-md-2"
              value={compDays}
              onChange={handleSelectChange}
              style={{ marginLeft: "10px" }}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          {/* Reset Button */}
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

                {Object.keys(activeLines).map(
                  (key) =>
                    activeLines[key] && (
                      <Line
                        key={key}
                        type="monotone"
                        dataKey={key}
                        stroke={COLORS[key]}
                        strokeWidth={selectedLine === key ? 4 : 2.5} // Highlight selected line
                        dot={{
                          r: selectedLine === key ? 6 : 4,
                          strokeWidth: 2,
                        }} // Bigger dots on selection
                        activeDot={{ r: selectedLine === key ? 8 : 6 }} // Larger active dots
                        name={`${key.charAt(0).toUpperCase()}${key.slice(
                          1
                        )} Compatibility`}
                      />
                    )
                )}

                {/* Legend moved below */}
                <Legend
                  verticalAlign="bottom"
                  // height={60}
                  wrapperStyle={{
                    // marginTop: "25px",
                    bottom: "15px",
                    left: "20px",
                    cursor: "pointer",
                  }}
                  onClick={handleLegendClick}
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
