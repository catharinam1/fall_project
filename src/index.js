import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"
import Register from './pages/register'
import SignIn from './pages/signIn'

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
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider router={router}/>
);

