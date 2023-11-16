import React, { useState, useEffect } from 'react';
import Layout from '../layout';
import RightNav from '../utils/RightNav';
import http, { http2 } from '../../../utils/service';
import useAuth from '../../../hooks/useAuth';

function Question() {
  const { accessToken: token } = useAuth();
  const [time, setTime] = useState({});
  const [data, setData] = useState({ options: [] });
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [answer, setAnswer] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [timeouts, setTimeouts] = useState(false);
  const [result, setResult] = useState(false);
  const [alert, setAlert] = useState(false);
  const [preload, setPreload] = useState(false);
  const [message, setMessage] = useState('');
  let timer = 0;

  const secondsToTime = secs => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  const cont = async () => {
    setTimeouts(!timeout);
    setPreload(!preload);
    setSeconds(60);
    const data = { answer, question_id: questionId}
    const result = await  http2('/developer/assessment', 'POST', token, data);
    console.log(result);
    if (result.status === 1) {
      setResult(result);
      let time = result.data.time * 60;
      setAnswer("");
      // setQuestionId( result.data.question_id);
      setSeconds(time);
      window.scrollTo(0, 0);
    } else if (result.status === 3) {
      setResult(true);
    } else {
      setAlert(true);
      setMessage(result.error);
    }
    setPreload(!preload);
  };

  // const timeout = () => {
  //   this.setState({ preload: !this.state.preload });
  //   localStorage.removeItem('timer');
  //   const result = http('/api/developer/assessment', this.state);
  //   this.setState({ timeout: true, preload: !this.state.preload });
  // };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let secs = seconds - 1;
    setTime(secondsToTime(secs));
    setSeconds(secs);

    localStorage.setItem('timer', secs);
    // Check if we're at zero.
    if (secs === 0) {
      timeout();
    }
  };

  const startTimer = () => {
    if (timer === 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  const timeout = () => {
    // this.setState({ preload: !this.state.preload });
    localStorage.removeItem('timer');
    // http('/api/developer/assessment', 'post', data).then(result => {
    // this.setState({ timeout: true, preload: !this.state.preload });
    // });
    setTimeouts(!timeout);
    setPreload(!preload);
    setSeconds(60);
  };

  useEffect(() => {
    const loadQuestion = async () => {
      setPreload(!preload);
      const result = await http('/developer/assessment', 'get', token);
      // console.log(result); 
      if (result.status === 1) {
        setData(result.data);
        setCurrent(result.current);
        setTotal(result.total);
        let time = result.data.time * 60;
        // setAnswer(""); // What else do we have here?
        setQuestionId(result.data.question_id); // What else do we have here?

        if (localStorage.getItem('timer') > 0) {
          setSeconds(localStorage.getItem('timer'));
          let timeLeftVar = secondsToTime(localStorage.getItem('timer'));
          setTime(timeLeftVar);
        } else {
          setSeconds(time);
          let timeLeftVar = secondsToTime(result.data.time * 60);
          setTime(timeLeftVar);
        }
        startTimer();
      } else if (result.status === 2) {
        localStorage.setItem("result", JSON.stringify(result))
        window.location = '/developer/profile/edit';
      } else if (result.status === 3) {
        setResult(true);
      } else {
        setAlert(true);
        setMessage(result.error);
      }
      setPreload(!preload);
    };

    loadQuestion();
  }, [result]);

  // Output after last question
//{
//   "status": 2,
//     "result": {
//     "percentage": 80,
//       "point": 8,
//         "validity": "2023-11-15 08:36:56";
//   },
//   "ratings": [
//     {
//       "subject": " HTML5",
//       "percentage": "51.783070919123"
//     }
//   ];
// }

  return (
    <>
      <div className="flex">
        {
          message ? (
            <div className="w-8/12 p-8 bg-white rounded-md shadow-md highlights">
              <p className="p-2 text-white bg-red-600 rounded-lg">{message}</p>
            </div>
          ) : (

            <div className="w-8/12 p-8 bg-white rounded-md shadow-md highlights">
              <div className="flex justify-between top-bit">
                <div className="flex justify-around p-5 mt-10 rounded-md shadow-md subject-section">
                  <div className="pr-5 border-r subject-section">
                    <p>Subject</p>
                  </div>
                  <div className="ml-4 ">
                    <p className="font-bold">{data.subject}</p>
                  </div>
                </div>
                <div className="px-5 py-8 -mt-8 text-white bg-red-600 rounded-b shadow-lg timer">
                  <p>Time</p>
                  <h6>
                    {time.m} : {time.s} 
                  </h6>
                </div>
                <div className="flex justify-around p-5 mt-10 rounded-md shadow-md subject-section">
                  <div className="pr-5 border-r subject-section">
                    <p>Questions</p>
                  </div>
                  <div className="ml-4 ">
                    <p className="font-bold">{current} / {total}</p>
                  </div>
                </div>
              </div>
              <div
                className="p-10 mt-10 bg-gray-200 border rounded-md"
                dangerouslySetInnerHTML={{ __html: data.question }}
              ></div>
              <div className="mt-6 mb-4 ml-12 border-t-2 border-dashed">
                <p className="pr-5 -mt-3 -ml-12">Options &nbsp;&nbsp;</p>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="w-1/2 ">
                  <div 
                    onClick={() => { setAnswer("optA"); }}
                    className={`px-4 py-5 mx-3 my-2 transition duration-200 ease-in-out border rounded-md cursor-pointer hover:bg-red-600 hover:text-white ${answer === "optA" ? "bg-red-600 text-white" : ""}`}>
                    <p>{data.options.optA}</p>
                  </div>
                </div>
                <div className="w-1/2 ">
                  <div
                    onClick={() => { setAnswer("optB"); }}
                    className={`px-4 py-5 mx-3 my-2 transition duration-200 ease-in-out border rounded-md cursor-pointer hover:bg-red-600 hover:text-white ${answer === "optB" ? "bg-red-600" : ""}`}>
                    <p>{data.options.optB}</p>
                  </div>
                </div>
                <div className="w-1/2 ">
                  <div 
                    onClick={() => { setAnswer("optC"); }}
                    className={`px-4 py-5 mx-3 my-2 transition duration-200 ease-in-out border rounded-md cursor-pointer hover:bg-red-600 hover:text-white ${answer === "optC" ? "bg-red-600 text-white" : ""}`}>
                    <p>{data.options.optC}</p>
                  </div>
                </div>
                <div className="w-1/2 ">
                  <div 
                    onClick={() => { setAnswer("optD"); }}
                    className={`px-4 py-5 mx-3 my-2 transition duration-200 ease-in-out border rounded-md cursor-pointer hover:bg-red-600 hover:text-white ${answer === "optD" ? "bg-red-600 text-white" : ""}`}>
                    <p>{data.options.optD}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  onClick={cont}
                  className="px-5 py-3 transition duration-200 ease-in-out rounded-md btn hover:bg-red-500 hover:text-white">
                  {' '}
                  Next{' '}
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
                  </span>{' '}
                </button>
              </div>
            </div>
          )
        }

        <div className="flex flex-col w-4/12 px-5 ml-5 topNews">
          <RightNav />
        </div>
      </div>
    </>
  );
}

export default Question;

// import React from 'react';
// import {Button} from "../../statics/form";
// import {Link, Redirect} from "react-router-dom";
// import {GetData} from "../../../services/AuthGet";
// import {PostData} from "../../../services/AuthPost";
// import Layout from "../../statics/layout";

// class Question extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             time: {},
//             data: {options:[]},
//             seconds: 0,
//             preload:false,
//             answer:"",
//             timeout:false,
//             result:false,
//         };
//         this.timer = 0;
//     }

//     secondsToTime(secs){
//         let hours = Math.floor(secs / (60 * 60));

//         let divisor_for_minutes = secs % (60 * 60);
//         let minutes = Math.floor(divisor_for_minutes / 60);

//         let divisor_for_seconds = divisor_for_minutes % 60;
//         let seconds = Math.ceil(divisor_for_seconds);

//         let obj = {
//             "h": hours,
//             "m": minutes,
//             "s": seconds
//         };
//         return obj;
//     }

//     componentDidMount() {
//         this.setState({preload:!this.state.preload});
//         GetData("/api/developer/assessment").then((result)=>{
//             if (result.status===1){
//                 this.setState(result);
//                 let time = result.data.time * 60;
//                 this.setState({answer:"", question_id:result.data.question_id});

//                 if (localStorage.getItem("timer") > 0){
//                     this.setState({ seconds: localStorage.getItem("timer") });
//                     let timeLeftVar = this.secondsToTime(localStorage.getItem("timer") );
//                     this.setState({ time: timeLeftVar });
//                 }else{
//                     this.setState({ seconds: time });
//                     let timeLeftVar = this.secondsToTime(this.state.data.time * 60);
//                     this.setState({ time: timeLeftVar });
//                 }
//                 this.startTimer()

//             }
//             else if (result.status===2){
//                 window.location = "/profile/edit"
//             }
//             else if (result.status===3){
//                 this.setState({result:true})
//             }
//             else {
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({preload:!this.state.preload});
//         })

//     }

//     submitHandler=(e)=>{
//         e.preventDefault();
//         localStorage.removeItem('timer');
//         this.setState({loading:!this.state.loading});
//         if (!this.state.answer){
//             this.timeout();
//         }
//         PostData("/api/developer/assessment",this.state).then((result)=>{
//             if (result.status===1){
//                 this.setState(result);
//                 let time = result.data.time * 60;
//                 this.setState({answer:"", question_id:result.data.question_id, seconds: time });
//                 window.scrollTo(0,0);
//             }else if (result.status===3){
//                 this.setState({result:true})
//             }else {
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };

