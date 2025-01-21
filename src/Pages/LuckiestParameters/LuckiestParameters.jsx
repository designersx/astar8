import React, { useEffect, useState } from "react";
import Header from "../../component/Dashboard/Header";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { getLuckiestParameter, getLuckiestParameters } from "../../lib/Store"; // Assuming you have a function to fetch the API
import Loader from "../../component/Loader/Loader"; // Assuming you have a Loader component

const LuckiestParameters = () => {
  const [luckiestParams, setLuckiestParams] = useState([]);
  console.log("lucc",luckiestParams)
  const [loading, setLoading] = useState(false);

  const fetchLuckiestParameters = async () => {
    setLoading(true); // Start loading before API call
    try {
      const response = await getLuckiestParameter(); // Fetch data from the API
      setLuckiestParams(response.luckiest_parameters); // Set the fetched data to state
    } catch (err) {
      console.log("Error fetching data:", err);
    } finally {
      setLoading(false); // Stop loading after API call is done
    }
  };

  useEffect(() => {
    fetchLuckiestParameters(); // Fetch data when component is mounted

    const handleStorageChange = () => {
      fetchLuckiestParameters(); // Refetch data if there are changes in storage
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <Header />
      <div className="main-container pb-3">
        <div className="pd-20 card-box mb-30">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h2>Luckiest Parameters</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Show Loader if data is still being fetched */}
        {loading ? (
          <Loader />
        ) : (
          <div className="pd-20 card-box mb-30">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Number</th>
                  <th>Lucky Colors</th>
                  <th>Lucky Gems</th>
                  <th width="280px">Action</th>
                </tr>
                {luckiestParams?.map((param) => (
                  <tr key={param.id}>
                    <td>{param.number}</td>
                    <td>{param.lucky_colours}</td>
                    <td>{param.lucky_gems}</td>
                    <td>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <a
                          className="btn btn-info"
                          href={`https://be.astar8.com/luckiest_parameters/${param.id}`}
                          title="View"
                          target="_blank"
                        >
                          <IoIosEye size={18} />
                        </a>
                        <a
                          className="btn btn-primary"
                          href={`https://be.astar8.com/luckiest_parameters/${param.id}/edit`}
                          title="Edit"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default LuckiestParameters;
