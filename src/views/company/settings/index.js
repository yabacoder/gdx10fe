import React from 'react';
// import Layout from '../layout'
// import LeftNav from './LeftNav'
import { Link } from 'react-router-dom';
import LeftNav from './LeftNav';

const Index = () => {
    let currentLocation = window.location.pathname;
    return (
        <>
            <div className="flex mt-10">
                <div className="w-1/4 bg-white rounded-md links">
                    <LeftNav />
                </div>
                <div className="w-11/12 px-12 py-6 ml-5 bg-white rounded-md content">
                    <div className="flex flex-col justify-around w-3/4 ">
                        <h6>Profile </h6>

                        <div className="mt-5">
                            <p>Logo</p>
                        </div>

                        <div className="mt-5">
                            <p> Company Name</p>
                            <label htmlFor="">
                                <input className="w-full form-input" type="text" />
                            </label>
                        </div>

                        <div className="flex items-center justify-between mt-5">
                            <div className="w-1/2 ">
                                <p>Email</p>
                                <label htmlFor="">
                                    <input className="w-full form-input" type="text" />
                                </label>
                            </div>
                            <div className="w-1/2 ml-5">
                                <p>Phone</p>
                                <label htmlFor="">
                                    <input className="w-full form-input" type="text" />
                                </label>
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



                    </div>
                    <div className="flex justify-start mt-5">
                        <button className="flex items-center justify-between px-5 py-3 bg-red-600 btn hover:bg-red-500">Save

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index


