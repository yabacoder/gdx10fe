import React, { useState } from 'react'
// import Layout from '../layout'
import { Link } from 'react-router-dom'
import Portfolio from './portfolio';
import About from './about'
import Education from './education';
import WorkExperience from './experience';
import Skills from './skills'
import Profilepic from '../../../assets/img/profile.png'

const Profile = () => {

    
    const [openTab, setOpenTab] = useState('portfolio');
    
    return (
        <>
    <div className="flex justify-between">
        <div className="flex flex-col w-2/5 h-screen p-5 text-gray-500 bg-white rounded-md shadow-md ">
            <div className="text-center ">
                {/* <img alt="profile" /> */}
                <div className="w-24 h-24 mx-auto mb-3 bg-gray-400 border-gray-100 rounded-full">
                        <img alt="" src={Profilepic} className="object-cover w-full h-24 border-2 border-gray-100 rounded-full " /> 
                       
                </div>
               
                                    <h5 className="text-blue-800">Light Nduka</h5>
                                            <p>UX Designer</p>
                                            <hr className="my-3" />
                                            <p>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg></span>
                                                Lagos, Nigeria</p>
            </div>
          
            <div className="mt-6">
            <div className="flex justify-between p-3 text-sm border-b">
                <span>Projects</span><span className="text-blue-700">45</span>
                
            </div>
            <div className="flex justify-between p-3 text-sm border-b">
                
                <span>Assessment</span><span className="text-blue-700">12</span>
                
            </div>
            <div className="flex justify-between p-3 text-sm border-b">
                
                <span>Articles</span><span className="text-blue-700">3</span>
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
                        <Link to="#" className={openTab === 'portfolio' ? " inline-block px-4 py-2 font-getdevB  text-sm -mb-px border-b-2 border-blue-600  text-blue-700" : "inline-block px-4 text-sm py-2 font-getdevB "}>Porfolio</Link> 
                    </button>
                    <button 
                    className="mr-1" 
                    data-target="about"
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab('about');
                      }}
                    >
                        <Link to="#" className={openTab === 'about' ? " inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600 text-sm  text-blue-700" : "inline-block text-sm px-4 py-2 font-getdevB "}>
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
                    <Link to="#" className={openTab === 'education' ? " inline-block px-4 py-2 font-getdevB text-sm  -mb-px border-b-2 border-blue-600  text-blue-700" : "text-sm inline-block px-4 py-2 font-getdevB "}>
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
                    <Link to="#" className={openTab === 'work' ? "text-sm inline-block px-4 py-2 font-getdevB  -mb-px border-b-2 border-blue-600  text-blue-700" : "text-sm inline-block px-4 py-2 font-getdevB "}>
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
                    <Link to="#"  className={openTab === 'skill' ? "text-sm inline-block px-4 py-2 font-getdevB -mb-px border-b-2 border-blue-600  text-blue-700" : "text-sm inline-block px-4 py-2 font-getdevB"}>
                        Skill Rating 
                        </Link>
                    </button>
                </ul>
            </div>
           
            <div className="px-3 py-5 mt-0 ml-5 rounded-md ">
            
            <div id="panels">
                <div className={openTab === 'portfolio' ? " portfolio tab-content active py-5 block" : "hidden"}>
                  
                    <Portfolio />
                </div>
                <div className={openTab === 'about' ? " about tab-content active py-5 block" : "hidden"}>
                  
                   <About />
                </div>
                <div className={openTab === 'education' ? " education tab-content active py-5 block" : "hidden"}>
                 
                    <Education/>
                </div>
                <div className={openTab === 'work' ? " work tab-content active py-5 block" : "hidden"}>
                  <WorkExperience/>
                </div>
                <div className={openTab === 'skill' ? " skill tab-content active py-5 block" : "hidden"}>
                   <Skills />
                </div> 
            </div>
                
            </div>

        </div>
    </div>
</>

   )
}
export default Profile