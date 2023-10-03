// import React from 'react';
// import {Redirect} from "react-router-dom";
// import {PostData} from "../../services/AuthPost";
// import {GetData} from "../../services/AuthGet";
// import connect from "react-redux/es/connect/connect";

// class DirectVerify extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             code: 0,
//             success:false,
//         };
//     };

//     componentDidMount(){
//         const { token } = this.props.match.params;
//         let form={
//             code:token
//         };
//         this.setState({code: token});
//         this.verifyHandler(form);
//     }

//     verifyHandler=(form)=>{
//         PostData('/api/auth/user/activate', form).then((result)=>{
//             if(result.status === 1){
//                 GetData("/api/user").then((result)=>{
//                     const user = JSON.stringify(result.data);
//                     localStorage.setItem('user', user);
//                     this.props.verify(result.data);
//                     this.setState({success:true})
//                 })
//             }else{
//                 window.location = "/verify";
//             }
//         })
//     };

//     render() {
//         if (this.state.success){
//             return <Redirect to="/verify"/>;
//         }
//         return (
//             <div id="loader-wrapper">
//                 <div id="loader"/>
//                 <div className="loader-section section-left"/>
//                 <div className="loader-section section-right"/>
//             </div>
//         )

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
// export default connect(mapStateToProps, mapDispatchToProps)(DirectVerify);
