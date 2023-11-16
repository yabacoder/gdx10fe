import React from 'react'
// import Layout from '../layout'
import LeftNav from './LeftNav'
import Editor from '../../../components/editor/Editor';

const Responsibilities = () => {
    return (
        <>
            <div className="flex mt-10">
                <div className="w-1/4 bg-white rounded-md links">
                   
                    <LeftNav location="/job/JobResponsibilities" />
                    
                </div>
                <div className="w-3/4 px-12 py-6 ml-5 bg-white rounded-md shadow-md content">
                    <div className="flex flex-col justify-around w-5/6 ">
                    <h6>Responsibilities </h6>
                        <div className="mt-4 overflow-y-auto border rounded-lg h-80">
                       {/* <textarea className="w-full h-full border border-blue-500 rounded-md form-text" /> */}
                            <Editor placeholder="Describe the responsibilities ..." />
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

export default Responsibilities