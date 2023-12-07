const API_URL = process.env.REACT_APP_API_URL;

export const uploadImg = async (path, formData, accessToken) => {
  try {
    const myHeaders = new Headers();
    // const accessToken = token;
    myHeaders.append("authorization", `Bearer  ${accessToken}`);
    myHeaders.append("Accept", 'application/json');
    const requestOptions = {
      'content-type': 'multipart/form-data',
      method: "POST",
      body: formData
    };
    const { data } = await fetch(`${API_URL}${path}`, requestOptions);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  console.log(accessToken);
};

export const curFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
});

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  // console.log(accessToken, "Tokenized");
  if((accessToken !== undefined) || (accessToken !== null)) {
    return JSON.parse(accessToken);
  }

};

export const setAccessToken = (accessToken) => {
  // console.log(accessToken);
  const existToken = localStorage.getItem("accessToken");
  if (existToken) {
    localStorage.removeItem("accessToken");
  }
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
  // await localStorage.setItem("profile", JSON.stringify(getProfile()));

};

export const removeAccessToken = () => {
  if (localStorage.removeItem("accessToken")) {
    return true;
  } else {
    return false;
  }
  // console.log(accessToken);
  // return;
};

export const savedProfile = () => {
  const accessToken = localStorage.getItem("profile");
  console.log(accessToken, "profile");

  return JSON.parse(accessToken);
};


export const isLoggedIn = () => {
  // getRemoveToken()
  if (getAccessToken()) {
    // console.log(getAccessToken(), "Token");
    return true;
  } else {
    return false;
  }
};