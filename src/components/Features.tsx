import React from 'react';
import '../styles/Features.css'; // Import the CSS file for styling

const Features: React.FC = () => {
    return (
        <div className="features">
            <h2>Features of Our Electric Bikes</h2>
            <ul>
                <li>Eco-friendly and sustainable</li>
                <li>High-performance batteries</li>
                <li>Lightweight and durable design</li>
                <li>Multiple speed settings</li>
                <li>Comfortable seating and ergonomic design</li>
                <li>GPS tracking for safety</li>
            </ul>
        </div>
    );
};

export default Features;