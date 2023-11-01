import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Camera from '../../../assets/img/camera.png';
import Portfolio from './portfolio';
import About from './about';
import Education from './education';
import WorkExperience from './experience';
import Skills from './skills';
import Profile from '../../../assets/img/profile.png';
import BgImg from '../../../assets/img/dev-bg-img.png';
// import http from '../../../utils/service';
import { useGetProfileQuery } from '../../../features/developer/profileSlice';

const Account = () => {
  const [openTab, setOpenTab] = useState('portfolio');
  const [projects, setProjects] = useState('');
  const [applications, setApplications] = useState('');
  const [articles, setArticles] = useState(0);
  const [questions, setQuestions] = useState(0); 

  const {
    data
  } = useGetProfileQuery();
  // console.log(data, "Api call");

  useEffect(() => {
    const getProfile = async () => {
      let profile;
      // if (!localStorage.getItem('profile')) {
      //   profile = await http('/developer/profile/edit', 'get');
      //   profile = profile.data;
      //   localStorage.setItem('profile', JSON.stringify(profile));
      // }
      // //profile = profile.data;
      // profile = JSON.parse(localStorage.getItem('profile'));
      // setProjects(profile.projects);
      // setApplications(profile.applications);
      // setArticles(profile.articles);
      // setQuestions(profile.questions);
    };

    const getProjects = async () => {
      // const pro = await http('/developer/project/total', 'GET');
      // const projects = pro.data;

      return setProjects(projects);
    };
    const getApplicaitons = async () => {
      // const total = await http('/developer/applications/total', 'GET');
      // const total_application = total.data;
      // //   console.log('Total', total_application);
      // return setApplications(total_application);
    };

    const getArticles = async () => {
      // const total = await http('/developer/articles/dev_total', 'GET');
      // const total_articles = total.data;
      // //   console.log('Total', total_application);
      // return setArticles(total_articles);
    };

    const getTotalQuestions = async () => {
      // const total = await http('/developer/assessment/total_taken', 'GET');
      // const total_questions = total.data;
      // //   console.log('Total', total_application);
      // return setQuestions(total_questions);
    };

    getProfile();

    // getArticles();
    getTotalQuestions();
    // getApplicaitons();
    // getProjects();
  }, []);

  return (
    <div>
      <div className="inset-0 -m-20 -p-12">
        <img alt="profile-img" src={BgImg} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-2/5 h-screen p-5 -mt-32 text-gray-500 bg-white rounded-md shadow-md ">
          <div className="text-center ">
            {/* <img alt="profile" /> */}
            <div className="w-24 h-24 mx-auto mb-3 bg-gray-400 border-gray-100 rounded-full">
              <img
                alt=""
                src={Profile}
                className="object-cover w-full h-24 border-2 border-gray-100 rounded-full "
              />
              <img src={Camera} alt="" className="-mt-10 -mr-28" />
            </div>

            <h5>Sheriff Shittu</h5>
            <p>Fullstack Developer</p>
            <hr className="my-3" />
            <p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-flex w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Lagos, Nigeria
            </p>
          </div>
          <div className="flex items-center justify-center my-6 text-sm">
            <span className="mx-1">
              <Link
                to="/developer/profile/edit"
                className="px-5 py-2 my-2 text-xs text-blue-700 transition duration-150 ease-in-out bg-transparent border rounded-md hover:bg-blue-700 hover:text-white"
              >
                Edit Profile
              </Link>
            </span>
            <span className="mx-1">
              <Link
                to="/developer/profile/edit/?cv=true"
                className="p-2 px-5 my-2 text-xs text-white transition duration-150 ease-in-out bg-blue-700 border rounded-md hover:border hover:bg-transparent hover:text-blue-700">
                Add Resume
              </Link>
            </span>
          </div>
          <div className="mt-6">
            <div className="flex justify-between p-3 text-sm border-b">
              <span>Projects</span>
              <span className="text-blue-700">{projects}</span>
            </div>
            <div className="flex justify-between p-3 text-sm border-b">
              <span>Questions Taken</span>
              <span className="text-blue-700">{questions}</span>
            </div>
            <div className="flex justify-between p-3 text-sm border-b">
              <span>Articles</span>
              <span className="text-blue-700">{articles}</span>
            </div>
            <div className="flex justify-between p-3 text-sm border-b">
              <span>Applied Jobs</span>
              <span className="text-blue-700">{applications}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-screen">
          <div className="mt-20 ml-5">
            <ul className="flex tabs">
              <button
                className="mr-1"
                data-target="portfolio"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('portfolio');
                }}
              >
                <Link
                  to="#"
                  className={
                    openTab === 'portfolio'
                      ? ' inline-block px-4 py-2 font-getdevB  text-sm -mb-px border-b-2 border-blue-600  text-blue-700'
                      : 'inline-block px-4 text-sm py-2 font-getdevB '
                  }
                >
                  Porfolio
                </Link>
              </button>
              <button
                className="mr-1"
                data-target="about"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('about');
                }}
              >
                <Link
                  to="#"
                  className={
                    openTab === 'about'
                      ? ' inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600 text-sm  text-blue-700'
                      : 'inline-block text-sm px-4 py-2 font-getdevB '
                  }
                >
                  About
                </Link>
              </button>
              <button
                className="mr-1"
                data-target="education"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('education');
                }}
              >
                <Link
                  to="#"
                  className={
                    openTab === 'education'
                      ? ' inline-block px-4 py-2 font-getdevB text-sm  -mb-px border-b-2 border-blue-600  text-blue-700'
                      : 'text-sm inline-block px-4 py-2 font-getdevB '
                  }
                >
                  Education
                </Link>
              </button>
              <button
                className="mr-1"
                data-target="work"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('work');
                }}
              >
                <Link
                  to="#"
                  className={
                    openTab === 'work'
                      ? 'text-sm inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600  text-blue-700'
                      : 'text-sm inline-block px-4 py-2 font-getdevB '
                  }
                >
                  Work Experience
                </Link>
              </button>
              <button
                className="mr-1"
                data-target="skill"
                onClick={e => {
                  e.preventDefault();
                  setOpenTab('skill');
                }}
              >
                <Link
                  to="#"
                  className={
                    openTab === 'skill'
                      ? 'text-sm inline-block px-4 py-2 font-getdevB -mb-px border-b-2 border-blue-600  text-blue-700'
                      : 'text-sm inline-block px-4 py-2 font-getdevB'
                  }
                >
                  Skill Rating
                </Link>
              </button>
            </ul>
          </div>

          <div className="px-3 py-5 mt-0 ml-5 rounded-md ">
            <div id="panels">
              <div
                className={
                  openTab === 'portfolio'
                    ? ' portfolio tab-content active py-5 block'
                    : 'hidden'
                }
              >
                <Portfolio />
              </div>
              <div
                className={
                  openTab === 'about'
                    ? ' about tab-content active py-5 block'
                    : 'hidden'
                }
              >
                <About />
              </div>
              <div
                className={
                  openTab === 'education'
                    ? ' education tab-content active py-5 block'
                    : 'hidden'
                }
              >
                <Education />
              </div>
              <div
                className={
                  openTab === 'work'
                    ? ' work tab-content active py-5 block'
                    : 'hidden'
                }
              >
                <WorkExperience />
              </div>
              <div
                className={
                  openTab === 'skill'
                    ? ' skill tab-content active py-5 block'
                    : 'hidden'
                }
              >
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
