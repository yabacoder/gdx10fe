import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import lady from '../../assets/img/sidebanner.svg'
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export const TopAssess = () => {
  return (
    <div class="  ">
      <section className="container relative px-8 py-8 pb-10 mx-auto md:pt-10 lg:py-20 md:flex lg:items-center ">
        <div className="mt-16 md:w-1/2 md:mt-10">
          <h1 className="text-4xl font-bold leading-none tracking-tighter lg:text-7xl md:text-6xl font-getdevB">
            Are You a World-Class Developer?
          </h1>
          <p className="pt-4 text-lg text-gray-300 ">
            Measure yourself amongst the best developers in Africa. Get the best
            jobs to advance your career!{' '}
          </p>
          <div className="flex pt-8 ">
            <Link
              to="/assess"
              className="flex items-center justify-around px-6 py-3 text-xs leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-full hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring-red md:py-2 md:text-sm md:px-8"
            >
              Get Assessed
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <Link
              to="/pricing"
              class="transition duration-200 ease-in-out md:py-2 md:text-sm md:px-8 mx-3 text-xs flex items-center justify-around px-6 py-3 border border-white leading-6 text-white  rounded-full hover:bg-white hover:text-black"
            >
              Hire A Dev
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="p-8 side-banner">
            <img src={lady} alt="" className="" />
          </div>
        </div>
        <div className="">
          <div
            className="absolute bottom-0 h-10 mr-2 bg-white border border-blue-800 rounded-lg"
            style={{ left: '50%', top: '90%' }}
          >
            {' '}
            <div className="p-2">
              <ChevronDoubleDownIcon class="h-6 w-6 text-gray-500" />

              {/* <svg
                className="text-blue-600 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopAssess;
