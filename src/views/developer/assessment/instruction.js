import React from 'react';
// import Layout from '../layout'
import RightNav from '../utils/RightNav';
import { Link } from 'react-router-dom';
function Instruction() {
    return (

        <div className="flex">
            <div className="w-8/12 p-6 bg-white rounded-md shadow-md highlights">
                <h5 className="pb-2 text-base border-b">Assessment </h5>
                <div className="p-5 my-3 bg-gray-200 rounded-lg">
                    <div className="w-32 px-4 py-2 mt-3 text-red-600 bg-red-200 border border-red-600 rounded-full">
                        <p className="font-bold text-center">Instructions</p>
                    </div>
                    <div className="p-3 text-sm">
                        <ul>

                            <li>All questions must be attempted before proceeding to the next question.</li>

                            <li>The time for each question is 1 minutes. After this time elapses, the question shall be removed.</li>

                            <li> This test does not permit you to go back after you have passed a certain question.</li>

                            <li> Make sure you have a strong internet connection before you proceed with the test.</li>

                            <li>If you have any problems during the test send us a mail at hire@getdev.co</li>

                        </ul>
                    </div>


                </div>
                <div className="my-5">
                    <Link to="/developer/assessment/question" className="w-full px-5 py-3 text-sm btn"> Start Assessment  <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </span> </Link>
                </div>
            </div>



            <div className="flex flex-col w-4/12 px-5 ml-5 topNews">
                <RightNav />
            </div>

        </div>
        // </Layout>


    );
}

export default Instruction;

// import React from 'react';
// import {Button} from "../../statics/form";
// import Question from "./question";
// import {Redirect} from "react-router-dom";
// import Alert from "../../statics/alert";
// // import {GetData} from "../../../services/AuthGet";
// import Layout from "../../statics/layout";
// import {Preload} from "../../statics/Preloader";


// class Instruction extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             loading:false,
//             start:false,
//             answer:"",
//             redirect:false,
//             preload:false,
//             ongoing:false,
//             alert:false,
//             success:false,
//             message:"",
//         };
//     };

//     componentDidMount(){
//         Preload();
//         GetData("/api/developer/assessment/check").then((result)=>{
//             if (result.status===1){
//                 this.setState({ongoing:true});
//             }
//             Preload(false);
//         })
//     }

//     startHandler=()=>{
//         this.setState({loading:!this.state.loading});
//         GetData("/api/developer/assessment").then((result)=>{
//             if (result.status===1){
//                 this.setState(result);
//                 this.setState({question_id:result.data.question_id, start:true});
//             }else if(result.status === 2){
//                 window.location = "/profile/edit"
//             }
//             else if (result.status===3){
//                 this.setState({redirect:true})
//             }else {
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };

//     render() {
//         const {loading, start, data, total, current, answer, redirect, preload} = this.state;
//         if (redirect){
//             return <Redirect to="/assessment/result"/>
//         }else if (start){
//             return (
//                 <Question onChange={this.onChange} data={data} active={answer} total={total} loading={loading} current={current} onSubmit={this.submitHandler}/>
//             );
//         }
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container border" style={{maxWidth:700, backgroundColor:"white"}}>
//                             <div className="row no-gape widget">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="page-inner resumeadd-form">
//                                         <h4>INSTRUCTIONS</h4>
//                                         <div>
//                                             <Alert display={this.state.alert} onClick={()=>{this.setState({alert:false})}} message={this.state.message}/>
//                                             <ul>
//                                                 <li><i className="la la-dot-circle-o"/> <b>All questions must be attempted</b> before proceeding to the next question.</li>
//                                                 <li><i className="la la-dot-circle-o"/> <b>The time for each question is 1 minutes</b>. After this time elapses, the question shall be removed.</li>
//                                                 <li><i className="la la-dot-circle-o"/> This test does not permit you to go back after you have passed a certain question.</li>
//                                                 <li><i className="la la-dot-circle-o"/> Make sure you have a <b>strong internet connection</b> before you proceed with the test.</li>
//                                                 <li><i className="la la-dot-circle-o"/> If you have any problems during the test send us a mail at <a href="mailto:hire@getdev.co?Subject=Assessment%20Error" target="_top"><em><b>hire@getdev.co</b></em></a></li>
//                                             </ul>
//                                             <div className="col-lg-12 w3-margin-bottom">
//                                                 <Button title={this.state.ongoing?"Continue":"Start"} onClick={()=>{this.startHandler()}} loading={loading}/>
//                                             </div>
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

// export default Instruction;
