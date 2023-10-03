import React from 'react'
import {
    
    Link,
    useRouteMatch
  } from 'react-router-dom'

function LeftNav(props) {
    let  currentLocation = window.location.pathname;
    // let pad  = (props.location === currentLocation) ? 'p-5 mt-5 bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 mt-5' ;
    return (
        <div>
                <div >
                    <Link to="/company/job/AddJob">
                        <p className={(currentLocation === '/company/job/AddJob') ? 'px-5 py-6  bg-red-100 border-r-4 border-red-600 rounded-r-md font-getdevB' : 'px-5 py-6'}>    Basic Information </p>
                     
                    </Link>
                </div>
                <div >
                    <Link to="/company/job/JobStack">
                        <p className={(currentLocation === '/company/job/JobStack') ? 'px-5  py-6 bg-red-100 border-r-4 border-red-600 rounded-r-md font-getdevB' : 'px-5 py-6 '}>
                        Stack & Availability
                        </p>
                    </Link>
                </div>
                <div >
                    <Link to="/company/job/JobDescription">
                        <p className={(currentLocation === '/company/job/JobDescription') ? 'px-5  py-6 bg-red-100 border-r-4 border-red-600 rounded-r-md font-getdevB' : 'px-5 py-6 '}>Description</p>
                      
                    </Link>
                </div>
                <div >
                    <Link to="/company/job/JobResponsibilities">
                        <p className={(currentLocation === 'JobResponsibilities') ? 'px-5  py-6 bg-red-100 border-r-4 border-red-600 rounded-r-md font-getdevB' : 'px-5 py-6 '}>Responsibilities</p>
                      
                    </Link>
                </div>
                <div >
                    <Link to="/company/job/JobSkill">
                        <p className={(currentLocation === '/company/job/JobSkill') ? 'px-5  py-6 bg-red-100 border-r-4 border-red-600 rounded-r-md font-getdevB' : 'px-5 py-6 '}> Skill & Qualification</p>
                      
                    </Link>
                </div>
                {/* <div className={(currentLocation === '/job/JobSkill') ? 'p-5 bg-red-100 border-r-4 border-red-600 rounded-r-md' : 'p-5 '}>
                    <Link to="JobSkill">
                    Skill & Qualification
                    </Link>
                </div> */}
        </div>
    )
}

export default LeftNav
