import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { useLocation } from "react-router-dom";

const ShowComp = () => {
  const location = useLocation();
  const { number, description } = location.state || {};
  console.log("dasdas",{ number, description })

  // const [data, setData] = useState(null); 
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       // Replace the URL with your API endpoint
  //       const response = await fetch(`https://example.com/api/data/${id}`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const result = await response.json();
  //       setData(result); // Set the fetched data
  //     } catch (err) {
  //       setError(err.message); // Handle errors
  //     } finally {
  //       setLoading(false); // Stop loading
  //     }
  //   };

  //   if (id) {
  //     fetchData(); // Call the fetch function if id is provided
  //   }
  // }, [id]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  if (!number || !description) {
    return <div>No data available to display.</div>;
  }


  return (
    <>
      <Header />
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>d</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Number:</strong> {number}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="form-group">
                <strong>Description:</strong> {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowComp;
