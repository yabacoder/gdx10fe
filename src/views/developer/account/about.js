import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import http from '../../../utils/service';
const About = () => {
  const { name, bio } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      // const user = await http('/developer/profile', 'get');
      // // console.log(user);
      // setUser(user.data);
    };

    getUser();
  }, []);

  return (
    <div className="p-4 px-6 bg-white rounded-md">
      <div className="flex justify-between header">
        <h6 className="text-blue-800">About {name} </h6>

        <Link
          to="/developer/profile/edit"
          className="text-sm text-gray-500 ">
          <svg viewBox="0 0 18 17" className="inline-flex w-4 mx-2">
            <defs />
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              opacity=".6"
            >
              <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z" />
            </g>
          </svg>
          <span>Edit</span>
        </Link>
      </div>
      <hr className="my-3 " />
      <div>
        <p
          className="py-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: bio }}
        ></p>
      </div>
    </div>
  );
};

export default About;