//     continue=()=>{
//         this.setState({timeout:!this.state.timeout, preload:!this.state.preload, seconds: 60});
//         PostData("/api/developer/assessment",this.state).then((result)=>{
//             if (result.status===1){
//                 this.setState(result);
//                 let time = result.data.time * 60;
//                 this.setState({answer:"", question_id:result.data.question_id, seconds: time });
//             }else if (result.status===3){
//                 this.setState({result:true})
//             }else {
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({preload:!this.state.preload});
//         })
//     };

//     timeout=()=>{
//         this.setState({preload:!this.state.preload});
//         localStorage.removeItem('timer');
//         PostData("/api/developer/assessment",this.state).then((result)=>{
//             this.setState({timeout:true, preload:!this.state.preload});
//         })
//     };

//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//     };

//     startTimer=()=> {
//         if (this.timer === 0) {
//             this.timer = setInterval(this.countDown, 1000);
//         }
//     };

//     countDown=()=> {
//         // Remove one second, set state so a re-render happens.
//         let seconds = this.state.seconds - 1;
//         this.setState({
//             time: this.secondsToTime(seconds),
//             seconds: seconds,
//         });
//         localStorage.setItem("timer",seconds);
//         // Check if we're at zero.
//         if (seconds === 0) {
//             this.timeout()
//         }
//     };

