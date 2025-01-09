import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Electric Bike Rental</h1>
            <p>Your adventure starts here!</p>
            <div className="home-links">
                <Link to="/features">Features</Link>
                <Link to="/performance">Performance</Link>
                <Link to="/booking">Book Now</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/locate-us">Locate Us</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Home;