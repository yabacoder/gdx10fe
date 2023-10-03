import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div className="bg-white rounded-md p-4 px-6">
            <div className="header flex justify-between">
                <h6 className="text-blue-800">About Light Nduka </h6>
                
            
            </div>
            <hr className=" my-3"/>
            <div className="leading-snug">
            <p className="text-gray-600 py-2 leading-snug">
                 I'm an experienced UX/UI and Visual designer with a demonstrated history of working in the design industry for over 6 years. Skilled in UX Architecture, UX writing, Interaction design, Wireframing, Prototyping, Concept development, User Research, Design Thinking, User flows & journeys.
 
 
                 </p>
                 <p className="text-gray-600 py-2 leading-snug">
                 My other focus is to help businesses achieve desired visibility and growth through the use of professional brand identity design that resonates with their target audience.

                 </p>
                 <p className="text-gray-600 py-2 leading-snug">
                 I also find fulfillment helping startups and tech teams design user interface and product experiences that can stand the test of time.
                 </p>
                 <p className="py-2 leading-snug">
              <span className="text-gray-700 font-getdevB"> My favourite tools are:</span>  <span className="italic"></span> Adobe XD, Whimsical, Photoshop and Adobe illustrator.
                 </p>
            </div>
        </div>
    )
}

export default About;
