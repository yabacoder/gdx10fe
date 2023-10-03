// import React from 'react';
// import {Link, Redirect} from "react-router-dom";
// import Layout from "../../statics/layout";
// import {Get} from "../../../services/Get";

// class DirectResult extends React.Component {
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
//         const  {username} = this.props.match.params;
//         this.setState({preload:!this.state.preload});
//         Get("/api/"+username+"/ratings").then((result)=>{
//             if(result.status===1){
//                 this.setState(result);
//             }else{
//                 this.setState({alert:true})
//             }
//             this.setState({preload:!this.state.preload});
//         });

//     }
//     render() {
//         if (this.state.preload) {
//             return (
//                 <div id="loader-wrapper">
//                     <div id="loader"/>
//                     <div className="loader-section section-left"/>
//                     <div className="loader-section section-right"/>
//                 </div>

//             );
//         }else if (this.state.alert){
//             return(
//                 <Layout>
//                     <section>
//                         <div className="block gray">
//                             <div className="container w3-white" style={{maxWidth: 700}}>
//                                 <div className="row no-gape">
//                                     <div className="col-lg-12 column">
//                                         <div className="page-inner resumeadd-form">
//                                             <div className="w3-center w3-text-red">
//                                                 <h5><strong>No Ratings!</strong></h5>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </Layout>
//             )
//         }
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray">
//                         <div className="container w3-white" style={{maxWidth: 700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column">
//                                     <div className="page-inner resumeadd-form">
//                                         <div>
//                                             <h5><strong>ASSESSMENT RESULT</strong></h5>
//                                             <div className="score">
//                                                 <div>{this.state.result.percentage + "%"}</div>
//                                             </div>

//                                             <h5><strong>RATINGS</strong></h5>
//                                             {
//                                                 this.state.ratings.map(rating => (
//                                                     <div>
//                                                         <h6>{rating.subject}</h6>
//                                                         <div className="w3-light-grey w3-margin-bottom">
//                                                             <div
//                                                                 className="w3-container w3-blue w3-center ass-progress-bar-striped"
//                                                                 style={{width: rating.percentage + "%"}}>{rating.percentage + "%"}</div>
//                                                         </div>
//                                                     </div>
//                                                 ))

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

// export default DirectResult;
