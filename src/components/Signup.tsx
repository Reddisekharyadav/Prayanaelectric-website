import React from 'react';
import '../styles/Signup.css';
import logo from '../assets/logo.png';
import bikeImage from '../assets/Bike.png';

const SignUp: React.FC = () => {
    return (
        <div className='signup'>
           {/* Header */}
           <header className="signup-header">
                <img src={logo} alt="Company Logo" className="signup-logo" />
                <h1 className="signup-title">Electric Bike Rental</h1>
            </header>
        <div className="signup-container">
         

            <div className="signup-image-section">
                <img src={bikeImage} alt="Scooter Image" className="signup-bike-image" />
            </div>
            <div className="signup-form-section">
                <h2>Create Account</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <div className="signup-name-fields">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="text" placeholder="Phone Number" required />
                    <input type="submit" value="Sign Up" />
                    <a href="login1.html">Already have an account? Login</a>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignUp;