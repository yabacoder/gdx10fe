// import React from 'react';
// import {Button} from "../statics/form";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";

// class ChangePassword extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             confirm: "",
//             loading:false,
//             password:"",
//             errors:[],
//         };
//     };

//     passwordHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading, errors:"",});
//         PostData('/api/password/change', this.state).then((result)=>{
//             this.setState({loading:!this.state.loading});
//             if(result.status === 1){
//                 this.setState({
//                     old_password:"",
//                     password:"",
//                     password_confirmation:"",
//                 });
//                 alert(result.message)
//             }else if(result.status === 0){
//                 this.setState({errors:{old_password:result.error}});
//                 alert(result.error)
//             }else{
//                 this.setState({errors:result.errors})
//             }
//         })
//     };

//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//     };

//     validate =(e) =>{
//         this.setState({confirm:e.target.value});
//         // if (this.state.confirm === this.state.new_password){
//         //     this.setState({match:true});
//         // }
//     };

//     render() {
//         const state= this.state;
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container" style={{maxWidth:700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="padding-left">
//                                         <div className="manage-jobs-sec">
//                                             <h3>Change Password</h3>
//                                             <div className="change-password">
//                                                 <form onSubmit={this.passwordHandler}>
//                                                     <div className="row">
//                                                         <div className="col-lg-8">
//                                                             <span className="pf-title">Old Password</span>
//                                                             <div className="pf-field">
//                                                                 <input className={state.errors.old_password?"w3-border w3-border-red":""} value={this.state.old_password} onChange={this.onChange} name="old_password" type="password"/>
//                                                             </div>
//                                                             <span className="pf-title">New Password</span>
//                                                             <div className="pf-field">
//                                                                 <input className={state.errors.password?"w3-border w3-border-red":""} value={this.state.password} onChange={this.onChange} name="password" type="password"/>
//                                                             </div>
//                                                             <span className="pf-title">Confirm Password</span>
//                                                             <div className="pf-field">
//                                                                 <input className={state.errors.password?"w3-border w3-border-red":""} value={this.state.password_confirmation} onChange={this.onChange} name="password_confirmation" type="password"/>
//                                                             </div>
//                                                             <Button title="Change" loading={state.loading}/>
//                                                         </div>
//                                                         <div className="col-lg-4 w3-hide-small w3-hide-medium">
//                                                             <i className="la la-key big-icon"/>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//         )
//     }
// }


// export default ChangePassword;
