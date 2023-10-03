import React, { useState, useEffect } from 'react';
import Layout from '../layout';
import Information from './information';
import Portfolio from './portfolio';
import Skills from './skills';
import Work from './workExperience';
import Education from './education';
import Socials from './socials';
import Cv from './Cv';
import Password from './password';
// import LeftNav from './LeftNav'
import { Link } from 'react-router-dom';
import http from '../../../utils/service';

const Index = () => {
  const [openTab, setOpenTab] = useState('information');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const profile = await http('/developer/profile/edit', 'get');
      console.log(profile);
      setProfile(profile.data);
    };

    getProfile();
  }, []);

  return (
    <>
      <div className="px-10 py-5 -mt-10 bg-white rounded-md">
        <div className="inline-flex items-center w-full">
          <div className="px-4 text-gray-500 w-2-12">
            <h6 className="">Your profile is:</h6>
          </div>
          <div className="w-2/12 mr-2 text-center">
            <ul>
              <li className="py-2 text-xs text-green-500 bg-gray-200 bg-opacity-50 border border-green-500 rounded-full font-getdevB ">
                75% complete
              </li>
            </ul>
          </div>

          <div class="w-8/12">
            <div class="shadow rounded-full w-10/12 bg-gray-300">
              <div class="bg-green-500 text-xs rounded-full leading-none py-2 text-center text-white w-9/12"></div>
            </div>
            <p className="text-xs"></p>
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="w-1/4 text-sm bg-white rounded-md links ">
          <div>
            <div
              data-target="information"
              onClick={e => {
                e.preventDefault();
                setOpenTab('information');
              }}
              className={
                openTab === 'information'
                  ? ' p-5 cursor-pointer bg-red-100 font-getdevB border-r-4 text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div>Basic Information</div>
            </div>
            <div
              data-target="skills"
              onClick={e => {
                e.preventDefault();
                setOpenTab('skills');
              }}
              className={
                openTab === 'skills'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Skills and Availability</div>
            </div>
            <div
              data-target="portfolio"
              onClick={e => {
                e.preventDefault();
                setOpenTab('portfolio');
              }}
              className={
                openTab === 'portfolio'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Portfolio</div>
            </div>
            <div
              data-target="work"
              onClick={e => {
                e.preventDefault();
                setOpenTab('work');
              }}
              className={
                openTab === 'work'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Work Experience</div>
            </div>
            <div
              data-target="education"
              onClick={e => {
                e.preventDefault();
                setOpenTab('education');
              }}
              className={
                openTab === 'education'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Education</div>
            </div>
            <div
              data-target="cv"
              onClick={e => {
                e.preventDefault();
                setOpenTab('cv');
              }}
              className={
                openTab === 'cv'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Upload CV</div>
            </div>
            <div
              data-target="socials"
              onClick={e => {
                e.preventDefault();
                setOpenTab('socials');
              }}
              className={
                openTab === 'socials'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Social Media</div>
            </div>
            <div
              data-target="password"
              onClick={e => {
                e.preventDefault();
                setOpenTab('password');
              }}
              className={
                openTab === 'password'
                  ? ' p-5 cursor-pointer bg-red-100 border-r-4 font-getdevB text-red-600 border-red-600 rounded-r-md'
                  : 'p-5 cursor-pointer font-getdev'
              }
            >
              <div className="">Change Password</div>
            </div>
          </div>
        </div>
        <div className="w-11/12 px-12 py-3 ml-5 bg-white rounded-md content">
          <div id="panels">
            <div
              className={
                openTab === 'information'
                  ? ' information tab-content active block'
                  : 'hidden'
              }
            >
              <Information />
            </div>

            <div
              className={
                openTab === 'skills'
                  ? ' about tab-content active  block'
                  : 'hidden'
              }
            >
              <Skills />
            </div>
            <div
              className={
                openTab === 'portfolio'
                  ? ' education tab-content active  block'
                  : 'hidden'
              }
            >
              <Portfolio />
            </div>
            <div
              className={
                openTab === 'work'
                  ? ' work tab-content active  block'
                  : 'hidden'
              }
            >
              <Work />
            </div>
            <div
              className={
                openTab === 'education'
                  ? ' skill tab-content active  block'
                  : 'hidden'
              }
            >
              <Education />
            </div>
            <div
              className={
                openTab === 'cv' ? ' skill tab-content active  block' : 'hidden'
              }
            >
              <Cv />
            </div>
            <div
              className={
                openTab === 'socials'
                  ? ' skill tab-content active  block'
                  : 'hidden'
              }
            >
              <Socials />
            </div>
            <div
              className={
                openTab === 'password'
                  ? ' skill tab-content active  block'
                  : 'hidden'
              }
            >
              <Password />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
