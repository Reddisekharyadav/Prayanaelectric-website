import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Booking from './components/Booking';
import Features from './components/Features';
import LocateUs from './components/LocateUs';
import Login from './components/Login';
import Performance from './components/Performance';
import Signup from './components/Signup';
import './styles/Home.css';
import './styles/AboutUs.css';
import './styles/Booking.css';
import './styles/Features.css';
import './styles/LocateUs.css';
import './styles/Login.css';
import './styles/Performance.css';
import './styles/Signup.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/features" element={<Features />} />
        <Route path="/locate-us" element={<LocateUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;