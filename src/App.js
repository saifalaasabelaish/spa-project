import React from 'react';
import Navbar from './components/common/Navbar';
import HomePage from "./components/Pages/ContactUsPage"
import Contact from "./components/Pages/ServicesPage";
import ServicesPage from "./components/Pages/About";
import About from './components/Pages/HomePage';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />

        </Routes>
    
    </Router>
  );
}
