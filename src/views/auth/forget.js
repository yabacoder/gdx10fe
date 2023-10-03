// import React from 'react';
// import {Link} from "react-router-dom";
// import Alert from "../statics/alert";
// import {Button} from "../statics/form";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";

// class Forget extends React.Component {
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

//     forgotPassword=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/password/token', this.state).then((result)=>{
//             this.setState({loading:!this.state.loading});
//             if (result.status===1){
//                 this.setState({alert:true,success:true,message:result.message})
//             }else{
//                 // this.setState({alert:true,message:result})
//                 console.log(result)
//             }
//         })
//     };


//     render() {
//         const {loading, alert, success, message} = this.state;
//         return (
//             <Layout>
//                 <section>
//                     <div className="block remove-bottom gray mission">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="static account-popup-area signin-popup-box">
//                                         <div className="w3-padding account-popup">
//                                             <h3>Forgot Password</h3>
//                                             <Alert display={alert} message={message} success={success}/>
//                                             <form onSubmit={this.forgotPassword}>
//                                                 <div className="cfield">
//                                                     <input type="email" placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
//                                                     <i className="la la-envelope-o"/>
//                                                 </div>
//                                                 <Button loading={loading} title="Submit"/>
//                                                 <Link to="/login">Login</Link>
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

// export default Forget;