import React from 'react';
import {Link} from "react-router-dom";


const  TalentManagement = () => {
    return (
  
            // <Layout>
                <section className="py-10 bg-white rounded-md shadow-lg md:px-32">
                    <div className="mb-4 section-header">
                        <h3 className="my-1 text-gdblue">Our talent: Developer types</h3>
                        <p className="text-gray-600">Triplebyte has thousands and thousands of highly-skilled engineers on our platform. With us, companies can quickly source engineers to fill roles across their engineering team.</p>
                    </div>
                    <div>
                    <h4 className="my-1 text-gdblue">Hiring Getdev Engineers</h4>
                        <p className="text-gray-600">
                        Although precise definitions of each engineering type may be hard to come by, we explain each engineering track based on our technical screening. As companies source their candidates, each engineering type will have defined skills and characteristics most appropriate to the work they will be doing.</p>
                    
                    </div>
                    <div className="talent-cards">
                    <div class="flex flex-wrap justify-between md:mt-10">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg ">
    
<div class="flex max-w-md  flex-col py-8 text-left">
   <div class="flex items-start px-8 pb-6  text-left">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://via.placeholder.com/75" alt="avatar" />
      <div class="">
         <div class="">
            <h5 class="text-lg  text-gdblue -mt-1">Frontend </h5>
            <p className="text-gray-600">Type of developer</p>
         </div>
       
   
      </div>
   </div>
   <div className="mx-16 mb-2 card-desc">
            <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
            <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
        </div>
        <div className="mx-16 mb-2 card-desc">
            <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
            <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
        </div>
        <div className="mx-16 mb-2 card-desc">
            <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
            <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
        </div>
    <div className="mx-auto my-8 ">
       
    <div className="div">
        <Link to="/career_path/frontend" className="px-6 py-4 text-red-600 bg-transparent border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent" >Learn more</Link>
        </div>
    </div>
</div>
                 
    </div>
  </div>
  <div class="w-1/3 p-2">
  <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg ">
    
    <div class="flex max-w-md  flex-col py-8 text-left">
       <div class="flex items-start px-8 pb-6  text-left">
          <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://via.placeholder.com/75" alt="avatar" />
          <div class="">
             <div class="">
                <h5 class="text-lg  text-gdblue -mt-1">Backend </h5>
                <p className="text-gray-600">Type of developer</p>
             </div>
           
       
          </div>
       </div>
       <div className="mx-16 mb-2 card-desc">
                <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
                <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="mx-16 mb-2 card-desc">
                <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
                <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="mx-auto my-8 ">
       
       <div className="div">
           <Link to="/career_path/backend" className="px-6 py-4 text-red-600 bg-transparent border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent" >Learn more</Link>
           </div>
       </div>
    </div>
                     
        </div>
  </div>
  <div class="w-1/3 p-2">
  <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg ">
    
    <div class="flex max-w-md  flex-col py-8 text-left">
       <div class="flex items-start px-8 pb-6  text-left">
          <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://via.placeholder.com/75" alt="avatar" />
          <div class="">
             <div class="">
                <h5 class="text-lg  text-gdblue -mt-1">Fullstack </h5>
                <p className="text-gray-600">Type of developer</p>
             </div>
           
       
          </div>
       </div>
       <div className="mx-16 mb-2 card-desc">
                <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
                <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="mx-16 mb-2 card-desc">
                <h6 className="text-gdblue">Lorem Ipsum Lorem Ipsum</h6>
                <p className="text-sm text-gray-600">Lorem Ipsum Lorem Ipsum</p>
            </div>
            <div className="mx-auto my-8 ">
       
       <div className="div">
           <Link to="/career_path/fullstack " className="px-6 py-4 text-red-600 bg-transparent border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent" >Learn more</Link>
           </div>
       </div>
    </div>
                     
        </div>
  </div>
</div>

               
                    </div>
                </section>
            // </Layout> */}
    
    )
}

export default TalentManagement;