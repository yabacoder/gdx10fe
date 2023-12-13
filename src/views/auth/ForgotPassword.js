import React, { useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import Nav from '../../layouts/MainLayout/Nav';
import { useForgotPasswordMutation } from '../../features/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
// import { getAccessToken } from '../../utils/general';

const ForgotPassword = () => {
  //const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState('developer');
  const [msg, setMsg] = useState('');
  const { code, userId } = useParams();

  // console.log(code, userId)

  // let error;
  const navigate = useNavigate();

  const [forgotPassword, {
    isLoading,
  }] = useForgotPasswordMutation();

  const dispatch = useDispatch();

  const processLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await forgotPassword({ email }).unwrap();
      // console.log(data, "Fetched");
      // const accessToken = data?.accessToken;
      // // console.log(await getAccessToken(), "Our accessToken");
      // dispatch(setCredentials({ accessToken }));

      // Redirect to complete profile if not done
      // if (!data.developerId) {
      //   navigate("/developer/profile/edit");
      // } else {
      //   navigate("/developer/dashboard");
      // }

      console.log(data);
      setMsg(data.message);
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
              {/* <div class={`p-5 cursor-pointer ${selected === 'company' ? 'border-b border-blue-500 text-blue-800' : ''}`}
                onClick={() => { setSelected('company'); }}
              >
                <h4>Company </h4>
              </div> */}
            </div>

            {/* <span class="text-gray-700">Name</span> */}
            <label class="block mt-10">
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
                      Retrieve Password{' '}
                    </>
                }
              </button>
            </div>

            <div className="flex flex-col justify-center pt-20">
              <Link
                to="/login"
                className="inline-block w-full p-3 text-center btn-outline"
              >
                {' '}
                Login{' '}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
