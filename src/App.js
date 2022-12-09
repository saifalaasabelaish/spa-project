import React from 'react';
import Navbar from './components/common/Navbar.js';
import HomePage from "./components/Pages/HomePage"
import Contact from "./components/Pages/ContactUsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import About from './components/Pages/About.js';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
   
   <Navbar/>
      
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/ServicesPage">Services</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />

        </Routes>
      </div>
    </Router>
  );
}

