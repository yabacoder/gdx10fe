import React from 'react';
import {Link} from "react-router-dom";
// import Layout from "./layout";

 const About = () => {
    return (
        <div>
           <>
               <section className="bg-white rounded-md rounded-t-lg shadow-lg md:mt-16">
                   <div className="flex items-center p-12 px-24 about-header h-1/2 h-7Vh">
                        <div className="w-1/3 ">
                            <h1 className="my-4 leading-none text-white">Talent Hiring Company</h1>
                            <p className="text-white">We are a talent hiring company focused on helping companies/organizations recruit high-quality developers swiftly</p>
                        {/* <Link className="px-4 py-2 my-10 text-white bg-red-600 rounded-full" >Read More </Link> */}
                       
                        <div class="mt-4 sm:mt-4 sm:flex sm:justify-center lg:justify-start">
            <div class="">
              <Link to="#" class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-3 md:text-lg md:px-6">
               Read More
               <span className="">
               <svg className="inline-flex h-6 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
               </span>
              </Link>
            </div>
            </div>
          </div>
                   </div>
                   <div className="px-24 py-10">
                       <div className="flex flex-wrap py-10">
                            <div className="hidden md:w-1/5 md:block ">
                               <div className="my-4 mr-8 border-t-4 border-red-600">

                               </div>
                            </div>
                            <div className="w-4/5 ">
                            <div className="">
                        <h3 className=" text-gdblue"> 
                           About Us               
                        </h3>
                        </div>
                        <p className="leading-tight text-blue-800">We are a talent hiring company focused on helping companies/organizations recruit high-quality developers swiftly in 3 easy steps. GetDev relieves you the headache involved in sourcing and assessing developers. We take that bulk of paper work off your table while you focus on other important areas. For over a year and counting, we have helped a growing list of companies source, assess and hire developers in Nigeria.</p>
                            </div>
                       </div>
                       <div className="flex flex-wrap pb-10">
                           <div className="w-1/3">
                               <div className="p-5 py-12 text-center border-r-2">
                                        <div className="text-sm text-blue-800">
                                            <p>Jobs created</p>
                                        </div>
                                        <div className="flex items-center justify-center numbers">
                                            <h3 className="text-gdblue font-getdevB">300</h3>
                                            <span className="inline-flex text-red-600 font-getdevB"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="inline-flex h-8" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg></span>
                                        </div>
                               </div>
                           </div>
                           <div className="w-1/3">
                           <div className="p-5 py-12 text-center border-r-2">
                                        <div className="text-sm text-blue-800">
                                            <p>Companies</p>
                                        </div>
                                        <div className="flex items-center justify-center numbers">
                                            <h3 className="text-gdblue font-getdevB">50</h3>
                                            <span className="inline-flex text-red-600 font-getdevB"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="inline-flex h-8" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg></span>
                                        </div>
                               </div>
                           </div>
                           <div className="w-1/3">
                           <div className="p-5 py-12 text-center border-r-2">
                                        <div className="text-sm text-blue-800">
                                            <p>Developers</p>
                                        </div>
                                        <div className="flex items-center justify-center numbers">
                                            <h3 className="text-gdblue font-getdevB">6000</h3>
                                            <span className="inline-flex text-red-600 font-getdevB"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="inline-flex h-8" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg></span>
                                        </div>
                               </div>
                           </div>
                       </div>
                    <div className="w-2/5 pb-10">
                        <div className="px-3 leading-tight text-blue-800 border-l-4 border-red-600 font-getdevB">
                            <h5>Why You Should Consider Temporal Hiring/
What Temporal Hiring Will Do for Your Company 
and How We Can Help You Achieve That.</h5>
                        </div>
                    </div>
                   <div className="w-full about-us-main">
                       <div>
                       <p className="text-gdblue">
                        The overall goal of any company is to create value while increasing profitability in return. Both latter and former are dependent on varying factors from staffing, training, job design to customer centric products, processes, and technology. Maximizing profit/investment is of utmost importance to all businesses. If not, how then will employees be paid plus increase production? Temporal hiring has since gain momentum across all industries, albeit big corporations or small businesses. It all began with the need to fill in positions, as existing staffs are of shortage to provide services to increasing customers’ needs. Although, some organizations don’t mind filling these demanding positions permanently, but that would incur cost which is counterintuitive in maximizing profit especially when the services rendered doesn’t require continual presence of all involved at the initial stage like periodic festive sales or building a product. 
                        </p>
                       </div>
                       <div className="pt-4">
                           <h6 className="text-blue-800 font-getdevB">
                           These are the needs that temporal/contract employees can provide for your company:
                           </h6>
                        <div className="flex flex-wrap justify-between mt-3 mb-8">
                            <div className="w-1/2 ">
                                <div className="h-full p-10 mr-2 bg-gray-100 rounded-md ">
                                    <div className="">
                                        <h5 className="pb-4 text-red-600 font-getdevB">Immediate substitute</h5>
                                        <p className="text-sm text-blue-800">Current employees often go for annual, maternity or sick leave that affect company’s productivity if the gap created is not filled instantaneously upon their return. Temporal hires can fill these voids without overspending on recruitment and salary.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 ">
                            <div className="h-full p-10 ml-2 bg-gray-100 rounded-md ">
                                    <div className="">
                                        <h5 className="pb-4 text-red-600 font-getdevB">Scalability</h5>
                                        <p className="text-sm text-blue-800">Every company on the surface of the earth yearns for expansion, by opening new and more branches locally, regionally or globally. Either ways, you should leverage on contract staffs to scale up without having to put in a lot of funds. Doing this will save your company money that can be invested in other important areas like marketing/publicity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div>
                   </div>
                   <div className="">
                        <div className="p-10 my-8 bg-red-600 rounded-md">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <h4>Get Your Career Started. <br/> Work with top Tech companies in Nigeria.</h4>
                                </div>
                            <div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <Link to="/pricing" class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base leading-6  rounded-md text-red-600 bg-white hover:text-white hover:bg-red-500 hover:border-white  transition duration-150 ease-in-out md:py-4 md:text-sm md:px-10">
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
                  </div>
              
             
               </section>

           </>
        </div>
    )
}
export default About;