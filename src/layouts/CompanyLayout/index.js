import React from 'react'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const CompanyLayout = (props) => {
  let  currentLocation = window.location.pathname;
    return (
        <div>
            <div className="inset-0 flex w-screen h-screen">
                <div className="h-full px-16 py-8 overflow-hidden bg-white shadow-sm sidebar">
                    <div className="ml-3">
                        <img src={logo} />
                    </div>
                    <ul className="mt-10">
                    <Link to="/company">
                        <li className={(currentLocation === '/') ? 'text-blue-800 flex items-center p-5 font-getdevM text-sm' : 'flex items-center p-5 font-getdevM text-sm text-gray-500'}> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
                            <rect id="Rectangle_1603" data-name="Rectangle 1603" width="8" height="10" rx="1" />
                            <rect id="Rectangle_1605" data-name="Rectangle 1605" width="8" height="10" rx="1" transform="translate(18 19) rotate(180)" />
                            <rect id="Rectangle_1604" data-name="Rectangle 1604" width="8" height="8" rx="1" transform="translate(0 11)" />
                            <rect id="Rectangle_1606" data-name="Rectangle 1606" width="8" height="8" rx="1" transform="translate(18 8) rotate(180)" />
                        </svg>

                        Dashboard
                        </li>
                        </Link>
                        <Link to="/company/jobs">
                        <li className={(currentLocation === '/jobs') ? 'text-blue-800 flex items-center p-5 font-getdevM text-sm' : 'flex items-center p-5 font-getdevM text-sm text-gray-500'}> 
                        
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 23.074 21.92">
                            <path  data-name="Icon material-work" d="M23.766,7.615H19.152V5.307A2.3,2.3,0,0,0,16.844,3H12.229A2.3,2.3,0,0,0,9.922,5.307V7.615H5.307a2.29,2.29,0,0,0-2.3,2.307L3,22.613A2.3,2.3,0,0,0,5.307,24.92H23.766a2.3,2.3,0,0,0,2.307-2.307V9.922A2.3,2.3,0,0,0,23.766,7.615Zm-6.922,0H12.229V5.307h4.615Z" transform="translate(-3 -3)" />
                        </svg>

                        Jobs 
                        
                        </li>
                        </Link>
                        <Link to="/company/candidates">
                        <li className={(currentLocation === '/candidates') ? 'text-blue-800 flex items-center p-5 font-getdevM text-sm' : 'flex items-center p-5 font-getdevM text-sm text-gray-500'}> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="25.847" height="18.093" viewBox="0 0 25.847 18.093">
                            <path id="Icon_awesome-users" data-name="Icon awesome-users" d="M3.877,10A2.585,2.585,0,1,0,1.292,7.419,2.587,2.587,0,0,0,3.877,10ZM21.97,10a2.585,2.585,0,1,0-2.585-2.585A2.587,2.587,0,0,0,21.97,10ZM23.262,11.3H20.678a2.577,2.577,0,0,0-1.821.751,5.907,5.907,0,0,1,3.033,4.418h2.665a1.291,1.291,0,0,0,1.292-1.292V13.881A2.587,2.587,0,0,0,23.262,11.3Zm-10.339,0A4.523,4.523,0,1,0,8.4,6.773,4.521,4.521,0,0,0,12.923,11.3Zm3.1,1.292H15.69a6.245,6.245,0,0,1-5.533,0H9.822a4.654,4.654,0,0,0-4.652,4.652V18.4a1.939,1.939,0,0,0,1.939,1.939H18.739A1.939,1.939,0,0,0,20.678,18.4V17.241A4.654,4.654,0,0,0,16.025,12.589Zm-9.034-.541A2.577,2.577,0,0,0,5.169,11.3H2.585A2.587,2.587,0,0,0,0,13.881v1.292a1.291,1.291,0,0,0,1.292,1.292H3.954A5.922,5.922,0,0,1,6.991,12.048Z" transform="translate(0 -2.25)" />
                        </svg>
                        Candidates
                        </li>
                        </Link>
                        <Link to="/company/interviewers">
                        <li className={(currentLocation === '/Interviewers') ? 'text-blue-800 flex items-center p-5 font-getdevM text-sm' : 'flex items-center p-5 font-getdevM text-sm text-gray-500'}> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="25.847" height="18.091" viewBox="0 0 25.847 18.091">
                            <path data-name="Icon awesome-users-cog" d="M24.658,14.746a4.738,4.738,0,0,0,0-1.721l1.042-.6a.292.292,0,0,0,.133-.343,6.061,6.061,0,0,0-1.341-2.318.3.3,0,0,0-.364-.057l-1.042.6a4.742,4.742,0,0,0-1.49-.86v-1.2a.294.294,0,0,0-.23-.287,6.094,6.094,0,0,0-2.674,0,.294.294,0,0,0-.23.287v1.2a4.742,4.742,0,0,0-1.49.86L15.93,9.7a.3.3,0,0,0-.364.057,6.061,6.061,0,0,0-1.341,2.318.3.3,0,0,0,.133.343l1.042.6a4.738,4.738,0,0,0,0,1.721l-1.042.6a.292.292,0,0,0-.133.343,6.091,6.091,0,0,0,1.341,2.318.3.3,0,0,0,.364.057l1.042-.6a4.742,4.742,0,0,0,1.49.86v1.2a.294.294,0,0,0,.23.287,6.094,6.094,0,0,0,2.674,0,.294.294,0,0,0,.23-.287v-1.2a4.742,4.742,0,0,0,1.49-.86l1.042.6a.3.3,0,0,0,.364-.057,6.061,6.061,0,0,0,1.341-2.318.3.3,0,0,0-.133-.343l-1.042-.6Zm-4.625,1.1a1.959,1.959,0,1,1,1.959-1.959A1.961,1.961,0,0,1,20.033,15.844ZM3.877,10.008A2.585,2.585,0,1,0,1.292,7.423,2.587,2.587,0,0,0,3.877,10.008ZM12.925,11.3c.077,0,.149-.02.226-.024a7.446,7.446,0,0,1,1.466-2.391,1.592,1.592,0,0,1,1.167-.509,1.552,1.552,0,0,1,.792.214l.319.186c.032-.02.065-.036.1-.057a4.471,4.471,0,0,0,.452-1.939,4.522,4.522,0,1,0-4.52,4.52Zm4.249,7.856c-.093-.048-.186-.105-.275-.158a2,2,0,0,1-1.111.4,1.605,1.605,0,0,1-1.167-.509A7.365,7.365,0,0,1,13,16.074a1.724,1.724,0,0,1,1.042-2.032q-.006-.158,0-.315l-.319-.186a1.645,1.645,0,0,1-.4-.327c-.133.008-.263.024-.4.024a6.376,6.376,0,0,1-2.767-.646H9.827A4.655,4.655,0,0,0,5.17,17.246v1.163a1.939,1.939,0,0,0,1.939,1.939H17.424a1.555,1.555,0,0,1-.25-.82v-.372Zm-10.182-7.1A2.577,2.577,0,0,0,5.17,11.3H2.585A2.587,2.587,0,0,0,0,13.885v1.292A1.291,1.291,0,0,0,1.292,16.47H3.954A5.923,5.923,0,0,1,6.992,12.052Z" transform="translate(0 -2.257)" />
                        </svg>
                        Interviewers
                        </li>
                        </Link>
                        {/* <li className="flex items-center p-5 text-sm text-gray-500 font-getdevM"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="21.083" height="23" viewBox="0 0 21.083 23">
                            <g id="Icon_ionic-ios-stats" data-name="Icon ionic-ios-stats" transform="translate(-5.625 -4.5)">
                                <path id="Path_12655" data-name="Path 12655" d="M12.854,27.5h2.875a.481.481,0,0,0,.479-.479V4.979a.481.481,0,0,0-.479-.479H12.854a.481.481,0,0,0-.479.479V27.021A.481.481,0,0,0,12.854,27.5Z" transform="translate(-1)" />
                                <path id="Path_12656" data-name="Path 12656" d="M6.1,29.833H8.979a.481.481,0,0,0,.479-.479V20.729a.481.481,0,0,0-.479-.479H6.1a.481.481,0,0,0-.479.479v8.625A.481.481,0,0,0,6.1,29.833Z" transform="translate(0 -2.333)" />
                                <path id="Path_12657" data-name="Path 12657" d="M19.61,29.167h2.863a.483.483,0,0,0,.485-.485V16.235a.483.483,0,0,0-.485-.485H19.61a.483.483,0,0,0-.485.485V28.682A.483.483,0,0,0,19.61,29.167Z" transform="translate(-2 -1.667)" />
                                <path id="Path_12658" data-name="Path 12658" d="M25.875,9.485v18.2a.483.483,0,0,0,.485.485h2.863a.483.483,0,0,0,.485-.485V9.485A.483.483,0,0,0,29.223,9H26.36A.483.483,0,0,0,25.875,9.485Z" transform="translate(-3 -0.667)" />
                            </g>
                        </svg>
                        Stats
                        </li> */}
                        <Link to="/company/settings">
                        <li className={(currentLocation === '/settings') ? 'text-blue-800 flex items-center p-5 font-getdevM text-sm' : 'flex items-center p-5 font-getdevM text-sm text-gray-500'}> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="19.001" height="19" viewBox="0 0 19.001 19">
                            <path id="Icon_ionic-md-settings" data-name="Icon ionic-md-settings" d="M20.09,13.825a5.941,5.941,0,0,0,.048-.95c0-.333-.048-.617-.048-.95l2.04-1.567a.436.436,0,0,0,.1-.617L20.284,6.463a.473.473,0,0,0-.583-.19l-2.429.95a7.071,7.071,0,0,0-1.652-.95l-.34-2.517a.521.521,0,0,0-.486-.38H10.907a.521.521,0,0,0-.486.38l-.389,2.517a8.227,8.227,0,0,0-1.652.95l-2.429-.95a.455.455,0,0,0-.583.19L3.425,9.74a.574.574,0,0,0,.1.617l2.089,1.567c0,.333-.048.617-.048.95s.048.617.048.95l-2.04,1.567a.436.436,0,0,0-.1.617l1.943,3.278a.473.473,0,0,0,.583.19l2.429-.95a7.07,7.07,0,0,0,1.652.95L10.47,22a.471.471,0,0,0,.486.38h3.887a.521.521,0,0,0,.486-.38l.389-2.517a8.223,8.223,0,0,0,1.652-.95l2.429.95a.455.455,0,0,0,.583-.19l1.943-3.278a.573.573,0,0,0-.1-.617ZM12.851,16.2a3.326,3.326,0,1,1,3.4-3.325A3.343,3.343,0,0,1,12.851,16.2Z" transform="translate(-3.375 -3.375)" />
                        </svg>
                        Settings
                        </li>
                        </Link>
                        <li className="flex items-center p-5 text-sm text-gray-500 font-getdevM"> 
                            <Link to="/logout">
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16.571" height="17.403" viewBox="0 0 16.571 17.403">
                            <path id="Icon_simple-docusign" data-name="Icon simple-docusign" d="M6.9,0h3.6V6.313h2.4L8.7,12.626,4.5,6.313H6.9ZM0,14.993H17.4v1.578H0Z" transform="translate(16.571) rotate(90)" />
                        </svg>
                        Logout
                        </Link>
                        </li>
                    </ul>

                </div>
                <div className="w-full h-screen p-10 overflow-auto text-gray-600 bg-gray-100 content-area">
                    <div className="static flex justify-between w-full p-5 text-white bg-red-600 rounded-lg">
    <span>{props.title}</span> 
                        <span>Logout</span>
                    </div>
                    <div className="mt-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyLayout;
