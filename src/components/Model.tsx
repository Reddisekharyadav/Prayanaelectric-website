// filepath: /c:/Users/reddi/mango/project/reactproject/prayana/electric-bike-rental/src/components/Model.tsx
import React from 'react';
import '../styles/Model.css';
import logo from '../assets/logo.png';
import bikeImage from '../assets/scooter.png';
import NavbarLinks from './Navbar';

const Model: React.FC = () => {
    return (
        <div className="model-container">
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

            {/* Main Content */}
            <div className="main-content">
                {/* E-Bike Image */}
                <div className="image-container">
                    <img src={bikeImage} alt="E-Bike" className="bike-image" />
                </div>

                {/* Text Content */}
                <div className="text-content">
                    <h1 className="model-title">Model Name</h1>
                    <p className="model-description">
                        An e-bike is a modern bicycle equipped with an electric motor and rechargeable battery, offering pedal assistance or full-throttle power. It provides an eco-friendly and energy-efficient alternative to traditional transportation, emitting zero emissions. Designed for convenience, e-bikes feature multiple riding modes, a durable frame, and a range of up to 100 km per charge. Safety features like advanced brakes and anti-skid tires ensure a smooth ride. Perfect for commuting, fitness, or leisure, e-bikes redefine sustainable mobility.
                    </p>
                    <p className="introductory-price">Introductory Price ₹</p>
                    <button className="book-now-button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Model;