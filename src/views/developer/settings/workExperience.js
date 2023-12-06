import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import {
  useLoadWorkExperienceQuery,
  useGetWorkExperienceQuery,
  useGetWorkExperienceEditQuery,
  useAddWorkExperienceMutation,
  useUpdateWorkExperienceMutation,
  useDeleteWorkExperienceMutation
} from '../../../features/developer/workExperienceSlice';
import "react-datepicker/dist/react-datepicker.css";

function WorkExperience() {
  const [openModal, setOpenModal] = useState(false);
  const [experiences, setExperiences] = useState([1, 2, 4]);
  const [experience, setExperience] = useState({});
  const [edit, setEdit] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [title, setTitle] = useState(experience?.title);
  const [company, setCompany] = useState(experience?.company);
  const [id, setId] = useState(experience?.id);
  const [present, setPresent] = useState(experience?.present);
  const [description, setDescription] = useState(experience?.description);


  const {
    data,
    isSuccess,
    isError,
    error,
    isLoading
  } = useLoadWorkExperienceQuery();

  useEffect(() => {
    setExperiences(data?.data?.rows);
  }, [isSuccess]);

  const [addWorkExperience, {
    isSuccess: addIsSuccess,
    isError: addIsError,
    error: addError,
    isLoading: AdIsLoading
  }] = useAddWorkExperienceMutation();

  const [updateWorkExperience, {
    isSuccess: updateSuccess,
    isError: updateIsError,
    error: updateError,
    isLoading: updateIsLoading
  }] = useUpdateWorkExperienceMutation();

  const [deleteWorkExperience, {
    isSuccess: deleteSuccess,
    isError: deleteIsError,
    error: deleteError,
    isLoading: deleteIsLoading
  }] = useDeleteWorkExperienceMutation();

  useEffect(() => {
    (async () => {
      setExperiences(data?.data?.rows);
    })();
  }, [isSuccess, updateSuccess, isLoading, addIsSuccess]);


  const processSave = async (e) => {
    e.preventDefault();

    try {
      if (edit) {
        // update edit
        const { data } = await updateWorkExperience({ id, title, company, start: startDate, end: endDate, present, description }).unwrap();
      } else {
        // Add new
        const { data } = await addWorkExperience({ title, company, start: startDate, end: endDate, present, description }).unwrap();
      }
      console.log(data);
      setEdit(false);
      setOpenModal(false);

    } catch (error) {
      console.log(error);
    }

  };

  const processDelete = async (id) => {
    try {
      const { data } = await deleteWorkExperience({ id }).unwrap();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h6> Work Experience</h6>
      <div className="flex">
        <div className="w-8/12">
          <div className="">
            <div className="flex flex-col jobs">
              {experiences &&
                experiences.map(exp => (
                  <div className="flex justify-between my-3 bg-transparent border border-gray-400 rounded-md ">
                    <div className="flex items-center px-3 border-r">
                      <span className="">
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
                    </div>
                    <div className="py-3">
                      <h4 className="text-sm text-blue-800">{exp?.company}</h4>
                      <h5 className="text-xs font-getdev">{exp?.title}</h5>
                      <div className="info">
                        <ul className="flex items-center">
                          <li className="pr-4 text-xs ">
                            {exp.start} -{exp?.end}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="py-4">
                      <ul className="inline-flex">
                        <li className="flex items-center px-4 text-sm border-r border-gray-500">
                          <svg
                            viewBox="0 0 18 17"
                            className="inline-flex w-4 mx-2 hover:cursor-pointer"
                            onClick={() => {
                              setExperience(exp);
                              setId(exp.id);
                              setTitle(exp.title);
                              setCompany(exp.company);
                              setStartDate(new Date(exp.startDate));
                              setEndDate(new Date(exp.endDate));
                              setPresent(exp.present);
                              setDescription(exp.description);
                              setEdit(true);
                              setOpenModal(true);
                            }}
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
                            onClick={() => {
                              processDelete(exp.id);
                            }}
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
                    </div>
                  </div>
                ))}

              <div className="my-3">
                <div
                  className="w-full py-3 text-sm text-center transition duration-150 ease-in-out bg-transparent border border-red-600 rounded-md cursor-pointer hover:bg-red-600 hover:text-white"
                  onClick={() => {
                    setTitle("");
                    setCompany("");
                    setStartDate("");
                    setEndDate("");
                    setPresent("");
                    setDescription("");
                    setOpenModal(true);
                  }}
                >
                  Add Work Experience +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            openModal
              ? 'absolute flex justify-end transform scale-y-110 transition duration-500 ease-in-out bg-gray-800 bg-opacity-50 inset-0 h-screen'
              : 'hidden'
          }
        >
          <div className="flex w-1/2 h-screen transition duration-500 ease-in-out bg-white main-container">
            <div className="w-full p-10 project-submission">
              <div className="flex justify-between py-5 border-b">
                <h6>Work Experience</h6>
                <div className="hover:cursor-pointer">
                  <div onClick={() => setOpenModal(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between my-3">
                <div className="w-1/2">
                  <p>Company Name</p>
                  <input
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    type="text"
                    className="w-full mt-2 form-input" />
                </div>
                <div className="w-1/2 ml-5">
                  <p>Position/Title</p>
                  <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    className="w-full mt-2 form-input" />
                </div>
              </div>
              {/* <div className="flex justify-between my-3">
                <div className="w-1/2">
                  <p>Country</p>
                  <input
                    id="country"
                    type="text"
                    className="w-full mt-2 form-input"
                  />
                </div>
                <div className="w-1/2 ml-5">
                  <p>State</p>
                  <input
                    id="state"
                    type="text"
                    className="w-full mt-2 form-input"
                  />
                </div>
              </div> */}
              {/* <div className="my-3 ">
                <p>Position</p>
                <input type="text" className="w-full mt-3 form-input" />
              </div> */}
              <div className="flex items-center justify-between my-5">
                <div className="w-1/3">
                  <p>Start Date</p>
                  {/* <input
                    id="start"
                    type="date"
                    className="w-full mt-2 form-input"
                    value={Date(startDate)}
                    onChange={e => setStartDate(e.target.value)}
                  /> */}
                  <DatePicker
                    // showIcon
                    className="w-full mt-2 form-input"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  {/* {new Date(startDate)} */}
                </div>
                <div className="w-1/3 ml-5">
                  <p>End Date</p>
                  {/* <input
                    id="end"
                    type="date"
                    className="w-full mt-2 form-input"
                    value={new Date(endDate)}
                    onChange={e => setEndDate(e.target.value)}
                  /> */}
                  <DatePicker
                    // showIcon={20}
                    className="w-full mt-2 form-input"
                    selected={endDate ? endDate : ''}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
                <div className="flex items-center justify-center w-1/3 mx-3 my-auto">
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox" checked={present} onClick={() => setPresent(!present)} />
                    <span class="ml-2">Present</span>
                  </label>
                </div>
              </div>

              <div className="my-3">
                <p>About you</p>
                <label class="block">
                  <textarea
                    class="form-textarea mt-1 block w-full"
                    rows="3"
                    placeholder=""
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  ></textarea>
                </label>
              </div>
              <div className="flex w-full mt-5">
                <button
                  onClick={processSave}
                  type="submit"
                  className="w-full py-2 text-sm text-center bg-red-600 btn hover:bg-red-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
