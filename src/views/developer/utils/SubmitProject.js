import React, { useState} from 'react'

function SubmitProject(props) {
    const [openModal, setOpenModal] = useState(true);
    //setOpenModal(props.isOpen);
    return (
        <div className={ (openModal)? "absolute flex justify-end  bg-gray-800 bg-opacity-50 inset-0 h-screen" : 'hidden'}>
            <div className="">
                
            </div>
            <div className="flex justify-end w-2/3 bg-white main-container">
                <div className="w-3/5 p-10 project-submission">
                    <div className="p-5 border-b">
                        <h6>Project Submission</h6>
                    </div>
                    <div className="flex justify-between mt-10">
                        <div className="w-1/2">
                            <p>Github</p>
                            <input type="text" className="w-full mt-3 form-input"/>
                        </div>
                        <div className="w-1/2 ml-5">
                            <p>Test URL</p>
                            <input type="text" className="w-full mt-3 form-input"/>
                        </div>
                    </div>
                    <div className="mt-10 ">             
                        <p>Languages and Frameworks (separated by comma)</p>
                        <input type="text" className="w-full mt-3 form-input"/>    
                    </div>

                    <div className="mt-10 ">             
                        <p>Languages and Frameworks (separated by comma)</p>
                        <input type="text" className="w-full mt-3 form-input"/>    
                    </div>
                    <div className="mt-10">
                        <button className="w-full px-5 py-3 btn"> Submit Project &gt; </button>
                    </div>

                </div>
                <div className="w-2/5 p-10 bg-gray-100">
                    <div className="flex justify-end">
                        <div>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                    <div className="p-5 -mt-5 border-b">
                        <h6>Task Overview</h6>
                    </div>
                    <div className="p-5 mt-10 border rounded-lg">
                        <p>
                        Micro PHP Framework Web Site - Build a simple (10page) website using a php micro framework. Could also be used to build your portfolio. Can make it file based, database, or a light database like sqlite.
                        </p>
                    </div>

                    <hr />
                    <div>
                    <div className="p-5 mt-10 ">
                        <div className="flex flex-row items-center w-1/2 pr-10 border-r">
                            <div className="px-4 py-2 mt-3 text-red-600 bg-red-200 border rounded-full">
                                Submission Date
                            </div>
                            <p className="mt-2 font-bold">Sunday, 2nd August 2020</p>
                        </div>
                        <div className="flex flex-row items-center w-1/2">
                            <div className="px-4 py-2 mt-3 text-red-600 bg-red-200 border rounded-full">Countdown</div>
                            <p className="mt-2 font-bold ">5d : 22h : 51m : 55s </p>
                        </div>
                    </div>
                    </div>
        
                </div>
            </div>
        </div>
    )
}

export default SubmitProject
