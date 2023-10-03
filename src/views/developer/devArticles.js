import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Layout from "./layout";
import RightNav from './utils/RightNav';
import profileImage from '../../assets/img/profile.png';
// import SubmitProject from './utils/SubmitProject';


const DevArticles = () =>  {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <Layout>
            <div className="flex">
                <div className="w-8/12 highlights bg-white shadow-md rounded-md p-6">
                    <div className="without">
                    <h5 className="text-base">My Articles </h5>
                   
                   <div className=" bg-gray-300 p-10 rounded-md justify-center flex flex-col my-4 items-center">
                   <svg viewBox="0 0 62 62" className="w-12">
<defs/>
<path fill="#b5bbcd" d="M6 12H0v44a6 6 0 006 6h44v-6H6zM56 0H19a6 6 0 00-7 6v37a6 6 0 007 7h37a6 6 0 006-7V6a6 6 0 00-6-6zm-3 28H22v-6h31zM40 40H22v-6h18zm13-24H22V9h31z"/>
</svg>
<p className="text-center text-sm text-gray-600 my-2">Sorry, we currently do not have a project for 
you, please try again later!</p>
<button className=" px-4 text-sm transition duration-500 ease-in-out rounded-md py-2  bg-red-600 text-white hover:bg-white hover:border hover:border-red-600 hover:text-red-600" onClick={() => setOpenModal(true) }> Add Post + </button>
             </div>
               
           
                    </div>
                  
                    <div className="mt-5 withJobs">
                    <div className="flex items-center justify-between header">
                    <h5 className="text-base">My Articles</h5>
                    <div>
                    <Link className="p-2 text-sm text-red-600 transition duration-500 ease-in-out border border-red-600 rounded-md hover:bg-red-600 hover:text-white" onClick={() => setOpenModal(true) }>
                  Add Post +
                   </Link>
                    </div>
                  
                    </div>
                    
                    <div className="flex flex-col jobs">
                    <div className="flex items-center justify-between px-3 py-4 my-3 bg-gray-200 rounded-lg">
                        <div className="article-img pr-2 w-2/12">
                        <img alt="" src={profileImage} className="object-cover w-full  h-16  border-2 border-gray-100 rounded-md  " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                            <div>
                              <ul className="inline-flex">
                            
                                  <li className="flex items-center px-5 text-sm border-r-2 border-gray-500">
                                  <span className="inline-flex text-orange-600 "><svg width="1em" height="1em" viewBox="0 0 16 16" class="mx-2 bi bi-circle-fill w-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="8"/>
</svg></span> 
                                  
                        Pending
                                  </li>
                                  <li className="flex text-sm items-center px-4 border-r-2 border-gray-500">
                                  <svg viewBox="0 0 18 17" className="w-4 inline-flex mx-2">
  <defs/>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".6">
    <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z"/>
  </g>
</svg>
                                  </li>
                                  <li className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5"viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></li>
                              </ul>
                            </div>
                        </div>
               
                        <div className="flex items-center justify-between px-3 py-4 my-3 bg-gray-200 rounded-lg">
                        <div className="article-img pr-2 w-2/12">
                        <img alt="" src={profileImage} className="object-cover w-full  h-16  border-2 border-gray-100 rounded-md  " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                            <div>
                              <ul className="inline-flex">
                            
                                  <li className="flex items-center px-5 text-sm border-r-2 border-gray-500">
                                  <span className="inline-flex text-red-600 "><svg width="1em" height="1em" viewBox="0 0 16 16" class="mx-2 bi bi-circle-fill w-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="8"/>
</svg></span> 
                                  
                      Failed
                                  </li>
                                  <li className="flex text-sm items-center px-4 border-r-2 border-gray-500">
                                  <svg viewBox="0 0 18 17" className="w-4 inline-flex mx-2">
  <defs/>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".6">
    <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z"/>
  </g>
</svg>
                                  </li>
                                  <li className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5"viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></li>
                              </ul>
                            </div>
                        </div>
               
                        <div className="flex items-center justify-between px-3 py-4 my-3 bg-gray-200 rounded-lg">
                        <div className="article-img pr-2 w-2/12">
                        <img alt="" src={profileImage} className="object-cover w-full  h-16  border-2 border-gray-100 rounded-md  " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                            <div>
                              <ul className="inline-flex">
                            
                                  <li className="flex items-center px-5 text-sm border-r-2 border-gray-500">
                                  <span className="inline-flex text-green-600 "><svg width="1em" height="1em" viewBox="0 0 16 16" class="mx-2 bi bi-circle-fill w-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="8" r="8"/>
</svg></span> 
                                  
                     Approved
                                  </li>
                                  <li className="flex text-sm items-center px-4 border-r-2 border-gray-500">
                                  <svg viewBox="0 0 18 17" className="w-4 inline-flex mx-2">
  <defs/>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".6">
    <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z"/>
  </g>
</svg>
                                  </li>
                                  <li className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5"viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></li>
                              </ul>
                            </div>
                        </div>
               
                    </div>
                    
                    </div>
                  
               
                </div>
                
                
                
                <div className="flex flex-col w-4/12  px-5 ml-5 topNews">
                    <RightNav/>
                </div>
                
            </div>
            
              
            <div className={ (openModal)? "absolute flex justify-end  bg-gray-800 bg-opacity-50 inset-0 h-screen" : 'hidden'}>
                <div className="w-1/3" onClick={() => setOpenModal(false)}>
                    
                </div>
                <div className="flex h-screen  w-1/2 bg-white main-container transition duration-500 ease-in-out">
                  
                  <div className="w-full p-10 project-submission">
                      <div className="py-5 border-b flex justify-between">
                          <h6>New Article</h6>
                          <div className=" ">
                         

                              <div onClick={() => setOpenModal(false)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
                              </div>
                         
                      </div>
                      </div>
                      <div className="my-4 ">
                      <p>Title</p>
                                <label htmlFor="">
                                <input className="w-full form-input" type="text" id="title" />
                            </label>
                     </div>
                     <div className="my-3 ">
                     <p>Cover Image</p>
                     <div class="flex flex-col py-2 w-full items-center justify-center bg-grey-lighter">
                          
                          <label class="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg  tracking-wide  border border-dashed cursor-pointer  ">
                             
                              <span class="mt-2 text-sm leading-normal">Select a file</span>
                              <input type='file' class="hidden" />
                          </label>
                      </div>
                     </div>
                     <div className="my-3">
                        <p>Comment</p>
                        <label class="block">
                            
                            <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder=""></textarea>
                        </label>
                        </div>
                      <div className="flex w-full  mt-5">
                      <button type="submit" className="text-center text-sm py-2 w-full  bg-red-600 btn hover:bg-red-500">Post  Article
                     
                      </button>
                  </div>

                  </div>
               
          </div>
   
       
        </div>
    
           
           
        </Layout>
    )
}


export default DevArticles
