import React from 'react';

const Skills = () => {
  return (
    <div className="p-4 px-6 bg-white rounded-md">
      <div className="flex flex-col jobs">
        <div className="inline-flex w-full px-6 py-4 my-3 bg-gray-200 border border-gray-400 rounded-md ">
          <div className="w-2/12 mr-2 text-center">
            <ul>
              <li className="px-4 text-xs text-blue-700 bg-gray-400 bg-opacity-50 border border-gray-600 rounded-full font-getdevB">
                Html
              </li>
            </ul>
          </div>

          <div class="w-10/12">
            <div class="shadow rounded-full w-10/12 bg-gray-500">
              <div class="bg-yellow-600 text-xs rounded-full leading-none py-1 text-center text-white w-5/12">
                45%
              </div>
            </div>
            <p className="text-xs"></p>
          </div>

          {/* <div>
                              <ul
                                  <li className="flex items-center px-4 text-sm border-r-2 border-gray-500">
                                  <svg viewBox="0 0 18 17" className="inline-flex w-4 mx-2">
  <defs/>
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".6">
    <path d="M9 16h8M13 2a2 2 0 112 2L4 15l-3 1 1-4z"/>
  </g>
</svg>
                                  </li>
                                  <li className="px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5"viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></li>
                              </ul>
                            </div> */}
        </div>

        <div className="inline-flex w-full px-6 py-4 my-3 bg-gray-200 border border-gray-400 rounded-md ">
          <div className="w-2/12 mr-2 text-center">
            <ul>
              <li className="px-4 text-xs text-blue-700 bg-gray-400 bg-opacity-50 border border-gray-600 rounded-full font-getdevB">
                Css
              </li>
            </ul>
          </div>

          <div class="w-10/12">
            <div class="shadow rounded-full w-10/12 bg-gray-500">
              <div class="bg-green-500 text-xs rounded-full leading-none py-1 text-center text-white w-9/12">
                75%
              </div>
            </div>
            <p className="text-xs"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
