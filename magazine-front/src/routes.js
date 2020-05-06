import React from "react";
import { Redirect } from "react-router-dom";

// Route Templates
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Page404 from "./components/common/page404/Page404";
import ChairmanAndCEO from './components/chairman-and-ceo/ChairmanAndCEO';

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
        path: "/chairman-and-ceo",
        component: ChairmanAndCEO
    },
    {
        component: Page404
    }
];
