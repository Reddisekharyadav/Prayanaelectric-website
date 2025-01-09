import React from 'react';
import '../styles/Performance.css'; // Import the CSS file for styling

const Performance: React.FC = () => {
    return (
        <div className="performance">
            <h1>Performance of Our Electric Bikes</h1>
            <p>Our electric bikes are designed for optimal performance, offering a smooth and efficient ride.</p>
            <ul>
                <li>Top Speed: 28 mph</li>
                <li>Range: Up to 50 miles on a single charge</li>
                <li>Battery: High-capacity lithium-ion battery</li>
                <li>Weight: Lightweight frame for easy handling</li>
            </ul>
            <p>Experience the thrill of riding with our state-of-the-art electric bikes!</p>
        </div>
    );
};

export default Performance;