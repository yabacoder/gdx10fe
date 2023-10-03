// import React from 'react';
// import {GetData} from "../../services/AuthGet";
// import Layout from "../statics/layout";
// import ImageLoader from "react-load-image";
// import {Link} from "react-router-dom";

// class DirectProfile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             education:[],
//             works:[],
//             portfolios:[],
//             technologies:[]
//         }
//     }
//     componentDidMount(){
//         window.scroll(0,0);
//         const {username} = this.props.match.params;
//         GetData('/api/'+username).then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({education:result.education,works:result.works,portfolios:result.portfolios});
//             }
//         })
//     }
//     render() {
//         const Loader=()=>{
//             return <i className="la la-spinner la-spin" style={{fontSize:90}}/>;
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
//                                                     <div><i className="la la-spinner la-spin" style={{fontSize:90}}/></div>
//                                                     <Loader />
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
//                                             {/*<Link to="/resume"><i className="la la-edit"/> Add Resume</Link>*/}
//                                             {/*<Link to="/profile/edit" ><i className="la la-edit"/> Edit Profile</Link>*/}
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
//                                                     <p className="w3-justify" style={{ whiteSpace: "pre-line" }}>{state.bio}</p>
//                                                     <div>
//                                                         {state.education.length > 0 ?
//                                                             <div className="edu-history-sec" id="education">
//                                                                 <h2>Education</h2>
//                                                                 {state.education.map(edu => (
//                                                                     <div className="edu-history">
//                                                                         <i className="la la-graduation-cap"/>
//                                                                         <div className="edu-hisinfo">
//                                                                             <h3>{edu.institute}</h3>
//                                                                             <i>{edu.start} - {edu.present ? "Present" : edu.end}</i>
//                                                                             <span><i>{edu.title}</i></span>
//                                                                             <p>{edu.description}</p>
//                                                                         </div>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>:""
//                                                         }
//                                                     </div>
//                                                     <div>
//                                                         {state.works.length>0?
//                                                             <div className="edu-history-sec" id="experience">
//                                                                 <h2>Work & Experience</h2>
//                                                                 {state.works.map(work => (
//                                                                     <div className="edu-history style2">
//                                                                         <i/>
//                                                                         <div className="edu-hisinfo">
//                                                                             <h3>{work.title} <span>{work.company}</span></h3>
//                                                                             <i>{work.start} - {work.present ? "Present" : work.end}</i>
//                                                                             <p>{work.description}</p>
//                                                                         </div>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>:""
//                                                         }
//                                                     </div>
//                                                     <div>
//                                                         {state.portfolios.length > 0?
//                                                             <div className="mini-portfolio" id="portfolio">
//                                                                 <h2>Portfolio</h2>
//                                                                 {state.portfolios.map(portfolio => (
//                                                                     <div className="edu-history style2">
//                                                                         <i/>
//                                                                         <div className="edu-hisinfo">
//                                                                             <h3>{portfolio.title}</h3>
//                                                                             <i>{portfolio.url}</i>
//                                                                             <p>{portfolio.description}</p>
//                                                                         </div>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>:""
//                                                         }
//                                                     </div>
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
//                                                     {/*<a onClick={this.downloadHandler} className="save-resume">Download CV</a>:""*/}
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

// export default DirectProfile;
