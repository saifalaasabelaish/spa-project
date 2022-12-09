import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";

const Root= ReactDOM.createRoot(document.getElementById('root'));
Root.render(
    <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/About" element ={About}/>
        <Route path="/Contact" element ={Contact}/>
        <Route path="/Home" element ={Home}/>
        <Route path="/Services" index element ={Services}/>
      </Routes>
      </BrowserRouter>
      <App/>
    </React.StrictMode>
);
reportWebVitals();