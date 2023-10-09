import React, { useState } from 'react'
import Layout from "./layout";
import RightNav from './utils/RightNav';

function Articles() {
    //const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="flex ">
                <div className="w-8/12 bg-white rounded-md shadow-sm highlights">
                    <div className="flex items-center justify-between p-5 mt-10">
                        <div>
                           <p className="font-bold"> My Articles</p> 
                        </div>
                        <div>
                            <button className="p-2 text-red-600 bg-white border border-red-600 rounded-md btn"> Add Post +</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between p-3 m-4 bg-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                                <div>
                                <img src="https://images.unsplash.com/photo-1568441303064-f0a709a84e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=50&q=80" className="w-20 h-20 p-2 rounded-md" /> 
                                </div>
                                <div className="ml-2">
                                    <p className="font-bold">Attracting Right Talent in a Competitive 
Talent Market</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-4xl text-yellow-500">&bull;</span> Pending
                                </div>
                                <div className="ml-2">
                                    Actions
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 m-4 bg-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                                <div>
                                <img src="https://images.unsplash.com/photo-1568441303064-f0a709a84e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=50&q=80" className="w-20 h-20 p-2 rounded-md" /> 
                                </div>
                                <div className="ml-2">
                                    <p className="font-bold">Attracting Right Talent in a Competitive 
Talent Market</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-4xl text-yellow-500">&bull;</span> Pending
                                </div>
                                <div className="ml-2">
                                    Actions
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 m-4 bg-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                                <div>
                                <img src="https://images.unsplash.com/photo-1568441303064-f0a709a84e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=50&q=80" className="w-20 h-20 p-2 rounded-md" /> 
                                </div>
                                <div className="ml-2">
                                    <p className="font-bold">Attracting Right Talent in a Competitive 
Talent Market</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-4xl text-yellow-500">&bull;</span> Pending
                                </div>
                                <div className="ml-2">
                                    Actions
                                </div>
                            </div>
                        </div>
                    </div>
                    
                <div className="absolute inset-0 flex justify-end hidden h-screen bg-gray-800 bg-opacity-50">
                    <div className="w-1/2" >
                        
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-end">
                            <div>
                                <button>X</button>
                            </div>
                        </div>
                        <div className="p-5 border-b">
                            <h6>New Article</h6>
                        </div>
                        <div className="mt-10 ">             
                            <p>Title</p>
                            <input type="text" className="w-full mt-3 form-input"/>    
                        </div>
                        <div>
                            <p>Cover Image</p>
                        </div>
                        <div className="mt-10 ">             
                            <p>Content</p>
                            <textarea className="form-textarea" >
                                
                            </textarea>
                        </div>

                        <div className="mt-10">
                            <button className="w-full px-5 py-3 btn"> Post Article &gt; </button>
                        </div>
                    </div>
                    
                </div>
                    
                </div>

                
                
                <div className="flex flex-col w-4/12 max-h-screen p-5 ml-5 topNews">
                    <RightNav/>
                </div>

                
                
            </div>
        </>
    )
}

export default Articles

// import React from 'react';
// import {Preload} from "../statics/Preloader";
// import {GetData} from "../../services/AuthGet";
// import {PostData} from "../../services/AuthPost";
// import Layout from "../statics/layout";
// import {Link} from "react-router-dom";

// class DevArticles extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount(){
//         window.scroll(0,0);
//         this.fetch();
//     }

//     fetch=()=>{
//         Preload();
//         GetData("/api/developer/articles").then((result)=>{
//             if (result.status===1){
//                 this.setState({data:result.data})
//             }
//             Preload(false);
//         })
//     };

//     deleteHandler=(e)=>{
//         e.preventDefault();
//         if (window.confirm('Are you sure?')){
//             PostData("/api/developer/application/delete/"+e.target.id).then((result)=>{
//                 if(result.status===1){
//                     this.fetch();
//                 }
//             })
//         }

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
//                                     <div className="page-inner resumeadd-form">
//                                         <div className="manage-jobs-sec" style={{overflow:"scroll"}}>
//                                             <h3>Articles</h3>
//                                             <div className="col-12 w3-right download-cv">
//                                                 <Link to={"/articles/post"}><i className="la la-plus"/> Post New</Link>
//                                             </div>
//                                             <table>
//                                                 <thead>
//                                                 <tr>
//                                                     <td>Title</td>
//                                                     <td>Status</td>
//                                                     <td></td>
//                                                 </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                 {state.data.length> 0? state.data.map(data=>(
//                                                         <tr>
//                                                             <td>
//                                                                 <div className="table-list-title">
//                                                                     <i><Link to={data.status === 1?"/articles/"+data.id+"/"+data.link:"/articles/edit/"+data.id}>{data.title}</Link></i><br/>
//                                                                 </div>
//                                                             </td>
//                                                             <td>
//                                                                 <div className="table-list-title">
//                                                                     <span>{data.status === 1?"Approved":"Unapproved"}</span>
//                                                                 </div>
//                                                             </td>
//                                                             <td>
//                                                                 <ul className="action_job">
//                                                                     <li><span>Edit</span><Link to={"/articles/edit/"+data.id}><i id={data.id} className="la la-edit"/></Link></li>
//                                                                     <li><span>Delete</span><a onClick={this.deleteHandler}><i id={data.id} className="la la-trash-o"/></a></li>
//                                                                 </ul>
//                                                             </td>
//                                                         </tr>
//                                                     )):
//                                                     <tr>
//                                                         <td colSpan="3" align="center">
//                                                             <span>No Articles! <Link to={"/articles/post"}>Post New Article</Link></span>
//                                                         </td>
//                                                     </tr>
//                                                 }
//                                                 </tbody>
//                                             </table>
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

// export default DevArticles;
