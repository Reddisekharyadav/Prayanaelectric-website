import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Booking from './components/Booking';
import AboutUs from './components/AboutUs';
import LocateUs from './components/LocateUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Model from './components/Model';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/Model" element={<Model />} />
      <Route path="/Booking" element={<Booking />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/LocateUs" element={<LocateUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};

export default App;