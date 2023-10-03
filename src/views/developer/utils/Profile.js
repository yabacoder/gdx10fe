import React, { useEffect, useState } from 'react';
import Camera from '../../../assets/img/camera.png';
import profileImage from '../../../assets/img/profile.png';
// import useAuth from '../../../hooks/useAuth';
import http from '../../../utils/service';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  // const { data } = useAuth();
  const [response, setResponse] = useState([]);
  const [projects, setProjects] = useState([]);
  const [jobs, setJobs] = useState([]);

  /**
   * This pull the developer data from the Backend
   * @todo
   *  (a) Total Jobs applied for
   *  (b) Total projects applied for
   *
   */
  const fetchDetail = async () => {
    const response = await http('/developer/profile', 'GET');
    //console.log(response.data);
    setResponse(response.data);
  };

  const fetchProjects = async () => {
    const response = await http('/developer/project/total', 'GET');
    // console.log(response.data);
    setProjects(response.data);
  };

  const fetchTotalJobs = async () => {
    const response = await http('/developer/applications/total', 'GET');
    setJobs(response.data);
    // console.log(jobs)
  };

  useEffect(() => {
    fetchDetail();
    fetchProjects();
    fetchTotalJobs();
  }, []);
  // console.log (response);
  return (
    <div>
      <div className="flex flex-col items-end justify-start h-32 p-5 bg-blue-800 rounded-t-md profile-banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="19"
          viewBox="0 0 5 19"
        >
          <g
            id="Group_1256"
            data-name="Group 1256"
            transform="translate(-787 -96)"
            opacity="0.8"
          >
            <circle
              id="Ellipse_638"
              data-name="Ellipse 638"
              cx="2.5"
              cy="2.5"
              r="2.5"
              transform="translate(787 96)"
              fill="#fff"
            />
            <circle
              id="Ellipse_639"
              data-name="Ellipse 639"
              cx="2.5"
              cy="2.5"
              r="2.5"
              transform="translate(787 103)"
              fill="#fff"
            />
            <circle
              id="Ellipse_640"
              data-name="Ellipse 640"
              cx="2.5"
              cy="2.5"
              r="2.5"
              transform="translate(787 110)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col items-center w-full p-10 text-center text-white bg-red-600 rounded-b-md profile-detail">
        <div className="w-24 h-24 mx-auto mb-3 -m-20 bg-gray-400 border-gray-100 rounded-full">
          <img
            alt=""
            src={profileImage}
            className="object-cover w-full h-24 border-2 border-gray-100 rounded-full "
          />
          <img src={Camera} alt="" className="-mt-10 -mr-28" />
        </div>
        <div>
          {' '}
          <h6 className="mt-5 text-lg text-white">
            {/* {response.name ? response.name : response.username} */}
          </h6>
          <p className="text-gray-400 ">{/*response.stack */}</p>
        </div>

        <div className="flex items-center justify-between w-full mt-5 text-center bg-red-500 rounded-md">
          <div className="flex flex-col w-1/2 py-3 text-sm border-r border-red-600">
            <span>{jobs || 0}</span>
            <span>Jobs</span>
          </div>
          <div className="flex flex-col w-1/2 py-3 text-sm border-red-600 ">
            <span>{projects || 0}</span>
            <span>Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
