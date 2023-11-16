import React, { useState, useEffect } from 'react';
import http from '../../utils/service';
import { useParams } from 'react-router-dom';

//import Nav from "../home/nav";
// import Layout from "../layout";
// import {Link} from "react-router-dom";

const JobView = () => {
  const [job, setJob] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const job = await http(`/jobs/${params.id}`, 'GET');
      console.log(job);
      setJob(job.data);
    };

    fetchJob();
  }, []);
  useEffect(() => { }, []);

  const handleApply = async id => {
    // const response = await http(`/developer/job/apply/${id}`, 'POST'); //status // error
    // console.log(response);
    // if (response.status === 1) {
    //   setMessage(response.message);
    // } else {
    //   setError(response.error);
    // }
  };

  return (
    <>
      <div className="container px-3 mx-auto md:px-8">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col px-3 py-16 mt-10 text-base bg-white rounded-lg shadow-md md:flex-row md:justify-between md:px-6 md:p-16">
            <p className="pb-4 align-left md:text-white">
              {' '}
              Jobs
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Interview{' '}
            </p>
            <div className="w-full md:hidden">
              <img
                src="https://via.placeholder.com/350"
                className="rounded-md"
              />
            </div>
            <div className="md:w-3/5">
              <p className="text-sm font-getdevM">
                {' '}
                {/* <span className="text-gray-500 "> Update</span> 12 mins ago */}
              </p>

              {message ? (
                <p className="success">{message}</p>
              ) : (
                error && <p className="error">{error}</p>
              )}
              <p className="mt-3 text-2xl md:text-3xl text-gdblue font-getdevM">
                {job?.name}
              </p>
              <p className="mb-2 text-lg text-gray-500 md:text-sm">
                {' '}
                <span className="inline-block"></span> {job?.location}
              </p>
              <div className="w-4/5 py-2 text-center text-white bg-red-600 rounded-full shadow-sm md:w-2/5 font-getdevM ">
                ₦{job?.salary} - ₦{job?.salary_max}
              </div>

              <div className="mt-10">
                <p
                  className="pt-2 pb-8 text-sm border-b font-getdevM"
                  dangerouslySetInnerHTML={{ __html: job?.brief }}
                ></p>
                {
                  job?.responsibility && (

                    <div className="pt-6 pb-8 ">
                      <h6 className="mb-2 text-gdsubBlue">Responsibility</h6>
                      <div
                        className="text-sm font-getdevM "
                        dangerouslySetInnerHTML={{ __html: job?.responsibility }}
                      ></div>
                    </div>
                  )
                }

                {/* <div className="pt-6 pb-8 ">
                  <h6 className="mb-2 text-gdsubBlue">
                    Skills and Qualifications
                  </h6>
                  <div className="text-sm font-getdevM ">
                    <ol className="list-decimal list-inside">
                      <li>
                        {' '}
                        Integration of user-facing elements developed by
                        front-end developers
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="">
              <div className="hidden w-full md:block">
                <img
                  src="https://via.placeholder.com/350"
                  className="rounded-md"
                />
              </div>
              <div className="mt-10 mb-5 md:border-gray-200 md:border-2 md:rounded-lg md:p-3">
                <h6 className="mb-2 text-gdblue">Job Type</h6>
                {/* <div className="inline-flex mb-3 text-center text-white rounded-lg shadow-md">
                            <span className="flex-1 p-3 bg-gray-200 text-gdsubBlue ">Contract</span>
                            <span className="p-3 bg-blue-500">1 Month</span>
                        </div> */}

                <div class="inline-flex shadow-md mb-3 text-white">
                  <span class="  py-3 px-4 rounded-l text-gdsubBlue bg-gray-200">
                    {job?.type}
                  </span>
                  {/* <span class="   py-3 px-4 rounded-r bg-blue-700">
                    1 Month
                  </span> */}
                </div>
                <div className="py-3 border-gray-200 md:w-5/6 md:border-b-2">
                  <div className="p-3 mb-3 border-2 border-gray-200 rounded-lg">
                    <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                      From:
                    </span>{' '}
                    <span className="pl-3 text-base font-getdevM">
                      {job?.date}
                    </span>
                  </div>
                  {/* <div className="p-3 mb-3 border-2 border-gray-200 rounded-lg">
                    <span className="px-3 py-1 text-sm bg-gray-300 rounded-full">
                      To:
                    </span>{' '}
                    <span className="pl-3 text-base font-getdevM">
                      September, 12th 2020
                    </span>
                  </div> */}
                </div>
                <div className="py-3 border-gray-200 md:border-b-2">
                  <h6 className="text-gdblue">Job Availability</h6>
                  <div className="inline-flex my-2 ">
                    <div className="px-4 tag "> {job?.status}</div>
                    {/* <div className="px-4 mx-3 tag">Remote </div> */}
                  </div>
                </div>
                <div>
                  <h6 className="my-2 text-gdblue"> Tech Stack </h6>

                  <div className="inline-flex ">
                    {job?.technologies &&
                      job?.technologies.map(tech => (
                        <div className="tag "> {tech}</div>
                      ))}
                    {/* <div className="tag "> PHP</div>
                    <div className="mx-3 tag">Python </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <button
                  class="btn inline-block w-full p-5 text-center bg-red-500 shadow-md"
                  onClick={() => handleApply(job?.id)}
                >
                  Apply for this job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobView;