// import React from 'react';
// import {GetData} from "../../../services/AuthGet";
// import {PostData} from "../../../services/AuthPost";
// import {Preload} from "../../statics/Preloader";

// class Portfolio extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//             display:false,
//             btn:0,
//             portfolios:[],

//         }
//     }

//     componentDidMount(){
//         this.fetchData();
//     }

//     fetchData=()=>{
//         GetData("/api/developer/resume/portfolio").then((result)=>{
//             if (result.status===1){
//                 this.setState({
//                     portfolios:result.data,
//                 });
//             }
//         });
//     };

//     onChangePortfolio =(e) =>{
//         this.setState({
//             [e.target.name]:e.target.value
//         });
//     };

//     editHandle=(e)=>{
//         let id= e.target.id;
//         this.setState({id:id, btn:id});
//         GetData("/api/developer/resume/portfolio/edit/"+id).then((result)=>{
//             if (result.status===1){
//                 this.setState(
//                     result.data
//                 );
//                 this.setState({btn:0});
//                 this.open_modal();
//             }
//         });
//     };

//     delete=(e)=>{
//         this.close_modal();
//         Preload();
//         PostData('/api/developer/resume/portfolio/delete',{id:e.target.id}).then(result=>{
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

//     portfolioFormHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/resume/portfolio/update',this.state).then((result)=>{
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
//                 this.fetchData();
//                 this.close_modal();
//                 alert(response.message);
//             }
//             if(response.errors){
//                 this.setState({errors: response.errors,loading:!this.state.loading,})
//             }
//         })
//     };

//     render() {
//         const {loading, display, portfolios, btn}= this.state;
//         return (
//             <div id="portfolio">
//                 {portfolios.length>0?
//                     <div className="mini-portfolio" id="portfolio">
//                         <h2>Portfolio</h2>
//                         {portfolios.map(portfolio => (
//                             <div className="edu-history style2">
//                                 <i/>
//                                 <div className="edu-hisinfo">
//                                     <h3>{portfolio.title}
//                                         <span className="w3-text-red" style={{cursor:"pointer"}}><i id={portfolio.id} onClick={this.editHandle} className={btn === ""+portfolio.id+""?"la la-spinner la-spin": "la la-pencil"}/></span>
//                                     </h3>
//                                     <i>{portfolio.url}</i>
//                                     <p>{portfolio.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>:""
//                 }
//                 {display?
//                     <div className="w3-modal" style={{display:'block'}}>
//                         <div className="w3-modal-content w3-animate-zoom" style={{maxWidth:550}}>
//                             <form onSubmit={this.portfolioFormHandler}>
//                                 <div className="w3-container">
//                                     <div className="">
//                                         <div className="row">
//                                             <div className="col-lg-12">
//                                                 <span className="w3-display-topright"><i onClick={this.close_modal} className="la la-times w3-text-red w3-button"/></span>
//                                                 <span className="pf-title">Title</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="" onChange={this.onChangePortfolio} className={(this.state.errors.title? "w3-border-red": "")} value={this.state.title} name="title" type="text"/>
//                                                 </div>
//                                             </div>

//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">URL</span>
//                                                 <div className="pf-field">
//                                                     <input placeholder="http://www.example.com" onChange={this.onChangePortfolio} className={(this.state.errors.url? "w3-border-red": "")} value={this.state.url} name="url" type="url"/>
//                                                 </div>
//                                             </div>

//                                             <div className="col-lg-12">
//                                                 <span className="pf-title">Description</span>
//                                                 <div className="pf-field">
//                                                     <textarea onChange={this.onChangePortfolio} className={(this.state.errors.description? "w3-border-red": "")} value={this.state.description} name="description"/>
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
//         );
//     }
// }

// export default Portfolio;
