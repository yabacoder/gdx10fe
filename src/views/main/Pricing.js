import React from 'react';

import { Link } from 'react-router-dom';
import Sync from '../../assets/img/sync.png';
import Watch from '../../assets/img/watch.png';
import Help from '../../assets/img/help.png';

const Pricing = () => {
  return (
    <div>
      <section className="">
        <div className=" md:flex">
          <div className="w-full px-6 pt-6 pb-3 md:w-1/2 md:p-6 ">
            <div class="md:mx-auto w-full md:max-w-6xl md:py-12 pb-0 pt-12 h-8/10">
              <h1 className="mt-10 text-3xl leading-none text-white md:text-5xl font-getdevB md:my-4">
                ACCESS THE MOST ENGAGED NETWORK OF ENGINEERS
              </h1>
              <div className="md:text-white">
                <div class="py-3 text-lg md:text-xl mt-8 md:mt-0">
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      Access to over 73,000 technically-assessed engineers
                    </div>
                  </div>
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      Skills reports backed by machine learning
                    </div>
                  </div>
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      3x positive response rate compared to LinkedIn
                    </div>
                  </div>
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      Efficient search and filter tools
                    </div>
                  </div>
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      ATS integrations
                    </div>
                  </div>
                  <div class="flex justify-start items-center  py-2 my-2">
                    <span class="text-red-600 h-8 w-8 m-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <div class="flex-grow font-medium px-2">
                      Dedicated Account Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 pt-3 pb-6 md:w-1/2 md:p-6 ">
            <div class="md:mx-auto w-full md:max-w-6xl md:p-12">
              <div class="flex flex-col md:flex-row justify-center">
                <div class="md:w-full flex justify-start md:mt-2 md:justify-end w-full  ">
                  <div class="shadow-md bg-white rounded-lg flex-auto max-w-sm p-5 md:p-10 md:pb-20 pb-20">
                    <h4 className="text-gdsubBlue font-getdevB">
                      {' '}
                      Learn about our pricing
                    </h4>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        First Name
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="Jhon"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        Last Name
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="Doe"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        Comapany
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="jhon@doe.com"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        Title
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="jhon@doe.com"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        Email
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="jhon@doe.com"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                        {' '}
                        Phone number
                      </div>
                      <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        {' '}
                        <input
                          placeholder="jhon@doe.com"
                          class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />{' '}
                      </div>
                    </div>
                    <div class="mt-6 relative">
                      <div
                        class="shadow-md font-medium py-2 px-4 text-green-100
                  cursor-pointer bg-red-600 rounded text-sm tr-mt  absolute text-center w-full"
                      >
                        Request a demo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container bg-transparent bg-white rounded-lg shadow-lg md:pt-16 ">
        <div className="px-8 md:px-24 md:py-10 md:mx-10">
          <div className="flex flex-col items-center justify-center mx-auto text-center">
            <h3 className="text-gdsubBlue font-getdevB">
              Find and hire great engineers with Triplebyte
            </h3>
            <p className="text-gdblue">
              Triplebyte has thousands and thousands of highly-skilled engineers
              on our platform. With us, companies can quickly source engineers
              to fill roles across their engineering team.
            </p>
            <div className="my-4">
              <Link
                to="#"
                class="text-xs flex items-center justify-center px-6 py-3 border border-transparent leading-6  rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-2 md:text-sm md:px-8"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="md:my-8">
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full p-6 md:w-1/5">
                <img
                  className="items-stretch object-contain object-center h-32 m-auto md:m-0 md:h-40 md:p-3"
                  src={Sync}
                  alt="Create an Account"
                />
              </div>
              <div className="w-full md:w-4/5">
                <div>
                  <h4 className="my-2 text-gdsubBlue font-getdevB">
                    Access a marketplace of skilled engineers
                  </h4>
                  <p className="text-gdblue ">
                    Source from a large pool of technically-assessed candidates.
                    Access proprietary skills data on each candidate, collected
                    and validated by Triplebyte, to quickly understand their
                    abilities and make smarter hiring decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center md:flex-row">
              <div className="w-full md:w-4/5">
                <div>
                  <h4 className="my-2 text-gdsubBlue font-getdevB">
                    Save time and effort in the hiring process
                  </h4>
                  <p className="text-gdblue ">
                    Triplebyte recommends the most relevant candidates for each
                    open position. With Triplebyte, hiring companies can reduce
                    the time wasted by reaching out to the engineers with the
                    most relevant and validated skill set, and the highest
                    likelihood to engage with you.
                  </p>
                </div>
              </div>
              <div className="w-full p-6 md:w-1/5">
                <img
                  className="items-stretch object-contain object-center h-32 p-3 m-auto md:m-0 md:h-40 md:p-3"
                  src={Watch}
                  alt="Create an Account"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full p-6 md:w-1/5">
                <img
                  className="items-stretch object-contain object-center h-32 p-3 m-auto md:m-0 md:h-40 md:p-3"
                  src={Help}
                  alt="Create an Account"
                />
              </div>
              <div className="w-full md:w-4/5">
                <div>
                  <h4 className="my-2 text-gdsubBlue font-getdevB">
                    Save time and effort in the hiring process
                  </h4>
                  <p className="text-gdblue ">
                    Triplebyte recommends the most relevant candidates for each
                    open position. With Triplebyte, hiring companies can reduce
                    the time wasted by reaching out to the engineers with the
                    most relevant and validated skill set, and the highest
                    likelihood to engage with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;