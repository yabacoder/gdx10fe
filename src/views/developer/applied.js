import React, { useEffect, useState } from 'react';
import Layout from './layout';
import RightNav from '././utils/RightNav';
import { Link } from 'react-router-dom';
import http from '../../utils/service';

const Applied = () => {
  const [jobs, setJobs] = useState([]);
  const [del, setDel] = useState(false);

  const fetchRecentApplications = async () => {
    const response = await http('/developer/applications', 'GET');

    setJobs(response.data);
    // console.log(jobs);
  };

  const deleteHandler = async id => {
    // e.preventDefault();
    if (window.confirm('Are you sure want to retrieve your application?')) {
      const data = { id: id };
      const result = await http('/developer/application/delete', 'post', data);
      if (result.status === 1) {
        setDel(true);
      }
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchRecentApplications();
  }, [del]);
  return (
    <div>
      <>
        <div className="flex">
          <div className="w-8/12 p-6 bg-white rounded-md shadow-md highlights">
            <div className="withoutJobs ">
              {/* <div className="flex items-center justify-between header">
                <h5 className="text-base">Applied Jobs </h5>
              </div> */}
              {!jobs && (
                <div className="flex flex-col items-center justify-center p-10 my-5 bg-gray-300 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12"
                    width="69.447"
                    height="61.73"
                    viewBox="0 0 69.447 61.73"
                  >
                    <path
                      d="M19.291,54.014c-3.087,0-6.173-2.7-7.716-3.858C3.858,44.755,1.543,42.826,0,41.668v16.2A3.859,3.859,0,0,0,3.858,61.73H34.723a3.859,3.859,0,0,0,3.858-3.858v-16.2c-1.543,1.157-3.858,3.087-11.574,8.488C25.464,51.313,22.377,54.014,19.291,54.014ZM34.723,30.865H3.858A3.859,3.859,0,0,0,0,34.723v1.929c3.087,2.315,2.7,2.315,13.889,10.417,1.157.772,3.472,3.087,5.4,3.087s4.244-2.315,5.4-2.7c11.189-8.1,10.8-8.1,13.889-10.417V34.723A3.859,3.859,0,0,0,34.723,30.865ZM65.589,19.291H27.007a3.859,3.859,0,0,0-3.858,3.858v3.858H34.723A7.728,7.728,0,0,1,42.4,33.978l.035-.027v16.2H65.589A3.859,3.859,0,0,0,69.447,46.3V23.149A3.859,3.859,0,0,0,65.589,19.291ZM61.73,34.723H54.014V27.007H61.73ZM19.291,23.149a7.725,7.725,0,0,1,7.716-7.716H54.014V3.858A3.859,3.859,0,0,0,50.156,0H11.574A3.859,3.859,0,0,0,7.716,3.858V27.007H19.291Z"
                      fill="#b5bbcd"
                    />
                  </svg>
                  <p className="my-2 text-xs text-center text-gray-600">
                    Sorry, we currently do not have a project for you, please
                    try again later!
                  </p>
                  <Link className="p-2 my-2 text-sm text-white transition duration-500 ease-in-out bg-red-600 border rounded-md hover:border-red-600 hover:bg-transparent hover:text-red-600">
                    Apply for a job{' '}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              )}{' '}
            </div>

            <div className="mt-5 withJobs">
              <div className="flex items-center justify-between header">
                <h5 className="text-base">Applied Jobs </h5>
                <div>
                  <Link
                    to="/jobs"
                    className="p-2 text-sm text-red-600 transition duration-500 ease-in-out border border-red-600 rounded-md hover:bg-red-600 hover:text-white"
                  >
                    Apply for a job{' '}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col jobs">
                {/* {console.log(jobs)} */}
                {jobs &&
                  jobs.splice(0, 4).map((job, index) => (
                    <div className="flex items-center justify-between px-6 py-4 my-3 bg-gray-200 rounded-lg">
                      <div>
                        <h4 className="text-base text-blue-800">{job.name}</h4>
                        <div className="info">
                          <ul className="flex items-center">
                            <li className="px-4 py-1 text-xs text-red-600 bg-red-300 bg-opacity-50 border border-red-600 rounded-full">
                              ₦{job.salary} - ₦{job.salary_max}
                            </li>
                            <li className="mx-1 text-xs text-blue-800">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="inline-flex w-4 mx-2"
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
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <div>
                                <ul>
                                <li className="p-1 text-xs text-red-600 transition duration-150 ease-in-out border border-red-600 rounded-md hover:bg-red-600 hover:text-white">
                   See interview
                   </li>
                                    
                                </ul>
                            </div> */}
                      <div>
                        <ul className="inline-flex">
                          {/* <li className="px-4 py-1 text-sm text-white bg-blue-500"> */}
                          {/* <a href=""> clas</a> */}
                          {/* See Interview</li> */}
                          {job.status === 'Shortlisted' && (
                            <li className="p-1 text-xs text-white transition duration-500 ease-in-out bg-blue-600 border border-blue-600 rounded-md cursor-pointer hover:border-blue-600 hover:text-blue-600 hover:bg-transparent">
                              See interview
                            </li>
                          )}
                          <li className="flex items-center pr-5 text-sm border-r-2 border-gray-500">
                            <span className="inline-flex text-green-600 ">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                class="mx-2 bi bi-circle-fill w-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="8" cy="8" r="8" />
                              </svg>
                            </span>
                            {job.status}
                          </li>
                          <li className="px-3">
                            <Link
                              onClick={e => {
                                deleteHandler(job.id);
                              }}
                            >
                              {' '}
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
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-4/12 px-5 ml-5 topNews">
            <RightNav />
          </div>
        </div>
      </>
    </div>
  );
};

export default Applied;

// import React from 'react';
// import {Link} from "react-router-dom";
// import {GetData} from "../../services/AuthGet";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Preload} from "../statics/Preloader";

// class Application extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             jobs: []
//         }
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         Preload();
//         GetData("/api/developer/applications").then((result)=>{
//             if (result.status===1){
//                 this.setState({jobs:result.data})
//             }
//             Preload(false);
//         })
//     }

//     deleteHandler=(e)=>{
//         e.preventDefault();
//         if (window.confirm('Are you sure?')){
//             PostData("/api/developer/application/delete/"+e.target.id).then((result)=>{
//                 if(result.status===1){
//                     this.componentDidMount()
//                 }
//             })
//         }

//     };

//     render() {
//         const state = this.state;
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container" style={{maxWidth:700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="page-inner resumeadd-form">
//                                         <div className="manage-jobs-sec" style={{overflow:"scroll"}}>
//                                             <h3>Applications</h3>
//                                             <table>
//                                                 <thead>
//                                                 <tr>
//                                                     <td>Job</td>
//                                                     <td>Status</td>
//                                                     <td></td>
//                                                 </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                 {state.jobs.length> 0? state.jobs.map(job=>(
//                                                     <tr>
//                                                         <td>
//                                                             <div className="table-list-title">
//                                                                 <i><Link to={"/jobs/"+(job.job_id)+"/"+(job.link)}>{job.name}</Link></i><br/>
//                                                             </div>
//                                                         </td>
//                                                         <td>
//                                                             <div className="table-list-title">
//                                                                 <span>{job.status}</span>
//                                                             </div>
//                                                         </td>
//                                                         <td>
//                                                             <ul className="action_job">
//                                                                 <li><span>Delete</span><a onClick={this.deleteHandler}><i id={job.id} className="la la-trash-o"/></a></li>
//                                                             </ul>
//                                                         </td>
//                                                     </tr>
//                                                 )):
//                                                     <tr>
//                                                         <td colSpan="3" align="center">
//                                                             <span>No Applications</span>
//                                                         </td>
//                                                     </tr>
//                                                 }
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//         );
//     }
// }

// export default Application;
