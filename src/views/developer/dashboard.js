import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Layout from "./layout";
import Profile from '../../components/Profile';
import profileImage from '../../assets/img/profile.png';
import useAuth from '../../hooks/useAuth';
// import http from '../../utils/service';
// import { baseURL } from '../../config';
import { useGetProfileQuery } from '../../features/developer/profileSlice';
import { useLoadRecentArticlesQuery } from '../../features/developer/articleSlice';
import {
    useLoadApplicationQuery,
    useApplyApplicationMutation,
    useDeleteApplicationMutation
} from '../../features/developer/applicationSlice';
import {
    useLoadJobQuery,
    useApplyJobMutation,
    useLoadRecentJobsQuery,
    useLoadRelatedJobsQuery
} from '../../features/developer/jobSlice';
import { curFormat } from '../../utils/general';


const Dashboard = () => {
    const { userId } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [articles, setArticles] = useState([]);
    // const [article, setArticle] = useState([]);
    const [relatedJobs, setRelatedJobs] = useState([]);

    const {
        data
    } = useGetProfileQuery();

    const {
        data: articlesData,
        isSuccess: articleIsSuccess
    } = useLoadRecentArticlesQuery();

    const {
        data: appliedJobs,
        isSuccess: appliedIsSuccess,
        isLoading
    } = useLoadApplicationQuery();

    const {
        data: relatedJobsData,
        isSuccess: relatedIsSuccess
    } = useLoadRelatedJobsQuery();


    // console.log(data, "Api call");

    /**
     * This pull the developer data from the Backend
     * TODO:
     * 1. If a user doesnt have a developer profile, notify them
     * 2. Fill other content, for respective feature
     *  (a) Total Jobs applied for; Whats the endpoint
     *  (b) Total projects applied for
     *  (c) Fetch All recent applications
     *  (d) Fetch All related jobs
     *
     */

    useEffect(() => {
        setJobs(appliedJobs?.data?.rows);
        setArticles(articlesData?.data);
        setRelatedJobs(relatedJobsData?.data?.rows);
    }, [appliedIsSuccess, relatedIsSuccess, articleIsSuccess]);
    // console.log(jobs, "Jobs");


    return (
        <div className="flex">
            <div className="w-8/12 highlights">
                <div className="flex justify-between w-full top-div">
                    <div className="w-5/12 pr-5 profile-highlight">
                        <Profile />
                    </div>
                    <div className="w-7/12 py-4 pl-5 bg-white rounded-md shadow-md recent-jobs">
                        <h5 className="text-base">Recent Applications</h5>
                        <table className="w-full mt-4 text-sm table-auto">
                            <thead>
                                <tr className="border-b">
                                    <th className="px-4 py-2 text-sm">Role</th>
                                    {/* <th className="px-4 py-2 text-sm">Location</th> */}
                                    <th className="px-4 py-2 text-sm">Status</th>
                                </tr>
                            </thead>
                            {/* {
                                isLoading && <button type="button" class="bg-indigo-500 ..." disabled>
                                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        
                                    </svg>
                                    Processing...
                                </button>
                            } */}
                            <tbody>
                                {jobs &&
                                    jobs.map((job, index) => <tr key={index}>
                                        <td className="p-2 text-sm">{job.Job.title} </td>
                                        {/* <td>{job.Job.location}</td> */}
                                        <td className="flex items-center pr-2">
                                            {' '}
                                            {job.Job.status == 1 ? (<span className="text-4xl text-green-500">
                                                &bull;
                                            </span>) : (
                                                <span className="text-4xl text-red-500">
                                                    &bull;
                                                </span>
                                            )}

                                            {/* <div className="px-4 tag "> {job.Job.status == 1 ? "Open" : "Closed"}</div> */}
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-5 mt-10 bg-white rounded-md shadow-md bottom-div">
                    <h5 className="text-base">Latest Jobs Matching Your Profile</h5>
                    <table className="w-full mt-4 text-sm table-auto">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-2">Role</th>
                                {/* <th className="px-4 py-2">Location</th> */}
                                <th className="px-4 py-2">Salary</th>
                                {/* <th className="px-4 py-2">Job Type</th> */}
                                <th className="px-4 py-2">Actions</th>
                                <th className="px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {relatedJobs &&
                                relatedJobs?.map((job, index) => (
                                    <tr className="p-5 border-b" key={index}>
                                        <td className="px-4 py-2 ">
                                            <Link
                                                className=""
                                                to={`/jobs/${job.id}`}
                                            >
                                                {job.title}
                                            </Link>
                                        </td>
                                        {/* <td>{job.location}</td> */}
                                        <td className="px-4 py-1 text-xs">
                                            {curFormat.format(job.salary)} - {curFormat.format(job.salary_max)}
                                        </td>
                                        {/* <td className="px-4 py-2 ">{job.type}</td> */}
                                        <td className="flex items-center justify-center p-5 actions">
                                            <Link
                                                className="px-4 py-2 text-sm btn"
                                                to={`/jobs/${job.id}`}
                                            >
                                                Apply
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <div className="px-4 tag "> {job.status == 1 ? "Open" : "Closed"}</div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col w-4/12 max-h-screen p-5 ml-5 bg-white rounded-md shadow-md topNews">
                <h5 className="text-base">Top Articles</h5>
                {
                    articles && articles?.map(
                        article =>
                            <div className="flex items-center justify-between px-3 py-3 my-3 bg-gray-200 rounded-lg">
                                <div className="w-4/12 pr-2 article-img">
                                    <img
                                        alt=""
                                        src={profileImage}
                                        className="object-cover w-full h-16 border-2 border-gray-100 rounded-md "
                                    />
                                </div>
                                <div>
                                    <Link to={`/articles/${article.link}`}>
                                        <h4 className="text-sm text-blue-800 font-getdevM">
                                            {article.title}
                                        </h4>
                                    </Link>
                                </div>
                            </div>
                    )
                }
                <div className="w-full py-2 text-center text-blue-800 border border-gray-300 rounded-full">
                    <Link to={"/articles"} className="w-full text-sm "> More </Link>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;

// class Dashboard extends React.Component {
//     componentDidMount(){
//         window.scroll(0,0);
//     }

//     render() {
//         return (
//             <Layout>
//                 <section>
//                     <div className="block mission">
//                         <div className="container">
//                             <h2 align="center"> <i className="la la-dashboard"/> Dashboard</h2>
//                             <div className="border row no-gape">
//                                 <div className="col-lg-12 column">
//                                     <div className="padding-left">
//                                         <div className="manage-relatedJobs-sec w3-white">
//                                             <div className="cat-sec">
//                                                 <div className="row no-gape">
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/profile">
//                                                                 <i className="la la-user "/>
//                                                                 <span>Profile</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/assessment">
//                                                                 <i className="la la-edit "/>
//                                                                 <span>Assessment</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/project">
//                                                                 <i className="la la-edit "/>
//                                                                 <span>Project</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="cat-sec">
//                                                 <div className="row no-gape">
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/dashboard/articles">
//                                                                 <i className="la la-commenting"/>
//                                                                 <span>My Articles</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/applications">
//                                                                 <i className="la la-briefcase"/>
//                                                                 <span>Applied Jobs</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-lg-4 col-md-4 col-sm-12">
//                                                         <div className="p-category">
//                                                             <Link to="/change_password">
//                                                                 <i className="la la-key"/>
//                                                                 <span>Change Password</span>
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
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

//export default Dashboard;
