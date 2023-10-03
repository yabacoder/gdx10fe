// import React from 'react';
// import {Input, Textarea, Button} from "../statics/form";
// import Availability from "./availability";
// import {Link} from "react-router-dom";
// import {GetData} from "../../services/AuthGet";
// import {Get} from "../../services/Get";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Preload} from "../statics/Preloader";
// import connect from "react-redux/es/connect/connect";
// const categories = require("../../categories.json");
// const countries = require("../../countries.json");
// const states = require("../../states.json");

// class EditProfile extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name:"",
//             errors: [],
//             countries: [],
//             country_id:"160",
//             state_id:"",
//             category_id:"",
//             level_id:"",
//             states: [],
//             success:false,
//             profile:false,
//             bio:"",
//             loading:false,
//             tab:true,
//             preloader:true,
//         };
//     };
//     componentDidMount(){
//         window.scroll(0,0);
//         this.setState(sessionStorage);
//         this.setState({username:this.props.gState.authReducer.user.username});
//         Preload();
//         GetData("/api/developer/profile/edit").then((result)=> {
//             if (result.status===1){
//                 this.setState(result.data);
//                 this.setState({profile: true,});
//                 this.setState({country_id:""+result.data.country_id+"", state_id:""+result.data.state_id+"", category_id:""+result.data.category_id+""});
//             }
//             Preload(false);
//         });
//     }

//     formHandler = (e) => {
//         e.preventDefault();
//         this.setState({loading:true});
//         if (this.state.profile){
//             PostData('/api/developer/profile/edit',this.state).then((result)=>{
//                 this.setState({loading:!this.state.loading});
//                 if(result.status === 1){
//                     sessionStorage.clear();
//                     this.setState({success:true, errors:[]});
//                     alert('Profile Updated Successfully!')
//                 }else if(result.errors){
//                     this.setState({errors: result.errors});
//                     alert('Form error, kindly check and try again')
//                 }else{
//                     alert("An error occurred, please try again later")
//                 }
//             })
//         }else {
//             PostData('/api/developer/profile',this.state).then((result)=>{
//                 this.setState({loading:false});
//                 if(result.status === 1){
//                     this.setState({success:true, profile:true, tab:false});
//                 }else if(result.errors){
//                     this.setState({errors: result.errors});
//                     alert('Form error, kindly check and try again')
//                 }else{
//                     alert("An error occurred, please try again later")
//                 }
//             })
//         }
//     };

//     onChange =(e) =>{
//         this.setState({[e.target.name]:e.target.value});
//         sessionStorage.setItem(e.target.name,e.target.value);
//     };


//     render() {
//         const state = this.state;
//         const {errors, preloader, loading, profile, tab, category_id, level_id, country_id, state_id} = this.state;
//         const filtered = states.filter(t=>t.country_id === country_id);
//         return (
//             <Layout>
//                 <section>
//                     <div className="block gray mission">
//                         <div className="container" style={{maxWidth:900}}>
//                             <div className="row no-gape">
//                                 <div className="col-lg-12 column w3-white">
//                                     <div className="padding-left">
//                                         <div className="profile-title">
//                                             <div className="steps-sec">
//                                                 <h3>Profile Setup</h3>
//                                                 <div onClick={()=>{this.setState({tab:true})}} className={tab?"step active":"step"}>
//                                                     <p><i className="la la-user"/></p>
//                                                     <span>Info</span>
//                                                 </div>
//                                                 <div onClick={()=>{this.setState({tab:false})}} className={!tab?"step active":"step"}>
//                                                     <p><i className="la la-info"/></p>
//                                                     <span>Skills & Availability</span>
//                                                 </div>
//                                                 <div className={"step"}>
//                                                     <p><Link to="/assessment"><i className="la la-edit"/></Link></p>
//                                                     <span>Assessment</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {tab?
//                                             <div className="profile-form-edit">
//                                                 <form onSubmit={this.formHandler}>
//                                                     <div className="row">
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Full Name</span>
//                                                             <div className="pf-field">
//                                                                 <Input onChange={this.onChange} error={errors.name} placeholder="e.g Mike Phillips" name="name" value={this.state.name}/>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Skill Category</span>
//                                                             <div className="pf-field">
//                                                                 <select onChange={this.onChange} name="category_id" className={state.errors.category_id ? "w3-border-red" : ""}>
//                                                                     <option value="">Select</option>
//                                                                     {categories.map(data=>(
//                                                                         <option value={data.id} selected={category_id === (data.id)}>{data.name}</option>
//                                                                     ))}
//                                                                 </select>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Skill Level</span>
//                                                             <div className="pf-field">
//                                                                 <select onChange={this.onChange} name="level_id"
//                                                                         className={"w3-select w3-border w3-white w3-round-large" + " " + (this.state.errors.level_id ? "w3-border-red" : "")}>
//                                                                     <option value="">Select</option>
//                                                                     <option selected={level_id === "1" || level_id === 1}
//                                                                             value="1">Intern
//                                                                     </option>
//                                                                     <option selected={level_id === "2" || level_id === 2}
//                                                                             value="2">Junior
//                                                                     </option>
//                                                                     <option selected={level_id === "3" || level_id === 3}
//                                                                             value="3">Intermediate
//                                                                     </option>
//                                                                     <option selected={level_id === "4" || level_id === 4}
//                                                                             value="4">Advance
//                                                                     </option>
//                                                                     <option selected={level_id === "5" || level_id === 5}
//                                                                             value="5">Senior
//                                                                     </option>
//                                                                 </select>
//                                                             </div>
//                                                         </div>

