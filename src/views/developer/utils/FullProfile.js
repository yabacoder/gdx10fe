import React from 'react'
import Camera from '../../../assets/img/camera.png'

function Profile() {
    return (
        <div>
            <div className="flex flex-col items-end justify-start h-32 p-5 bg-blue-800 rounded-t-md profile-banner">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="19" viewBox="0 0 5 19">
                                    <g id="Group_1256" data-name="Group 1256" transform="translate(-787 -96)" opacity="0.8">
                                        <circle id="Ellipse_638" data-name="Ellipse 638" cx="2.5" cy="2.5" r="2.5" transform="translate(787 96)" fill="#fff"/>
                                        <circle id="Ellipse_639" data-name="Ellipse 639" cx="2.5" cy="2.5" r="2.5" transform="translate(787 103)" fill="#fff"/>
                                        <circle id="Ellipse_640" data-name="Ellipse 640" cx="2.5" cy="2.5" r="2.5" transform="translate(787 110)" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center w-full p-10 text-center text-white bg-red-600 rounded-b-md profile-detail">
                                <img alt="" src="https://images.unsplash.com/photo-1568441303064-f0a709a84e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=50&q=80" className="w-24 h-24 -mt-24 border-2 border-gray-100 rounded-full " /> 
                                <img src={Camera} className="-mt-10 -mr-28" />
                                    <h6 className="mt-5 text-white">Light Nduka</h6>
                                    <p className="mt-2 text-gray-100">UX Designer</p>
                                </div>    <div>
                            
                                
                                <div className="flex items-center justify-between h-10 p-8 mt-5 text-center bg-red-500 rounded-md">
                                    <div className="p-5 border-r border-red-600">
                                        4 <br/> Jobs
                                    </div>
                                    <div className="p-5 ">
                                        12 <br/> Project
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default Profile
