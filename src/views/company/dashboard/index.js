import React, { useState } from 'react';
import Profile from '../../../assets/img/profile.png';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const [jobs, setJobs] = useState([2, 3, 4]);
    const [candidates, setCandidates] = useState([2, 3, 4]);

    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="flex items-center justify-between w-full intro">
                    <div className="w-1/3 welcome">
                        <h1 className="text-4xl leading-none text-blue-800 font-getdevBL">Let's get you started</h1>
                        <p className="py-3">Lorem ipsum dolor sit amet consec
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam.
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-2/3 h-56 ml-5 boxes">
                        <div className="w-1/2 ">
                            <div className="flex flex-col items-center h-56 px-10 py-5 mx-3 space-y-5 text-center text-gray-600 bg-white rounded-lg shadow-lg addJob">
                                <h5 className="text-blue-800">Add a Job</h5>
                                <p className="leading-4 text-center text-gray-500 ">You're here to hire someone right? Creating and activating a position is the first step towards that.</p>
                                <Link
                                    to="job/AddJob"
                                    className="flex items-center justify-center w-2/3 px-3 py-3 my-3 space-x-4 text-sm text-red-600 bg-red-200 rounded-md hover:cursor-pointer">
                                    <span> Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <g id="Group_1534" data-name="Group 1534" transform="translate(-1272 -485)">
                                            <g id="Group_1533" data-name="Group 1533">
                                                <g id="Group_1532" data-name="Group 1532" transform="translate(1272 485)">
                                                    <g id="Group_1531" data-name="Group 1531">
                                                        <circle id="Ellipse_617" data-name="Ellipse 617" cx="12.5" cy="12.5" r="12.5" fill="#ed3237" />
                                                    </g>
                                                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(8.671 7.844)">
                                                        <path id="Path_12466" data-name="Path 12466" d="M7.5,18h8.435" transform="translate(-7.5 -13.783)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                                                        <path id="Path_12467" data-name="Path 12467" d="M18,7.5l4.387,4.218L18,15.935" transform="translate(-13.952 -7.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="w-1/2 ">
                            <div className="flex flex-col items-center h-56 px-10 py-5 ml-3 space-y-5 text-center text-white bg-blue-500 rounded-lg shadow-lg ">
                                <h5 className="">Invite Interviewers</h5>
                                <p className="my-2 leading-4">Hiring is usually a team effort. Invite your team and get them involved. and get them involved</p>
                                <Link
                                    to={"interviewers"}
                                    class="flex items-center justify-center w-2/3  my-3 px-3 py-3 space-x-4 text-sm  bg-blue-200 rounded-md text-blue-500">
                                    <span>
                                        Get Started
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><g data-name="Group 1540"><g data-name="Group 1534"><g data-name="Group 1533"><g data-name="Group 1532"><g data-name="Group 1531"><circle data-name="Ellipse 617" cx="12.5" cy="12.5" r="12.5" fill="#fff" /></g><g data-name="Icon feather-arrow-right" fill="none" stroke="#1e8dff" stroke-linecap="round" stroke-linejoin="round"><path data-name="Path 12466" d="M8.671 12.061h8.435" /><path data-name="Path 12467" d="M12.719 7.844l4.387 4.218-4.387 4.217" /></g></g></g></g></g></svg>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-between w-full p-5 px-8 py-8 mt-10 text-center bg-white rounded-md shadow-md">
                    <div className="pr-10 leading-tight text-left border-r-2">
                        <h4 className="text-blue-800">Recent <br /> Statistics</h4>
                    </div>
                    <div>
                        <h3 className="text-yellow-400">0</h3>
                        <p>Active Jobs</p>
                    </div>
                    <div>
                        <h3 className="text-red-400">0</h3>
                        <p>New Candidates</p>
                    </div>
                    <div>
                        <h3 className="text-blue-400">0</h3>
                        <p>Shortlisted Candidates</p>
                    </div>
                    <div>
                        <h3 className="text-teal-400">0</h3>
                        <p>Hired Candidates</p>
                    </div>

                </div>
                <div className="flex justify-between w-full px-8 py-8 mt-10 bg-white rounded-md shadow-md">
                    <div className="w-1/2 px-5">
                        <p className='text-lg'>Jobs</p>
                        <div className="h-40 p-10 my-3 text-gray-500 bg-gray-200 rounded-md ">
                            <p className='mb-2'>Sorry, you currently do not have a job listed.</p>
                            <Link
                                // onClick={() => {
                                //     navigate("job/addJob");
                                // }}
                                to={"job/addJob"}
                                className="p-2 my-2 text-sm text-white align-middle bg-red-600 rounded hover:bg-red-500">
                                Add a Job
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between rounded-md">
                            {
                                jobs.map(job => (
                                    <div>
                                        <div className="flex flex-col justify-between px-4 py-4 my-3 bg-white border border-gray-400 rounded-md ">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h6 className="text-blue-800 ">UX/UI Designer</h6>
                                                    <p className="-ml-2 text-blue-800">
                                                        <span className=''>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-4 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        Lagos, Nigeria &bull;<span className="text-xs text-gray-500">  Created 2 days ago</span></p>

                                                </div>
                                                <div>
                                                    <ul className="inline-flex">
                                                        <li className="flex items-center px-4 text-sm border-r-2 border-gray-500">
                                                            <Link
                                                                to={"job/AddJob"}
                                                            >
                                                                <svg viewBox="0 0 18 17" className="inline-flex w-4 mx-2">
                                                                    <defs />
                                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".6">
                                                                        <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z" />
                                                                    </g>
                                                                </svg>
                                                            </Link>
                                                        </li>
                                                        <li className="px-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="mt-5 info">
                                                <ul className="flex items-center">
                                                    <li className="text-sm text-blue-800 ">
                                                        Team
                                                    </li>
                                                    <li className="flex mx-1 text-sm text-blue-800">
                                                        <div className="w-8 h-8 p-2 text-center text-white bg-red-600 rounded-full ">T</div>
                                                        <div className="w-8 h-8 p-2 -ml-3 text-white bg-blue-600 border-white rounded-full">L</div>
                                                        <div className="w-8 h-8 p-2 -ml-3 text-white bg-yellow-600 border-white rounded-full">C</div>
                                                        <div className="w-8 h-8 p-2 -ml-3 text-white bg-teal-600 border-white rounded-full">N</div>
                                                    </li>
                                                    <li><svg viewBox="0 0 26 26" className="w-6">
                                                        <defs />
                                                        <g data-name="Group 1535">
                                                            <g fill="none" stroke="#485685" data-name="Ellipse 663">
                                                                <circle cx="13" cy="13" r="13" stroke="none" />
                                                                <circle cx="13" cy="13" r="12.5" />
                                                            </g>
                                                            <path fill="#485685" d="M18 12h-4V8a1 1 0 00-2 0v4H8a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 000-2z" data-name="Icon ionic-ios-add" />
                                                        </g>
                                                    </svg></li>

                                                    <li className="px-4 py-1 ml-auto text-sm border rounded-full cursor-pointer">
                                                        <Link
                                                            to="candidates"
                                                        >

                                                            See Candidate
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="w-1/2 px-5">
                        <p className='text-lg'>New Candidates</p>
                        <div className="h-40 p-10 my-3 text-gray-500 bg-gray-200 rounded-md">
                            <p>Sorry, you currently do not have a Candidate.</p>
                            {/* <button className="p-2 my-2 text-sm text-white align-middle bg-red-600 rounded hover:bg-red-500">Add a Job</button> */}
                        </div>
                        <div className="flex flex-col justify-between rounded-md">
                            {
                                candidates.map(candidate => (
                                    <div>
                                        <Link
                                            to="candidates/profile"
                                        >
                                            <div className="relative flex flex-col justify-between px-4 py-5 my-3 bg-white border border-gray-400 rounded-md ">
                                                <div className="flex ">
                                                    <div className="w-20 h-20 bg-gray-400 border-gray-100 rounded-full">
                                                        <img alt="" src={Profile} className="object-cover w-full h-20 border-2 border-gray-100 rounded-full " />
                                                    </div>
                                                    <div className="px-3" >
                                                        <h6 className="text-blue-800 ">Jane Doe</h6>
                                                        <p className="text-blue-800">  JanetDoe@gmail.com</p>
                                                        <p className="my-2 text-blue-800">
                                                            <span>
                                                                <svg viewBox="0 0 25 25" className="inline-flex w-6 mr-2">
                                                                    <defs />
                                                                    <g transform="translate(-1289 -1002)">
                                                                        <circle cx="12.5" cy="12.5" r="12.5" fill="#0672e2" transform="translate(1289 1002)" />
                                                                        <path fill="#fff" d="M1307 1011h-3v-2a1 1 0 00-1-1h-3a1 1 0 00-1 1v2h-3a1 1 0 00-1 1v8a1 1 0 001 1h11a1 1 0 001-1v-8a1 1 0 00-1-1zm-4 0h-3v-2h3z" />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            Ui/Ux Designer
                                                        </p>
                                                    </div>
                                                    <div className="absolute top-0 right-0 mr-6">
                                                        <div className="flex justify-between ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="39.392" height="36" viewBox="0 0 39.392 36">
                                                                <g id="Group_1536" data-name="Group 1536" transform="translate(-1646.308 -907)">
                                                                    <path id="Icon_open-bookmark" data-name="Icon open-bookmark" d="M0,0V36l19.7-9,19.7,9V0Z" transform="translate(1646.308 907)" fill="#ffb300" />
                                                                    <text id="New" transform="translate(1653 926)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1" font-size="13" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="0" y="0">New</tspan></text>
                                                                </g>
                                                            </svg>

                                                        </div>
                                                        <div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
