// import React from 'react';
// import {PostData} from "../../../services/AuthPost";

// class Portfolio extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//         }
//     }

//     onChangePortfolio =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };


//     portfolioFormHandler = (e) => {
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/portfolio',this.state).then((result)=>{
//             let response = result;
//             if(response.status === 1){
//                 this.setState({
//                     title:"",
//                     url:"",
//                     description:"",
//                     success:true,
//                     error:[],
//                     loading:!this.state.loading,
//                 });
//                 alert(response.message);
//                 console.log(this.state)
//             }
//             if(response.errors){
//                 this.setState({errors: response.errors,loading:!this.state.loading,})
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
//                                 <input placeholder="" onChange={this.onChangePortfolio} className={(this.state.errors.title? "w3-border-red": "")} value={this.state.title} name="title" type="text"/>
//                             </div>
//                         </div>

//                         <div className="col-lg-12">
//                             <span className="pf-title">URL</span>
//                             <div className="pf-field">
//                                 <input placeholder="http://www.example.com" onChange={this.onChangePortfolio} className={(this.state.errors.url? "w3-border-red": "")} value={this.state.url} name="url" type="url"/>
//                             </div>
//                         </div>

//                         <div className="col-lg-12">
//                             <span className="pf-title">Description</span>
//                             <div className="pf-field">
//                                 <textarea onChange={this.onChangePortfolio} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
//                             </div>
//                         </div>
//                         <div className="col-lg-12">
//                             <button type="submit" onClick={this.portfolioFormHandler} disabled={loading}>{loading?<i className="la la-spinner la-spin"/>:""} Add</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Portfolio;