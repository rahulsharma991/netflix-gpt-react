import Header from "../Header";
import '../../scss/auth/login.scss';
import {useNavigate} from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    function signInHandler() {
        return navigate('/login');
    }
    return (
        <div className="login-container">

            <Header />
            <div className="login-bg-wrapper">
            <img src='/assets/netflix-login-bg.jpeg'
            alt='login background' className="login-bg-image" />
            </div>

            <form className="login-form-container">
                <h1 className="login-form-text">Sign Up</h1>
                <div className="login-form-input-container">
                 <input type='text' className="login-form-input" placeholder="Full Name"/>
                </div>
                <div className="login-form-input-container">
                 <input type='text' className="login-form-input" placeholder="Email or phone number"/>
                </div>
                <div className="login-form-input-container">
                    <span className="toggle-password">SHOW</span>
                    {/* <span className="toggle-password">HIDE</span> */}
                <input type='password' placeholder="Password" className="login-form-input"/>
                </div>
                <button className="login-form-btn">Sign Up</button>
                <div className="login-form-checkbox-container">
                    <p>Already have an account? <span className="login-form-help-text" onClick={signInHandler}>Sign In</span></p>
                </div> 
            </form>
        </div>
    )
};
export default Signup;