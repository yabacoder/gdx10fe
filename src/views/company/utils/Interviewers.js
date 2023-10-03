import React from 'react'

const Interviewers = (props) => {
    return (
        <div>
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
                        <circle cx="13" cy="13" r="13" stroke="none"/>
                        <circle cx="13" cy="13" r="12.5" fill="none"/>
                        </g>
                        <path id="Icon_ionic-ios-add" data-name="Icon ionic-ios-add" d="M20.147,14.185H15.67V9.707a.742.742,0,0,0-1.485,0v4.478H9.707a.742.742,0,0,0,0,1.485h4.478v4.478a.742.742,0,0,0,1.485,0V15.67h4.478a.742.742,0,0,0,0-1.485Z" transform="translate(690.035 864.035)" fill="#485685"/>
                    </g>
                </svg>
                </div>

            </div>
        </div>
    )
}

export default Interviewers
