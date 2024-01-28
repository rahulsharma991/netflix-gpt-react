import Header from "../Header";
import '../../scss/auth/login.scss';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
const Login = () => {
    const [inputType, setInputType] = useState('password');
    const [togglePassword,setTogglePassword] = useState(false);
    const navigate = useNavigate();

    function signupHandler() {
        return navigate('/signup');
    }
    function togglePasswordHandler() {
        setTogglePassword(!togglePassword);
        const result = togglePassword? setInputType('password'): setInputType('text')
        return result;
    }
    return (
        <div className="login-container">

            <Header />
            <div className="login-bg-wrapper">
            <img src='/assets/netflix-login-bg.jpeg'
            alt='Netflix Login background' className="login-bg-image" />
            </div>

            <form className="login-form-container">
                <h1 className="login-form-text">Sign In</h1>
                <div className="login-form-input-container">
                 <input type='text' className="login-form-input" placeholder="Email or phone number"/>
                </div>
                <div className="login-form-input-container">
                    <span className="toggle-password" onClick={togglePasswordHandler}>{togglePassword? 'HIDE':'SHOW'}</span>
                <input type={inputType} placeholder="Password" className="login-form-input"/>
                </div>
                <button className="login-form-btn">Sign In</button>
                <div className="login-form-checkbox-container">
                    <p className="login-form-checkbox"><input type="checkbox" /><span className="login-form-remember-text">Remember me</span></p>
                    <p>Don't have an account? <span className="login-form-help-text" onClick={signupHandler}>Sign Up</span></p>
                </div> 
            </form>
        </div>
    )
};
export default Login;