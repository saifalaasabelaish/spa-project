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
      <div>
        <Routes>
          <Route path="/About" element={<AboutUsPage  />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/ShoppingPage" element={<ShoppingPage />} />
          <Route path="/BookingPage" element={<BookingPage/>} />
        </Routes>
      </div>
    </Router>
  );
}