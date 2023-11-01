import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.svg'

 const Nav = () => {
    return (
            <div className="container mx-auto ">
                <div className="container fixed z-10 flex flex-wrap items-center justify-between w-full px-4 py-4 mb-12 rounded-b header topNav bg-gdbase" >
                    <div className="">
                        <Link to="/" >
                            <img className="" src={logo} alt="GetDev" />
                        </Link>
                    </div>
        
                    <label for="menu-toggle" className="block cursor-pointer lg:hidden">
                            <svg className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <input type="checkbox" className="hidden" id="menu-toggle" />
                        
            {/* <!-- </button> -->    */}
        <div className="hidden w-full px-2 lg:flex lg:items-center lg:w-auto " id="menu">
            <nav>
                <ul className="items-center justify-between pt-4 text-base text-white lg:flex lg:pt:0">
                    <li>
                                <Link to="/pricing" className="py-1 md:mx-6 text-white font-getdevM ">For Companies </Link>
                    </li>
                    <li>
                                <Link to="/pricing" className="py-1 md:mx-6 mt-1 text-white font-getdevM">How it works</Link>
                    </li>
                    {/* <li>
                        <Link to="/success_stories" className="py-1 mx-6 mt-1 text-white font-getdevM ">Success Stories</Link>
                    </li> */}
                    
                    <li>
                    <li  className="relative inline-block py-1 md:mx-6 mt-1 text-white dropdown font-getdevM ">
                        <div className="inline-flex items-center">
                        <span class="mr-1"> Resources</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  
                        </div>
                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-60 md:w-56 ">
                                <li class="">
                                    <Link to="#" class=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Career Paths</Link>
                                    {/* <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 md:w-56">
                                        <li class=""><Link to="/salary_calculator" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Salary Calculator</Link></li>
                                        <li class=""> <Link to="talent_management" className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400 font-getdevM ">Talent Management</Link></li>
                                    </ul> */}
                                </li>
                                <li class=""><Link to="/salary_calculator" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Salary Calculator</Link></li>
                                <li class=""> <Link to="talent_management" className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400 font-getdevM ">Talent Management</Link></li>
                            </ul>
                       </li>                        
                    </li>

                    <li className=""> 
                    <Link to="/jobs" className="py-2 md:mx-6 font-getdevM" > Jobs</Link>
                    </li>
                    
                    <li className="lg:ml-5 mt-5 md:mt-0">
                    <Link to="/login" className="px-4 py-2 text-white transition duration-150 ease-in-out border border-white rounded-full font-getdevM hover:bg-white hover:text-black" > Login </Link>
                    </li>
                </ul>
            </nav>           
        </div> 
      
    </div>
            </div>
           
        )
}

export default Nav;