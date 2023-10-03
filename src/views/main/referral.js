// import React from 'react';
// import Layout from "./statics/layout";
// import {Link} from "react-router-dom";
// import {Button, Input, Textarea} from "./statics/form";
// import Availability from "./developers/availability";
// import connect from "react-redux/es/connect/connect";
// import {PostData} from "../services/AuthPost";
// import {Alerts} from "./statics/session_alert";
// import {GetData} from "../services/AuthGet";

// class Referral extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             loading:false,
//             data:[]
//         }
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         GetData('/api/developer/referral').then(result=>{
//             if (result.status){
//                 this.setState({data:result.data});
//             }
//         })
//     }

//     formHandler=(e)=>{
//         e.preventDefault();
//         PostData("/api/developer/referral",this.state).then(result=>{});
//         this.setState({name:"",email:""});
//         Alerts('success',"Sent Successfully!");
//     };

//     onChange=(e)=>{
//         this.setState({[e.target.name]:e.target.value});
//     };

//     copy=(e)=>{
//         let test = e.target.id;
//         test.select();
//         document.execCommand("copy");
//         Alerts("success","Copied to clipboard")
//     };

//     render() {
//         const state = this.state;
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container" style={{maxWidth:900}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="profile-form-edit">
//                                         <form onSubmit={this.formHandler}>
//                                             <p>When you refer your friends to GetDev, we give you &#8358;5,000 for anyone who got a job through us. here is your referral link: <strong className={"w3-text-blue"}>https://getdev.co/register?ref={this.props.gState.authReducer.user.id}</strong></p>
//                                             <h3>Referral a friend</h3>
//                                             <div className="row">
//                                                 <div className="col-lg-6">
//                                                     <span className="pf-title">Name</span>
//                                                     <div className="pf-field">
//                                                         <Input onChange={this.onChange} placeholder="e.g Mike" value={state.name} name="name"/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-lg-6">
//                                                     <span className="pf-title">Email</span>
//                                                     <div className="pf-field">
//                                                         <Input onChange={this.onChange} required type={"email"} value={state.email} name="email"/>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-lg-12 w3-margin-bottom">
//                                                     <Button title={"send"} icon="la la-check" loading={state.loading}/>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                     <div className="manage-jobs-sec" style={{overflow:"scroll"}}>
//                                         <h3>Persons you referred ({state.data.length}) </h3>
//                                         <table>
//                                             <thead>
//                                             <tr>
//                                                 <td>#</td>
//                                                 <td>name</td>
//                                             </tr>
//                                             </thead>
//                                             <tbody>
//                                             {state.data.length> 0? state.data.map((data,index)=>(
//                                                     <tr>
//                                                         <td>{index + 1}</td>
//                                                         <td>
//                                                             <div className="table-list-title">
//                                                                 <i><Link to={"/"+data.username} target="_blank">{data.name}</Link></i><br/>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 )):
//                                                 <tr>
//                                                     <td colSpan="3" align="center">
//                                                         <span>No Record!</span>
//                                                     </td>
//                                                 </tr>
//                                             }
//                                             </tbody>
//                                         </table>
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

// const mapStateToProps = state => {
//     return {
//         gState: state
//     };
// };

// export default connect(mapStateToProps)(Referral);
