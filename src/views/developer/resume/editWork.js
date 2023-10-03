// import React from 'react';
// import {PostData} from "../../../services/AuthPost";
// import {GetData} from "../../../services/AuthGet";
// import {Preload} from "../../statics/Preloader";

// class Work extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//             works:[],
//             display:false,
//             btn:0,

//         }
//     }

//     componentDidMount(){
//         this.fetchData()
//     }

//     fetchData=()=>{
//         GetData("/api/developer/resume/work_experience").then((result)=>{
//             if (result.status===1){
//                 this.setState({
//                     works:result.data
//                 });
//             }

//         });
//     };


//     onChangeWork =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };
//     checkbox=(e)=>{
//         this.setState({
//             present: !this.state.present,
//         });
//     };

//     editHandle=(e)=>{
//         let id= e.target.id;
//         this.setState({id:id, btn:id});
//         GetData("/api/developer/resume/work_experience/edit/"+id).then((result)=>{
//             if (result.status===1){
//                 this.setState(
//                     result.data
//                 );
//                 this.setState({
//                     btn:0
//                 });
//                 this.open_modal()
//             }

//         });
//     };

//     delete=(e)=>{
//         this.close_modal();
//         Preload();
//         PostData('/api/developer/resume/work_experience/delete',{id:e.target.id}).then(result=>{
//             if (result.status){
//                 this.fetchData();
//             }
//             Preload(false);
//         })
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


//     workFormHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/work_experience/update',this.state).then((result)=>{
//             let response = result;
//             if(response.status === 1){
//                 this.setState({
//                     title:"",
//                     company:"",
//                     start:"",
//                     end:"",
//                     description:"",
//                     success:true,
//                     error:[],
//                     loading:!this.state.loading
//                 });
//                 this.fetchData();
//                 this.close_modal();
//                 alert(response.message);
//             }
//             if(response.errors){
//                 this.setState({errors: response.errors,loading:!this.state.loading})
//             }
//         })
//     };
//     render() {
//         const {loading, display, works, btn}= this.state;
//         return (
//             <div id="work_experience">
//                 {works.length>0?
//                     <div className="edu-history-sec" id="experience">
//                         <h2>Work & Experience</h2>
//                         {works.map(work => (
//                             <div className="edu-history style2">
//                                 <i/>
//                                 <div className="edu-hisinfo">
//                                     <h3>{work.title} <span>{work.company}</span>
//                                         <span className="w3-text-red" style={{cursor:"pointer"}}><i id={work.id} onClick={this.editHandle} className={btn === ""+work.id+""?"la la-spinner la-spin": "la la-pencil"}/></span>
//                                     </h3>
//                                     <i>{work.start} - {work.present ? "Present" : work.end}</i>
//                                     <p>{work.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>:""
//                 }
//                 {display?
//                     <div className="w3-modal" style={{display:'block'}}>
//                         <div className="w3-modal-content w3-animate-zoom" style={{maxWidth:550}}>
//                             <form onSubmit={this.workFormHandler}>
//                                 <div className="w3-container">
//                                     <div className="">
//                                         <div className="row">
//                                             <div className="col-lg-12">
//                                                 <span className="w3-display-topright"><i onClick={this.close_modal} className="la la-times w3-text-red"/></span>
//                                                 <span className="pf-title">Title</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="" onChange={this.onChangeWork} className={(this.state.errors.title? "w3-border-red": "")} required value={this.state.title} name="title" type="text"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">From Date</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="2007-11" value={this.state.startDate} className={(this.state.errors.start? "w3-border-red": "")} required onChange={this.onChangeWork} name="startDate" type="month"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-2">
//                                                 <p className="remember-label" style={{marginTop: 70}}>
//                                                     <input type="checkbox" onClick={this.checkbox} checked={this.state.present} name="present" value={1} id="present"/><label htmlFor="present">Present</label>
//                                                 </p>
//                                             </div>
//                                             {!this.state.present?
//                                                 <div className="col-lg-12">
//                                                     <span className="pf-title">To Date</span>
//                                                     <div className="pf-field">
//                                                         <input placeholder="2012-12" value={this.state.endDate} className={(this.state.errors.end? "w3-border-red": "")} required onChange={this.onChangeWork} name="endDate" type="month"/>
//                                                     </div>
//                                                 </div>
//                                                 :""}

//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">Company</span>
//                                                 <div className="pf-field">
//                                                     <input type="text" value={this.state.company} onChange={this.onChangeWork} name="company"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">Description</span>
//                                                 <div className="pf-field">
//                                                     <textarea onChange={this.onChangeWork} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 w3-margin-bottom">
//                                                 <button type="submit" disabled={loading}>{loading?<i className="la la-spinner la-spin"/>:""} Edit</button>
//                                             </div>
//                                             <div align="right" className="col-lg-6 w3-margin-bottom">
//                                                 <a id={this.state.id} onClick={this.delete} className={"w3-btn w3-round w3-dark-gray"}>{loading?<i className="la la-spinner la-spin"/>:""} Delete</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>:""
//                 }
//             </div>
//         )

//     }
// }

// export default Work
