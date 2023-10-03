// import React from 'react';
// import {PostData} from "../../../services/AuthPost";

// class Education extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//         }
//     }

//     onChangeEducation =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };


//     educationFormHandler = (e) => {
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/education',this.state).then((result)=>{
//             let response = result;
//             if(response.status === 1){
//                 this.setState({
//                     title:"",
//                     institute:"",
//                     start:"",
//                     end:"",
//                     present:"",
//                     description:"",
//                     success:true,
//                     loading:!this.state.loading
//                 });
//                 alert(response.message);
//                 console.log(this.state)
//             }
//             if(response.errors){
//                 this.setState({errors: response.errors,loading:!this.state.loading})
//             }
//         })
//     };

//     render() {
//         const loading= this.state.loading;
//         return (
//             <div>
//                 <div className="resumeadd-form">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <span className="pf-title">Title</span>
//                             <div className="pf-field">
//                                 <input placeholder="" onChange={this.onChangeEducation} className={(this.state.errors.title? "w3-border-red": "")} value={this.state.title} name="title" type="text"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <span className="pf-title">Institute</span>
//                             <div className="pf-field">
//                                 <input name="institute" value={this.state.institute} className={(this.state.errors.institute? "w3-border-red": "")} onChange={this.onChangeEducation} type="text"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <span className="pf-title">From Date</span>
//                             <div className="pf-field">
//                                 <input placeholder="2007-11" value={this.state.start} className={(this.state.errors.start? "w3-border-red": "")} onChange={this.onChangeEducation} name="start" type="month"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <span className="pf-title">To Date</span>
//                             <div className="pf-field">
//                                 <input placeholder="2012-12" value={this.state.end} className={(this.state.errors.end? "w3-border-red": "")} onChange={this.onChangeEducation} name="end" type="month"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-2">
//                             <p className="remember-label" style={{marginTop: 70}}>
//                                 <input type="checkbox" onChange={this.onChangeEducation} checked={this.state.present} name="present" id="present"/><label htmlFor="present">Present</label>
//                             </p>
//                         </div>
//                         <div className="col-lg-12">
//                             <span className="pf-title">Description</span>
//                             <div className="pf-field">
//                                 <textarea onChange={this.onChangeEducation} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <button type="submit" onClick={this.educationFormHandler} disabled={loading}>{loading?<i className="la la-spinner la-spin"/>:""} Add</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )

//     }
// }

// export default Education