import React from 'react'
import LeftNav from './LeftNav'

const Stack = () => {
    return (
        <>
            <div className="flex mt-10">
                <div className="w-1/4 bg-white rounded-md shadow-md links">
                   
                        <LeftNav location="/job/JobStack" />
                    
                </div>
                <div className="w-3/4 px-12 py-6 ml-5 bg-white rounded-md shadow-md content">
                    <div className="flex flex-col justify-around w-5/6 ">
                        <h6>Stack and Availability </h6>
                        
                        <div className="my-2">
                            <p>Job Type</p>
                            <div className="py-2">
                                <select className="w-full form-select" >
                                    <option>Fulltime</option>
                                    <option>Contract</option>
                                </select>                                
                            </div>
                        </div>

                        <div className="my-2">
                            
                            <div className="flex">
                                <div className="w-1/2">
                                <p> Opening From</p>
                               
                                    <div className="w-full py-2">
                                       
                                       <input type="date" name="" id="" className="w-full mr-2 form-input"/>
                                    </div>
                               </div>
                                <div className="w-1/2 ">
                                <p> Ending In</p>
                                <div className="w-full py-2">
                                       
                                       <input type="date" name="" id="" className="w-full ml-2 form-input"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                        <p>Tech Stack</p>
                            <div className="flex py-2">
                                <select className="w-full form-select" >
                                    <option>NGN</option>
                                    <option>USD</option>
                                </select>   
                            </div>
                        </div>
                        <div className="items-center justify-between mt-5 ">
                            <p>Availability</p>
                            
                                <div className="flex items-center justify-start py-2">
                                    <div>
                                    <input type="checkbox" className="mr-3 form-checkbox" /> Fulltime
                                    </div>
                                    <div>
                                    <input type="checkbox" className="ml-10 mr-3 form-checkbox" /> Part time
                                    </div>
                                    <div>
                                    <input type="checkbox" className="ml-10 mr-3 form-checkbox" /> Remote
                                    </div>
                                </div>
                            
                        </div>

                       

                </div>
                <div className="flex justify-end my-5">
                    <button className="flex items-center justify-between w-32 p-3 bg-red-600 btn hover:bg-red-500">Next 
                        <svg className="w-4 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </button>
                </div>
            </div>
           
           
            </div>
        </>
    )
}

export default Stack


