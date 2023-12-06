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