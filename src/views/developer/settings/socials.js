import React, { useState, useEffect } from 'react';
import http from '../../../utils/service';

const Socials = () => {
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');

  useEffect(() => {
    const getSocial = async () => {
      let social = await http('/developer/social');
      social = social.data;
      setGithub(social.github);
      setTwitter(social.twitter);
      setLinkedin(social.linkedin);
      // console.log(social);
      // social.map(sc => (
      //   // if (sc.type == 1) {
      //   //   setGithub(sc.name);
      //   // }
      // ));
    };
    getSocial();
  }, []);

  const handleSave = async val => {
    const data = null;
    let social = await http('/developer/social', 'post', data);
  };
  return (
    <div>
      <h6> Social Media</h6>
      <div className="flex">
        <div className="w-4/6">
          <div className="py-5">
            <ul className="text-sm">
              <li className="flex py-4 border-b justify-between">
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
                  <svg viewBox="0 0 30 30" className="w-6">
                    <defs />
                    <g transform="translate(-1093 -736)">
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="#c9cddb"
                        transform="translate(1093 736)"
                      />
                      <path
                        fill="#fff"
                        d="M1111 752l1-3h-3v-2a1 1 0 012-1h1v-2a14 14 0 00-2 0 3 3 0 00-4 3v2h-2v3h2v6h3v-6z"
                      />
                    </g>
                  </svg>
                </span>

                <span className="px-2">Github</span>
                <span className="text-blue-500 w-4/6 px-2">
                  {github ? <>{github}</> : <a href="">Add Link +</a>}
                </span>
              </li>

              <li className="flex py-4 border-b justify-between">
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
                  <svg viewBox="0 0 30 30" className="w-6">
                    <defs />
                    <g transform="translate(-1193 -736)">
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="#c9cddb"
                        transform="translate(1193 736)"
                      />
                      <path
                        fill="#fff"
                        d="M1208 743h-3a6 6 0 00-2 1 4 4 0 00-1 1 4 4 0 00-1 1 6 6 0 00-1 2v6a6 6 0 001 2 4 4 0 001 1 4 4 0 001 1 6 6 0 002 0h6a6 6 0 002 0 4 4 0 002-2 6 6 0 000-2l1-3-1-3a6 6 0 000-2 4 4 0 00-1-1 4 4 0 00-1-1 6 6 0 00-2-1h-3zm0 2h3a4 4 0 011 0 2 2 0 012 1 4 4 0 010 2v6a4 4 0 010 1 2 2 0 01-1 1 2 2 0 01-1 1 4 4 0 01-1 0 53 53 0 01-6 0 4 4 0 01-1 0 2 2 0 01-1-1 2 2 0 01-1-1 4 4 0 010-1v-3-3a4 4 0 010-2 2 2 0 011 0 2 2 0 010-1 4 4 0 012 0h3zm0 2a4 4 0 104 4 4 4 0 00-4-4zm0 6a3 3 0 112-2 3 3 0 01-2 2zm5-6a1 1 0 11-1-1 1 1 0 011 1z"
                      />
                    </g>
                  </svg>
                </span>

                <span className="px-2">LinkedIn</span>
                <span className="text-blue-500 w-4/6 px-2">
                  <a href="">{linkedin}</a>
                </span>
                <span>
                  <ul className="inline-flex">
                    {/* <li className="bg-blue-500 text-sm text-white px-4 py-1"> */}
                    {/* <a href=""> clas</a> */}
                    {/* See Interview</li> */}
                    <li className="flex text-sm items-center px-4 border-r border-gray-500">
                      <svg viewBox="0 0 18 17" className="w-4 inline-flex mx-2">
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
                        className="w-5"
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

              <li className="flex py-4 border-b justify-between">
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
                  <svg viewBox="0 0 30 30" className="w-6">
                    <defs />
                    <g transform="translate(-1193 -736)">
                      <circle
                        cx="15"
                        cy="15"
                        r="15"
                        fill="#c9cddb"
                        transform="translate(1193 736)"
                      />
                      <path
                        fill="#fff"
                        d="M1204 756h-2v-8h2zm-1-9a2 2 0 112-2 2 2 0 01-2 2zm11 9h-2v-4c0-1 0-2-2-2l-1 2v4h-3v-8h3v1a3 3 0 012-1c3 0 3 1 3 4v4z"
                      />
                    </g>
                  </svg>
                </span>

                <span className="px-2">Twitter</span>
                <span className="text-blue-500 w-4/6 px-2">
                  <a href="">@{twitter}</a>
                </span>
                <span>
                  <ul className="inline-flex">
                    {/* <li className="bg-blue-500 text-sm text-white px-4 py-1"> */}
                    {/* <a href=""> clas</a> */}
                    {/* See Interview</li> */}
                    <li className="flex text-sm items-center px-4 border-r border-gray-500">
                      <svg viewBox="0 0 18 17" className="w-4 inline-flex mx-2">
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
                        className="w-5"
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
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <button
          type="submit"
          className="flex items-center text-sm justify-center w-40 py-2 bg-red-600 btn hover:bg-red-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Socials;
