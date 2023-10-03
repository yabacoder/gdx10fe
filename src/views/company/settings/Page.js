import React from 'react'
import Layout from '../layout'
// import LeftNav from './LeftNav'
import { Link } from 'react-router-dom';

const Index = () => {
    let  currentLocation = window.location.pathname;
    return (
        <Layout title="Job Link">
            <div className="flex mt-10">
            <div className="w-1/4 bg-white rounded-md links">
            <div>
                    <div >
                        <Link to="/settings">
                           <p className={(currentLocation === '/settings') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                           Profile
                               </p>  
                        </Link>
                    </div>
                    <div >
                        <Link to="/settings/page">
                            <p className={(currentLocation === '/settings/page') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                            Page Settings
                                </p> 
                        </Link>
                    </div>
                    <div >
                        <Link to="/settings/password">
                            <p className={(currentLocation === '/settings/password') ? 'p-5 font-getdevB  bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                            Change Password
                            </p>
                     
                        </Link>
                    </div>
                
                    </div>
                </div>
                <div className="w-11/12 px-12 py-6 ml-5 bg-white rounded-md content">
                    <div className="flex flex-col justify-around w-3/4 -mt-3">
                        <h6>Job Link Page </h6>
                    
                        <div className="mt-5">
                            <p> Company Name</p>
                            <label htmlFor="">
                                <input className="w-full form-input" type="text" />
                            </label>
                        </div>
                </div>
                <div className="flex justify-start mt-5">
                    <button className="flex items-center justify-between px-5 py-3 bg-red-600 btn hover:bg-red-500">Save 
                       
                    </button>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default Index


