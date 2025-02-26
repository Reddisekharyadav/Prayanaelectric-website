import React from 'react';
import '../styles/AboutUs.css'; 
// import sudhaMathe from '../assets/images/sudha_mathe.jpg';
// import shailajMakapuram from '../assets/images/shailaj_makapuram.jpg';
// import lohitApuroop from '../assets/images/lohit_apuroop.jpg';
// import ritikaReddy from '../assets/images/ritika_reddy.jpg';
// import anishBhaktula from '../assets/images/anish_bhaktula.jpg';
import sekhar from '../assets/sekhar.jpg';
import NavbarLinks from './Navbar';
import logo from '../assets/logo.png';
import abinayi from '../assets/abinay.jpg';

const About: React.FC = () => {
    return (
        <div className="about">{/* Navbar */}
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
            {/* Full-Screen About Us Section */}
            <section className="about-section">
                     
                <div className="content">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <span className="highlight">PrayanaElectric</span> – your gateway to the future of transportation! We're here to transform the way you commute, combining adventure, sustainability, and cutting-edge innovation into every ride. We're redefining mobility with innovation and sustainability at the forefront. Our mission is to make daily commutes exciting, effortless, and eco-friendly through our range of electric bikes. We envision a future where every ride contributes to reducing carbon footprints while delivering unmatched performance and style.
                    </p>

                    <p>
                        At Prayana Electric, our e-bikes are designed to meet the demands of modern transportation. With precision engineering, smart technology, and sleek aesthetics, our bikes offer smooth, safe, and efficient rides for urban commuters and adventure seekers alike. Whether navigating through city streets or exploring scenic trails, we ensure you travel in comfort and with confidence.
                    </p>

                    <p>
                        We are dedicated to turning your journeys into experiences, combining practicality with joy. Our bikes are equipped with advanced features like AI-driven battery management, IoT-enabled anti-theft systems, and pothole detection technology, making every ride as safe and convenient as it is sustainable. With Prayana Electric, you're choosing innovation that goes beyond expectations.
                    </p>

                    <p>
                        Join us as we revolutionize transportation across India, one electric bike at a time. At Prayana Electric, we stand for Precision, Protection, and Positivity, blending cutting-edge technology with environmental consciousness. Together, let's ride into a cleaner, greener, and smarter future. Happy Riding!
                    </p>

                    <p className="details"><strong>Our Specialties:</strong> Electric Vehicle Manufacturing, Electric Mobility, and E-Bikes</p>
                    <p className="details"><strong>Company Size:</strong> 11 – 15 Employees</p>
                    <p className="details"><strong>Headquarters:</strong> Amaravati, Andhra Pradesh</p>
                </div>
            </section>

            {/* Team Section Appears on Scroll */}
            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-container">
                    <div className="team-member">
                        {/* <img src={sudhaMathe} alt="Dr. Sudha Ellison Mathe" /> */}
                        <div className="team-info">
                            <h3 className="green-text">Dr. Sudha Ellison Mathe</h3>
                            <p>CEO & Founder – PrayanaElectric Pvt. Ltd.<br />Deputy Director, IIEC, VIT-AP</p>
                        </div>
                    </div>

                    <div className="team-member">
                        {/* <img src={shailajMakapuram} alt="Shailaj Goud Makapuram" /> */}
                        <div className="team-info">
                            <h3 className="green-text">Shailaj Goud Makapuram</h3>
                            <p>Lead – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={sekhar} alt="Marugani Reddi sekhar" />
                        <div className="team-info">
                            <h3 className="green-text">Marugani Reddi sekhar</h3>
                            <p>Web developer – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={abinayi} alt="Manikanti abinay babu" />
                        <div className="team-info">
                            <h3 className="green-text">Manikanti abinay babu</h3>
                            <p>Web developer – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>
                    

                    <div className="team-member">
                        {/* <img src={lohitApuroop} alt="Lohit Apuroop" /> */}
                        <div className="team-info">
                            <h3 className="green-text">Lohit Apuroop</h3>
                            <p>Marketing Dept – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>

                    <div className="team-member">
                        {/* <img src={ritikaReddy} alt="Ritika Reddy" /> */}
                        <div className="team-info">
                            <h3 className="green-text">Ritika Reddy</h3>
                            <p>IoT Dept – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>

                    <div className="team-member">
                        {/* <img src={anishBhaktula} alt="Anish Bhaktula" /> */}
                        <div className="team-info">
                            <h3 className="green-text">Anish Bhaktula</h3>
                            <p>Web Development – PrayanaElectric Pvt. Ltd.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;