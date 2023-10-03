// import React from 'react';
// import {PostData} from "../../../services/AuthPost";

// class Work extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//         }
//     }

//     onChangeWork =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };


//     workFormHandler = (e) => {
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/work_experience',this.state).then((result)=>{
//             let response = result;
//             if(response.status === 1){
//                 this.setState({
//                     title:"",
//                     company:"",
//                     start:"",
//                     end:"",
//                     present:"",
//                     description:"",
//                     success:true,
//                     error:[],
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
//                                 <input placeholder="" onChange={this.onChangeWork} className={(this.state.errors.title? "w3-border-red": "")} value={this.state.title} name="title" type="text"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <span className="pf-title">From Date</span>
//                             <div className="pf-field">
//                                 <input placeholder="2007-11" value={this.state.start} className={(this.state.errors.start? "w3-border-red": "")} onChange={this.onChangeWork} name="start" type="month"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <span className="pf-title">To Date</span>
//                             <div className="pf-field">
//                                 <input placeholder="2012-12" value={this.state.end} className={(this.state.errors.end? "w3-border-red": "")} onChange={this.onChangeWork} name="end" type="month"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-2">
//                             <p className="remember-label" style={{marginTop: 70}}>
//                                 <input type="checkbox" onChange={this.onChangeWork} checked={this.state.present} name="present" id="epresent"/><label htmlFor="epresent">Present</label>
//                             </p>
//                         </div>
//                         <div className="col-lg-12">
//                             <span className="pf-title">Company</span>
//                             <div className="pf-field">
//                                 <input type="text" value={this.state.company} onChange={this.onChangeWork} name="company"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <span className="pf-title">Description</span>
//                             <div className="pf-field">
//                                 <textarea onChange={this.onChangeWork} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <button type="submit" onClick={this.workFormHandler} disabled={loading}>{loading?<i className="la la-spinner la-spin"/>:""} Add</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )

//     }
// }

// export default Work