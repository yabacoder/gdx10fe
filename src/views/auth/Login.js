import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../layouts/MainLayout/Nav';
import { useLoginMutation } from '../../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { getAccessToken } from '../../utils/general';

const Login = () => {
  //const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState('developer');
  const [msg, setMsg] = useState('');

  // let error;
  const navigate = useNavigate();

  const [login, {
    isLoading,
  }] = useLoginMutation();

  const dispatch = useDispatch();

  const processLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password }).unwrap();
      console.log(data, "Fetched");
      const accessToken = data?.accessToken;
      // console.log(await getAccessToken(), "Our accessToken");
      dispatch(setCredentials({ accessToken }));

      // Redirect to complete profile if not done
      if (!data.developerId) {
        navigate("/developer/profile/edit");
      } else {
        navigate("/developer/dashboard");
      }
    } catch (err) {
      console.log(err, "Cant login from the server");
      // console.log(err.data.message, "Error logging in");
      setMsg(err?.message);
    }
  };


  return (
    <div className="w-full h-screen bg-off">
      <Nav />
      {/* //Show only on mobile */}

      <div className="flex items-center justify-center p-5 px-8 py-24 md:py-32 md:px-16 ">
        <form onSubmit={processLogin}>
          <div className="p-16 px-8 py-8 mt-16 mb-5 bg-white rounded-lg">
            <div className="flex border-b">
              <div class={`p-5 cursor-pointer ${selected === 'developer' ? 'border-b border-blue-500 text-blue-800 transition' : ''}`}
                onClick={() => { setSelected('developer'); }}
              >
                <h4>Developer</h4>
              </div>
              <div class={`p-5 cursor-pointer ${selected === 'company' ? 'border-b border-blue-500 text-blue-800' : ''}`}
                onClick={() => { setSelected('company'); }}
              >
                <h4>Company </h4>
              </div>
            </div>

            <label class="block mt-10">
              {/* <span class="text-gray-700">Name</span> */}
              <p className="p-2 text-center text-red-600">{msg}</p>
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
              <div className="w-full px-10 form-input">
                <input
                  class=" block w-full px-5 focus:outline-none"
                  name="email"
                  placeholder="Email"
                  size="35"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />

              </div>
            </label>

            <label class="block ">
              {/* <span class="text-gray-700">Name</span> */}
              <div className="relative">
                <div className="absolute p-3">
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
              <div className="w-full px-10 mt-5 form-input">
                <input
                  class="block w-full px-5 focus:outline-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </label>

            <div className="flex flex-col justify-center pt-5">
              <button
                type="submit"
                className="w-full p-3 text-center btn "

              >

                {
                  isLoading ? <div className='flex justify-between w-full'>

                    <svg class="animate-spin h-5 w-5 mr-3 text-white ..." viewBox="0 0 24 24">
                    </svg>
                    <p>Processing...</p></div> :
                    <>
                      Login{' '}
                    </>
                }
              </button>
            </div>
            <div className='flex items-center justify-center mt-4'>
              <Link to={"/forgot-password"}>
              Forgot Password
              </Link>
            </div>
            <div className="flex flex-col justify-center pt-20">
              <Link
                to="/register"
                className="inline-block w-full p-3 text-center btn-outline"
              >
                {' '} 
                Create an Account{' '}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
