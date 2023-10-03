import React from 'react'
// import Layout from '../layout'
import LeftNav from './LeftNav'

const AddJob = () => {
    return (
        <>
            <div className="flex mt-10">
                <div className="w-1/4 bg-white rounded-md links">
                   
                        <LeftNav location="/job/AddJob" />
                    
                </div>
                <div className="w-3/4 px-12 py-6 ml-5 bg-white rounded-md content">
                    <form className="flex flex-col justify-around w-5/6">
                        <h6>Basic Information </h6>
                        
                        <div className="my-3">
                            <p>Job Thumbnail</p>
                            <div className="my-2">
                            <input type="file" name="thumbnail" id="" className="p-5 border-dashed form-input"/>
                            </div>
                          
                        </div>

                        <div className="my-3">
                            <p> Job Title</p>
                            <div className="my-2">
                            <label htmlFor="">
                                <input className="w-full form-input " type="text" />
                            </label>
                            </div>
                           
                        </div>

                        <div className="my-3">
                        <p>Salary</p>
                            <div className="flex my-2 ">
                                <div className="w-1/2 ">
                                <div className="flex mr-2">
                                    <p className="px-2 py-2 mr-1 leading-loose text-white bg-red-600 rounded ">
                                        From
                                    </p>
                                    {/* <input type="button" value="From" className="text-white bg-red-600 form-input focus:border-transparent "/> */}
                                    <span className="inline-flex border rounded">
                                        <select className="text-xs border-r rounded-none form-select" >
                                            <option>NGN</option>
                                            <option>USD</option>
                                        </select>
                                        <input type="text" className="w-full border-l rounded-none form-input" />
                                    </span>
                                    </div>
                                  
                                   
                                </div>
                                <div className="w-1/2 ">
                                <div className="flex ml-2">
                                    <p className="px-4 py-2 mr-1 leading-loose text-white bg-red-600 rounded ">
                                        To
                                    </p>
                                    {/* <input type="button" value="From" className="text-white bg-red-600 form-input focus:border-transparent "/> */}
                                    <span className="inline-flex border rounded">
                                        <select className="text-xs border-r rounded-none form-select" >
                                            <option>NGN</option>
                                            <option>USD</option>
                                        </select>
                                        <input type="text" className="w-full border-l rounded-none form-input" />
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <div className="w-1/2 ">
                                <p>Country</p>
                                <select className="w-full form-select" >
                                <option>NGN</option>
                                <option>USD</option>
                                </select>
                            </div>
                            <div className="w-1/2 ml-5">
                                <p>State</p>
                                <select className="w-full form-select" >
                                <option>NGN</option>
                                <option>USD</option>
                                </select>
                            </div>
                        </div>

                        

                </form>
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

export default AddJob


