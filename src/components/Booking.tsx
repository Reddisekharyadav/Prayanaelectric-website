import React, { useState } from 'react';
import '../styles/Booking.css';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import NavbarLinks from './Navbar'; // Adjust the path as necessary

const Booking: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle booking logic here
        console.log('Booking details:', { name, email, date, time });
    };

    return (
        <div className="booking-container">
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
            <h2>Book Your Electric Bike</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        title="Name"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        title="Email"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                        title="Date"
                        placeholder="Select a date"
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                        title="Time"
                        placeholder="Select a time"
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default Booking;