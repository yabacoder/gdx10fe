import React, { useEffect, useState } from 'react';
// import Nav from '../../layouts/MainLayout/Nav';
// import Footer from '../../layouts/MainLayout/Footer';
// import Layout from "../layout";
// import Footer from "../layout/footer";
import { Link } from 'react-router-dom';
import http, { http2 } from '../../utils/service';
// import { Categories } from '../../statics/categories';
// import Pagination from 'react-js-pagination';
import { useLoadJobsQuery } from '../../features/job/jobSlice';
import { curFormat } from '../../utils/general';
import Loading from '../../components/Loading';
import ReactPaginate from 'react-paginate';


const Joblist = () => {
  const [jobs, setJobs] = useState([1, 2, 3, 4]);
  const [levelId, setLevelId] = useState(0);
  const [jobType, setJobType] = useState();
  const [category, setCategory] = useState();
  const [activePage, setActivePage] = useState(1);
  const [paginate, setPaginate] = useState(10);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(1);

  const {
    data,
    isSuccess,
    isLoading
  } = useLoadJobsQuery();

  // console.log(data?.data?.rows);

  const fetchJobs = async () => {
    const response = await http2('/jobs/recent', 'GET');
    //do pagination
    setJobs(response?.data?.rows);
    console.log(response);
  };
  // totalItems;
  // totalPages;
  // currentPage
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchJobs();
    // setJobs(data?.data?.items);
    setActivePage(data?.data?.currentPage);
    setTotalPages(data?.data?.totalPages);
    setTotalItems(data?.data?.totalItems);
  }, [isSuccess]);
  // useEffect(() => { 
  //   window.scrollTo(0, 0);
  //   // fetchJobs();
  //   setJobs(data?.data?.items);
  //   setActivePage(data?.data?.currentPage);
  //   setTotalPages(data?.data?.totalPages);
  //   setTotalItems(data?.data?.totalItems);
  // }, [jobs]);
  // build pages
  // const totalPagesBuild = [...Array(totalPages).keys()];
  // console.log(jobs);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // fetchJobs();
  //   setJobs(data?.data?.items);
  // }, [isSuccess]);

  const handleFilterSkill = async skillId => {

    const qPage = activePage ? `/page/${activePage}` : "";
    const response = await http(`/jobs/skill/${skillId}${qPage}`, 'GET');
    setJobs(response?.data?.items);
    window.scrollTo(0, 0);
  };

  const handlePageChange = async pageNumber => {
    setActivePage(pageNumber.selected);
    const response = await http(`/jobs/page/${pageNumber.selected}`, 'GET');
    //do pagination
    setJobs(response?.data?.items);
    window.scrollTo(0, 0);
    // console.log(jobs);
  };

  const handleCategoryChange = async pageNumber => {
    setActivePage(pageNumber.selected);
    const response = await http(`/jobs/?page=${pageNumber.selected}`, 'GET');
    //do pagination
    setJobs(response.data.items);
    // console.log(jobs);
  };


  return (
    <>
      <div className="bg-white ">
        {/* <Nav /> */}
        <div className="container px-3 py-10 mx-auto md:px-8 md:py-24">
          <div className="mt-20 md:mt-8">
            <div className="px-4 mt-4 md:px-0">
              <h3 className="font-getdevM text-gdblue">Available Jobs</h3>
              <p className="text-base text-gray-600">
                {' '}
                Latest jobs matching your preferences
              </p>
            </div>

            <div className="bg-white">
              <label class="block border-0 p-4 md:-pr-1 md:mt-0 md:-ml-4 text-blue-800">
                {/* <span class="text-gray-700">Requested Limit</span> */}
                <select class="form-select mt-1 ">
                  <option>Filter</option>
                  <option>NGN 150,000 and below</option>
                  <option>NGN 250,000 and below</option>
                  <option>NGN 250,000 - 500, 000</option>
                  <option>NGN 500,000 - 800, 000</option>
                  <option>NGN 800,000 - 1,000, 000</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:border md:items-center md:rounded-xlg md:px-4 md:py-6 ">
              <div className='flex flex-col space-y-2 md:flex-row md:space-x-2'>
                <div className="bg-gray-200">
                  <label class="block md:w-56   md:flex mx-2">
                    <select
                      class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 "
                      onChange={e => setCategory(e.target.value)}
                    >
                      <option>Job Category</option>
                      {/* {Categories &&
                    Categories.map((cat, index) => (
                      <option value={cat.id}>{cat.name}</option>
                    ))} */}
                    </select>
                  </label>
                </div>

                <div className="bg-gray-200">
                  <label class="block md:w-56  mx-2">
                    <select
                      class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 "
                      value={levelId}
                      onChange={e => {
                        handleFilterSkill(e.target.value);
                        setLevelId(e.target.value);
                      }}
                    >
                      <option>Skill Level</option>
                      <option
                        selected={levelId === '1' || levelId === 1}
                        value="1"
                      // onChange={e  => handleFilter(e.target.value)}
                      >
                        Intern
                      </option>
                      <option
                        selected={levelId === '2' || levelId === 2}
                        value="2"
                      >
                        Junior
                      </option>
                      <option
                        selected={levelId === '3' || levelId === 3}
                        value="3"
                      >
                        Intermediate
                      </option>
                      <option
                        selected={levelId === '4' || levelId === 4}
                        value="4"
                      >
                        Advance
                      </option>
                      <option
                        selected={levelId === '5' || levelId === 5}
                        value="5"
                      >
                        Senior
                      </option>
                    </select>
                  </label>
                </div>
                <div className="bg-gray-200">
                  <label class="block md:w-56 mx-2">
                    <select
                      class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20 text-blue-800 "
                      onChange={e => setJobType(e.target.value)}
                    >
                      <option>Job Type</option>
                      <option value="1">Fulltime</option>
                      <option value="2">Part time</option>
                      <option value="3">Remote</option>
                    </select>
                  </label>
                </div>
              </div>
              {/* <label class="block md:w-56 mx-2">
                <select class="form-select mt-1 block w-full bg-gray-200 border-0 p-4 md:pr-20  text-blue-800">
                  <option>Job Availability</option>
                </select>
              </label> */}
              {/* <div className="mx-2 md:ml-auto">
                <button
                  onClick={handleFilter}
                  type="submit"
                  class="bg-red-600 hover:bg-red-700 text-white text-sm font-getdevM py-4 w-full my-3 md:w-28 px-4 rounded"
                >
                  Apply Filter
                </button>
              </div> */}
            </div>

            {
              isLoading ? <div className='mt-3'>
                <Loading />
              </div> : (
                <div class="flex flex-wrap justify-between md:mt-10">
                  {jobs &&
                    jobs.map((job, index) => (
                      <div class="md:w-1/2 p-2">
                        <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg   p-2">
                          <Link
                            to={`${job.id}`}
                            className="flex items-center pt-5 border-b md:border-b-0 md:pt-0"
                          >
                            <div className="p-2 mr-6 md:w-1/5">
                              <img
                                src="https://placehold.co/75x75"
                                className="w-full rounded-md"
                                alt='logo'
                              />
                            </div>
                            <div className="-ml-5 md:pl-1 md:-ml-2 ">
                              <h5>{job.title}</h5>
                              {
                                job.location && (
                                  <p className="text-sm text-left text-gray-700">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg "
                                        className="inline-flex w-4 mr-2"
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
                                    {job.location}
                                    {/* <span className="pl-3 ml-2 text-gray-400 border-l-2 md:hidden">
                              12 mins ago
                            </span> */}
                                  </p>
                                )
                              }
                              {
                                job.salary && (
                                  <p className="text-sm text-white font-getdevB md:text-center md:mt-2 md:rounded-full md:p-2 md:bg-red-500">
                                    {curFormat.format(job.salary)} - {job.salary_max && <span>{curFormat.format(job.salary_max)}</span>}
                                  </p>
                                )
                              }
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  {/* <div class="md:w-1/2 p-2">
                <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg   p-2">
                  <Link
                    to="/jobs/:id"
                    className="flex items-center pt-5 border-b md:border-b-0 md:pt-0"
                  >
                    <div className="p-2 mr-6 md:w-1/5">
                      <img
                        src="https://via.placeholder.com/75"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="-ml-5 md:pl-1 md:-ml-2 ">
                      <h5>Advanced UX Designer</h5>

                      <p className="text-sm text-left text-gray-700">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg "
                            className="inline-flex w-4 mr-2"
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
                        Lagos, Nigeria{' '}
                        <span className="pl-3 ml-2 text-gray-400 border-l-2 md:hidden">
                          12 mins ago
                        </span>
                      </p>
                      <p className="text-sm text-blue-800 font-getdevB md:text-center md:mt-2 md:rounded-full md:p-2 md:bg-gray-300">
                        ₦200,000 - ₦250,000
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="md:w-1/2 p-2">
                <div class="text-gray-700 md:shadow-cardShadow md:rounded-lg   p-2">
                  <Link
                    to="/jobs/:id"
                    className="flex items-center pt-5 border-b md:border-b-0 md:pt-0"
                  >
                    <div className="p-2 mr-6 md:w-1/5">
                      <img
                        src="https://via.placeholder.com/75"
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="-ml-5 md:pl-1 md:-ml-2 ">
                      <h5>Advanced UX Designer</h5>

                      <p className="text-sm text-left text-gray-700">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg "
                            className="inline-flex w-4 mr-2"
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
                        Lagos, Nigeria{' '}
                        <span className="pl-3 ml-2 text-gray-400 border-l-2 md:hidden">
                          12 mins ago
                        </span>
                      </p>
                      <p className="text-sm text-blue-800 font-getdevB md:text-center md:mt-2 md:rounded-full md:p-2 md:bg-gray-300">
                        ₦200,000 - ₦250,000
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
             */}
                </div>
              )
            }


            {/* <div className="flex items-center justify-center mt-20"> */}
            {/* {
                totalPagesBuild.splice(1, 10).map((page, index) => (
                  <div className={`px-3 py-2 m-1 border ${activePage === page ? 'border-red-600' : ''} rounded-md`}>
                    <p>{page}</p>
                  </div>
                )
                )} */}
            {/* <div className="px-3 py-2 m-3 border border-red-600 rounded-md ">
                <p>1</p>
              </div>
              <div className="px-3 py-2 m-1 border rounded-md ">
                <p>2</p>
              </div>
              <div className="px-3 py-2 m-1 border rounded-md ">
                <p>3</p>
              </div> */}
            {/* <div className="px-3 py-2 m-1 border rounded-md ">
                <p>Next</p>
              </div> */}
            {/* <Pagination
                className="flex justify-between"
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={() => handlePageChange()}
              /> */}
            {/*
              
            <ReactPaginate
              className='flex space-x-3'
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageChange}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
              */}
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Joblist;