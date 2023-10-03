import React from 'react'

import {Link} from "react-router-dom";


export const Fullstack = () => {
    return (
        <>
        <div className="flex flex-col justify-between px-5 py-5 mt-5 bg-white md:flex-row md:rounded-lg md:shadow-lg ">
                <div className="md:p-5 article-container md:w-4/6">
                <h3 className="pb-5 ">Why You are yet to Attract Great Talent</h3>

                    <div className="">
                        <img src="https://via.placeholder.com/350" className="rounded-md md:w-full md:w-3/6" />
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa
                            </p>
                            <p>
                            Delay in Interview Process
                            </p>
                            <p>
                            Once a candidate apply for a job his/her expectation is to be invited for an interview - well that is at the discretion of the company/recruitment agency which depend on the applicants meeting the job requirements. But let’s leave out biases or what’s not. An applicant looks forward to attending an interview as that would typically be the next line of action to further prove competencies. When days turn into weeks and then months, after the application deadline, a large number of great talents are dissuaded as other companies who are swift at processing applications attracts them. This has been observed by the GetDev Hiring Team. In addition, refusing to give feedback to unsuccessful candidates can discourage same applicants in the future from applying to positions in your company, as well as not updating successful candidates on the next stage promptly. This was even taken to Twitter by some developers in the past few weeks.
                            </p>
                            Not Willing to Create Alternative Interview Mode
                            <p>
                            GetDev has been operating for over 18 months which has birthed profound information on effective hiring processes. One of the most effective ways we have noticed is when client embrace flexibility in interview methods. Companies usually have different stages of assessing applicants, on the first stage we do advise they have a remote session with potential candidates so as to increase the candidacy pool.  
                            
                        </p>
                       <div className="p-10 my-8 bg-red-600 rounded-md">
                           <div className="flex items-center justify-between">
                           <div className="text-white">
                                    <h4>Get Your Career Started. <br/> Work with top Tech companies in Nigeria.</h4>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <Link to="/pricing" class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base leading-6  rounded-md text-red-600 bg-white hover:text-white hover:bg-red-600 hover:border-white  transition duration-150 ease-in-out md:py-4 md:text-sm md:px-10">
                                        Get Started
                                        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                           </div>
                       </div>

                    </div>
                    
                   
                        
              
                    
                    
            </div>
                <div className="h-auto px-5 py-5 border rounded-lg border-lg md:w-2/6 ">
                    {/* <h4 className="p-5 pt-0">Popular</h4> */}
                    <div>
                        <p>What is a Full-Stack Developer?

What skills are required to be a Full-Stack Developer?

What is the role of a Full-Stack Developer?

Full-Stack Developer archetypes</p>
                        
                    </div>
                    <div className="p-2 mt-1">
                    <h4>See other types of engineers</h4>
                    <div className="flex flex-wrap p-2">
                        <span className="inline-block m-1 tag">Fullstack Developer</span>
                        <span className="m-1 tag">UX Designer </span>
                        <span className="m-1 tag">Backend Developer</span>
                        <span className="m-1 tag">DevOps Engineer</span>
                        <span className="m-1 tag">Frontend Engineer</span>
                        <span className="m-1 tag">Product Manager</span>
                        <span className="m-1 tag">Business Analyst</span>

                    </div>
                    </div>
                    
                </div>
    </div>
    </>
)
}

export default Fullstack;