// import React from 'react';
// import {Link, Redirect} from "react-router-dom";
// import {PostData} from "../../services/AuthPost";
// import {GetData} from "../../services/AuthGet";
// import Layout from "../statics/layout";
// import Alert from "../statics/alert";
// import connect from "react-redux/es/connect/connect";
// import {Alerts} from "../statics/session_alert";

// class Verify extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             loading:"",
//             code: 0,
//             alert:true,
//             message:"kindly check your email for the verification code.",
//             alert_success:true,
//             success:false,
//         };
//     };
//     componentDidMount(){
//         window.scroll(0,0);
//         this.check();

//     }

//     check=()=>{
//         const user= JSON.parse(localStorage.getItem('user'));
//         if (user.verified){
//             Alerts('success','Account Verified!, kindly setup your profile to continue');
//             this.setState({
//                 success:true,
//             })
//         }
//     };
//     verifyHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/auth/user/activate', this.state).then((result)=>{
//             if(result.status === 1){
//                 GetData("/api/user").then((result)=>{
//                     const user = JSON.stringify(result.data);
//                     localStorage.setItem('user', user);
//                     this.props.verify(result.data);
//                     this.check();
//                 })
//             }else{
//                 this.setState({
//                     alert:result.error,
//                     color:"alert-danger"
//                 });
//                 this.setState({loading:!this.state.loading});
//             }
//         })
//     };
//     resendHandler=()=>{
//         PostData('/api/auth/resend').then((result)=>{
//             this.setState({alert:result.message});
//             if(result.status === 1){
//                 this.setState({
//                     alert:true,
//                     message:result.message,
//                     alert_success:true,
//                 })
//             }else{
//                 this.setState({
//                     alert:true,
//                     message:'An error occurred, please try again later',
//                     alert_success:false,
//                 })
//             }
//         })
//     };
//     onChange=(e)=>{
//         this.setState({code:e.target.value})
//     };

//     onClick=()=>{
//         this.setState({
//             display:!this.state.display,
//         })
//     };

//     render() {
//         const state= this.state;
//         const loading= this.state.loading;
//         if(this.state.success){
//             return (
//                 <Redirect to="/profile/edit"/>
//             );
//         }else{
//             return (
//                 <Layout>
//                     <section>
//                         <div className="block remove-bottom gray">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="static account-popup-area signin-popup-box">
//                                             <div className="w3-padding account-popup">
//                                                 <Alert display={state.alert} onClick={()=>{this.setState({alert:false})}} message={state.message} success={state.alert_success}/>
//                                                 <h3>Verify Your Email</h3>
//                                                 <form onSubmit={this.verifyHandler}>
//                                                     <div className="cfield">
//                                                         <input type="text" name="code" onChange={this.onChange}/>
//                                                         <i className="la la-key"/>
//                                                     </div>
//                                                     <button disabled={loading}>{loading?<i className="la la-spinner la-spin"/>:"Verify"}</button>
//                                                 </form>
//                                                 <div className="w3-margin-top w3-right">
//                                                     <em className="w3-margin">Click <a onClick={this.resendHandler} className="w3-text-red">Here</a> to resend Confirmation code</em>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </Layout>
//             );
//         }
//     }
// }

// const mapStateToProps = state => {
//     return {
//         gState: state
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         verify: (user) => {
//             dispatch({
//                 type: "verify",
//                 payload: true,
//                 user: user,
//                 profile: window.location.pathname,
//             });
//         },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Verify);