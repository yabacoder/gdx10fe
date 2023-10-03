import React from 'react'
import Layout from '../layout'
import Interviewers from '../utils/Interviewers'
import img from '../../assets/img/sheriff_03.jpg'

const view = () => {
    return (
        <Layout title="Job">
            <div>
            {/* <div className="flex items-center justify-between filter"> */}
                <div className="flex flex-col justify-start px-5 py-4 bg-white rounded-lg shadow-md">
                    
                    <div className="flex items-center justify-between p-3 border-b">
                        <div className="flex items-center justify-between">
                            <div>
                                <select className="form-select">
                                    <option>Active</option>
                                </select>
                            </div>
                            <div>
                            <div className="p-5">
                                <h5 className="text-blue-800">UX/UI Designer</h5>
                                <p>Lagos, Nigeria &bull; Created 2 days ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                           <p className="p-2">Interviewers</p> <Interviewers/>
                        </div>
                        
                    </div>
                    <div className="flex items-center mt-3">
                        <p>Filter</p>
                        <label class="block w-56   md:flex mx-2">
                            
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Status</option>                        
                            </select>
                        </label>
                            <label class="block w-56   md:flex mx-2">
                            
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Location</option>                        
                            </select>
                        </label>
                        <label class="block w-56   md:flex mx-2">
                            
                            <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 ">
                                <option>Date</option>                        
                            </select>
                        </label>
                    </div>
                </div>
             
                
                <div className="flex justify-start mt-10 overflow-x-auto m-h-full">
                    <div className="bg-white rounded-md ">
                        <div className="border-b ">
                            <h6 className="p-5">Applied</h6>
                        </div>
                        <div className="max-h-screen px-3 py-2 overflow-auto applicant-list">
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
              
                    <div className="ml-4 bg-white rounded-md">
                        <div className="border-b ">
                            <h6 className="p-5">Shortlisted</h6>
                        </div>
                        <div className="max-h-screen px-3 py-2 overflow-auto applicant-list">
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
              



                    <div className="ml-4 bg-white rounded-md">
                        <div className="border-b ">
                            <h6 className="p-5">Interviewing</h6>
                        </div>
                        <div className="max-h-screen px-3 py-2 overflow-auto applicant-list">
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
              



                    <div className="ml-4 bg-white rounded-md">
                        <div className="border-b ">
                            <h6 className="p-5">Hired</h6>
                        </div>
                        <div className="max-h-screen px-3 py-2 overflow-auto applicant-list">
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
              

              
                    <div className="ml-4 bg-white rounded-md">
                        <div className="border-b ">
                            <h6 className="p-5">Disqualified</h6>
                        </div>
                        <div className="max-h-screen px-3 py-2 overflow-auto applicant-list">
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between p-5 mt-2 bg-gray-100 rounded-md">
                                <div className="flex py-2">
                                    <div className="p-2">
                                        <img src={img} className="w-12 h-12 rounded-full" />
                                    </div>
                                    <div>
                                        <h6>Light Nduka</h6>
                                        <p>Applied 2 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="p-1 ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                            <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#8691b0"/>
                                                <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#8691b0"/>
                                                <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#8691b0"/>
                                            </g>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
              
                </div>
            </div>
        </Layout>
    )
}

export default view
