<<<<<<< HEAD
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
      
        <Routes>
          <Route path="/About" element={<AboutUsPage  />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/ShoppingPage" element={<ShoppingPage />} />
          <Route path="/BookingPage" element={<BookingPage/>} />
        </Routes>
    
    </Router>
  );
}
=======
import Shoppinglabel from "./components/Pages/ShoppingPage";






    function App() {
      return(
      <div>
        <Shoppinglabel/>
      </div>
      );
      
    }
      
    
    export default App;
>>>>>>> 37ac6e06a0896a87d69da9407fd804c13e0bfa0f
