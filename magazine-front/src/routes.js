import React from "react";
import { Redirect } from "react-router-dom";

// Route Templates
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Page404 from "./components/common/Page404/Page404";

export default [
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/main" />
    },
    {
        path: "/main",
        component: Main
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        component: Page404
    }
];
