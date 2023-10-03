// import React from 'react';
// import Layout from "../../statics/layout";
// import MonacoEditor from 'react-monaco-editor';
// import {GetData} from "../../../services/AuthGet";
// import {Preload} from "../../statics/Preloader";
// import {Alerts} from "../../statics/session_alert";
// import {Redirect} from "react-router-dom";
// import {PostData} from "../../../services/AuthPost";

// class CodeTest extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             code: "",
//             language: "javascript",
//             log:[],
//             theme:'vs-dark',
//             time: {},
//             seconds: 700,
//             start:true,
//             save:0

//         };
//         this.timer = 0;
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         this.startTimer();
//         this.modal();
//         Preload();
//         const log = localStorage.getItem('log');
//         if (log){
//             this.setState({log:JSON.parse(log)})
//         }
//         const seconds = localStorage.getItem("code-timer")-0;
//         GetData("/api/developer/assessment/code_test/start").then((result)=>{
//             if (result.status){
//                 this.setState(result.data);
//                 if(seconds && result.data.seconds < seconds){
//                     this.setState({seconds: result.data.seconds});
//                 }else if(seconds && result.data.seconds > seconds){
//                     this.setState({seconds: seconds});
//                 }else {
//                     this.setState({seconds: result.data.seconds});
//                 }

//             }else if (!result.status) {
//                 this.setState({start:false});
//                 Alerts('danger', result.message)
//             }
//             Preload(false);
//         })
//     }

//     modal(){
//         const modal = document.getElementById('question');
//         window.onclick = function(event) {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//             }
//         }
//     }

//     startTimer=()=> {
//         if (this.timer === 0) {
//             this.timer = setInterval(this.countDown, 1000);
//         }
//     };

//     countDown=()=> {
//         // Remove one second, set state so a re-render happens.
//         let seconds = this.state.seconds - 1;
//         this.setState({
//             time: this.secondsToTime(seconds),
//             seconds: seconds,
//         });
//         localStorage.setItem("code-timer",seconds);
//         if (this.state.save + 1 === 10){
//             PostData("/api/developer/assessment/code_test/save",this.state);
//             this.setState({save:0});
//         } else{
//             this.setState({save:this.state.save + 1});
//         }

//         // Check if we're at zero.
//         if (seconds === 0) {
//             this.formHandler()
//         }
//     };

//     secondsToTime(secs){
//         let hours = Math.floor(secs / (60 * 60));

//         let divisor_for_minutes = secs % (60 * 60);
//         let minutes = Math.floor(divisor_for_minutes / 60);

//         let divisor_for_seconds = divisor_for_minutes % 60;
//         let seconds = Math.ceil(divisor_for_seconds);

//         let obj = {
//             "h": hours,
//             "m": minutes,
//             "s": seconds
//         };
//         return obj;
//     }

//     editorDidMount(editor, monaco) {
//         console.log('editorDidMount', editor);
//         editor.focus();
//     }


//     onChange=(newValue, e)=> {
//         const d = new Date();
//         const n = d.getTime();
//         localStorage.setItem('log', JSON.stringify(this.state.log.concat({text:newValue,time:n})));
//         this.setState({code:newValue, log:this.state.log.concat({text:newValue,time:n})});
//     };

//     formHandler=(e)=>{
//         Preload();
//         localStorage.removeItem("code-timer");
//         PostData("/api/developer/assessment/code_test/submit",this.state).then(result=>{
//             if (result.status){
//                 Alerts("success",result.message);
//                 this.setState({start:false})
//             }
//             Preload(false)
//         })
//     };

//     render() {
//         const state = this.state;
//         const {code} = state;
//         const options = {
//             selectOnLineNumbers: true,
//             smoothScrolling: true
//         };
//         if (!state.start) {
//             return(
//                 <Layout>
//                     <Redirect to="/code_test"/>
//                 </Layout>
//             )
//         }
//         return (
//             <Layout>
//                 <div style={{paddingTop:100,height:1000}}>
//                     <div className="w3-row-padding w3-margin">
//                         <div className="w3-col s2 ">
//                             <select onChange={(e)=>{this.setState({language:e.target.value})}}>
//                                 {Languages.map((data,index)=>(
//                                     <option selected={data === this.state.language} key={index}>{data}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="w3-col s2 ">
//                             <select onChange={(e)=>{this.setState({theme:e.target.value})}}>
//                                 <option value="vs-dark">Darcula</option>
//                                 <option value="vs-light">Light</option>
//                             </select>
//                         </div>
//                         <div className="w3-col s4 ">
//                             <h6 className="time" align="center" >{this.state.time.m} : {this.state.time.s}</h6>
//                         </div>
//                         <div align="right" className="w3-col s2 ">
//                             <button onClick={()=>{document.getElementById('question').style.display='block'}} className="w3-blue">View Question</button>
//                         </div>
//                         <div align="right" className="w3-col s2 ">
//                             <button onClick={this.formHandler}>Save/Submit</button>
//                         </div>
//                     </div>
//                     <div style={{marginTop:-5, borderStyle:"solid",borderWidth :5 }}>
//                         <MonacoEditor
//                             width="100%"
//                             height="900"
//                             language={this.state.language}
//                             theme={this.state.theme}
//                             value={code}
//                             options={options}
//                             onChange={this.onChange}
//                             editorDidMount={this.editorDidMount}
//                         />
//                     </div>
//                 </div>

//                 <div id="question" style={{display:"block", zIndex:1}} className="w3-modal">
//                     <div className="w3-modal-content w3-animate-zoom" style={{marginTop:120}}>
//                         <div className="w3-container">
//                             <span onClick={()=>{document.getElementById('question').style.display='none'}} className="w3-button w3-display-topright">&times;</span>
//                             <p dangerouslySetInnerHTML={{__html:state.question}}/>
//                             <div className="w3-margin" align="right">
//                                 <button onClick={()=>{document.getElementById('question').style.display='none'}}>Continue to code</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Layout>
//         );
//     }
// }

// const Languages = ['apex', 'azcli', 'bat', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'less', 'lua', 'markdown', 'msdax', 'mysql', 'objective', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'solidity', 'sql', 'st', 'swift', 'typescript', 'vb', 'xml', 'yaml']

// export default CodeTest;
