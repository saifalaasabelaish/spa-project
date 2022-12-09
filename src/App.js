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


<<<<<<< HEAD
=======
   
    
    function App() {
      return(
       <div></div>
          
       
      );
      
    }
    
    export default App;  
>>>>>>> 27dc8a5d6fbe1bd17a88795a3fb99c3d60639c22
import Navbar from "./components/Navbar.js";


function App() {
  return (
    <Navbar>
      
<h1>ddd</h1>
</Navbar>
  );
}

export default App;
>>>>>>> fedd5d9dd831faa4aae6c45378a5f4ab62bceff6
