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
import { dashboardHistory } from "../../lib/Store";

const DashboardChart = () => {
  const [compDays, setCompDays] = useState("week");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
console.log(data,"data")
  console.log(compDays, "compDays");

  const fetchHistory = async () => {
    try {
      setloading(true);
      const response = await dashboardHistory();
      console.log("Fetched Data:", response.data);

      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error("API response is not an array", response.data);
      }
    } catch (error) {
      console.log(error, "Error");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSelectChange = (event) => {
    console.log(event, "event");
    setCompDays(event.target.value);
  };

  const getFilteredData = () => {
    if (!data.length) return [];

    if (compDays === "month") {
      return data;
    } else if (compDays === "week") {
      return data.slice(-7);
    }
  };

  return (
    <div className="row" style={{ marginTop: "35px" }}>
      <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
        <div className="card-box pd-30 height-100-p">
          <div className="compChart d-flex justify-content-between mb-3">
            <h4 className="mb-30 h5 font-weight-bold">
              Compatibility User Record
            </h4>
            <div className="col-sm-2 col-md-2">
              <select
                className="custom-select col-12"
                name="compdays"
                id="compdays"
                value={compDays}
                onChange={handleSelectChange}
              >
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
              </select>
            </div>
          </div>

          {loading ? ( // ✅ Corrected condition
            <h4 style={{ marginLeft: "45%", marginTop: "3%" }}>
              Loading chart...
            </h4>
          ) : (
            <div style={{ width: "100%", height: "400px" }}>
              <ResponsiveContainer>
                <LineChart
                  data={getFilteredData()}
                  style={{ backgroundColor: "white" }}
                >
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => {
                      const d = new Date(date);
                      if (isNaN(d.getTime())) {
                        console.error("Invalid date format:", date);
                        return date;
                      }
                      return `${d.getDate()}/${d.getMonth() + 1}`;
                    }}
                    interval={0}
                    tick={{ angle: -30, fontSize: 12 }}
                    tickMargin={7}
                    padding={{ right: 20 }}
                  />

                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                    }}
                  />
                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="car"
                    stroke="#0088FE"
                    name="Car Compatibility Check"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="business"
                    stroke="#FF00FF"
                    name="Business Compatibility Check"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="property"
                    stroke="#FF0000"
                    name="Property Compatibility Check"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="relation"
                    stroke="#00FF00"
                    name="Relation Compatibility Check"
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="other"
                    stroke="#FFD700"
                    name="Another Person Name Reading Check"
                    dot={{ r: 3 }}
                  />
                     <Line
                    type="monotone"
                    dataKey="travel"
                    stroke="#00BFFF"
                    name="Travel Compatibility Check"
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
