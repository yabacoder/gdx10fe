import * as React from "react";
import { useRoutes } from "react-router-dom";
import { HomeView } from "./views/home";
import Assess from "./views/home/Assess";
// import Dashboard from "./views/dashboard";
// import Profile from "./views/dashboard/profile/Profile";
import { Login, Register } from "./views/auth";
// import Register from "./views/auth/Register/Register";
// import DefaultLayout from  './layouts/MainLayout';
// import { DeveloperLayout } from './layouts/DeveloperLayout';
// import CompanyLayout from './layouts/CompanyLayout';
import { MainLayout } from './layouts/MainLayout';
import Joblist from './views/job/list';
import JobView from './views/job/view';
import About from './views/main/About';
import Pricing from './views/main/Pricing';
import Contact from './views/main/Contact';




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

            ],
        },
        {
            path: "login",
            element: <Login />,
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
