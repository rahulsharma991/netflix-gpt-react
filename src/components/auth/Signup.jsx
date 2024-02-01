import Header from "../Header";
import '../../scss/auth/login.scss';
import {useNavigate} from 'react-router-dom';
import { useRef, useState } from "react";
import AuthModel from '../../models/auth.ts';
import FormValidatorModel from '../../models/formValidator.ts';
const Signup = () => {
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState({});
    const [togglePassword,setTogglePassword] = useState(false);
    const [inputType, setInputType] = useState('password');
    const formData = {
        name,
        email,
        password
    }
    function signInHandler() {
        return navigate('/login');
    }
    function signUpHandler() {
        const message =  FormValidatorModel.validator(formData);
        console.log(message)
        if(Object.keys(message).length) {
            setErrorMessage(message);
            return true;
        }
        setErrorMessage({});
        console.log('no error')
             AuthModel.authHandler(formData);
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
            alt='login background' className="login-bg-image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()}  className="login-form-container">
                <h1 className="login-form-text">Sign Up</h1>
                <div className="login-form-input-container">
                 <input type='text' ref={name} className="login-form-input" placeholder="Full Name"/>
                 <p className="text-red-600 text-xs mt-2">{errorMessage.name}</p>
                </div>
                <div className="login-form-input-container">
                 <input type='text' ref={email} className="login-form-input" placeholder="Email or phone number"/>
                 <p className="text-red-600 text-xs mt-2">{errorMessage.email}</p>
                </div>
                <div className="login-form-input-container">
                <span className={errorMessage.password? 'bottom-0 toggle-password': 'toggle-password'} onClick={togglePasswordHandler}>{togglePassword? 'HIDE':'SHOW'}</span>
                    {/* <span className="toggle-password">HIDE</span> */}
                <input type={inputType} ref={password} placeholder="Password" className="login-form-input"/>
                <p className="text-red-600 text-xs mt-2">{errorMessage.password}</p>
                </div>
                <button className="login-form-btn" onClick={signUpHandler}>Sign Up</button>
                <div className="login-form-checkbox-container">
                    <p>Already have an account? <span className="login-form-help-text" onClick={signInHandler}>Sign In</span></p>
                </div> 
            </form>
        </div>
    )
};
export default Signup;