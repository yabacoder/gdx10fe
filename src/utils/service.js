import axios from 'axios';

let Authorization = null;
let token = null; //localStorage.getItem('userInfo')  ? JSON.parse(localStorage.getItem('userInfo')) : '';
if (token) {
  // token = JSON.parse(token);
  console.log(token);
  token = token.accessToken;
  Authorization = `Bearer ${token}`;
}

//  console.log(token.data.accessToken);

// export const setToken = async token => {
//   return localStorage.setItem('accessToken', token);
// };
// if (token) {
//   Authorization = `Bearer ${token}`;
// }
// console.log(Authorization);

export const baseUrl = process.env.REACT_APP_API_URL;
// window.location.hostname === 
// 'localhost'
//   ? process.env.REACT_APP_API_URL
//   : 'https://api.getdev.co';

export const http3 = async (path, data) => {
  try {
    const response = await fetch(baseUrl + path, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: `${JSON.stringify(data)}`
    });
    // console.log(bd);
    return response.json();
  } catch (error) {
    console.log("Error making call", error);
  }
};
export const http2 = async (path, method = "GET", token, data = "") => {
  // console.log(data, "post dats");
  try {
    // const body = "body: " + JSON.stringify({ answer: "optA", question_id: "223" });
    // let bd = (method === 'POST') ? body + "," : '';
    // var myHeaders = new Headers(); 

    // myHeaders.append("Authorization", `Bearer ${token}`);
    const bd = data ? `body : ${JSON.stringify(data)}` : " ";
    const response = await fetch(baseUrl + path, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      bd
    });
    // console.log(bd);
    return response.json();
  } catch (error) {
    console.log("Error making call", error);
  }
};

export const uploadImg = async (path, formData, token) => {
  try {
    const myHeaders = new Headers();
    // const accessToken = getAccessToken();
    myHeaders.append("Authorization", `Bearer  ${token}`);
    // myHeaders.append("Cookie", `jwt=${token}`);
    const requestOptions = {
      'content-type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`, 
      myHeaders,
      method: "POST",
      body: formData
    };
    const data = await fetch(`${baseUrl}${path}`, requestOptions);
    // console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }
};

async function http(path, method, token, data, object) {
  return new Promise((resolve, reject) => {
    console.log(data); 
    const body = "body:" + JSON.stringify(data);
    let bd = (method === 'POST') ? body : '';
    // var myHeaders = new Headers();

    // myHeaders.append("Authorization", `Bearer ${token}`);
    fetch(baseUrl + path, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      bd
    })
      .then(response => response.json())
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    // console.log(bd)
  });

  // const response = await fetch(baseUrl + path, {
  //   method,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization,
  //   },
  //   body: JSON.stringify(data),
  // });

  // return response.json();

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  // // return await axios.post(baseUrl + path, data, config);

  // const response = await axios({
  //   method: method,
  //   url: baseUrl + path,
  //   data,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization,
  //   },
  // });

  // //return JSON.stringify(response);
  // return response;
}

export default http;
