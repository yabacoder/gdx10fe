import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../layouts/MainLayout/Nav';
// import http from '../../utils/service';
// import useAuth from "../../hooks/useAuth";
// import Input from '../../components/Input';
// import { register } from '../../actions/users';
// import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [result, setResult] = useState({});
  const [verify, setVerify] = useState('');
  const [message, setMessage] = useState('');
  // const history = useHistory();
  let error

  // const { login, register } = useAuth();
  // const dispatch = useDispatch(); //get the dispatch method from the useDispatch custom hook
  // const userLogin = useSelector(state => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  const handleRegister = async event => {
    event.preventDefault();
    // console.log(email, password, username);
    /**
     * 1. Collect form fields
     * 2. Make API call to the end point
     * 3. Auto-login the user
     * 4. set session
     */
    // const data = {
    //   role_id: 1,
    //   email,
    //   username,
    //   password,
    //   password_confirmation: cpassword,
    //   referrer: sessionStorage.getItem('referrer'),
    // };
    try {
      // let response = await register(data);
      // if (!response) return;
      // console.log(response);
      // if (response.role_id == 1) {
      // }
      // dispatch(register(data));
      // history.push('/developer/dashboard');
    } catch (error) {
      //console.log('errorMessage', errorMessage);
      // setResult(error);
    }
    // 2. Api call to save data
    // register(data);
    // try {
    // 	const res = await http("/auth/register", "post", data);
    // 	console.log(res.errors);
    // 	if (res.access_token) {
    // 		setSession(res);
    // 	} else {
    // 		setResult(res.errors);
    // 		setMessage(res.message);
    // 	}
    // } catch (err) {
    // 	console.log(err);
    // }
    //console.log(result);
  };

  // const setSession = authResult => {
    // Set the time that the access token will expire at
    // let expiresAt = JSON.stringify(
    //   authResult.expires_in * 1000 + new Date().getTime()
    // );
    // localStorage.setItem('auth', JSON.stringify(authResult.access_token));
    // localStorage.setItem('expires_at', expiresAt);
    // login(email, password);
  // };

  // useEffect(() => {
  //   window.scroll(0, 0);
  //   let ref = window.location.search;
  //   if (window.location.search) {
  //     sessionStorage.setItem('referrer', ref.split('=')[1]);
  //   }
  // }, []);

  return (
    <div className="w-full h-screen bg-off">
      <Nav />
      <form onSubmit={handleRegister}>
        {/* //Show only on mobile */}
        <div className="block p-5 py-16 md:hidden lg:hidden xl:hidden">
          <div className="p-16 px-8 py-8 mt-16 mb-5 bg-white rounded-lg md:bg-gray-300">
            <div class="p-5 border-b-2 border-blue-500 text-blue-600 w-full">
              <h4>Developer Signup</h4>
            </div>
            {error && <p className="p-2 text-red-600"> {error.message}</p>}
            <label class="block mt-10">
              {/* <span class="text-gray-700">Name</span> */}
              <div className="relative">
                <div className="absolute p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.357"
                    height="12.833"
                    viewBox="0 0 12.357 12.833"
                  >
                    <g id="user" class="cls-1">
                      <g
                        id="Group_318"
                        data-name="Group 318"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_552"
                          data-name="Path 552"
                          class="cls-2"
                          d="M12.325,11a.483.483,0,0,0-.571-.389.5.5,0,0,0-.374.593.539.539,0,0,1-.1.439.485.485,0,0,1-.386.191H1.465a.485.485,0,0,1-.386-.191.539.539,0,0,1-.1-.439A5.391,5.391,0,0,1,6.051,6.815l.128,0,.128,0A5.265,5.265,0,0,1,10.6,9.263a.472.472,0,0,0,.67.137.513.513,0,0,0,.132-.7A6.311,6.311,0,0,0,8.144,6.137,3.451,3.451,0,0,0,9.461,3.409,3.351,3.351,0,0,0,6.179,0,3.351,3.351,0,0,0,2.9,3.409a3.451,3.451,0,0,0,1.318,2.73A6.207,6.207,0,0,0,2.192,7.293,6.587,6.587,0,0,0,.032,11a1.566,1.566,0,0,0,.3,1.276,1.437,1.437,0,0,0,1.135.561h9.427a1.437,1.437,0,0,0,1.135-.561A1.566,1.566,0,0,0,12.325,11ZM3.862,3.409A2.365,2.365,0,0,1,6.179,1,2.365,2.365,0,0,1,8.5,3.409a2.371,2.371,0,0,1-2.2,2.4H6.062A2.371,2.371,0,0,1,3.862,3.409Z"
                          transform="translate(0)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <input
                onChange={e => setUsername(e.target.value)}
                value={username}
                class="form-input mt-1 block w-full pl-8"
                form-input
                mt-1
                block
                w-full
                pl-6
                name="username"
                placeholder="username"
              />
              {error && <p class="text-red-600">{error.errors.username}</p>}
            </label>

            <label class="block">
              {/* <span class="text-gray-700">Name</span> */}
              <div className="relative">
                <div className="absolute inset-y-0 right-0 p-3 pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.357"
                    height="9.6"
                    viewBox="0 0 12.357 9.6"
                  >
                    <g id="mail" class="cls-1">
                      <g
                        id="Group_313"
                        data-name="Group 313"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_550"
                          data-name="Path 550"
                          class="cls-2"
                          d="M11.874,66.172a.487.487,0,0,0,.483-.491V62.464A1.95,1.95,0,0,0,10.426,60.5h-8.5A1.95,1.95,0,0,0,0,62.464v5.672A1.95,1.95,0,0,0,1.931,70.1h8.5a1.95,1.95,0,0,0,1.931-1.964.483.483,0,1,0-.965,0,.975.975,0,0,1-.965.982h-8.5a.975.975,0,0,1-.965-.982V62.568l4.193,2.653a1.891,1.891,0,0,0,2.039,0l4.193-2.653v3.112A.487.487,0,0,0,11.874,66.172ZM6.688,64.387a.945.945,0,0,1-1.02,0l-4.3-2.72a.949.949,0,0,1,.563-.184h8.5a.949.949,0,0,1,.563.184Z"
                          transform="translate(0 -60.5)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                class="form-input mt-1 block w-full pl-8"
                name="email"
                placeholder="Email"
              />
              {error && <p class="text-red-600">{error.errors.email}</p>}
            </label>

            <label class="block">
              {/* <span class="text-gray-700">Name</span> */}
              <div className="relative">
                <div className="absolute p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.813"
                    height="12.338"
                    viewBox="0 0 10.813 12.338"
                  >
                    <g id="padlock" class="cls-1">
                      <g id="Group_315" data-name="Group 315">
                        <g id="Group_314" data-name="Group 314">
                          <path
                            id="Path_551"
                            data-name="Path 551"
                            class="cls-2"
                            d="M42.33,8.723a.482.482,0,0,0,.483-.482V6.458A1.932,1.932,0,0,0,40.882,4.53H40.3v-1.7a2.9,2.9,0,0,0-5.792,0v1.7h-.578A1.932,1.932,0,0,0,32,6.458V10.41a1.932,1.932,0,0,0,1.931,1.928h6.951a1.932,1.932,0,0,0,1.931-1.928.483.483,0,0,0-.965,0,.966.966,0,0,1-.965.964H33.931a.966.966,0,0,1-.965-.964V6.458a.966.966,0,0,1,.965-.964h6.951a.966.966,0,0,1,.965.964V8.241A.482.482,0,0,0,42.33,8.723ZM39.336,4.53H35.475v-1.7a1.932,1.932,0,0,1,3.862,0Z"
                            transform="translate(-32)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_317"
                        data-name="Group 317"
                        transform="translate(4.936 7.873)"
                      >
                        <g
                          id="Group_316"
                          data-name="Group 316"
                          transform="translate(0 0)"
                        >
                          <ellipse
                            id="Ellipse_14"
                            data-name="Ellipse 14"
                            class="cls-2"
                            cx="0.471"
                            cy="0.47"
                            rx="0.471"
                            ry="0.47"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 p-3 pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.439"
                    height="7.831"
                    viewBox="0 0 12.439 7.831"
                  >
                    <g id="eye-view" class="cls-1">
                      <g
                        id="Group_86"
                        data-name="Group 86"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_160"
                          data-name="Path 160"
                          class="cls-2"
                          d="M1.446,95.385a6.662,6.662,0,0,0,4.773,1.927,6.692,6.692,0,0,0,4.773-1.927A6.963,6.963,0,0,0,12.4,93.444a.42.42,0,0,0,0-.35,5.952,5.952,0,0,0-1.372-1.824,6.954,6.954,0,0,0-4.853-1.788,6.8,6.8,0,0,0-4.809,1.8A5.641,5.641,0,0,0,.03,93.108a.413.413,0,0,0,.007.336A6.787,6.787,0,0,0,1.446,95.385Zm4.707-5a2.131,2.131,0,1,1-2.131,2.131A2.133,2.133,0,0,1,6.153,90.386Zm-2.474.423a2.981,2.981,0,0,0-.533,1.708,3.007,3.007,0,1,0,5.466-1.722,5.547,5.547,0,0,1,2.883,2.481,6.609,6.609,0,0,1-1.153,1.518,5.717,5.717,0,0,1-4.13,1.657,5.754,5.754,0,0,1-4.13-1.664,6.634,6.634,0,0,1-1.16-1.525A5.348,5.348,0,0,1,3.679,90.809Z"
                          transform="translate(0.002 -89.481)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                class="form-input mt-1 block w-full pl-6"
                type="password"
                name="password"
                placeholder=""
              />
              {error && <p class="text-red-600">{error.errors.password}</p>}
            </label>

            <label class="block">
              <div className="relative">
                <div className="absolute p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.813"
                    height="12.338"
                    viewBox="0 0 10.813 12.338"
                  >
                    <g id="padlock" class="cls-1">
                      <g id="Group_315" data-name="Group 315">
                        <g id="Group_314" data-name="Group 314">
                          <path
                            id="Path_551"
                            data-name="Path 551"
                            class="cls-2"
                            d="M42.33,8.723a.482.482,0,0,0,.483-.482V6.458A1.932,1.932,0,0,0,40.882,4.53H40.3v-1.7a2.9,2.9,0,0,0-5.792,0v1.7h-.578A1.932,1.932,0,0,0,32,6.458V10.41a1.932,1.932,0,0,0,1.931,1.928h6.951a1.932,1.932,0,0,0,1.931-1.928.483.483,0,0,0-.965,0,.966.966,0,0,1-.965.964H33.931a.966.966,0,0,1-.965-.964V6.458a.966.966,0,0,1,.965-.964h6.951a.966.966,0,0,1,.965.964V8.241A.482.482,0,0,0,42.33,8.723ZM39.336,4.53H35.475v-1.7a1.932,1.932,0,0,1,3.862,0Z"
                            transform="translate(-32)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_317"
                        data-name="Group 317"
                        transform="translate(4.936 7.873)"
                      >
                        <g
                          id="Group_316"
                          data-name="Group 316"
                          transform="translate(0 0)"
                        >
                          <ellipse
                            id="Ellipse_14"
                            data-name="Ellipse 14"
                            class="cls-2"
                            cx="0.471"
                            cy="0.47"
                            rx="0.471"
                            ry="0.47"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-0 p-3 pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.439"
                    height="7.831"
                    viewBox="0 0 12.439 7.831"
                  >
                    <g id="eye-view" class="cls-1">
                      <g
                        id="Group_86"
                        data-name="Group 86"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_160"
                          data-name="Path 160"
                          class="cls-2"
                          d="M1.446,95.385a6.662,6.662,0,0,0,4.773,1.927,6.692,6.692,0,0,0,4.773-1.927A6.963,6.963,0,0,0,12.4,93.444a.42.42,0,0,0,0-.35,5.952,5.952,0,0,0-1.372-1.824,6.954,6.954,0,0,0-4.853-1.788,6.8,6.8,0,0,0-4.809,1.8A5.641,5.641,0,0,0,.03,93.108a.413.413,0,0,0,.007.336A6.787,6.787,0,0,0,1.446,95.385Zm4.707-5a2.131,2.131,0,1,1-2.131,2.131A2.133,2.133,0,0,1,6.153,90.386Zm-2.474.423a2.981,2.981,0,0,0-.533,1.708,3.007,3.007,0,1,0,5.466-1.722,5.547,5.547,0,0,1,2.883,2.481,6.609,6.609,0,0,1-1.153,1.518,5.717,5.717,0,0,1-4.13,1.657,5.754,5.754,0,0,1-4.13-1.664,6.634,6.634,0,0,1-1.16-1.525A5.348,5.348,0,0,1,3.679,90.809Z"
                          transform="translate(0.002 -89.481)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <input
                onChange={e => setCpassword(e.target.value)}
                value={cpassword}
                class="form-input mt-1 block w-full pl-6"
                type="password"
                name="password_confirmation"
                placeholder=""
              />
              {/* {result.password_confirmation && (
                <p class="text-red-600">{result.password_confirmation}</p>
              )} */}
            </label>

            {/* <Input /> */}

            <div className="flex flex-col justify-center pt-5">
              <button
                type="submit"
                className="inline-block w-full p-3 text-center btn"
              >
                Sign me Up
              </button>
            </div>

            <div className="flex flex-col justify-center pt-20">
              <input
                type="submit"
                value="Login Instead"
                className="inline-block w-full p-3 text-center btn-outline"
              />
            </div>
          </div>
        </div>

        {/* <div className="invisible px-0 py-0 lg:px-40 md:py-16 md:visible lg:visible xl:visible">  */}
        <div className="hidden h-screen px-0 py-0 lg:px-40 md:py-32 md:block">
          <div className="flex items-center justify-between mt-12 rounded-lg shadow-lg md:bg-white ">
            <div className="p-24 md:w-1/2">
              <h2 className="font-bold text-gdblue -p-10 text-wide">
                {' '}
                Now Let's Get You{' '}
                <span className="text-blue-500">Signed Up</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Bibendum est ultricies integer quis. Iaculis urna id volutpat
                lacus laoreet. Mauris vitae ultricies leo integer malesuada.
              </p>
            </div>
            <div className="flex flex-col px-8 py-8 md:bg-white md:p-4 md:w-1/2">
              <div className="p-5 bg-white ">
                <div class="p-5 border-b-2 border-blue-500 text-blue-600 w-full">
                  <h4>Developer Signup</h4>
                </div>
                <label class="block mt-10">
                  {/* <span class="text-gray-700">Name</span> */}
                  <div className="relative">
                    <div className="absolute p-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.357"
                        height="12.833"
                        viewBox="0 0 12.357 12.833"
                      >
                        <g id="user" class="cls-1">
                          <g
                            id="Group_318"
                            data-name="Group 318"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_552"
                              data-name="Path 552"
                              class="cls-2"
                              d="M12.325,11a.483.483,0,0,0-.571-.389.5.5,0,0,0-.374.593.539.539,0,0,1-.1.439.485.485,0,0,1-.386.191H1.465a.485.485,0,0,1-.386-.191.539.539,0,0,1-.1-.439A5.391,5.391,0,0,1,6.051,6.815l.128,0,.128,0A5.265,5.265,0,0,1,10.6,9.263a.472.472,0,0,0,.67.137.513.513,0,0,0,.132-.7A6.311,6.311,0,0,0,8.144,6.137,3.451,3.451,0,0,0,9.461,3.409,3.351,3.351,0,0,0,6.179,0,3.351,3.351,0,0,0,2.9,3.409a3.451,3.451,0,0,0,1.318,2.73A6.207,6.207,0,0,0,2.192,7.293,6.587,6.587,0,0,0,.032,11a1.566,1.566,0,0,0,.3,1.276,1.437,1.437,0,0,0,1.135.561h9.427a1.437,1.437,0,0,0,1.135-.561A1.566,1.566,0,0,0,12.325,11ZM3.862,3.409A2.365,2.365,0,0,1,6.179,1,2.365,2.365,0,0,1,8.5,3.409a2.371,2.371,0,0,1-2.2,2.4H6.062A2.371,2.371,0,0,1,3.862,3.409Z"
                              transform="translate(0)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <input
                    class="form-input mt-1 block w-full pl-8"
                    name="username"
                    placeholder="Username"
                  />
                </label>

                <label class="block mt-2">
                  {/* <span class="text-gray-700">Name</span> */}
                  <div className="relative">
                    <div className="absolute p-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.357"
                        height="9.6"
                        viewBox="0 0 12.357 9.6"
                      >
                        <g id="mail" class="cls-1">
                          <g
                            id="Group_313"
                            data-name="Group 313"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_550"
                              data-name="Path 550"
                              class="cls-2"
                              d="M11.874,66.172a.487.487,0,0,0,.483-.491V62.464A1.95,1.95,0,0,0,10.426,60.5h-8.5A1.95,1.95,0,0,0,0,62.464v5.672A1.95,1.95,0,0,0,1.931,70.1h8.5a1.95,1.95,0,0,0,1.931-1.964.483.483,0,1,0-.965,0,.975.975,0,0,1-.965.982h-8.5a.975.975,0,0,1-.965-.982V62.568l4.193,2.653a1.891,1.891,0,0,0,2.039,0l4.193-2.653v3.112A.487.487,0,0,0,11.874,66.172ZM6.688,64.387a.945.945,0,0,1-1.02,0l-4.3-2.72a.949.949,0,0,1,.563-.184h8.5a.949.949,0,0,1,.563.184Z"
                              transform="translate(0 -60.5)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <input
                    class="form-input mt-1 block w-full pl-8"
                    name="email"
                    placeholder="Email"
                  />
                </label>

                <label class="block mt-2">
                  {/* <span class="text-gray-700">Name</span> */}
                  <div className="relative">
                    <div className="absolute p-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.813"
                        height="12.338"
                        viewBox="0 0 10.813 12.338"
                      >
                        <g id="padlock" class="cls-1">
                          <g id="Group_315" data-name="Group 315">
                            <g id="Group_314" data-name="Group 314">
                              <path
                                id="Path_551"
                                data-name="Path 551"
                                class="cls-2"
                                d="M42.33,8.723a.482.482,0,0,0,.483-.482V6.458A1.932,1.932,0,0,0,40.882,4.53H40.3v-1.7a2.9,2.9,0,0,0-5.792,0v1.7h-.578A1.932,1.932,0,0,0,32,6.458V10.41a1.932,1.932,0,0,0,1.931,1.928h6.951a1.932,1.932,0,0,0,1.931-1.928.483.483,0,0,0-.965,0,.966.966,0,0,1-.965.964H33.931a.966.966,0,0,1-.965-.964V6.458a.966.966,0,0,1,.965-.964h6.951a.966.966,0,0,1,.965.964V8.241A.482.482,0,0,0,42.33,8.723ZM39.336,4.53H35.475v-1.7a1.932,1.932,0,0,1,3.862,0Z"
                                transform="translate(-32)"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_317"
                            data-name="Group 317"
                            transform="translate(4.936 7.873)"
                          >
                            <g
                              id="Group_316"
                              data-name="Group 316"
                              transform="translate(0 0)"
                            >
                              <ellipse
                                id="Ellipse_14"
                                data-name="Ellipse 14"
                                class="cls-2"
                                cx="0.471"
                                cy="0.47"
                                rx="0.471"
                                ry="0.47"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-y-0 right-0 p-3 pt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.439"
                        height="7.831"
                        viewBox="0 0 12.439 7.831"
                      >
                        <g id="eye-view" class="cls-1">
                          <g
                            id="Group_86"
                            data-name="Group 86"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_160"
                              data-name="Path 160"
                              class="cls-2"
                              d="M1.446,95.385a6.662,6.662,0,0,0,4.773,1.927,6.692,6.692,0,0,0,4.773-1.927A6.963,6.963,0,0,0,12.4,93.444a.42.42,0,0,0,0-.35,5.952,5.952,0,0,0-1.372-1.824,6.954,6.954,0,0,0-4.853-1.788,6.8,6.8,0,0,0-4.809,1.8A5.641,5.641,0,0,0,.03,93.108a.413.413,0,0,0,.007.336A6.787,6.787,0,0,0,1.446,95.385Zm4.707-5a2.131,2.131,0,1,1-2.131,2.131A2.133,2.133,0,0,1,6.153,90.386Zm-2.474.423a2.981,2.981,0,0,0-.533,1.708,3.007,3.007,0,1,0,5.466-1.722,5.547,5.547,0,0,1,2.883,2.481,6.609,6.609,0,0,1-1.153,1.518,5.717,5.717,0,0,1-4.13,1.657,5.754,5.754,0,0,1-4.13-1.664,6.634,6.634,0,0,1-1.16-1.525A5.348,5.348,0,0,1,3.679,90.809Z"
                              transform="translate(0.002 -89.481)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <input
                    class="form-input mt-1 block w-full pl-6"
                    type="password"
                    name="password"
                    placeholder=""
                  />
                </label>

                <label class="block mt-2">
                  {/* <span class="text-gray-700">Name</span> */}
                  <div className="relative">
                    <div className="absolute p-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10.813"
                        height="12.338"
                        viewBox="0 0 10.813 12.338"
                      >
                        <g id="padlock" class="cls-1">
                          <g id="Group_315" data-name="Group 315">
                            <g id="Group_314" data-name="Group 314">
                              <path
                                id="Path_551"
                                data-name="Path 551"
                                class="cls-2"
                                d="M42.33,8.723a.482.482,0,0,0,.483-.482V6.458A1.932,1.932,0,0,0,40.882,4.53H40.3v-1.7a2.9,2.9,0,0,0-5.792,0v1.7h-.578A1.932,1.932,0,0,0,32,6.458V10.41a1.932,1.932,0,0,0,1.931,1.928h6.951a1.932,1.932,0,0,0,1.931-1.928.483.483,0,0,0-.965,0,.966.966,0,0,1-.965.964H33.931a.966.966,0,0,1-.965-.964V6.458a.966.966,0,0,1,.965-.964h6.951a.966.966,0,0,1,.965.964V8.241A.482.482,0,0,0,42.33,8.723ZM39.336,4.53H35.475v-1.7a1.932,1.932,0,0,1,3.862,0Z"
                                transform="translate(-32)"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_317"
                            data-name="Group 317"
                            transform="translate(4.936 7.873)"
                          >
                            <g
                              id="Group_316"
                              data-name="Group 316"
                              transform="translate(0 0)"
                            >
                              <ellipse
                                id="Ellipse_14"
                                data-name="Ellipse 14"
                                class="cls-2"
                                cx="0.471"
                                cy="0.47"
                                rx="0.471"
                                ry="0.47"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-y-0 right-0 p-3 pt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.439"
                        height="7.831"
                        viewBox="0 0 12.439 7.831"
                      >
                        <g id="eye-view" class="cls-1">
                          <g
                            id="Group_86"
                            data-name="Group 86"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_160"
                              data-name="Path 160"
                              class="cls-2"
                              d="M1.446,95.385a6.662,6.662,0,0,0,4.773,1.927,6.692,6.692,0,0,0,4.773-1.927A6.963,6.963,0,0,0,12.4,93.444a.42.42,0,0,0,0-.35,5.952,5.952,0,0,0-1.372-1.824,6.954,6.954,0,0,0-4.853-1.788,6.8,6.8,0,0,0-4.809,1.8A5.641,5.641,0,0,0,.03,93.108a.413.413,0,0,0,.007.336A6.787,6.787,0,0,0,1.446,95.385Zm4.707-5a2.131,2.131,0,1,1-2.131,2.131A2.133,2.133,0,0,1,6.153,90.386Zm-2.474.423a2.981,2.981,0,0,0-.533,1.708,3.007,3.007,0,1,0,5.466-1.722,5.547,5.547,0,0,1,2.883,2.481,6.609,6.609,0,0,1-1.153,1.518,5.717,5.717,0,0,1-4.13,1.657,5.754,5.754,0,0,1-4.13-1.664,6.634,6.634,0,0,1-1.16-1.525A5.348,5.348,0,0,1,3.679,90.809Z"
                              transform="translate(0.002 -89.481)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <input
                    class="form-input mt-1 block w-full pl-6"
                    type="password"
                    name="password_confirmation"
                    placeholder=""
                  />
                </label>

                <div className="flex flex-col justify-center pt-5">
                  <button
                    type="submit"
                    className="inline-block w-full p-3 text-center btn"
                  >
                    Sign me Up
                  </button>
                </div>

                <div className="flex flex-col justify-center pt-24">
                  <Link
                    to="/login"
                    className="inline-block w-full p-3 text-center btn-outline"
                  >
                    {' '}
                    Login Instead{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;