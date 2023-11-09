import React, { useState, useEffect } from 'react';
import {
  useLoadEducationQuery,
  // useGetEducationQuery,
  // useGetEducationEditQuery,
  useAddEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation
} from '../../../features/developer/educationSlice';

const Education = () => {
  const [education, setEducation] = useState([]);

  const {
    data,
    isSuccess,
    isError,
    error,
    isLoading
  } = useLoadEducationQuery();

  useEffect(() => {
    const getEducation = async () => {
      // const education = await http('/developer/resume/education', 'get');
      // setEducation(education.data);
      setEducation(data?.data);
      console.log(education);
    };

    getEducation();
  }, [isSuccess]);
  return (
    <div className="p-4 px-6 bg-white rounded-md">
      <div className="flex flex-col jobs">
        {education &&
          education.map(edu => (
            <div className="flex justify-between px-6 py-4 my-3 bg-gray-200 border border-gray-400 rounded-md ">
              <div>
                <h4 className="text-sm text-blue-800">{edu.institute}</h4>
                <h5 className="text-xs font-getdev">{edu.title}</h5>
                <div className="info">
                  <ul className="flex items-center">
                    <li className="pr-4 text-xs border-r-2">
                      {edu.start} - {edu.end}
                    </li>
                    {/* <li className="mx-1 text-xs text-blue-800">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-flex w-4 mx-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Lagos, Nigeria
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* <div>
                <ul className="inline-flex">
                  <li className="flex items-center px-4 text-sm border-r-2 border-gray-500">
                    <svg viewBox="0 0 18 17" className="inline-flex w-4 mx-2">
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
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Education;
