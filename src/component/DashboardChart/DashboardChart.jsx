// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { dashboardHistory } from "../../lib/Store";

// const data = [
//   {
//     date: "Jan 1, 2025",
//     car: 4,
//     business: 80,
//     property: 90,
//     relation: 5,
//     other: 0,
//   },
//   {
//     date: "Jan 2, 2025",
//     car: 5,
//     business: 10,
//     property: 15,
//     relation: 85,
//     other: 0,
//   },
//   {
//     date: "Jan 3, 2025",
//     car: 5,
//     business: 30,
//     property: 20,
//     relation: 28,
//     other: 0,
//   },
//   {
//     date: "Jan 4, 2025",
//     car: 5,
//     business: 20,
//     property: 80,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 5, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 6, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 7, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 8, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 9, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 10, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 11, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 12, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 13, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 14, 2025",
//     car: 5,
//     business: 24,
//     property: 60,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 15, 2025",
//     car: 5,
//     business: 28,
//     property: 19,
//     relation: 26,
//     other: 0,
//   },
//   {
//     date: "Jan 16, 2025",
//     car: 5,
//     business: 23,
//     property: 14,
//     relation: 27,
//     other: 0,
//   },
//   {
//     date: "Jan 17, 2025",
//     car: 2,
//     business: 18,
//     property: 12,
//     relation: 22,
//     other: 0,
//   },
//   {
//     date: "Jan 18, 2025",
//     car: 2,
//     business: 10,
//     property: 40,
//     relation: 35,
//     other: 0,
//   },
//   {
//     date: "Jan 19, 2025",
//     car: 5,
//     business: 2,
//     property: 18,
//     relation: 22,
//     other: 0,
//   },
//   {
//     date: "Jan 20, 2025",
//     car: 5,
//     business: 20,
//     property: 10,
//     relation: 25,
//     other: 0,
//   },
//   {
//     date: "Jan 21, 2025",
//     car: 7,
//     business: 15,
//     property: 8,
//     relation: 20,
//     other: 0,
//   },
//   {
//     date: "Jan 22, 2025",
//     car: 12,
//     business: 4,
//     property: 7,
//     relation: 28,
//     other: 0,
//   },
//   {
//     date: "Jan 23, 2025",
//     car: 3,
//     business: 2,
//     property: 5,
//     relation: 5,
//     other: 0,
//   },
//   {
//     date: "Jan 24, 2025",
//     car: 0,
//     business: 0,
//     property: 0,
//     relation: 0,
//     other: 0,
//   },
//   {
//     date: "Jan 25, 2025",
//     car: 0,
//     business: 0,
//     property: 0,
//     relation: 0,
//     other: 0,
//   },
//   {
//     date: "Jan 26, 2025",
//     car: 4,
//     business: 16,
//     property: 30,
//     relation: 50,
//     other: 0,
//   },
//   {
//     date: "Jan 27, 2025",
//     car: 4,
//     business: 12,
//     property: 30,
//     relation: 22,
//     other: 0,
//   },
//   {
//     date: "Jan 28, 2025",
//     car: 4,
//     business: 80,
//     property: 90,
//     relation: 5,
//     other: 0,
//   },
//   {
//     date: "Jan 29, 2025",
//     car: 4,
//     business: 10,
//     property: 20,
//     relation: 30,
//     other: 0,
//   },
//   {
//     date: "Jan 30, 2025",
//     car: 4,
//     business: 20,
//     property: 35,
//     relation: 22,
//     other: 0,
//   },
// ];

// const DashboardChart = () => {
//   const [compDays, setCompDays] = useState("week");
//   const [data,setdata]=useState([])
//   console.log(compDays, "compDays");

