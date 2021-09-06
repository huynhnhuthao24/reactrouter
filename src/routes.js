import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import  NotFound  from "./Components/NotFound";
import Products from "./Components/Products";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: ({match}) => <Products match={match} />
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
]

export default routes;

