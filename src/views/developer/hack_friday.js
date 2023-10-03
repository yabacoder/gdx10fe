// import React from 'react';
// import {Button} from "../statics/form";
// import Alert from "../statics/alert";
// import Countdown from 'react-countdown-now';
// import "../../assets/css/countdown.css"
// import {GetData} from "../../services/AuthGet";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Preload} from "../statics/Preloader";


// // Random component
// const Timeout = () =>{
//     return(
//         <span>Timeout!</span>
//     )
// };

// // Renderer callback with condition
// const renderer = ({days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//         // Render a completed state
//         return <Timeout />;
//     } else {
//         // Render a countdown
//         return(
//             <span>{days+"d"} : {hours+"h"} : {minutes+"m"} : {seconds+"s"}</span>
//         )
//     }
// };
// class HackFriday extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading:false,
//             preload:false,
//             start:false,
//             alert:false,
//             message:"",
//             success:false,
//             repo:"",
//             url:"",
//             comment:"",
//             submit:false,
//         }
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         Preload();
//         GetData('/api/developer/hack_friday').then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({start:true});
//             }
//             Preload(false);
//         })
//     };

//     startHandler=()=>{
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/hack_friday/start').then((result)=>{
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({start:true,alert:true, success:true, message:result.message});
//             } else{
//                 this.setState({alert:true, success:false, message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };

//     submitHandler=(e)=>{
//         e.preventDefault();
//         this.setState({loading:!this.state.loading});
//         PostData('/api/developer/hack_friday/submit', this.state).then((result)=>{
//             if (result.status===1){
//                 this.setState({alert:true,message:result.message, success:true, start:false})
//             } else{
//                 this.setState({alert:true,message:result.error})
//             }
//             this.setState({loading:!this.state.loading});
//         })
//     };
//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//     };
//     render() {
//         const state = this.state;
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container" style={{maxWidth:700}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="page-inner resumeadd-form">
//                                         <h4>Hack Friday</h4>
//                                         <div>
//                                             <Alert display={state.alert} onClick={()=>{this.setState({alert:false})}} message={state.message} success={state.success}/>
//                                             <p>Are you a script kiddie? Want to show your prowes? Take part in our hack Friday hackathon. We post a question online and you are expected to finish it within 2hrs. Best answer and the first to submit gets 20k.</p>
//                                             {state.start?<Question data={state} onSubmit={this.submitHandler} onChange={this.onChange} loading={state.loading}/>:
//                                                 <div className="col-lg-12 w3-margin-bottom">
//                                                     <Button title={"Start"} onClick={()=>{this.startHandler()}} loading={state.loading}/>
//                                                 </div>
//                                             }
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

// function Question(props){
//     return(
//         <div>
//             <h5>Task</h5>
//             <div className="question w3-margin-bottom w3-border">
//                 <div dangerouslySetInnerHTML={{__html: props.data.task}} />
//             </div>
//             <div>
//                 <h6><strong>Countdown:</strong> <Countdown date={props.data.countdown.date} renderer={renderer}/></h6>
//             </div>
//             {props.data.submit?
//                 <form onSubmit={props.onSubmit}>
//                     <span className="pf-title">Github</span>
//                     <div className="pf-field">
//                         <input type="test" name="repo" onChange={props.onChange} required/>
//                     </div>
//                     <span className="pf-title">Test Url</span>
//                     <div className="pf-field">
//                         <input name="url" type="text" onChange={props.onChange} required/>
//                     </div>
//                     <span className="pf-title">Comment</span>
//                     <div className="pf-field">
//                         <textarea name="comment" onChange={props.onChange}/>
//                     </div>
//                     <div className="justify-content-end">
//                         <div>
//                             <Button title="Submit" loading={props.loading}/>
//                         </div>
//                     </div>
//                 </form>:
//                 <div className="justify-content-end">
//                     <button name="submit" value={true} onClick={props.onChange}>Submit</button>
//                 </div>
//             }
//         </div>
//     )
// }

// export default HackFriday;
