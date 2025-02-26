import React from 'react';
import '../styles/LocateUs.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Import the logo image
import NavbarLinks from './Navbar'; // Import the NavbarLinks component

const LocateUs: React.FC = () => {
    return (
        <div className="locate-us">
            {/* Navbar */}
            <nav className="navbar">
                <a href="#">
                    <img src={logo} alt="E-Bike Logo" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavbarLinks />
                <div className="navbar-actions">
                    <button className="action-button">Book Now</button>
                    <button className="action-button">Test Ride</button>
                    
                </div>
            </nav>
            <h1>Locate Us</h1>
            <p>Find our rental locations easily!</p>
            <ul>
                <li>Location 1: Address, City, State</li>
                <li>Location 2: Address, City, State</li>
                <li>Location 3: Address, City, State</li>
            </ul>
            <p>For more information, contact us at: <a href="mailto:info@electricbikerental.com">info@electricbikerental.com</a></p>
        </div>
    );
};

export default LocateUs;