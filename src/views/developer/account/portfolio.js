import React, { useState, useEffect } from 'react';
// import http from '../../../utils/service';
import {
  useLoadPortfolioQuery
} from '../../../features/developer/portfolioSlice';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const {
    data,
    isSuccess
  } = useLoadPortfolioQuery();

  useEffect(() => {
    const getPortfolio = async () => {
      setPortfolio(data?.data?.rows);
    };
    getPortfolio();
  }, [isSuccess]);

  console.log(portfolio, "Portfolio");
  return (
    <div className='bg-white rounded-md'>
      {
        !portfolio ? (
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
        ) : (
          // {portfolio}
          <ul className="text-sm">
            {
              portfolio?.map(port => (
                <>
                  {' '}
                  <li className="flex justify-between py-4 border-b">
                    <span className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    {/* <span className="px-2">
                        <svg viewBox="0 0 30 29" className="w-6">
                          <defs />
                          <path
                            fill="#485685"
                            d="M10 23v1l-1-1h1zm-2 0h0zm3 0s-1 0 0 0v0zm4-23A14 14 0 000 15a15 15 0 0010 14l1-1v-3s-4 1-5-2l-2-2s-1-1 1-1a3 3 0 012 1 3 3 0 004 2 3 3 0 011-2c-3-1-7-1-7-7a5 5 0 012-4 6 6 0 010-4l4 2a14 14 0 018 0l4-2a6 6 0 010 4 5 5 0 012 4c0 6-4 6-7 7a4 4 0 011 2v5l1 1a15 15 0 0010-14c0-9-7-15-15-15zM6 21zm-1-1v1l1-1H5zm2 2v1h1v-1H7zm-1 0h0z"
                            data-name="Icon awesome-github"
                            opacity=".3"
                          />
                        </svg>
                      </span> */}
                    <a href={port.url} target="_blank" rel="noopener noreferrer">
                      <span className="px-2">{port.title}</span>
                    </a>
                    <span>
                      <ul className="inline-flex">
                        <li className="flex items-center px-4 text-sm border-r border-gray-500">
                          <svg
                            viewBox="0 0 18 17"
                            className="inline-flex w-4 mx-2 hover:cursor-pointer"
                          // onClick={() => {
                          //   // setPortfolio(port);
                          //   setId(port.id);
                          //   setTitle(port.title);
                          //   setUrl(port.url);
                          //   setDescription(port.description);
                          //   setEdit(true);
                          //   setOpenModal(true);
                          // }}
                          >
                            <defs />
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              opacity=".6"
                            >
                              <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z" />
                            </g>
                          </svg>
                        </li>
                        <li className="px-3">
                          <svg
                            // onClick={() => {
                            //   processDelete(port.id);
                            // }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="w-5 hover:cursor-pointer"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </li>
                      </ul>
                    </span>
                  </li >
                </>
              ))}
          </ul>

        )

      }

    </div >
  );
};

export default Portfolio;
