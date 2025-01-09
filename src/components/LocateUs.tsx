import React from 'react';
import '../styles/LocateUs.css'; // Import the CSS file for styling

const LocateUs: React.FC = () => {
    return (
        <div className="locate-us">
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