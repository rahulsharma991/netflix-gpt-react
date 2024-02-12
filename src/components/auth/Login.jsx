import Header from "../shared/Header";
import '../../scss/auth/login.scss';
import {useNavigate} from 'react-router-dom';
import { useState, useRef } from "react";
import AuthModel from '../../models/auth.ts';
import FormValidatorModel from '../../models/formValidator.ts';
const Login = () => {
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const formData = {
        email,
        password
    }
    const [inputType, setInputType] = useState('password');
    const [togglePassword,setTogglePassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const authModel = new AuthModel();
    function signupHandler() {
        return navigate('/signup');
    }
     function togglePasswordHandler() {
        setTogglePassword(!togglePassword);
        const result = togglePassword? setInputType('password'): setInputType('text')
        return result;
    }
     function signInHandler() {
        const message =  FormValidatorModel.validator(formData);
        if(Object.keys(message).length) {
            setErrorMessage(message);
            return true;
        }
        setErrorMessage({});
        authModel.authHandler(formData, 'signin', navigate);
       
    }
    return (

        <div className="login-container">
            <Header />
            <div className="login-bg-wrapper">
            <img src='/assets/netflix-login-bg.jpeg'
            alt='Netflix Login background' className="login-bg-image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="login-form-container">
                <h1 className="login-form-text">Sign In</h1>
                <div className="login-form-input-container">
                 <input ref={email} type='text' className="login-form-input" placeholder="Email or phone number"/>
                 <p className="text-red-600 text-xs mt-2">{errorMessage.email}</p>
                </div>
                <div className="login-form-input-container">
                    <span className="toggle-password" onClick={togglePasswordHandler}>{togglePassword? 'HIDE':'SHOW'}</span>
                <input ref={password} type={inputType} placeholder="Password" className="login-form-input"/>
                <p className="text-red-600 text-xs mt-2">{errorMessage.password}</p>
                </div>
                <button className="login-form-btn" onClick={signInHandler}>Sign In</button>
                <div className="login-form-checkbox-container">
                    <p className="login-form-checkbox"><input type="checkbox" /><span className="login-form-remember-text">Remember me</span></p>
                    <p>Don't have an account? <span className="login-form-help-text" onClick={signupHandler}>Sign Up</span></p>
                </div> 
               

            </form>
        </div>
    )
};
export default Login;