//   const fetchHistory = async (req, res) => {
//     try {
//       const response = await dashboardHistory();
//       setdata(response.data);
//     } catch (error) {
//       console.log(error, "Error");
//     }
//   };
//   useEffect(() => {
//     fetchHistory();
//   }, []);
//   const handleSelectChange = (event) => {
//     console.log(event, "event");
//     setCompDays(event.target.value);
//   };
//   const getFilteredData = () => {
//     if (compDays === "month") {
//       return data;
//     } else if (compDays === "week") {
//       return data.slice(Math.max(data.length - 7, 0));
//     }
//   };
//   return (
//     <div className="row" style={{ marginTop: "35px" }}>
//       <div className="col-lg-12 col-md-12 col-sm-12 mb-30">
//         <div className="card-box pd-30 height-100-p">
//           <div className="compChart d-flex justify-content-between mb-3">
//             <h4 className="mb-30 h5 font-weight-bold">
//               Compatibility User Record
//             </h4>
//             <div className="col-sm-2 col-md-2">
//               <select
//                 className="custom-select col-12"
//                 name="compdays"
//                 id="compdays"
//                 value={compDays}
//                 onChange={handleSelectChange}
//               >
//                 <option value="week">Weekly</option>
//                 <option value="month">Monthly</option>
//               </select>
//             </div>
//           </div>
//           <div style={{ width: "100%", height: "400px" }}>
//             <ResponsiveContainer>
//               <LineChart
//                 data={getFilteredData()}
//                 style={{ backgroundColor: "white" }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis
//                   dataKey="date"
//                   tickFormatter={(date) => {
//                     const d = new Date(date);
//                     return `${d.getDate()}/${d.getMonth() + 1}`;
//                   }}
//                   interval={Math.ceil(getFilteredData())}
//                   tick={{ angle: -30, fontSize: 12 }}
//                   tickMargin={7}
//                 />
//                 <YAxis />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#f5f5f5",
//                     borderRadius: "5px",
//                   }}
//                 />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="car"
//                   stroke="#0088FE"
//                   name="Car Compatibility Check"
//                   dot={{ r: 3 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="business"
//                   stroke="#FF00FF"
//                   name="Business Compatibility Check"
//                   dot={{ r: 3 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="property"
//                   stroke="#FF0000"
//                   name="Property Compatibility Check"
//                   dot={{ r: 3 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="relation"
//                   stroke="#00FF00"
//                   name="Relation Compatibility Check"
//                   dot={{ r: 3 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="other"
//                   stroke="#FFD700"
//                   name="Other Compatibility Check"
//                   dot={{ r: 3 }}
//                 />
//               </LineChart>

//               {/* <LineChart
//                 data={getFilteredData()}
//                 style={{ backgroundColor: "white"}}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis
//                   dataKey="date"
//                   tickFormatter={(date) => {
//                     const d = new Date(date);
//                     return `${d.getDate()}/${
//                       d.getMonth() + 1
//                     }/${d.getFullYear()}`;
//                   }}
//                   interval={0}
//                   tickCount={7}
//                   tick={{ angle: -45, dy: 10, fontSize: 10 }}
//                   tickMargin={20}
//                   padding={{ right: 15}}

//                 />
//                 <YAxis />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />

//                 <div style={{ marginTop: "30px" }}></div>
//                 <Line
//                   type="monotone"
//                   dataKey="car"
//                   stroke="#0088FE"
//                   name="Car Compatibility Check"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="business"
//                   stroke="#FF00FF"
//                   name="Business Compatibility Check"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="property"
//                   stroke="#FF0000"
//                   name="Property Compatibility Check"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="relation"
//                   stroke="#00FF00"
//                   name="Relation Compatibility Check"
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="other"
//                   stroke="#FFD700"
//                   name="Other Compatibility Check"
//                 />
//               </LineChart> */}
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardChart;

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
          {/* {!data && data.length === 0 ? (
            <>
              <h4 style={{ marginLeft: "45%", marginTop: "3%" }}>
                Loading chart...
              </h4>
              ;
            </>
          ) : (
            <>
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
                      name="Other Compatibility Check"
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          )} */}

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
                    name="Other Compatibility Check"
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
