// import React from 'react';
// import {GetData} from "../../../services/AuthGet";
// import Layout from "../../statics/layout";
// import {Link, Redirect} from "react-router-dom";

// class Result extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             alert:false,
//             preload:false,
//             ratings:[],
//             result:[],
//         }
//     }
//     componentDidMount(){
//         this.setState({preload:!this.state.preload});
//         GetData("/api/developer/assessment/result").then((result)=>{
//             if(result.status===1){
//                 this.setState(result);
//             }else{
//                 this.setState({alert:true})
//             }
//             this.setState({preload:!this.state.preload});
//         });

//     }
//     render() {
//         if(this.state.preload){
//             return (
//                 <div id="loader-wrapper">
//                     <div id="loader"/>
//                     <div className="loader-section section-left"/>
//                     <div className="loader-section section-right"/>
//                 </div>

//             );
//         }
//         if (this.state.alert){
//             return <Redirect to="/assessment"/>;
//         }
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray">
//                         <div className="container w3-white" style={{maxWidth:700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column">
//                                     <div className="page-inner resumeadd-form">
//                                         <div>
//                                             <h5><strong>ASSESSMENT RESULT</strong></h5>
//                                             <div className="score">
//                                                 <div>{this.state.result.percentage+"%"}</div>
//                                             </div>

//                                             <h5><strong>RATINGS</strong></h5>
//                                             {
//                                                 this.state.ratings.map(rating => (
//                                                     <div>
//                                                         <h6>{rating.subject}</h6>
//                                                         <div className="w3-light-grey w3-margin-bottom">
//                                                             <div className="w3-container w3-blue w3-center ass-progress-bar-striped" style={{width: rating.percentage+"%"}}>{rating.percentage+"%"}</div>
//                                                         </div>
//                                                     </div>
//                                                 ))

//                                             }
//                                         </div>
//                                         <div className="w3-margin w3-right">
//                                             <Link className="btn btn-red" to="/project">Start a Project</Link>
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

// export default Result;