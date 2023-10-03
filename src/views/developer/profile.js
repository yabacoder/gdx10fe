// import React from 'react';
// import ImageLoader from 'react-load-image';
// import Education from "./resume/editEducation";
// import Work from "./resume/editWork";
// import Portfolio from "./resume/editPortfolio";
// import {GetData} from "../../services/AuthGet";
// import Layout from "../statics/layout";
// import {Link} from "react-router-dom";
// import ContentLoader from "react-content-loader";
// import {Preload} from "../statics/Preloader";
// const config = require('../../config.js');

// class Profile extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             technologies:[],
//         }
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         Preload()
//         GetData('/api/developer/profile').then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//             }
//             Preload(false)
//         })
//     }
//     downloadHandler=()=>{
//         setTimeout(() => {
//             const response = {
//                 file: config.API+'/api/cv/download/'+this.state.id
//             };
//             window.open(response.file);
//         }, 100);
//     };

//     open_modal=()=>{
//         const element = document.getElementById("html");
//         element.classList.add("no-scroll");
//         this.setState({display:true});
//     };
//     close_modal=()=>{
//         const element = document.getElementById("html");
//         element.classList.remove("no-scroll");
//         this.setState({display:false});
//     };

//     render() {
//         const Loader=()=>{
//             return (
//                 <ContentLoader
//                     height={150}
//                     width={150} 
//                     speed={2}
//                     primaryColor="#f3f3f3"
//                     secondaryColor="#ecebeb"
//                 >
//                     <circle cx="75.31" cy="75.89" r="74.28" />
//                 </ContentLoader>
//             );
//         };
//         const state= this.state;
//         return (
//             <Layout>
//                 <section className="overlape">
//                     <div className="block no-padding">
//                         <div data-velocity="-.1" style={{background: "url('../../images/head_bg.jpg') repeat scroll 50% 422.28px transparent"}} className="parallax scrolly-invisible layer color light"></div>
//                         <div className="container fluid">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="inner-header">
//                                         <div className="container">

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="overlape">
//                     <div className="block remove-top">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="cand-single-user">
//                                         <div className="share-bar circle"/>
//                                         <div className="can-detail-s">
//                                             <div className="cst">
//                                                 <ImageLoader
//                                                     src={state.image}
//                                                 >
//                                                     <img width={150} height={150} />
//                                                     <div/>
//                                                     <Loader/>
//                                                 </ImageLoader>
//                                             </div>
//                                             <h3>{state.name}</h3>
//                                             <span><i>{state.stack}</i></span>
//                                             <p><i className="la la-map-marker"/>{state.location}</p>
//                                             <div className="skills-badge">
//                                                 {state.technologies.map(technology =>(
//                                                     <span>{technology.name}</span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className="download-cv">
//                                             <Link to="/resume"><i className="la la-edit"/> Add Resume</Link>
//                                             <Link to="/profile/edit" ><i className="la la-edit"/> Edit Profile</Link>
//                                         </div>
//                                     </div>
//                                     <div className="cand-details-sec">
//                                         <div className="row no-gape">
//                                             <div className="col-lg-9 column">
//                                                 <div className="cand-details">
//                                                     <div className="job-overview style2">
//                                                         <ul>
//                                                             <li><i className="la la-mars-double"/><h3>Gender</h3>
//                                                                 <span>{state.sex}</span></li>
//                                                             <li><i className="la la-thumb-tack"/><h3>Career
//                                                                 Level</h3><span>{state.level}</span></li>
//                                                         </ul>
//                                                     </div>
//                                                     <h2>About</h2>
//                                                     <p>{this.state.bio}</p>
//                                                     <Education/>
//                                                     <Work/>
//                                                     <Portfolio/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-3 column">
//                                                 <div className="job-overview style3">
//                                                     <ul>
//                                                         <li><a href="#about"><i className="la la-briefcase"/><h3>About</h3></a>
//                                                         </li>
//                                                         <li><a href="#education"><i className="la la-graduation-cap"/><h3>Education</h3></a>
//                                                         </li>
//                                                         <li><a href="#work_education"><i className="la la-file-text"/><h3>Work Experience</h3></a>
//                                                         </li>
//                                                         <li><a href="#portfolio"><i className="la la-puzzle-piece"/><h3>Portfolio</h3></a>
//                                                         </li>
//                                                         <li><a href="#skill"><i className="la la-grap"/><h3>Skills Ratings</h3></a></li>
//                                                     </ul>
//                                                     {/*{state.cv?*/}
//                                                         {/*<a onClick={this.downloadHandler} className="save-resume">Download CV</a>:""*/}
//                                                     {/*}*/}
//                                                 </div>
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

// export default Profile;
