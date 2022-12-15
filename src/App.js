import React from 'react';
import HomePage from "./components/Pages/HomePage"
import ContactPage from './components/Pages/ContactUsPage';
import ServicesPage from "./components/Pages/ServicesPage";
import AboutUsPage  from './components/Pages/AboutUsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingPage from './components/Pages/ShoppingPage';
import BookingPage from './components/Pages/BookingPage';

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
