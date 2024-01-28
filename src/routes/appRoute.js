import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Browse from "../components/Browse";

export const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    },
    {
        path: 'signup',
        element: <Signup />
    }
   
]);