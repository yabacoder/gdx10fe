import React from 'react';
import logo from '../../assets/img/logo2.svg'
import { Link } from 'react-router-dom';

export const DeveloperLayout = (props) => {
    return (
        <div>
            <div className="inset-0 flex w-screen h-screen">
                <div className="w-3/12 h-full px-16 py-8 overflow-hidden bg-white shadow-sm sidebar">
                    <div className="ml-3">
                        <img alt="" src={logo} />
                    </div> 
                    <ul className="mt-10">
                    <Link to="/developer/dashboard">
                        <li className="flex items-center p-5 text-sm font-semibold text-gray-500"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19">
                            <rect id="Rectangle_1603" data-name="Rectangle 1603" width="8" height="10" rx="1" />
                            <rect id="Rectangle_1605" data-name="Rectangle 1605" width="8" height="10" rx="1" transform="translate(18 19) rotate(180)" />
                            <rect id="Rectangle_1604" data-name="Rectangle 1604" width="8" height="8" rx="1" transform="translate(0 11)" />
                            <rect id="Rectangle_1606" data-name="Rectangle 1606" width="8" height="8" rx="1" transform="translate(18 8) rotate(180)" />
                        </svg>

                        Dashboard
                        </li>
                        </Link>
                        <Link to="/developer/project">
                        <li className="flex items-center justify-start p-5 text-sm font-semibold text-gray-500"> 
                        
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 23.074 21.92">
                        <path id="Icon_awesome-file-code" data-name="Icon awesome-file-code" d="M18.081,5.1V5.35H12.054V0h.285a1.207,1.207,0,0,1,.8.294L17.75,4.388a.95.95,0,0,1,.331.709Zm-6.4,1.591a1.075,1.075,0,0,1-1.13-1V0H1.13A1.072,1.072,0,0,0,0,1V20.4a1.072,1.072,0,0,0,1.13,1H16.951a1.072,1.072,0,0,0,1.13-1V6.688ZM5.8,16.741a.277.277,0,0,1-.359.01L2.388,14.209a.209.209,0,0,1,0-.329l3.054-2.542a.277.277,0,0,1,.359.01l.922.873a.212.212,0,0,1,.068.165.217.217,0,0,1-.086.159l-1.919,1.5,1.919,1.5a.217.217,0,0,1,.086.159.212.212,0,0,1-.068.165Zm2.415,2.11-1.293-.333a.223.223,0,0,1-.173-.28L9.644,9.392a.26.26,0,0,1,.315-.154l1.293.333a.223.223,0,0,1,.173.28L8.532,18.7a.26.26,0,0,1-.315.154Zm7.571-4.642-3.054,2.542a.277.277,0,0,1-.359-.01l-.922-.873a.212.212,0,0,1-.068-.165.217.217,0,0,1,.086-.159l1.919-1.5-1.919-1.5a.217.217,0,0,1-.086-.159.212.212,0,0,1,.068-.165l.922-.873a.277.277,0,0,1,.359-.01l3.054,2.542a.209.209,0,0,1,0,.329Z"/>
                        </svg>

                        Projects 
                        
                        </li>
                        </Link>
                        <Link to="/developer/assessment">
                        <li className="flex items-center p-5 text-sm font-semibold text-gray-500"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="25.847" height="18.093" viewBox="0 0 25.847 18.093">
                        <path id="Icon_material-assessment" data-name="Icon material-assessment" d="M21.389,4.5H6.611A2.117,2.117,0,0,0,4.5,6.611V21.389A2.117,2.117,0,0,0,6.611,23.5H21.389A2.117,2.117,0,0,0,23.5,21.389V6.611A2.117,2.117,0,0,0,21.389,4.5ZM10.833,19.278H8.722V11.889h2.111Zm4.222,0H12.944V8.722h2.111Zm4.222,0H17.167V15.056h2.111Z" transform="translate(-4.5 -4.5)"/>
                        </svg>
                        Assessments
                        </li>
                        </Link>
                        <Link to="/developer/articles">
                        <li className="flex items-center p-5 text-sm font-semibold text-gray-500"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="25.847" height="18.091" viewBox="0 0 25.847 18.091">
                        <path id="Icon_material-library-books" data-name="Icon material-library-books" d="M4.95,6.9H3V20.55A1.956,1.956,0,0,0,4.95,22.5H18.6V20.55H4.95ZM20.55,3H8.85A1.956,1.956,0,0,0,6.9,4.95v11.7A1.956,1.956,0,0,0,8.85,18.6h11.7a1.956,1.956,0,0,0,1.95-1.95V4.95A1.956,1.956,0,0,0,20.55,3Zm-.975,8.775H9.825V9.825h9.75Zm-3.9,3.9H9.825v-1.95h5.85Zm3.9-7.8H9.825V5.925h9.75Z" transform="translate(-3 -3)"/>
                        </svg>
                        My Articles
                        </li>
                        </Link >
                        <Link to="/developer/applications">
                        <li className="flex items-center p-5 text-sm font-semibold text-gray-500"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="21.083" height="23" viewBox="0 0 21.083 23">
                        <path id="Icon_awesome-mail-bulk" data-name="Icon awesome-mail-bulk" d="M5.938,16.625a4.5,4.5,0,0,1-2.375-1.187C1.188,13.775.475,13.181,0,12.825v4.988A1.188,1.188,0,0,0,1.188,19h9.5a1.188,1.188,0,0,0,1.188-1.187V12.825c-.475.356-1.187.95-3.562,2.613A4.5,4.5,0,0,1,5.938,16.625ZM10.688,9.5h-9.5A1.188,1.188,0,0,0,0,10.688v.594c.95.712.831.712,4.275,3.206.356.237,1.069.95,1.662.95s1.306-.713,1.662-.831c3.444-2.494,3.325-2.494,4.275-3.206v-.712A1.188,1.188,0,0,0,10.688,9.5Zm9.5-3.562H8.313A1.188,1.188,0,0,0,7.125,7.125V8.313h3.563a2.378,2.378,0,0,1,2.364,2.146l.011-.008v4.988h7.125a1.188,1.188,0,0,0,1.188-1.188V7.125A1.188,1.188,0,0,0,20.188,5.938ZM19,10.688H16.625V8.313H19ZM5.938,7.125A2.378,2.378,0,0,1,8.313,4.75h8.313V1.188A1.188,1.188,0,0,0,15.438,0H3.562A1.188,1.188,0,0,0,2.375,1.188V8.313H5.938Z" />
                        </svg>
                        Applied Jobs
                        </li>
                        </Link>
                        <Link to="/developer/account">
                        <li className="flex items-center p-5 text-sm font-semibold text-gray-500"> 
                        <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="19.001" height="19" viewBox="0 0 19.001 19">
                        <path id="Icon_awesome-user-cog" data-name="Icon awesome-user-cog" d="M22.655,13.853a4.353,4.353,0,0,0,0-1.581l.957-.553a.269.269,0,0,0,.122-.315A5.569,5.569,0,0,0,22.5,9.274a.271.271,0,0,0-.334-.052l-.957.553a4.357,4.357,0,0,0-1.369-.79V7.878a.27.27,0,0,0-.212-.263,5.6,5.6,0,0,0-2.457,0,.27.27,0,0,0-.212.263V8.984a4.357,4.357,0,0,0-1.369.79l-.957-.553a.271.271,0,0,0-.334.052A5.569,5.569,0,0,0,13.07,11.4a.273.273,0,0,0,.122.315l.957.553a4.353,4.353,0,0,0,0,1.581l-.957.553a.269.269,0,0,0-.122.315,5.6,5.6,0,0,0,1.232,2.13.271.271,0,0,0,.334.052l.957-.553a4.357,4.357,0,0,0,1.369.79v1.106a.27.27,0,0,0,.212.263,5.6,5.6,0,0,0,2.457,0,.27.27,0,0,0,.212-.263V17.141a4.357,4.357,0,0,0,1.369-.79l.957.553a.271.271,0,0,0,.334-.052,5.569,5.569,0,0,0,1.232-2.13.273.273,0,0,0-.122-.315l-.957-.553Zm-4.249,1.009a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,18.406,14.862ZM8.313,9.5a4.75,4.75,0,1,0-4.75-4.75A4.75,4.75,0,0,0,8.313,9.5Zm7.466,8.405c-.085-.045-.171-.1-.252-.145l-.293.171a1.456,1.456,0,0,1-1.8-.271,6.767,6.767,0,0,1-1.492-2.583,1.452,1.452,0,0,1,.664-1.7l.293-.171q-.006-.145,0-.289l-.293-.171a1.45,1.45,0,0,1-.664-1.7c.033-.108.082-.215.119-.323-.141-.011-.278-.045-.423-.045h-.62a6.46,6.46,0,0,1-5.411,0h-.62A4.989,4.989,0,0,0,0,15.675v1.544A1.782,1.782,0,0,0,1.781,19H14.844a1.779,1.779,0,0,0,1.009-.315,1.445,1.445,0,0,1-.074-.438Z"/>
                        </svg>
                        Account
                        </li>
                        </Link>
                         <Link to="/logout">
                            <li className="flex items-center p-5 font-getdevM text-sm text-gray-500"> 
                            <svg className="p-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="16.571" height="17.403" viewBox="0 0 16.571 17.403">
                            <path id="Icon_simple-docusign" data-name="Icon simple-docusign" d="M6.9,0h3.6V6.313h2.4L8.7,12.626,4.5,6.313H6.9ZM0,14.993H17.4v1.578H0Z" transform="translate(16.571) rotate(90)"/>
                            </svg>
                            Logout
                            </li>
                        </Link>
                    </ul>

                </div>
                <div className="w-9/12 h-screen p-10 overflow-auto text-gray-600 bg-gray-100">
                    
                    <div className="mt-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}