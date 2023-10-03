// import React from 'react';
// import {GetData} from "../../../services/AuthGet";
// import {PostData} from "../../../services/AuthPost";
// import {Preload} from "../../statics/Preloader";

// class Education extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//             display:false,
//             educations:[],
//             btn:0,
//         }
//     }

//     componentDidMount(){
//         this.fetchData();
//     }

//     fetchData=()=>{
//         GetData("/api/developer/resume/education").then((result)=>{
//             if (result.status===1){
//                 this.setState({
//                     educations:result.data,
//                 });
//             }
//         });
//     };

//     onChangeEducation =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };

//     checkbox=(e)=>{
//         this.setState({
//             present: !this.state.present
//         });
//     };
//     editHandle =(e) =>{
//         let id= e.target.id;
//         this.setState({id:id, btn:id});
//         GetData("/api/developer/resume/education/edit/"+id).then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({
//                     btn:0
//                 });
//                 this.open_modal();
//             }
//         });
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

//     educationFormHandler = (e) => {
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/education/edit/'+this.state.id,this.state).then((result)=>{
//             let response = result;
//             if(response.status === 1){
//                 this.setState({
//                     title:"",
//                     institute:"",
//                     start:"",
//                     end:"",
//                     description:"",
//                     success:true,
//                     loading:!this.state.loading
//                 });
//                 this.close_modal();
//                 this.fetchData();
//                 alert(response.message);
//             }
//             if(response.errors){
//                 this.setState({errors: response.errors,loading:!this.state.loading})
//             }
//         })
//     };

//     delete=(e)=>{
//         this.close_modal();
//         Preload();
//         PostData('/api/developer/resume/education/delete',{id:e.target.id}).then(result=>{
//             if (result.status){
//                 this.fetchData();
//             }
//             Preload(false);
//         })
//     };

//     render() {
//         const {loading, display, educations, btn}= this.state;
//         return (
//             <div id="education">
//                 <div>
//                     {educations.length > 0 ?
//                         <div className="edu-history-sec" id="education">
//                             <h2>Education</h2>
//                             {educations.map(edu => (
//                                 <div className="edu-history">
//                                     <i className="la la-graduation-cap"/>
//                                     <div className="edu-hisinfo">
//                                         <h3>{edu.institute} <span className="w3-text-red" style={{cursor:"pointer"}}><i id={edu.id} onClick={this.editHandle} className={btn === ""+edu.id+""?"la la-spinner la-spin": "la la-pencil"}/></span></h3>
//                                         <i>{edu.start} - {edu.present ? "Present" : edu.end}</i>
//                                         <span><i>{edu.title}</i></span>
//                                         <p>{edu.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>:""
//                     }
//                 </div>
//                 {display?
//                     <div className="w3-modal" style={{display:'block'}}>
//                         <div className="w3-modal-content w3-animate-zoom" style={{maxWidth:550}}>
//                             <form onSubmit={this.educationFormHandler}>
//                                 <div className="w3-container">
//                                     <div className="">
//                                         <div className="row">
//                                             <div className="col-lg-12">
//                                                 <span className="w3-display-topright"><i onClick={this.close_modal} className="la la-times w3-text-red w3-button"/></span>
//                                                 <span className="pf-title">Title</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="" onChange={this.onChangeEducation} className={(this.state.errors.title? "w3-border-red": "")} value={this.state.title} name="title" type="text"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">Institute</span>
//                                                 <div className="pf-field">
//                                                     <input name="institute" value={this.state.institute} className={(this.state.errors.institute? "w3-border-red": "")} onChange={this.onChangeEducation} type="text"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">From Date</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="2007-11" value={this.state.startDate} className={(this.state.errors.start? "w3-border-red": "")} onChange={this.onChangeEducation} name="startDate" type="month"/>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-2">
//                                                 <p className="remember-label" style={{marginTop: 70}}>
//                                                     <input type="checkbox" onClick={this.checkbox} checked={this.state.present} name="present" id="present"/><label htmlFor="present">Present</label>
//                                                 </p>
//                                             </div>
//                                             {!this.state.present?
//                                                 <div className="col-lg-12">
//                                                     <span className="pf-title">To Date</span>
//                                                     <div className="pf-field">
//                                                         <input placeholder="2012-12" value={this.state.endDate} className={(this.state.errors.end? "w3-border-red": "")} required onChange={this.onChangeEducation} name="endDate" type="month"/>
//                                                     </div>
//                                                 </div>:""}
//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">Description</span>
//                                                 <div className="pf-field">
//                                                     <textarea onChange={this.onChangeEducation} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
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

// export default Education
