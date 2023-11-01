import * as React from "react";
import { useRoutes } from "react-router-dom";
import { HomeView } from "./views/home";
import Assess from "./views/home/Assess";
// import Dashboard from "./views/dashboard";
// import Profile from "./views/dashboard/profile/Profile";
import { Login, Register, Logout } from "./views/auth";
// import Register from "./views/auth/Register/Register";
// import DefaultLayout from  './layouts/MainLayout';
// import { CompanyLayout } from './layouts/CompanyLayout';
import { DeveloperLayout } from './layouts/DeveloperLayout';
import DeveloperAccount from './views/developer/account/account';
import Settings from './views/developer/settings';
import Applied from './views/developer/applied';
import Articles from './views/developer/articles';
import Dashboard from './views/developer/dashboard';
import Project from './views/developer/project';
import Instruction from './views/developer/assessment/Instruction';
import Question from './views/developer/assessment/Question';


import CompanyLayout from './layouts/CompanyLayout';
import CompanyDashboard from './views/company/dashboard';
import CompanyJobs from './views/company/jobs';
import CompanyAddJob from './views/company/jobs/AddJob';
import CompanyJobDescription from './views/company/jobs/description';
import CompanyJobResponsibilities from './views/company/jobs/responsibilities';
import CompanyJobSkill from './views/company/jobs/skill';
import CompanyJobStack from './views/company/jobs/stack';
import CompanyCandidates from './views/company/candidates';
import CompanyCandidatesProfile from './views/company/candidates/profile';
import CompanyInterviewers from './views/company/interviewers';
import CompanySettings from './views/company/settings';
import CompanySettingsPage from './views/company/settings/Page';
import CompanySettingsPassword from './views/company/settings/Password';




import { MainLayout } from './layouts/MainLayout';
import Joblist from './views/job/list';
import JobView from './views/job/view';
import About from './views/main/About';
import Pricing from './views/main/Pricing';
import Contact from './views/main/Contact';
import Calculator from "./views/main/Calculator";
import TalentManagement from "./views/main/TalentManagement";
import Faq from "./views/main/Faq";
import Backend from "./views/main/career_path/backend";
import Frontend from "./views/main/career_path/frontend";
import Fullstack from "./views/main/career_path/fullstack";




export function Routes() {
    let element = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomeView />,
                },
                {
                    path: "jobs",
                    element: <Joblist />,
                },
                {
                    path: "talent_management",
                    element: <TalentManagement />,
                },
                {
                    path: "jobs/:id",
                    element: <JobView />,
                },
                {
                    path: "jobs/:id/:name",
                    element: <JobView />,
                },
                {
                    path: "assess",
                    element: <Assess />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "pricing",
                    element: <Pricing />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "salary_calculator",
                    element: <Calculator />,
                },
                {
                    path: "career_path/backend",
                    element: <Backend />,
                },
                {
                    path: "faq", 
                    element: <Faq />,
                },

            ],
        },
        {
            path: "/career_path",
            element: <MainLayout />,
            children: [

                {
                    path: "backend",
                    element: <Backend />,
                },
                {
                    path: "frontend",
                    element: <Frontend />,
                },
                {
                    path: "fullstack",
                    element: <Fullstack />,
                },
                // {
                //     path: "backend",
                //     element: <Backend />,
                // },
                // {
                //     path: "backend",
                //     element: <Backend />,
                // },

            ],
        },
        {
            path: "/developer",
            element: <DeveloperLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "account",
                    element: <DeveloperAccount />,
                },
                {
                    path: "project",
                    element: <Project />,
                },
                {
                    path: "assessment",
                    element: <Instruction />,
                },
                {
                    path: "assessment/question",
                    element: <Question />,
                },
                {
                    path: "applications",
                    element: <Applied />,
                },
                {
                    path: "articles",
                    element: <Articles />,
                },
                {
                    path: "profile/edit/:cv",
                    element: <Settings />,
                },
                {
                    path: "profile/edit",
                    element: <Settings />,
                },

                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "salary_calculator",
                    element: <Calculator />,
                },
                {
                    path: "talent-management",
                    element: <TalentManagement />,
                },
                {
                    path: "faq",
                    element: <Faq />,
                },

            ],
            // TalentManagement
        },
        {
            path: "/company",
            element: <CompanyLayout />,
            children: [
                {
                    index: true,
                    element: <CompanyDashboard />,
                },
                {
                    path: "jobs",
                    element: <CompanyJobs />,
                },
                {
                    path: "job/AddJob",
                    element: <CompanyAddJob />,
                },
                {
                    path: "job/JobDescription",
                    element: <CompanyJobDescription />,

                },
                {
                    path: "job/JobResponsibilities",
                    element: <CompanyJobResponsibilities />,
                },
                {
                    path: "job/JobSkill",
                    element: <CompanyJobSkill />,
                },
                {
                    path: "job/JobStack",
                    element: <CompanyJobStack />,
                },
                {
                    path: "interviewers",
                    element: <CompanyInterviewers />,
                },
                {
                    path: "candidates",
                    element: <CompanyCandidates />,
                },
                {
                    path: "candidates/profile",
                    element: <CompanyCandidatesProfile />,
                },
                {
                    path: "settings",
                    element: <CompanySettings />,
                },
                {
                    path: "settings/page",
                    element: <CompanySettingsPage />,
                },
                {
                    path: "settings/password",
                    element: <CompanySettingsPassword />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "salary_calculator",
                    element: <Calculator />,
                },
                {
                    path: "faq",
                    element: <Faq />,
                },

            ],
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "logout",
            element: <Logout />,
        },
        {
            path: "register",
            element: <Register />,
        },
        // {
        //     path: "/dashboard",
        //     element: <DashboardLayout />,
        //     children: [
        //         {
        //             index: true,
        //             element: <DashboardHome />,
        //         },

        //         {
        //             path: "invite",
        //             element: <Invite />,
        //         },
        //         {
        //             path: "players",
        //             element: <Players />,
        //         },
        //         {
        //             path: "add-player",
        //             element: <AddPlayer />,
        //         },
        //         {
        //             path: "season",
        //             element: <CreateSeason />,
        //         },
        //         // {
        //         //   path: "statistics",
        //         //   element: <Statistic />,
        //         // },
        //         // {
        //         //   path: "profile",
        //         //   element: <Profile />,
        //         // },
        //         // {
        //         //   path: "messages",
        //         //   element: <Messages />,
        //         // },
        //         {
        //             path: "settings",
        //             children: [
        //                 // {
        //                 //   index: true,
        //                 //   element: <Settings />,
        //                 // },
        //                 // {
        //                 //   path: "terms",
        //                 //   element: <Terms />,
        //                 // },
        //             ],
        //         },
        //     ],
        // },
    ]);

    return element;
}
