import React, { useState, useEffect } from 'react';
import http from '../../../utils/service';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      const portfolio = await http('/developer/resume/portfolio', 'get');
      console.log(portfolio);
      setPortfolio(portfolio.data);
    };

    getPortfolio();
  }, []);
  return (
    <div>
      <div className="withoutPortfolio ">
        <div className="flex items-center justify-between header"></div>
        <div className="flex flex-col items-center justify-center p-10 bg-gray-300 rounded-md ">
          <svg viewBox="0 0 47.8 62.3" className="w-12">
            <defs />
            <path
              d="M48 15v1H32V0h1a3 3 0 012 1l12 12a3 3 0 011 2zm-17 4a3 3 0 01-3-2V0H3a3 3 0 00-3 3v56a3 3 0 003 3h42a3 3 0 003-3V19zM15 49a1 1 0 01-1 0l-8-8a1 1 0 010-1l8-7a1 1 0 011 0l3 3a1 1 0 010 1l-5 4 5 4a1 1 0 010 1zm7 6l-4-1a1 1 0 010-1l7-26a1 1 0 011 0l4 1a1 1 0 010 1l-7 25a1 1 0 01-1 1zm20-14l-8 8a1 1 0 01-1 0l-3-3a1 1 0 010-1l5-4-5-4a1 1 0 010-1l3-3a1 1 0 011 0l8 7a1 1 0 010 1z"
              fill="rgba(72,86,133,0.28)"
            />
          </svg>
          <p className="my-2 text-xs text-center text-gray-600">
            Sorry, we currently do not have a project for you, please try again
            later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
