import axios from "axios";
// export const Url = "http://localhost:5234";
// export const Url = "https://dev.astar8.com"
export const Url = "https://us-central1-astar8-llc.cloudfunctions.net/apiv1";
// export const Url = "http://127.0.0.1:5001/astar8-llc/us-central1/apiv1"; // testing urll

//admin login api
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

//  get admin profile dataa

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
    // console.log("errorrr", error);
    return error;
  }
};

// reset password api

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

// update profile api

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

//  update image api

export const updateImage = async (token, payload) => {
  console.log(token, payload, "token,payload");
  try {
    const response = await axios.put(`${Url}/r367jklp09i/i67cjd43tf`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

//  get all user api

export const getAllUsers = async (token, status = null) => {
  console.log("dasds", status);
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
    console.log("dataa");
    return data;
  } catch (error) {
    console.error(error);
    return { Users: [] };
  }
};

export const getAdminUserMessages = async (finalData) => {
  // console.log("dasdsa", finalData);
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

export const getUserChatMessages = async (finaldata) => {
  try {
    const response = await axios.post(
      `${Url}/m1afg56903/zopdyhg57d`,
      finaldata
    );
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
    const data1 = await response;
    return data1;
  } catch (error) {
    console.log("eerrrrrr", error);
    return error;
  }
};

// add daily forecast
export const addDailyForecast = async (token, date, prediction, user_id) => {
  // console.log("adtaaa",token, date, prediction, user_id)
  try {
    const response = await axios.post(
      `${Url}/p1g6s9ik3n/dly12g6ui8`,
      { user_id, date, prediction },
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
  // console.log("statusss", status);
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

// .. user details data click on eye in user page

export const userDetailedData = async (user_id, token) => {
  // console.log("dasasdd", user_id);
  try {
    const response = await axios.get(
      `${Url}/u163mjh02f/usrdlsp87a/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};

// 1- month subscription api

export const subscription1Action = async (id, token) => {
  try {
    const response = await axios.post(
      `${Url}/u1r5a03ki8/s510b4jkoz`,
      { userId: id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

export const subscription3Action = async (id, token) => {
  try {
    const response = await axios.post(
      `${Url}/u1r5a03ki8/s3j81ka0ok`,
      {
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

export const cancel1Action = async (id, token) => {
  try {
    const response = await axios.post(
      `${Url}/u1r5a03ki8/c18r502mjk`,
      {
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

export const cancel3Action = async (id, token) => {
  try {
    const response = await axios.post(
      `${Url}/u1r5a03ki8/c328ty4mfg`,
      {
        userId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// General Setting Subscription update Api
export const subscriptionsUpdateUser = async (finalData) => {
  try {
    const response = await axios.post(
      `${Url}/48fghd63rg/jgit90ept8`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Payment setting change api
export const paymentSettingChange = async (finalData) => {
  // console.log("asdasd0000000000", finalData);
  try {
    const response = await axios.post(`${Url}/stripe/458fjiy5dt`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Daily prediction Publish Button for Scheduled
export const publishButtonScheduled = async (e) => {
  const finalData = {
    predictionId: e,
  };
  try {
    const response = await axios.post(
      `${Url}/p1g6s9ik3n/45dsfr684t`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Daily prediction Cancel Button for Scheduled
export const cancelButtonScheduled = async (e) => {
  const finalData = {
    predictionId: e,
  };
  try {
    const response = await axios.post(
      `${Url}/p1g6s9ik3n/458fjguip3`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// super Admin APIs

// Module Types
//get module
export const getModuleTypes = async () => {
  try {
    const response = await axios.get(`${Url}/12ak80qmzp/1o93vfaplo`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit module
export const editModuleTypes = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/12ak80qmzp/1j63eopqmj`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

//Master Numbers
//get Master Number
export const getMasterNumber = async () => {
  try {
    const response = await axios.get(`${Url}/45cvfgtr54/dhfyg9877f`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Master Number
export const editMasterNumber = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/45cvfgtr54/458777fffu`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Luckiest parameter
//get Master Number
export const getLuckiestParameter = async () => {
  try {
    const response = await axios.get(`${Url}/fg47ghrfgf/7d8f8g7r8d`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Master Number
export const editLuckiestParameter = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/fg47ghrfgf/123cvb4fg7`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Name Reading
//get Name Reading
export const getNameReading = async () => {
  try {
    const response = await axios.get(`${Url}/174hs0ad4m/n2ofxpwq81`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Name Reading
export const editNameReading = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/174hs0ad4m/e10amvrghp`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// DOB Reading
//get DOB Reading
export const getDobReading = async () => {
  try {
    const response = await axios.get(`${Url}/2w7ui45io9/d19m4302k8`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit DOB Reading
export const editDobReading = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/2w7ui45io9/ed19ik45mo`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Primary Number
//get Primary Number
export const getPrimaryNumber = async () => {
  try {
    const response = await axios.get(`${Url}/p12qm75kiod/p12wqorty7`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Primary Number
export const editPrimaryNumber = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(
      `${Url}/p12qm75kiod/p2rwe34567m`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Magic Box
//get Magic Box
export const getMagicBox = async () => {
  try {
    const response = await axios.get(`${Url}/m1q2derf54/m1q2w3e4r5t`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Magic Box
export const editMagicBox = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/m1q2derf54/me30mjn45b`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Elemental number
//get Elemental number
export const getElementalNumber = async () => {
  try {
    const response = await axios.get(`${Url}/e2aemnjzlo/el2m6nbi9x`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit Elemental number
export const editElementalNumber = async (finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/m1q2derf54/me30mjn45b`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get destiny numbers
export const getDestinyNumbers = async () => {
  try {
    const response = await axios.get(`${Url}/ele1a2mbfg/de2ax56n8o`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// edit destiny number
export const editDestinyNumber = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/ele1a2mbfg/d1qmki7gr4`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// Add new video
export const addVideo = async (formData) => {
  try {
    const response = await axios.post(
      `${Url}/v1qaz2wsx3e/c23emki8zl`,
      formData
    );
    return response.data;
  } catch (err) {
    console.error("Error in addVideo:", err);
    throw err;
  }
};

//  get videos list api
export const Videos = async () => {
  try {
    const response = await axios.get(`${Url}/v1qaz2wsx3e/v123wazxsd`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit video list
export const editVideoList = async (finalData) => {
  try {
    const response = await axios.put(
      `${Url}/v1qaz2wsx3e/v543d6mk78`,
      finalData
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// delete Video 
export const deleteVideo = async (id) => {
  try {
    const response = await axios.post(
      `${Url}/v1qaz2wsx3e/kju78y89ut`,
      { id }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get lifecoach description
export const getLifeCoachdescription = async () => {
  try {
    const response = await axios.get(`${Url}/llwe32mjki/l1q2wazxvb`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit lifecoach description
export const editLifeCoackDEscription = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/llwe32mjki/eldk367890`, {
      finalData,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// filter user tables
// export const filterUsers = async (name, email, subscription, platform) => {
//   try {
//     let url = `${Url}/u1r5a03ki8/ufrm8u4j8i?`;

//     const params = new URLSearchParams();
//     if (name) params.append("name", name);
//     if (email) params.append("email", email);
//     if (subscription) params.append("subscription", subscription);
//     if (platform) params.append("platform", platform);

//     const response = await axios.get(url + params.toString());
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// };

export const filterUsers = async (
  name,
  email,
  subscription,
  platform,
  pageNumber = 1,
  pageToken = null
) => {
  // console.log("Dataa", name, email, subscription, platform, pageToken);
  try {
    let url = `${Url}/u1r5a03ki8/ufrm8u4j8i?`;
    const params = new URLSearchParams();

    if (name) params.append("name", name);
    if (email) params.append("email", email);
    if (subscription) params.append("subscription", subscription);
    if (platform) params.append("platform", platform);
    if (pageToken) params.append("pageToken", pageToken); // Ensure pageToken is passed

    const response = await axios.get(url + params.toString());

    console.log("Filter API Response:", response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered users:", error);
    return error;
  }
};

// dashboard count users
export const dashboardHistory = async (req, res) => {
  try {
    const response = await axios.get(`${Url}/history/dhm3k7m4m6`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// Stripe payment data
export const getPaymentSettingData = async () => {
  const data = "all";
  try {
    const response = await axios.post(`${Url}/stripe/kgjhir90gu`, { data });
    const datas = await response.data;
    return datas;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};
// update version
export const updateVersion = async (platform, version) => {
  // console.log(version, platform, "version,platofrm");
  try {
    const response = await axios.post(`${Url}/lvp4m6m7f5/plv5mg8i3d`, {
      platform,
      version,
    });
    console.log(response, "response");
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// get version
export const getLatestVersions = async (req, res) => {
  try {
    const response = await axios.get(`${Url}/lvp4m6m7f5/glvp3m7m5r`);
    // console.log(response, "response");
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// forget password api
export const forgotPasswordApi = async (email) => {
  try {
    const response = await axios.post(`${Url}/r367jklp09i/fpw3mjk4m`, {
      email,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};

// forgot password Reset Password
export const resetPasswordLoginPageApi = async (data1) => {
  try {
    const response = await axios.post(`${Url}/r367jklp09i/vofpm4mn67`, data1);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};

// get Health Reading
export const getHealthReading = async () => {
  try {
    const response = await axios.get(`${Url}/hj76m4dgm4/h7u2zbhm90`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit Health Reading
export const editHealthReading = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/hj76m4dgm4/eh65mki980`, {
      finalData,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get Health Precautions
export const getHealthPrecautions = async () => {
  try {
    const response = await axios.get(`${Url}/hj76m4dgm4/gpli895213`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit Health Precautions
export const editHealthPrecautions = async (finalData) => {
  // console.log("dadsa", finalData);
  try {
    const response = await axios.put(`${Url}/hj76m4dgm4/ehj6545654`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get Health Suggestions
export const getHealthSuggestions = async () => {
  try {
    const response = await axios.get(`${Url}/hj76m4dgm4/hsu62mi90o`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit Health Suggestions
export const editHealthSuggestions = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/hj76m4dgm4/hse78234nj`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get Health Cycle
export const getHealthCycle = async () => {
  try {
    const response = await axios.get(`${Url}/hj76m4dgm4/hc34mkjilo`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit Health Cycle
export const editHealthCycle = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/hj76m4dgm4/hcek879605`, {
      finalData,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// Delete Health Cycle
export const deleteHealthCycle = async (finalData) => {
  try {
    const response = await axios.put(`${Url}/hj76m4dgm4/hcd657jmki`, {
      finalData,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};
// get Personal Year
export const getPersonalYear = async () => {
  try {
    const response = await axios.get(`${Url}/gpymk5krmd`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// edit Health Suggestions
export const editPersonal = async (id, finalData) => {
  // console.log("finalData", finalData);
  try {
    const response = await axios.put(`${Url}/edpymk5mkd/${id}`, finalData);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get Personal Month
export const getPersonalMonth = async () => {
  try {
    const response = await axios.get(`${Url}/gpmk5kwmkd`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Personal Week
export const getPersonalWeek = async () => {
  try {
    const response = await axios.get(`${Url}/gpwk5mcdks`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Personal Day
export const getPersonalDay = async () => {
  try {
    const response = await axios.get(`${Url}/gpwk5mcdks`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Fav Parameters
export const getFavParameters = async (month) => {
  try {
    const response = await axios.get(`${Url}/gfpk5mks4m?month=${month}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get unFav Parameters
export const getUnFavParameters = async (month) => {
  try {
    const response = await axios.get(`${Url}/gufmpl09j7?month=${month}`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// edit Parameters
export const editParameters = async (id, month_id, updateFields) => {
  try {
    const response = await axios.put(`${Url}/ufpk5mk7m3`, {
      id,
      month_id,
      ...updateFields,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err, "error");
    return err;
  }
};

// get Zodiac Sign
export const getZodiacSign = async () => {
  try {
    const response = await axios.get(`${Url}/gzsimk4msg`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Zodiac Sign
export const editZodiacSign = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/uzsk5mo8m2`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get plannet numbers
export const getPlanetNumbers = async () => {
  try {
    const response = await axios.get(`${Url}/gpnl6m4l5m`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit plannet numbers
export const editPlanetNumbers = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/upnm5k3mvv`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Life Cycle
export const getLifeCycle = async () => {
  try {
    const response = await axios.get(`${Url}/glcm5kdm6f`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Life Cycle
export const editLifeCycle = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ulcm5k3mr5`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Life Changes
export const getLifeChanges = async () => {
  try {
    const response = await axios.get(`${Url}/glcm5k3m4d`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Life Cycle
export const editLifeChanges = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ulch3mck5f`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Compatible partner
export const getCompatiblePartner = async () => {
  try {
    const response = await axios.get(`${Url}/gcprtm3km5`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Compatible partner
export const editCompatiblePartner = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ucprtm4n5f`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Partner relationship
export const getPartnerRelationship = async () => {
  try {
    const response = await axios.get(`${Url}/gprmk53mvb`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Partner relationship
export const editPartnerRelationship = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/kfuri99roi`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Children
export const getChildren = async () => {
  try {
    const response = await axios.get(`${Url}/gchl5mdm4g`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Children
export const editChildren = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ldoies587g`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Basic Parenting
export const getBasicParenting = async () => {
  try {
    const response = await axios.get(`${Url}/gbprm53mfd`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Basic Parenting
export const editBasicParenting = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ubprn5mvfd`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Detailed Parenting
export const getDetailedParenting = async () => {
  try {
    const response = await axios.get(`${Url}/gdpm4kb5ff`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Detailed Parenting
export const editDetailedParenting = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/lkiopfg44r`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Basic Money Matters
export const getbasicMoney = async () => {
  try {
    const response = await axios.get(`${Url}/loooff782g`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Basic Money Matters
export const editbasicMoney = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/qqii3377ee`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Detailed Money Matters
export const getDetailedMoney = async () => {
  try {
    const response = await axios.get(`${Url}/nmvv99vv2e`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Detailed Money Matters
export const editDetailedMoney = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/paosyd98d7`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Compaitibilty Scale
export const getCompaitibiltyScale = async () => {
  try {
    const response = await axios.get(`${Url}/lododo2203`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Compaitibilty Scale
export const editCompaitibiltyScale = async (id, finaldata) => {
  try {
    const response = await axios.put(`${Url}/ft78r9f5r4`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

// get Compaitibilty Desc
export const getCompaitibiltyDesc = async () => {
  try {
    const response = await axios.get(`${Url}/dfg00g00ss`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
// Edit Compaitibilty Desc
export const editCompaitibiltyDesc = async (id, finaldata) => {
  console.log("dasd", id);
  console.log("data", finaldata);
  try {
    const response = await axios.put(`${Url}/xcdfgr69r8`, {
      id,
      ...finaldata,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};
