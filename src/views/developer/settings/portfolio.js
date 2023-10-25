import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([1,2,4]);
  useEffect(() => {
    const getPortfolio = async () => {
      if (localStorage.getItem('profile')) {
        const profile = JSON.parse(localStorage.getItem('profile'));
        setPortfolio(profile.portfolio);
      }
    };

    getPortfolio();
  }, []);
  return (
    <div>
      <h6> Portfolio</h6>
      <div className="flex">
        <div className="w-4/6">
          <div className="py-5">
            <ul className="text-sm">
              {portfolio &&
                portfolio.map(port => (
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
                      <span className="px-2">
                        <svg viewBox="0 0 30 29" className="w-6">
                          <defs />
                          <path
                            fill="#485685"
                            d="M10 23v1l-1-1h1zm-2 0h0zm3 0s-1 0 0 0v0zm4-23A14 14 0 000 15a15 15 0 0010 14l1-1v-3s-4 1-5-2l-2-2s-1-1 1-1a3 3 0 012 1 3 3 0 004 2 3 3 0 011-2c-3-1-7-1-7-7a5 5 0 012-4 6 6 0 010-4l4 2a14 14 0 018 0l4-2a6 6 0 010 4 5 5 0 012 4c0 6-4 6-7 7a4 4 0 011 2v5l1 1a15 15 0 0010-14c0-9-7-15-15-15zM6 21zm-1-1v1l1-1H5zm2 2v1h1v-1H7zm-1 0h0z"
                            data-name="Icon awesome-github"
                            opacity=".3"
                          />
                        </svg>
                      </span>

                      <span className="px-2">{port.title}</span>
                      <span className="w-4/6 px-2 text-blue-500">
                        <input
                        className='form-input mx-2 w-2/3'
                        type="text"
                        name="github"
                        value=""
                        />
                        <a href="">Add Link +</a>
                      </span>
                      <span>
                        <ul className="inline-flex">
                          <li className="flex items-center px-4 text-sm border-r border-gray-500">
                            <svg
                              viewBox="0 0 18 17"
                              className="inline-flex w-4 mx-2 hover:cursor-pointer"
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
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <button
          type="submit"
          className="flex items-center justify-center w-40 py-2 text-sm bg-red-600 btn hover:bg-red-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
