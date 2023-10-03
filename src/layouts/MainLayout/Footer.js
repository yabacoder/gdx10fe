import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <>
      <div className="hidden md:block -mb-5">
        <div className="flex items-center justify-center w-full p-20 px-8 py-8 mt-10 footerx ">
          <div className="container mt-20 text-center text-white ">
            <h3 className="text-lg md:text-2xl text-bold">
              Need updates on latest jobs?
            </h3>
            <p className="text-sm md:text-base">
              Sign up to get the latest dev jobs
            </p>
            <div className="flex items-center justify-center pt-5 pb-10 ">
              <div>
                <div className="flex px-2 py-5 -my-1 bg-transparent bg-blue-600 bg-opacity-30 md:w-96">
                  <input
                    className="w-full h-full px-4 pr-10 placeholder:text-white text-white bg-transparent  border-0 rounded-none form-input focus:outline-none outline-none "
                    type="text"
                    placeholder='Your email address'
                  />
                  <div className="flex items-center justify-center w-10 h-12 px-5 py-5 bg-red-600 border-transparent rounded-sm">
                    <span className="">
                      <svg
                        className="inline-flex w-10 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor" 
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between pt-12 pb-12 border-t border-b border-gray-500 md:flex-no-wrap">
              <div className=" logo">
                <Link
                  to=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex"
                >
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="flex flex-col justify-between md:flex-row">
                <div className="connect">
                  <div className="p-5 text-left">
                    <h5 className="font-semibold text-white">Connect</h5>
                    <ul className="text-gray-400 ">
                      <li>Resources</li>
                      <li>
                        <Link to="/salary_calculator">Salary Calculate</Link>
                      </li>
                      <li>Refer a Friend</li>
                      <li className="blog">
                        <Link to="/articles"> Articles</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:pl-10 Link">
                  <div className="p-5 text-left">
                    <h5 className="font-semibold text-white">The Company </h5>
                    <ul className="text-gray-400">
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/manifesto">Manifesto</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="subfooter">
              <div className="flex flex-col justify-center py-4 text-gray-400 md:flex-row md:justify-between">
                <div>
                  <small>Copyright © 2020</small>
                </div>
                <div>
                  <small>GetDev. All rights reserved.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-center w-full p-20 px-3 py-8 mobile-footer ">
          <div className="container pt-16 text-center text-white ">
            <h3 className="text-lg md:text-2xl text-bold">
              Need updates on latest jobs?
            </h3>
            <p className="text-sm md:text-base">
              Sign up to get the latest dev jobs
            </p>
            <div className="flex items-center justify-center pt-5 pb-10">
              {/* <div className="relative mt-1 ">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 bg-red-800 rounded-sm pointer-events-none">
                   <svg className="w-10 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
                <div className="w-64 h-12">
                <input className="w-full h-full pr-10 text-white bg-blue-700 opacity-25 " type="text" />
                   
                </div>
          </div> */}
              <div>
                <div className="flex px-2 py-4 bg-gray-600">
                  <input
                    className="w-full h-full px-4 pr-10 text-white bg-transparent border-transparent rounded-none form-input focus:border-transparent"
                    type="text"
                  />
                  <span className="px-3 bg-red-600 border-transparent rounded-sm form-input">
                    <svg
                      className="inline-flex w-10 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="justify-between py-6 border-t border-b border-gray-700">
              <div className="w-2/4 logo">
                <Link
                  to=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex"
                >
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="flex flex-col justify-between w-2/4 md:flex-row">
                <div className="connect">
                  <div className="p-5 text-left">
                    <h5 className="font-semibold text-white">Connect</h5>
                    <ul className="text-gray-400">
                      <li>Resources</li>
                      <li>
                        <Link to="/salary_calculator">Salary Calculate</Link>
                      </li>
                      <li>Refer a Friend</li>
                      <li className="blog">
                        <Link to="/articles"> Articles</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:pl-10 Link">
                  <div className="p-5 text-left">
                    <h5 className="font-semibold text-white">The Company </h5>
                    <ul className="text-gray-400">
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/manifesto">Manifesto</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="subfooter">
              <div className="flex flex-col justify-center py-4 text-gray-400 md:flex-row md:justify-between">
                <div>
                  <small>Copyright © 2023</small>
                </div>
                <div>
                  <small>GetDev. All rights reserved.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
