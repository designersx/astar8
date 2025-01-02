import React, { createContext, useState, useEffect } from "react";
import { GetUserData } from "../lib/Store";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const email = localStorage.getItem("userEmail");
      const token = localStorage.getItem("UserToken");
      try {
        const response = await GetUserData(email, token);
        if (response) {
          setData(response.user);
        }
      } catch (error) {
        console.log(error, "error");
      }
    };
    getUserDetails();
  }, []);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
