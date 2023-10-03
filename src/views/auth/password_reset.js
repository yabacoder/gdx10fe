// import React from 'react';
// import {Button} from "../statics/form";
// import Alert from "../statics/alert";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Alerts} from "../statics/session_alert";
// import connect from "react-redux/es/connect/connect";
// import {Redirect} from "react-router-dom";

// class PasswordReset extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email:"",
//             loading:false,
//             alert:false,
//             success:false,
//             message:"",


//         }
//     }

//     componentDidMount(){
//         const { token } = this.props.match.params;
//         this.setState({token:token});
//         this.props.onRedirect("/");
//     }

//     resetPassword=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/password/reset', this.state).then((result)=>{
//             this.setState({loading:!this.state.loading});
//             if(result.status === 1){
//                 Alerts('success', result.message);
//                 this.setState({success:true})

//             }else{
//                 this.setState({alert:true,success:false, message:result.error})
//             }
//         })
//     };

//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//     };


//     render() {
//         const state= this.state;
//         if (this.props.gState.authReducer.authenticated){
//             return <Redirect to="/"/>
//         }
//         else if (state.success){
//             return (
//                 <Redirect to="/login" />
//             )
//         }
//         return (
//             <Layout>
//                 <section>
//                     <div className="block remove-bottom gray">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="static account-popup-area signin-popup-box">
//                                         <div className="w3-padding account-popup">
//                                             <h3>Reset Password</h3>
//                                             <form onSubmit={this.resetPassword}>
//                                                 <Alert display={state.alert} message={state.message} success={state.success}/>
//                                                 <div className="cfield">
//                                                     <input type="password" placeholder="New Password" name='password' onChange={this.onChange}/>
//                                                     <i className="la la-key"/>
//                                                 </div>
//                                                 <div className="cfield">
//                                                     <input type="password" placeholder="Confirm Password" name='password_confirmation' onChange={this.onChange}/>
//                                                     <i className="la la-key"/>
//                                                 </div>
//                                                 <Button title="Submit" loading={state.loading}/>
//                                             </form>
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

// const mapStateToProps = state => {
//     return {
//         gState: state
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         onRedirect: (redirect) => {
//             dispatch({
//                 type: "redirect",
//                 payload: redirect,
//             });
//         },
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
