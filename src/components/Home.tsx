import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import NavbarLinks from './Navbar';

const Home: React.FC = () => {
    return (
        <div className="home">
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

            <h1>Welcome to Electric Bike Rental</h1>
            <p>Your adventure starts here!</p>
            <div className="company-info">
                <p>We provide top-quality electric bikes for rent, ensuring a smooth and eco-friendly ride.</p>
                <p>Our bikes are equipped with the latest technology, offering multiple riding modes and a range of up to 100 km per charge.</p>
                <p>Safety is our priority, with advanced brakes and anti-skid tires for a secure ride.</p>
                <p>Whether you're commuting, exercising, or exploring, our e-bikes are perfect for all your needs.</p>
            </div>
        </div>
    );
};

export default Home;