//     render(){
//         const {loading, data, total, current, answer, preload, timeout, result} = this.state;
//         if(preload){
//             return (
//                 <div id="loader-wrapper">
//                     <div id="loader"/>
//                     <div className="loader-section section-left"/>
//                     <div className="loader-section section-right"/>
//                 </div>

//             );
//         }else if (timeout){
//             return (
//                 <Timeout onClick={this.continue}/>
//             );
//         }else if (result){
//             return(
//                 <Redirect to="/assessment/result"/>
//             )
//         }else {
//             return (
//                 <div>
//                     <div className="block gray">
//                         <Link to="/dashboard"><span className="w3-button w3-red w3-xlarge w3-display-topright">&times;</span></Link>
//                         <div className="container border w3-white" style={{maxWidth:700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column">
//                                     <div className="page-inner resumeadd-form">
//                                         <form onSubmit={this.submitHandler}>
//                                             <h5><strong>Subject:</strong> {data.subject}</h5>
//                                             <div className="w3-row">
//                                                 <div className="w3-col s6">
//                                                     <h6>{current+ ' of ' +total}</h6>
//                                                 </div>
//                                                 <div className="w3-col s6">
//                                                     <h6 className="time" align="center" >{this.state.time.m} : {this.state.time.s}</h6>
//                                                 </div>
//                                             </div>
//                                             <div className="question w3-margin-bottom w3-border">
//                                                 <div dangerouslySetInnerHTML={{__html: data.question}} />
//                                             </div>

//                                             <div className="form-group">
//                                                 <h5>Options</h5>
//                                                 <p onClick={()=>{this.setState({answer:"optA"})}} className={"remember-label w3-border option"+" "+(answer==="optA"?"option_active":"")}>
//                                                     <input type="radio" onChange={this.onChange} checked={answer==="optA"} name="answer" id="optA" value="optA"/><label
//                                                     htmlFor="optA"> {data.options.optA}</label>
//                                                 </p>
//                                                 <p onClick={()=>{this.setState({answer:"optB"})}} className={"remember-label w3-border option"+" "+(answer==="optB"?"option_active":"")}>
//                                                     <input type="radio" onChange={this.onChange} checked={answer==="optB"} name="answer" id="optB" value="optB"/><label
//                                                     htmlFor="optB"> {data.options.optB}</label>
//                                                 </p>
//                                                 {data.options.optC?
//                                                     <p onClick={()=>{this.setState({answer:"optC"})}} className={"remember-label w3-border option"+" "+(answer==="optC"?"option_active":"")}>
//                                                         <input type="radio" onChange={this.onChange} checked={answer==="optC"} name="answer" id="optC" value="optC"/><label
//                                                         htmlFor="optC"> {data.options.optC}</label>
//                                                     </p>
//                                                     :""}
//                                                 {data.options.optD?
//                                                     <p onClick={()=>{this.setState({answer:"optD"})}} className={"remember-label w3-border option"+" "+(answer==="optD"?"option_active":"")}>
//                                                         <input type="radio" onChange={this.onChange} checked={answer==="optD"} name="answer" id="optD" value="optD"/><label
//                                                         htmlFor="optD"> {data.options.optD}</label>
//                                                     </p>
//                                                     :""}
//                                             </div>
//                                             <div className="justify-content-end">
//                                                 <div>
//                                                     <Button title="Next" loading={loading}/>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }

//     }
// }

// function Timeout(props) {
//     return(
//         <Layout>
//             <section>
//                 <div className="block gray mission">
//                     <div className="container border" style={{maxWidth:700}}>
//                         <div className="row no-gape">
//                             <div className="col-lg-12 column w3-white">
//                                 <div className="page-inner resumeadd-form">
//                                     <h4><strong>No Answer!</strong></h4>
//                                     <div>
//                                         <p><span>Warning:</span>Be careful. You just ran out of time without answering a question. No worries. Continue with the next question.</p>
//                                         <div className="col-lg-12 w3-margin-bottom">
//                                             <Button title="Continue" onClick={props.onClick}/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     )
// }

// export default Question;
