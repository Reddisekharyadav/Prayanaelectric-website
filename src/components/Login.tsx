import React from 'react';
import '../styles/Login.css';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import scooterImage from '../assets/scooter.png'; // Adjust the path as necessary

const Login: React.FC = () => {
    return (
        <div className='login'>
             <header className="signup-header">
                <img src={logo} alt="Company Logo" className="signup-logo" />
                <h1 className="signup-title">Electric Bike Rental</h1>
            </header>
        <div className="login-container">
            <div className="login-image-section">
                <img src={scooterImage} alt="Scooter Image" />
            </div>
            <div className="login-form-section">
                <h2>Login</h2>
                <p>Don't have an account? <a href="sign_up.html">Sign Up!</a></p>
                <div className="social-login">
                    <button className="facebook-btn">Facebook</button>
                    <button className="google-btn">Google</button>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button className="login-btn" type="submit">Sign In</button>
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me!</label>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;