import React, { useState } from 'react';
import '../styles/Features.css';
import scooterImage from '../assets/scooter.png';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import NavbarLinks from './Navbar'; // Adjust the path as necessary

const Features: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    const handleAnimation = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 2000); // Duration of the animation
    };

    return (
        <div>
             <section className="hero">
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

                <div className="bike-image1">
                    <img
                        src={scooterImage}
                        alt="Prayana Electric Bike"
                        className={animate ? 'animate' : ''}
                        onClick={handleAnimation}
                    />
                </div>
                <div className="features">
                    <div className="feature-item"><strong>Long Battery Life:</strong> Lasts for extended periods, reducing frequent charging interruptions.</div>
                    <div className="feature-item"><strong>Anti-Theft System:</strong> GPS tracking allows real-time monitoring on your mobile device.</div>
                    <div className="feature-item"><strong>Geofencing Alerts:</strong> Notifies you if the bike crosses a set radius.</div>
                    <div className="feature-item"><strong>Real-Time Pothole Detection:</strong> AI detects potholes to enhance rider safety.</div>
                    <div className="feature-item"><strong>Intelligent Battery:</strong> AI evaluates battery condition, charge capacity, and health status.</div>
                    <div className="feature-item"><strong>Enhanced Safety:</strong> Includes thermal protection, short-circuit prevention, and overcharge safeguards.</div>
                    <div className="feature-item"><strong>Eco Friendly:</strong> Recyclable batteries adhering to sustainability standards.</div>
                    <div className="feature-item"><strong>Weather Resistant:</strong> Withstands diverse environmental conditions.</div>
                    <div className="feature-item"><strong>Fast Charging:</strong> Reduces downtime with faster recharge cycles.</div>
                    <div className="feature-item"><strong>Lightweight Design:</strong> Portable without compromising capacity.</div>
                    <div className="feature-item"><strong>User Friendly Integration:</strong> Provides comprehensive battery analytics and recommendations.</div>
                    <div className="feature-item"><strong>Instant Mobile Notifications:</strong> Sends alerts for unauthorized movement.</div>
                </div>
            </section>
        </div>
    );
};

export default Features;