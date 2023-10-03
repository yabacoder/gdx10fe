// import React from 'react';
// import {Button, Input} from "../statics/form";
// import Technology from "./technology";
// import {GetData} from "../../services/AuthGet";
// import {Get} from "../../services/Get";
// import Upload from "./upload";
// import {PostData} from "../../services/AuthPost";
// import {Redirect} from "react-router-dom";
// import {Alerts} from "../statics/session_alert";

// class Availability extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             errors:[],
//             loading:false,
//             availability:false,
//             redirect: false,
//         }
//     }

//     componentDidMount(){
//         GetData('/api/developer/availability').then((result)=>{
//             if(result.status === 1){
//                 this.setState({availability:true});
//                 this.setState(result.data);
//             }
//         })
//     }

//     formHandler = (e) => {
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         if (this.state.availability){
//             PostData('/api/developer/availability',this.state).then((result)=>{ 
//                 this.setState({loading:!this.state.loading});
//                 if(result.status === 1){
//                     sessionStorage.clear();
//                     alert(result.message);
//                     this.setState({success:true, errors:[]});
//                 }else if (result.status === 2) {
//                     window.location.reload()
//                 }
//                 else if(result.errors){
//                     this.setState({errors: result.errors});
//                     alert('Form validation error!')
//                 }else{
//                     alert('An error occured, please try again later')
//                 }
//             })
//         }else {
//             PostData('/api/developer/availability',this.state).then((result)=>{
//                 this.setState({loading:!this.state.loading});
//                 if(result.status === 1){
//                     sessionStorage.clear();
//                     Alerts('Success','Updated Successfully');
//                     window.location = this.props.gState.authReducer.redirectTo;
//                     this.setState({success:true, availability:true, tab:false, redirect:true});
//                 }else if (result.status === 2) {
//                     window.location.reload()
//                 }
//                 else if(result.errors){
//                     this.setState({errors: result.errors});
//                     alert('Form validation error!')
//                 }else{
//                     alert('An error occured, please try again later')
//                 }
//             })
//         }
//     };

//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.checked});
//     };
//     render() {
//         const {errors, loading, redirect} = this.state;
//         if (redirect){
//             return <Redirect to="/assessment"/>;
//         }
//         return (
//             <div>
//                 <div className="profile-form-edit">
//                     <Upload/>
//                     <Technology/>
//                 </div>
//                 <div className="profile-form-edit">
//                     <form onSubmit={this.formHandler}>
//                         <div className="row">
//                             <span className="pf-title w3-margin-left">Availability</span>
//                             <div className="col-lg-3">
//                                 <p className="remember-label">
//                                     <input type="checkbox" name="fulltime" onChange={this.onChange} checked={this.state.fulltime} id="fulltime"/><label htmlFor="fulltime">Full-Time</label>
//                                 </p>
//                             </div>
//                             <div className="col-lg-3">
//                                 <p className="remember-label">
//                                     <input type="checkbox" name="parttime" onChange={this.onChange} checked={this.state.parttime} id="parttime"/><label htmlFor="parttime">Part-Time</label>
//                                 </p>
//                             </div>
//                             <div className="col-lg-3">
//                                 <p className="remember-label">
//                                     <input type="checkbox" name="remote"  onChange={this.onChange} checked={this.state.remote} id="remote"/><label htmlFor="remote">Remote</label>
//                                 </p>
//                             </div>
//                             <div className="col-lg-12 w3-margin-bottom">
//                                 <Button title="Next" icon="la la-check" loading={loading}/>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Availability;
