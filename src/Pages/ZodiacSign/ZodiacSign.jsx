import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Dashboard/Header";
import Loader from "../../component/Loader/Loader";
import { getZodiacSign } from "../../lib/Store";

const ZodiacSign = () => {
  const [zodiacSigns, setzodiacSigns] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Personal Months entries
  const fetchSigns = async () => {
    setLoading(true);
    try {
      const response = await getZodiacSign();
      if (response.status === true) {
        setzodiacSigns(response.signs || []);
      }
    } catch (err) {
      console.error("Error fetching personal years:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSigns();
    const handleStorageChange = () => fetchSigns();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleEdit = (item) => {
    window.open("/zodic_signs/edit", "_blank");
    localStorage.setItem("editData", JSON.stringify(item));
  };
  return (
    <>
      {/* <Header /> */}
      <div className="main-container">
        <div className="pd-20 card-box mb-30">
          <h2>Zodiac Signs</h2>
        </div>

        <div className="pd-20 card-box mb-30">
          {loading ? (
            <Loader />
          ) : (
            <div className="card-block table-border-style">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Zodiac Sign</th>
                    <th>Zodiac Number</th>
                    <th>Zodiac Day</th>
                    <th style={{ width: "280px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {zodiacSigns?.map(
                    ({ id, title, zodic_sign, zodic_number, zodic_day }) => (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{zodic_sign}</td>
                        <td>{zodic_number}</td>
                        <td>{zodic_day}</td>
                        <td>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                handleEdit({
                                  id,
                                  title,
                                  zodic_sign,
                                  zodic_number,
                                  zodic_day,
                                })
                              }
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                  {zodiacSigns?.length === 0 && (
                    <tr>
                      <td colSpan={3} style={{ textAlign: "center" }}>
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ZodiacSign;
