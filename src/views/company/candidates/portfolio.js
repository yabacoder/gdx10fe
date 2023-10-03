import React from 'react';
import {Link} from 'react-router-dom'

const portfolio = () => {
    return (
        <div>
                  <div className="withoutPortfolio ">
                    <div className="header flex justify-between items-center">
                   
                    </div>
                    <div className=" bg-gray-300 p-10 rounded-md justify-center flex flex-col items-center">
                    <svg viewBox="0 0 47.8 62.3" className="w-12">
  <defs/>
  <path d="M48 15v1H32V0h1a3 3 0 012 1l12 12a3 3 0 011 2zm-17 4a3 3 0 01-3-2V0H3a3 3 0 00-3 3v56a3 3 0 003 3h42a3 3 0 003-3V19zM15 49a1 1 0 01-1 0l-8-8a1 1 0 010-1l8-7a1 1 0 011 0l3 3a1 1 0 010 1l-5 4 5 4a1 1 0 010 1zm7 6l-4-1a1 1 0 010-1l7-26a1 1 0 011 0l4 1a1 1 0 010 1l-7 25a1 1 0 01-1 1zm20-14l-8 8a1 1 0 01-1 0l-3-3a1 1 0 010-1l5-4-5-4a1 1 0 010-1l3-3a1 1 0 011 0l8 7a1 1 0 010 1z" fill="rgba(72,86,133,0.28)"/>
</svg>
     <p className="text-center text-xs text-gray-600 my-2">Sorry, we currently do not have a project for 
you, please try again later!</p>
             
                  </div>
                    </div>
        </div>
    )
}

export default portfolio