//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Date Of Birth</span>
//                                                             <div className="pf-field">
//                                                                 <div className="pf-field">
//                                                                     <input name="dob" value={this.state.dob}
//                                                                            className={(errors.dob ? "w3-border-red" : "")}
//                                                                            onChange={this.onChange} type="date"
//                                                                            placeholder="30k"/>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Sex</span>
//                                                             <div className="pf-field">
//                                                                 <select onChange={this.onChange} name="sex"
//                                                                         className={"w3-select w3-border w3-white w3-round-large" + " " + (this.state.errors.sex ? "w3-border-red" : "")}>
//                                                                     <option>Select</option>
//                                                                     <option
//                                                                         selected={this.state.sex === 'Male'}>Male
//                                                                     </option>
//                                                                     <option
//                                                                         selected={this.state.sex === 'Female'}>Female
//                                                                     </option>
//                                                                 </select>
//                                                             </div>
//                                                         </div>

//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Phone Number</span>
//                                                             <div className="pf-field">
//                                                                 <Input name="phone" onChange={this.onChange} error={errors.name} value={this.state.phone}/>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Country</span>
//                                                             <div className="pf-field">
//                                                                 <select required name="country_id"
//                                                                         onChange={this.onChange}
//                                                                         className={"w3-select w3-border w3-white w3-round-large" + " " + (this.state.errors.country_id ? "w3-border-red" : "")}>
//                                                                     <option>Select Country</option>
//                                                                     {countries.map(country => (
//                                                                         <option
//                                                                             selected={country_id === country.id -0 || country_id === country.id}
//                                                                             value={country.id}>{country.name}</option>
//                                                                     ))}
//                                                                 </select>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">State</span>
//                                                             <div className="pf-field">
//                                                                 <select name="state_id" required onChange={this.onChange}
//                                                                         className={"w3-select w3-white w3-border w3-round-large" + " " + (this.state.errors.state_id ? "w3-border-red" : "")}>
//                                                                     <option>Select State</option>
//                                                                     {filtered.map(state => (
//                                                                         <option
//                                                                             selected={state_id === state.id -0 || state_id === state.id }
//                                                                             value={state.id}>{state.name}</option>
//                                                                     ))}
//                                                                 </select>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Username</span>
//                                                             <div className="pf-field">
//                                                                 <Input onChange={this.onChange} error={errors.username} placeholder="" name="username" value={this.state.username}/>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6">
//                                                             <span className="pf-title">Github Username</span>
//                                                             <div className="pf-field">
//                                                                 <Input onChange={this.onChange} error={errors.github} placeholder="Phillips_1323-324" name="github" value={this.state.github}/>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-12">
//                                                             <span className="pf-title">Bio</span>
//                                                             {errors.bio?<span className="w3-text-red">{errors.bio}</span>:""}
//                                                             <div className="pf-field">
//                                                                 <Textarea error={errors.name} required name="bio" onChange={this.onChange} value={this.state.bio}/>
//                                                             </div>
//                                                         </div>

//                                                         <div className="col-lg-12 w3-margin-bottom">
//                                                             <Button title={!profile?'Next':'Update'} icon="la la-check" loading={loading}/>
//                                                         </div>
//                                                     </div>
//                                                 </form>
//                                             </div>:
//                                             <Availability/>
//                                         }
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
// export default connect(mapStateToProps)(EditProfile);
