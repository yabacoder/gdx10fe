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

export const baseUrl =
  window.location.hostname === 'localhost'
    ? 'http://gdxbe.test/api'
    : 'https://api.getdev.co';

async function http(path, method, data, object) {
  return new Promise((resolve, reject) => {
    // console.log(Authorization);
    fetch(baseUrl + path, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization,
      },
      body: object ? data : JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
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
