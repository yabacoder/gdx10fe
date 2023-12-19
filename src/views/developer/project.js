import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import http from '../../utils/service';
// import Layout from "./layout";
import RightNav from './utils/RightNav';
// import SubmitProject from './utils/SubmitProject';
import Countdown from 'react-countdown';
import {
  useLoadProjectsQuery,
  useRequestProjectQuery,
  useSubmitProjectMutation,
  useStartProjectMutation
} from '../../features/developer/projectSlice';
import { http2 } from '../../utils/service';
import useAuth from '../../hooks/useAuth';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
// import { toBeRequired } from '@testing-library/jest-dom/matchers';

// // Random component
const Timeout = () => {
  return <span>Timeout!</span>;
};

function Project() {
  const { token } = useAuth();
  // console.log(token);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState('');
  const [projectId, setProjectId] = useState('');
  const [projectDuration, setProjectDuration] = useState('');
  const [repo, setRepo] = useState('');
  const [url, setUrl] = useState('');
  const [lang, setLang] = useState('');
  const [comment, setComment] = useState('');
  const [ongoing, setOngoing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [newProject, setNewProject] = useState(false); //Make request for a new project


  const {
    data,
    isSuccess
  } = useLoadProjectsQuery();

  // const [requestProject, {
  //   data: requestData,
  //   isSuccess: requestIsSuccess
  // }] = useRequestProjectQuery();

  const [submitProject, {
    data: submitData,
    isSuccess: submitIsSuccess
  }] = useSubmitProjectMutation();
  const [startProject, {
    data: startData,
    isSuccess: startIsSuccess
  }] = useStartProjectMutation();



  //Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Timeout />;
    } else {
      // Render a countdown
      return (
        <span>
          {days + 'd'} : {hours + 'h'} : {minutes + 'm'} : {seconds + 's'}
        </span>
      );
    }
  };

  const processStartProject = async (duration) => {
    try {
      const data = {
        projectId,
        duration: projectDuration
      };
      const response = await startProject(data);
      // response = JSON.stringify(response);
      console.log(response.data);
      if (response) {
        // setProject(response.data);
        console.log(response.data);
        // setNewProject(true);
        setOngoing(true);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const newPullProject = async () => {
    // try {
    //   await requestProject();
    //   if (requestIsSuccess) {
    //     setProject(requestData.data);
    //     setNewProject(true);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    //   setMessage(error.message);
    // }
    try {
      const response = await http2('/developer/projects/request', 'GET', token);
      // response = JSON.stringify(response);
      console.log(response);
      if (response.status) {
        if (response.data.ongoing) {
          setOngoing(true);
          setProject(response?.data?.data);
          setProjectId(response?.data?.data?.id);
          const dt = dayjs(response?.data?.createdAt);
          const duration = dt.add(response?.data?.data?.duration, 'day');
          // console.log(duration);
          setProjectDuration(duration);

        } else {
          setProject(response.data);
          setProjectId(response?.data?.id);
          setProjectDuration(response?.data?.duration);
          // console.log(response);
          setNewProject(true);
        }

        // setOngoing(false);

      }
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    newPullProject();
    // pullProject();
    // setProject(data?.data[0]);
  }, []);
  // console.log(data);

  const submitHandler = async e => {
    e.preventDefault();

    const data = {
      id: project.id,
      repo,
      url,
      lang,
      comment,
    };

    try {
      const savedData = await submitProject(data);
      setOngoing(false);
      setNewProject(false);
      setMessage(savedData.data.message);
      setOpenModal(false);
      console.log(savedData);
    } catch (error) {
      console.log(error);
    }

    // const response = await http(`/developer/project/submit`, 'POST', data);
    // if (response.status) {
    //   setStatus(true);
    //   setMessage(response.message);
    //   setOpenModal(false);
    // } else {
    //   setError(response.errors);
    // }
  };

  return (
    <>
      <div className="flex">
        <div className="w-8/12 p-6 bg-white rounded-md shadow-md highlights">
          <div className="project-unavailabe">
            <h5 className="pb-2 text-base border-b">Projects </h5>
            <p className="mt-2">
              We want to ensure you are not ONLY book-smart but also can get
              things done! Attempt the project below, the earlier you completed
              them, the higher your rating.
            </p>
            {!project && (
              <>
                <div className="flex flex-col items-center justify-center p-10 my-4 bg-gray-300 rounded-md ">
                  <svg viewBox="0 0 47.8 62.3" className="w-12">
                    <defs />
                    <path
                      d="M48 15v1H32V0h1a3 3 0 012 1l12 12a3 3 0 011 2zm-17 4a3 3 0 01-3-2V0H3a3 3 0 00-3 3v56a3 3 0 003 3h42a3 3 0 003-3V19zM15 49a1 1 0 01-1 0l-8-8a1 1 0 010-1l8-7a1 1 0 011 0l3 3a1 1 0 010 1l-5 4 5 4a1 1 0 010 1zm7 6l-4-1a1 1 0 010-1l7-26a1 1 0 011 0l4 1a1 1 0 010 1l-7 25a1 1 0 01-1 1zm20-14l-8 8a1 1 0 01-1 0l-3-3a1 1 0 010-1l5-4-5-4a1 1 0 010-1l3-3a1 1 0 011 0l8 7a1 1 0 010 1z"
                      fill="rgba(72,86,133,0.28)"
                    />
                  </svg>

                  <p className="my-2 text-xs text-center text-gray-600">
                    Sorry, we currently do not have a project for you, please try
                    again later!
                  </p>
                </div>

              </>
            )}
            <div className="mt-5">
              <button
                className="w-full px-5 py-3 text-sm rounded-sm btn focus:border-current"
                onClick={newPullProject}
              >
                {' '}
                Request a Project{' '}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{' '}
              </button>
            </div>
          </div>
          {
            message && <p className='p-2 mt-4 text-white bg-green-600'>{message}</p>
          }

          {project && (
            <div className="mt-5 project-available">
              <div className="p-5 text-center border rounded-t-md border-b-none project-title">
                <h6>Project Task</h6>
              </div>
              <div
                className="p-10 bg-gray-200 border rounded-b-md border-t-none project-detail"
                dangerouslySetInnerHTML={{ __html: project?.question }}
              ></div>

              <div className="flex justify-around p-5 mt-10 border rounded-lg">
                <div className="flex flex-col items-center w-1/2 pr-10 border-r">
                  <div className="px-4 py-2 mt-3 text-sm bg-gray-200 border rounded-full">
                    Submission Date
                  </div>
                  {
                    ongoing ? (
                      <p className="text-sm font-bold">{projectDuration.fromNow()}</p>
                    ) : (
                      <p className="text-sm font-bold">{`project?.duration`}</p>
                    )
                  }
                  {/* <p className="mt-2 font-bold">{project?.duration}</p> */}
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <div className="px-4 py-2 mt-3 text-sm bg-gray-200 border rounded-full">
                    Countdown
                  </div>
                  {
                    ongoing && <p className="mt-2 font-bold text-red-600">
                      <Countdown
                        className="text-sm font-bold"

                        date={projectDuration}
                        // date={new Date(project?.countdown)}
                        renderer={renderer} 
                      />
                      {/* {project?.countdown} */}
                    </p>
                  }

                </div>
              </div>

              {
                ongoing ? (<div className="mt-10">
                  <button
                    className="w-full px-5 py-3 text-sm btn focus:border-transparent"
                    onClick={() => setOpenModal(true)}
                  >
                    {' '}
                    Submit Project
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>) : (<div className="mt-10">
                  <button
                    className="w-full px-5 py-3 text-sm btn focus:border-transparent"
                    onClick={() => {
                      setProjectId(project?.Id);
                      processStartProject(project?.duration);
                    }}
                  >
                    {' '}
                    Start Project
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </div>)
              }
            </div>
          )}
        </div>

        <div className="flex flex-col w-4/12 px-5 ml-5 topNews">
          <RightNav />
        </div>
      </div>

      <div
        className={
          openModal
            ? 'absolute flex justify-end  bg-gray-800 bg-opacity-50 inset-0 h-screen'
            : 'hidden'
        }
      >
        <div className="w-1/3" onClick={() => setOpenModal(false)} />
        <div className="flex justify-end w-2/3 bg-white main-container">
          <div className="w-3/5 p-10 project-submission">
            <div className="p-5 border-b">
              <h6>Project Submission</h6>
            </div>
            <form onSubmit={submitHandler}>
              <div className="flex justify-between mt-10">
                <div className="w-1/2">
                  <p>Github</p>
                  <input
                    value={repo}
                    onChange={e => setRepo(e.target.value)}
                    type="text"
                    className="w-full mt-3 form-input"
                  />
                </div>
                <div className="w-1/2 ml-5">
                  <p>Test URL</p>
                  <input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    type="text"
                    className="w-full mt-3 form-input"
                  />
                </div>
              </div>
              <div className="mt-10 ">
                <p>Languages and Frameworks (separated by comma)</p>
                <input
                  value={lang}
                  onChange={e => setLang(e.target.value)}
                  type="text"
                  className="w-full mt-3 form-input"
                />
              </div>

              <div className="mt-10 ">
                <p>Comment</p>
                {/* <input type="text" className="w-full mt-3 form-input" /> */}
                <textarea
                  className="w-full mt-3 form-input"
                  onChange={e => setComment(e.target.value)}
                  row="15"
                  cols="50"
                >
                  {comment}
                </textarea>
              </div>
              <div className="mt-10 ">
                <button className="w-full px-5 py-3 btn">
                  {' '}
                  Submit Project
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-flex w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 p-10 bg-gray-100">
            <div className="flex justify-end">
              <div>
                <button onClick={() => setOpenModal(false)}>X</button>
              </div>
            </div>
            <div className="p-5 -mt-5 border-b">
              <h6>Task Overview</h6>
            </div>
            <div
              className="p-5 my-5 overflow-y-auto text-blue-800 bg-gray-300 border rounded-lg h-2/3"
              dangerouslySetInnerHTML={{ __html: project?.question }}
            ></div>

            <hr />
            <div>
              <div className="py-5 ">
                <div className="flex flex-row items-center justify-between my-2">
                  <div className="px-2 py-2 text-sm text-center text-red-600 bg-red-200 border rounded-full">
                    Submission Date
                  </div>
                  {
                    ongoing ? (
                      <p className="text-sm font-bold">{projectDuration.fromNow()}</p>
                    ) : (
                      <p className="text-sm font-bold">{`project?.duration`}</p>
                    )
                  }
                </div>
                <div className="flex flex-row items-center justify-between my-2">
                  <div className="px-4 py-2 text-sm text-center text-red-600 bg-red-200 border rounded-full">
                    Countdown

                  </div>
                  <Countdown
                    className="text-sm font-bold"
                    date={projectDuration} 
                    renderer={renderer}
                  />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
    // </Layout>
  );
};

export default Project;

// import React from 'react';
// import {Button, Input} from "../statics/form";
// import Alert from "../statics/alert";
// import Countdown from 'react-countdown-now';
// import "../../assets/css/countdown.css"
// import {GetData} from "../../services/AuthGet";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Preload} from "../statics/Preloader";
// import {API} from "../../config.js";

// // Random component
// const Timeout = () =>{
//   return(
//       <span>Timeout!</span>
//   )
// };

// // Renderer callback with condition
// const renderer = ({days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//         // Render a completed state
//         return <Timeout />;
//     } else {
//         // Render a countdown
//         return(
//             <span>{days+"d"} : {hours+"h"} : {minutes+"m"} : {seconds+"s"}</span>
//         )
//     }
// };
// class Project extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading:false,
//             preload:false,
//             start:false,
//             alert:false,
//             message:"",
//             success:false,
//             repo:"",
//             url:"",
//             comment:"",
//             submit:false,
//         }
//     }

//     componentDidMount(){
//         Preload();
//         GetData('/api/developer/project').then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({start:true});
//             }
//             Preload(false)
//         })
//     };

//     startHandler=()=>{
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/project').then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({start:true});
//             } else{
//                 this.setState({alert:true, success:false, message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };

//     downloadHandler=()=>{
//         setTimeout(() => {
//             const response = {
//                 file: API+'/api/project/attachment/'+this.state.attachment
//             };
//             window.open(response.file);
//         }, 100);
//     };

//     submitHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/project/submit/'+this.state.project_id, this.state).then((result)=>{
//             if (result.status===1){
//                 this.setState({alert:true,message:result.message, success:true, start:false})
//             } else{
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };
//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
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
//                                         <h4>Project</h4>
//                                         <div>
//                                             <Alert display={state.alert} onClick={()=>{this.setState({alert:false})}} message={state.message} success={state.success}/>
//                                             <p>We want to ensure you are not ONLY booksmart but also can get things done! Attempt the project below, the earlier you completed them, the higher your rating.</p>
//                                             {state.start?<Question data={state} onSubmit={this.submitHandler} download={this.downloadHandler} onChange={this.onChange} loading={state.loading}/>:
//                                                 <div className="col-lg-12 w3-margin-bottom">
//                                                     <Button title={"Start"} onClick={()=>{this.startHandler()}} loading={state.loading}/>
//                                                 </div>
//                                             }
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

// function Question(props){
//   return(
//       <div>
//           <h5>Task</h5>
//           <div className="question w3-margin-bottom w3-border">
//               <div dangerouslySetInnerHTML={{__html: props.data.task}} />
//           </div>
//           <div>
//               <h6><strong>Submission Date: </strong> <span>{props.data.duration}</span></h6>
//               <h6><strong>Countdown:</strong> <Countdown date={props.data.countdown.date} renderer={renderer}/></h6>
//           </div>
//           {props.data.submit?
//               <form onSubmit={props.onSubmit}>
//                   <span className="pf-title">Github</span>
//                   <div className="pf-field">
//                       <input type="test" name="repo" onChange={props.onChange} required/>
//                   </div>
//                   <span className="pf-title">Test Url</span>
//                   <div className="pf-field">
//                       <input name="url" type="text" onChange={props.onChange} required/>
//                   </div>
//                   <span className="pf-title">Languages and Frameworks (separated by comma)</span>
//                   <div className="pf-field">
//                       <input name="technologies" type="text" onChange={props.onChange} required/>
//                   </div>
//                   <span className="pf-title">Comment</span>
//                   <div className="pf-field">
//                       <textarea name="comment" onChange={props.onChange}/>
//                   </div>
//                   <div className="justify-content-end">
//                       <div>
//                           <Button title="Submit" loading={props.loading}/>
//                       </div>
//                   </div>
//               </form>:
//               <div>
//                   {props.data.attachment?
//                       <a className="w3-btn w3-blue" onClick={props.download}>Download Attachment</a>
//                   :""}
//                   <div className="justify-content-end">
//                       <button name="submit" value={true} onClick={props.onChange}>Submit</button>
//                   </div>
//               </div>

//           }
//       </div>
//   )
// }

// export default Project;
