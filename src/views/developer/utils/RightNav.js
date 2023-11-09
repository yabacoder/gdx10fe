import React from 'react'
import Profile from '../../../components/Profile';
import profileImage from '../../../assets/img/profile.png';
function RightNav() {
    return (
        <div>
            <Profile />
                    
                    <div className="flex flex-col w-full p-5 mt-10 bg-white rounded-md shadow-md topNews">
                    
                        <h5>Top Articles</h5>
                        <div className="flex items-center justify-between px-3 py-3 my-3 bg-gray-200 rounded-lg">
                        <div className="w-4/12 pr-2 article-img">
                        <img alt="" src={profileImage} className="object-cover w-full h-16 border-2 border-gray-100 rounded-md " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                        
                        </div>
                        <div className="flex items-center justify-between px-3 py-3 my-3 bg-gray-200 rounded-lg">
                        <div className="w-4/12 pr-2 article-img">
                        <img alt="" src={profileImage} className="object-cover w-full h-16 border-2 border-gray-100 rounded-md " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                        
                        </div>
                        <div className="flex items-center justify-between px-3 py-3 my-3 bg-gray-200 rounded-lg">
                        <div className="w-4/12 pr-2 article-img">
                        <img alt="" src={profileImage} className="object-cover w-full h-16 border-2 border-gray-100 rounded-md " /> 
                        </div>
                            <div >
                            <h4 className="text-sm text-blue-800 font-getdevM">Attracting Right Talent in a Competitive 
Talent Market </h4>
                           
                            </div>
                        
                        </div>
                       
                    </div>
        </div>
    )
}

export default RightNav
