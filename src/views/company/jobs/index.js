import React, { useState } from 'react';
// import Layout from '../layout'
import { Link } from 'react-router-dom';
const Index = () => {
    const [jobs, setJobs] = useState([2, 3, 4]);

    return (
        <>
            <div>
                <div className="flex items-center justify-between filter">
                    <div className="flex items-center left ">

                        <div>
                            <div className="flex items-center bg-white border rounded-md w-36">
                                <span className="pl-2">
                                    <svg viewBox="0 0 15 15" className="w-4">
                                        <defs />
                                        <path fill="#485685" d="M14 0H1a1 1 0 00-1 1l6 6v6l2 2a1 1 0 001-1V7l6-6a1 1 0 00-1-1z" data-name="Icon awesome-filter" />
                                    </svg>
                                </span>
                                <span>
                                    <select className="text-sm border-transparent form-select">
                                        <option className="" selected> Filter</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div className="p-2 px-3 mx-2 border rounded-md">
                            <svg viewBox="0 0 16 18" className="w-4">
                                <defs />
                                <g data-name="Group 1345">
                                    <g fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-name="Icon feather-trash-2" opacity=".6">
                                        <path d="M1 4h14" data-name="Path 12628" />
                                        <path d="M13 4v11a2 2 0 01-1 2H4a2 2 0 01-1-2V4m2 0V3a2 2 0 011-2h4a2 2 0 011 2v1" data-name="Path 12629" />
                                        <path d="M6 8v5" data-name="Path 12630" />
                                        <path d="M10 8v5" data-name="Path 12631" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="p-1 mx-2">
                            <svg viewBox="0 0 5 19" className="w-4 h-4">
                                <defs />
                                <g fill="#8691b0" data-name="Group 1256" transform="translate(-787 -96)">
                                    <circle cx="2.5" cy="2.5" r="2.5" data-name="Ellipse 638" transform="translate(787 96)" />
                                    <circle cx="2.5" cy="2.5" r="2.5" data-name="Ellipse 639" transform="translate(787 103)" />
                                    <circle cx="2.5" cy="2.5" r="2.5" data-name="Ellipse 640" transform="translate(787 110)" />
                                </g>
                            </svg>

                        </div>

                        <div className="mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.315" height="16.325" viewBox="0 0 16.315 16.325">
                                <path id="Icon_material-refresh" data-name="Icon material-refresh" d="M19.932,8.4A8.164,8.164,0,1,0,22.055,16.2H19.932a6.119,6.119,0,1,1-5.765-8.163,6.035,6.035,0,0,1,4.306,1.816l-3.285,3.285H22.33V6Z" transform="translate(-6.015 -6)" fill="#8691b0" />
                            </svg>

                        </div>
                        <div className="relative flex mx-2 bg-white">
                            <div className="inset-y-0 flex items-center p-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.523" height="18.523" viewBox="0 0 18.523 18.523">
                                    <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3.75 -3.75)" opacity="0.62">
                                        <path id="Path_12661" data-name="Path 12661" d="M19.355,11.928A7.428,7.428,0,1,1,11.928,4.5,7.428,7.428,0,0,1,19.355,11.928Z" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                        <path id="Path_12662" data-name="Path 12662" d="M29.014,29.014l-4.039-4.039" transform="translate(-7.802 -7.802)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                    </g>
                                </svg>

                            </div>
                            <input type="search" className="h-6 p-5 pl-4 outline-none" placeholder="Search" />
                        </div>
                    </div>
                    <div className="flex p-3 right">
                        <div className="ml-3 ">
                            <Link to="/company/job/AddJob">
                                <p
                                    className="flex items-center justify-center p-5 text-sm text-white bg-blue-600 cursor-pointer form-input leading-0"
                                >Add Job +</p>
                            </Link>

                        </div>
                    </div>

                </div>
                <div className="flex justify-start px-5 py-4 space-x-2 bg-white rounded-lg shadow-md">
                    <div className="bg-gray-200">
                        <label class="block w-56   md:flex mx-2">
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800">
                                <option>Status</option>
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Suspended</option>
                            </select>
                        </label>
                    </div>
                    <div className="bg-gray-200">
                        <label class="block w-56   md:flex mx-2">
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Location</option>
                            </select>
                        </label>
                    </div>
                    {/* <div className="bg-gray-200">
                        <label class="block w-56   md:flex mx-2">

                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Date</option>
                            </select>
                        </label>
                    </div> */}
                </div>
                <div className="px-8 py-8 mt-10 bg-white rounded-lg shadow-md">
                    <table className="w-full table-auto">
                        <thead className="font-hairline font-getdevM">
                            <tr className="border-b">
                                <th className="py-2 "><input className="form-checkbox" type="checkbox" /> </th>
                                <th className="px-4 py-2"> Name</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Candidates</th>
                                <th className="px-4 py-2">Created</th>
                                <th className="px-4 py-2">Interviewers </th>
                                <th className="px-4 py-2">Actions</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job => (
                                    <tr className="p-5 text-sm text-center border-b">
                                        <td className="py-2"> <input className="form-checkbox" type="checkbox" /></td>
                                        <td className="px-4 py-2 ">  UX Designer</td>
                                        <td className="px-4 py-2 ">Lagos, Nigeria</td>
                                        <td className="px-4 py-2 ">14</td>
                                        <td className="px-4 py-2 ">Yesterday, 10:09pm</td>
                                        <td className="px-4 py-2 ">
                                            <div className="flex items-center justify-center">
                                                <div className="w-8 h-8 p-2 text-center text-white bg-red-600 rounded-full ">T</div>
                                                <div className="w-8 h-8 p-2 -ml-3 text-white bg-blue-600 border-white rounded-full">L</div>
                                                <div className="w-8 h-8 p-2 -ml-3 text-white bg-yellow-600 border-white rounded-full">C</div>
                                                <div className="w-8 h-8 p-2 -ml-3 text-white bg-teal-600 border-white rounded-full">N</div>
                                                <div className="pl-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                                                        <g id="Group_1535" data-name="Group 1535" transform="translate(-692 -866)">
                                                            <g id="Ellipse_663" data-name="Ellipse 663" transform="translate(692 866)" fill="none" stroke="#485685" stroke-width="1">
                                                                <circle cx="13" cy="13" r="13" stroke="none" />
                                                                <circle cx="13" cy="13" r="12.5" fill="none" />
                                                            </g>
                                                            <path id="Icon_ionic-ios-add" data-name="Icon ionic-ios-add" d="M20.147,14.185H15.67V9.707a.742.742,0,0,0-1.485,0v4.478H9.707a.742.742,0,0,0,0,1.485h4.478v4.478a.742.742,0,0,0,1.485,0V15.67h4.478a.742.742,0,0,0,0-1.485Z" transform="translate(690.035 864.035)" fill="#485685" />
                                                        </g>
                                                    </svg>
                                                </div>

                                            </div>
                                        </td>
                                        <td className="flex items-center justify-center p-5 actions">
                                            <div className="mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.557" height="16.798" viewBox="0 0 17.557 16.798">
                                                    <g id="Icon_feather-edit-3" data-name="Icon feather-edit-3" transform="translate(1 1)" opacity="0.64">
                                                        <path id="Path_12624" data-name="Path 12624" d="M18,30h7.779" transform="translate(-10.221 -15.202)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                        <path id="Path_12625" data-name="Path 12625" d="M16.168,4.855a1.833,1.833,0,1,1,2.593,2.593l-10.8,10.8L4.5,19.116l.864-3.457Z" transform="translate(-4.5 -4.318)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="pl-3 border-l-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.037" height="17.597" viewBox="0 0 16.037 17.597">
                                                    <g id="Group_1345" data-name="Group 1345" transform="translate(-7.561 -7.201)">
                                                        <g id="Icon_feather-trash-2" data-name="Icon feather-trash-2" transform="translate(8.561 8.201)" opacity="0.64">
                                                            <path id="Path_12628" data-name="Path 12628" d="M4.5,9H18.537" transform="translate(-4.5 -5.881)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <path id="Path_12629" data-name="Path 12629" d="M18.418,6.119V17.037a1.56,1.56,0,0,1-1.56,1.56H9.06a1.56,1.56,0,0,1-1.56-1.56V6.119m2.34,0V4.56A1.56,1.56,0,0,1,11.4,3h3.119a1.56,1.56,0,0,1,1.56,1.56v1.56" transform="translate(-5.94 -3)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <path id="Path_12630" data-name="Path 12630" d="M15,16.5v4.679" transform="translate(-9.541 -9.481)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                            <path id="Path_12631" data-name="Path 12631" d="M21,16.5v4.679" transform="translate(-12.422 -9.481)" fill="none" stroke="#485685" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>

                                        </td>
                                        <td className="px-4 py-2 ">
                                            <div className="px-1 bg-white border form-select">
                                                <select className="w-full text-sm border-0">
                                                    <option>Active</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <div className="flex items-center justify-end mt-20">
                        <div className="px-3 py-2 m-3 border border-red-600 rounded-md ">
                            <p>1</p>
                        </div>
                        <div className="px-3 py-2 m-1 border rounded-md ">
                            <p>2</p>
                        </div>
                        <div className="px-3 py-2 m-1 border rounded-md ">
                            <p>3</p>
                        </div>
                        <div className="px-3 py-2 m-1 border rounded-md ">
                            <p>Next</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Index;
