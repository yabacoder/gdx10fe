import React, { useState, useEffect } from 'react';
import {
  useAddPortfolioMutation,
  useGetPortfolioEditQuery,
  useGetPortfolioQuery,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
  useLoadPortfolioQuery
} from '../../../features/developer/portfolioSlice';
import {getData } from "../../../utils/service"

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [portfolio, setPortfolio] = useState({});
  const [edit, setEdit] = useState(false);
  // const [deletePortfolio, setDeletePortfolio] = useState('');
  const [title, setTitle] = useState(portfolio?.title);
  const [url, setUrl] = useState(portfolio?.url);
  const [id, setId] = useState(portfolio?.id);
  const [description, setDescription] = useState(portfolio?.description);



  const {
    data: fetchData,
    isSuccess: fetchSuccess,
    isLoading,
    refetch
  } = useLoadPortfolioQuery();
  // console.log(data, "Fetched data");

  const [addPortfolio, {
    isSuccess,
    isError,
    error,
    isLoading: addIsLoading
  }] = useAddPortfolioMutation();

  const [updatePortfolio, {
    isSuccess: updateSuccess,
    isError: updateIsError,
    error: updateError,
    isLoading: updateIsLoading
  }] = useUpdatePortfolioMutation();

  const [deletePortfolio, {
    isSuccess: deleteSuccess,
    isError: deleteIsError,
    error: deleteError,
    isLoading: deleteIsLoading
  }] = useDeletePortfolioMutation();

  useEffect(() => {
    (async () => {
      setPortfolios(fetchData?.data?.rows);
    })();
  }, [fetchSuccess, updateSuccess, deleteSuccess, isSuccess, deleteIsError, refetch]);

  useEffect(() => {
    // setPortfolio(data?.data);
    setPortfolios(fetchData?.data?.rows);

  }, []);
  // console.log(portfolios);

  const getPortfolios = async () => {
    try {
      const data = await getData("/developer/portfolio")
    } catch(error) {
      
    }
  }


  const processSave = async (e) => {
    e.preventDefault();

    try {
      if (edit) {
        // update edit
        const { data } = await updatePortfolio({ id, title, url, description }).unwrap();
      } else {
        // Add new
        const { data } = await addPortfolio({ title, url, description }).unwrap();
        // setPortfolios(data);
        refetch();
      }
      // console.log(data);
      setEdit(false);
      setOpenModal(false);

    } catch (error) {
      console.log(error);
    }

  };

  const processDelete = async (id) => {
    // console.log(id, "The ID");
    try {
      const { data } = await deletePortfolio(id);
      // setPortfolios([]);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h6>Portfolio</h6>
      <div className="flex">
        <div className="w-4/6">
          <div className="py-5">
            <ul className="text-sm">
              {portfolios &&
                portfolios?.map(port => (
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
                      <span className="px-2">{port.title}</span>
                      <span>
                        <ul className="inline-flex">
                          <li className="flex items-center px-4 text-sm border-r border-gray-500">
                            <svg
                              viewBox="0 0 18 17"
                              className="inline-flex w-4 mx-2 hover:cursor-pointer"
                              onClick={() => {
                                // setPortfolio(port);
                                setId(port.id);
                                setTitle(port.title);
                                setUrl(port.url);
                                setDescription(port.description);
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
                                processDelete(port.id);
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
                      </span>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div
          className="w-full py-3 text-sm text-center transition duration-150 ease-in-out bg-transparent border border-red-600 rounded-md cursor-pointer hover:bg-red-600 hover:text-white"
          onClick={() => {
            setTitle('');
            setUrl('');
            setDescription('');
            setOpenModal(true);
          }}
        >
          Add Portfolio +
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
              <h6>{edit ? "Edit" : "Add a"} Portfolio</h6>
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
                <p>Project Title</p>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text" className="w-full mt-2 form-input" />
              </div>
              <div className="w-1/2 ml-5">
                <p>Link</p>
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text" className="w-full mt-2 form-input" />
              </div>
            </div>
            <div className="my-3">
              <p>Description</p>
              <label class="block">
                <textarea
                  class="form-textarea mt-1 block w-full"
                  rows="3"
                  placeholder=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
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
  );
};

export default Portfolio;
