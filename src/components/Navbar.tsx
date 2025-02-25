// filepath: /c:/Users/reddi/mango/project/reactproject/prayana/electric-bike-rental/src/components/NavbarLinks.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavbarLinks: React.FC = () => {
    return (
        <div className="navbar-links">
            <ul className="navbar-menu">
                <li><Link to="/" className="navbar-item">Home</Link></li>
                <li><Link to="/Model" className="navbar-item">Model</Link></li>
                {/* <li><Link to="/Battery" className="navbar-item">Battery</Link></li> */}
                <li><Link to="/Features" className="navbar-item">Features</Link></li>
                {/* <li><Link to="/Performance" className="navbar-item">Performance</Link></li> */}
                <li><Link to="/LocateUs" className="navbar-item">Locate Us</Link></li>
                <li><Link to="/Booking" className="navbar-item">Book Now</Link></li>
                <li><Link to="/AboutUs" className="navbar-item">About Us</Link></li>
                <li><Link to="/Login" className="navbar-item">Login</Link></li>
                <li><Link to="/Signup" className="navbar-item">Sign Up</Link></li>
            </ul>
        </div>
    );
};

export default NavbarLinks;