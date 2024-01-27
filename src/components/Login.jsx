import Header from "./Header";
import '../scss/login.scss';
const Login = () => {
    return (
        <div className="login-container">

            <Header />
            <div className="login-bg-wrapper">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg'
            alt='login background' className="login-bg-image" />
            </div>

            <form className="login-form-container">
                <h1 className="login-form-text">Sign In</h1>
                <div className="login-form-input-container">
                 <input type='text' className="login-form-input" placeholder="Email or phone number"/>
                </div>
                <div className="login-form-input-container">
                    <span className="toggle-password">SHOW</span>
                    {/* <span className="toggle-password">HIDE</span> */}
                <input type='password' placeholder="Password" className="login-form-input"/>
                </div>
                <button className="login-form-btn">Sign In</button>
                <div className="login-form-checkbox-container">
                    <p className="login-form-checkbox"><input type="checkbox" /><span className="login-form-remember-text">Remember me</span></p>
                    <p className="login-form-help-text">Need help?</p>
                </div> 
            </form>
        </div>
    )
};
export default Login;