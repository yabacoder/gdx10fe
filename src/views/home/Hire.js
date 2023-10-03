import React from 'react';
import {Link} from 'react-router-dom'


 export const Hire = () => {
    return (
        <div className="container items-center px-10 mx-auto lg:py-10 lg:flex lg:justify-between hire-dev md:mt-10">
        <div className="p-3 md:pr-4 md:text-left" >
            <h1 className= "text-4xl font-bold md:text-5xl text-gdblue">
                Hire a Qualified Developer 
            </h1>
            <div className="pl-4 mt-2 border-l-2 border-red-600">
                <p className="text-sm text-gdtextBlue md:text-base">Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
            </div>
        </div>
        <div className="lg:justify-around lg:flex hire-position">
            <div className="w-full p-12 py-4 mt-5 mr-5 text-center transition duration-500 ease-in-out transform rounded-lg shadow-cardShadow md:w-cardWidth hover:-translate-y-1 hover:scale-100">
                <h4 className="mt-4 mb-1 leading-none text-center font-getdevB text-gdblue">Permanent <br/> Position</h4>
                <p className="p-3 mb-1 text-gdtextBlue" >Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. </p>
                <Link to="" className="flex items-center justify-center p-3 mb-4 bg-red-300 bg-opacity-50 border rounded-lg"> 
                    <div className="flex content-center justify-around text-red-600 ">
                        <div>Get Started </div>
                    </div>  
                    <span className="flex items-center justify-center w-8 h-8 p-2 ml-6 text-white bg-red-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                    </span>
                
                    
                </Link>
            </div>
    
            <div className="p-12 py-4 mt-5 text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg shadow-cardShadow md:w-cardWidth hover:-translate-y-1 hover:scale-100">
                <h4 className="mt-4 mb-1 leading-none text-center font-getdevB ">Temporal <br/> Position</h4>
                <p className="p-3 mb-1" >Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. </p>
                <Link to="" className="flex items-center justify-center p-3 mb-4 bg-white bg-opacity-50 rounded-lg"> 
                    <div className="flex content-center justify-around text-white ">
                        <div>Get Started </div>
                    </div>  
                    <span className="flex items-center justify-center w-8 h-8 p-2 ml-6 text-blue-600 bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                    </span>
                
                    
                </Link>
            </div>
        </div>   
   </div>
    )
}
