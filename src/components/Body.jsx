import { RouterProvider } from "react-router-dom";
import { appRoute } from "../routes/appRoute";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import {auth} from '../utils/firebase';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux-store/userSlice";
import {onAuthStateChanged} from "firebase/auth";
 

const Body = () => {
const dispatch  = useDispatch();
    function authStateChange() {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const {displayName, uid, email, photoURL} = user;
            const tokens = user.stsTokenManager;
            dispatch(addUser({displayName, uid, email,photoURL, tokens}));
        } else {
            dispatch(removeUser());
        }
        });
    }
    useEffect(() => {
        authStateChange();
    },[]);
    return (
    <RouterProvider router={appRoute} />

    );
}
export default Body;