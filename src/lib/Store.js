import axios from "axios";
export const Url = "http://localhost:5000";
export const LoginApi = async (email, password) => {
  try {
    const response = await axios.post(
      `${Url}/r367jklp09i/adm36g5n56`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data, "login api data");
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const GetUserData = async (email, token) => {
  try {
    const response = await axios.get(
      `${Url}/r367jklp09i/g346d67uio?email=${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("errorrr", error);
    return error;
  }
};
export const ResetPasswordApi = async (
  email,
  oldpassword,
  newpassword,
  token
) => {
  try {
    const response = await axios.put(
      `${Url}/r367jklp09i/r237ujito9`,
      {
        email: email,
        oldPassword: oldpassword,
        newPassword: newpassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      return {
        error:
          error.response.data.error ||
          "An error occurred while resetting the password.",
      };
    } else {
      return { error: "Network error or request failure." };
    }
  }
};
export const UpdateProfile = async (id, name, token) => {
  try {
    const response = await axios.put(
      `${Url}/r367jklp09i/us4rth71wq`,
      { id, name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    if (data) {
      return data;
    } else {
      throw new Error("Failed to update profile");
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
export const updateImage = async (token, formdata) => {
  try {
    const response = await axios.put(
      `${Url}/r367jklp09i/i67cjd43tf`,
      formdata,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllUsers = async (token, status = null) => {
  try {
    let url = `${Url}/u1r5a03ki8/usr123erd6`;
    if (status !== null) {
      url += `?is_active=${status}`;
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { Users: [] };
  }
};
// export const filterUsers = async (token, filters = {}) => {
//   try {
//     const queryParams = new URLSearchParams(filters).toString();
//     const response = await axios.get(`${Url}/users/usrfltr45t?${queryParams}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error filtering users:", error);
//     return { error: "Failed to filter users" };
//   }
// };

export const getAdminUserMessages = async (finalData) => {
  try {
    const response = await axios.post(
      `${Url}/a3dm8k40ok/4fdfg8trc1`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserChatMessages = async (userId) => {
  try {
    const response = await axios.post(`${Url}/m1afg56903/zopdyhg57d`, {
      userId: userId,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// message Seen Unseen
export const setSeenMessages = async (data) => {
  try {
    const response = await axios.post(`${Url}/m1afg56903/124fglj80r`, data);
    const data1 = await response.data;
    return data;
  } catch (error) {
    console.log("eerrrrrr", error);
    return error;
  }
};

// add daily forecast
export const addDailyForecast = async (token, date, prediction) => {
  try {
    const response = await axios.post(
      `${Url}/p1g6s9ik3n/dly12g6ui8`,
      { date, prediction },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log("errorrr", error);
    return error;
  }
};

// ..get daily like dislike

// export const getDailyLikeDislike = async (predictionId) => {
//   try {
//     const response = await axios.get(
//       `${Url}/p1g6s9ik3n/gj276m301s/${predictionId}`
//     );
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.log(error, "error");
//     return error;
//   }
// };

// get forecast
export const getForecastData = async (token, status) => {
  try {
    const response = await axios.get(
      `${Url}/p1g6s9ik3n/dlyf45v3rf?status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("errorrr", error);
    return error;
  }
};

// .admin dashboard api
export const dashboardApi = async (req, res) => {
  try {
    const response = await axios.get(`${Url}/d8km1ch50/d37km1o0qf`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
