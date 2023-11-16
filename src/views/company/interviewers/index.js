import React, { useState } from 'react';
// import Layout from '../layout'
import Modal from 'react-modal';

import { CSSTransition } from 'react-transition-group';

const Index = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                        <div className="flex justify-between p-3 ml-3 text-white bg-red-600 hover:cursor-pointer" onClick={() => setModalIsOpen(true)} >
                            <span>Invite Interviewer</span>
                            <svg className="w-6 h-6 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="flex justify-start px-5 py-4 space-x-2 bg-white rounded-lg shadow-md">

                    <div className="bg-gray-200">
                        <label class="block w-56   md:flex mx-2">
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Roles</option>
                            </select>
                        </label>
                    </div>
                    <div className="bg-gray-200">
                        <label class="block w-56   md:flex mx-2">
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Status</option>
                            </select>
                        </label>
                    </div>

                </div>
                <div className="px-8 py-8 mt-10 bg-white rounded-lg shadow-md">
                    <table className="w-full table-auto">
                        <thead className="font-hairline font-getdevM">
                            <tr className="content-start border-b ">
                                <th className="px-4 py-2"> <input className="form-checkbox" type="checkbox" /> </th>
                                <th className="px-4 py-2">Photo</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2 ">Role </th>
                                <th className="px-4 py-2">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="p-5 text-sm text-center border-b">
                                <td className="px-4 py-2 "> <input className="form-checkbox" type="checkbox" /></td>
                                <td className="px-4 py-2 ">
                                    <div className="w-10 h-10 p-2 m-auto text-center text-white bg-blue-500 rounded-full">S</div>
                                </td>
                                <td className="px-4 py-2 text-left">
                                    <p>Samuel Anthony  </p>

                                    <p>  samuel@gmail.com</p>

                                </td>
                                <td className="px-4 py-2 ">Invitation Pending</td>
                                <td className="px-4 py-2 ">
                                    <select className="text-sm form-select ">
                                        <option>Member</option>
                                    </select>
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

                            </tr>
                        </tbody>
                    </table>
                    <CSSTransition
                        in={modalIsOpen}
                        timeout={300}
                        classNames="alert"
                    >
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={
                                {
                                    overlay: {
                                        backgroundColor: 'gray',
                                    },
                                }
                            }
                            className="" >
                            <div className="flex flex-col justify-center p-10 mt-10 rounded-lg">
                                <div>
                                    <h6>Invite Interviewers</h6>
                                    <div className="mt-5">
                                        <p>Email</p>
                                        <input type="text" className="w-full mt-3 form-input" />

                                    </div>
                                    <div className="mt-5">
                                        <p>Role</p>
                                        <select className="w-full mt-3 form-select">
                                            <option value="1">Member</option>
                                            <option value="1">Lead</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-between mt-10">
                                        <button className="px-5 py-3 text-white bg-green-600">
                                            Invite
                                        </button>
                                        <button onClick={() => setModalIsOpen(false)} className="px-3 text-gray-600 transition duration-200 ease-in-out border btn hover:bg-gray-600 hover:text-white">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Modal>

                    </CSSTransition>
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
