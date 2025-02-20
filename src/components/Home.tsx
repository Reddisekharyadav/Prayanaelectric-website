import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Electric Bike Rental</h1>
            <p>Your adventure starts here!</p>
            <div className="home-links">
                <Link to="/Features" className="button">Features</Link>
                <Link to="/Performance" className="button">Performance</Link>
                <Link to="/Booking" className="button">Book Now</Link>
                <Link to="/AboutUs" className="button">About Us</Link>
                <Link to="/LocateUs" className="button">Locate Us</Link>
                <Link to="/Login" className="button">Login</Link>
                <Link to="/Signup" className="button">Sign Up</Link>
            </div>
        </div>
    );
};

export default Home;