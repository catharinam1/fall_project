import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import Register from './pages/register/register'
import SignIn from './pages/signIn'
import Subjects from './pages/subjects'
import Quizzes from './pages/quizzes'
import PastPapers from './pages/pastpapers'
import Biology from './pages/modules/biology'
import UserDashboard from './pages/userDashboard'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register",
        element: <Register />,
    }, 
    {
        path: "/signin",
        element: <SignIn />,
    }, 
    {
        path: "/subjects",
        element: <Subjects />,
    }, 
    {
        path: "/quizzes",
        element: <Quizzes />,
    }, 
    {
        path: "/pastpapers",
        element: <PastPapers />,
    }, 
    {
        path: "/biology",
        element: <Biology />,
    }, 
    {
        path: "/user-dashboard",
        element: <UserDashboard />,
    }, 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}/>
);

