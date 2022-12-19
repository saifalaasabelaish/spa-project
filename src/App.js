import React from 'react';
import HomePage from "./components/Pages/HomePage"
import ContactPage from './components/Pages/ContactUsPage';
import ServicesPage from "./components/Pages/ServicesPage";
import AboutUsPage  from './components/Pages/AboutUsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingPage from './components/Pages/ShoppingPage';
import BookingPage from './components/Pages/BookingPage';
import BackandNeckMassage from './components/ServicesPages/BackandNeckMassage';
import BodyHydration from './components/ServicesPages/BodyHydration';
import CellRegeneration from './components/ServicesPages/CellRegeneration';
import FaceLaser from './components/ServicesPages/FaceLaser';
import FullBody from './components/ServicesPages/FullBody';
import HandsLaser from './components/ServicesPages/HandsLaser';
import LegsLaser from './components/ServicesPages/LegsLaser';
import Makeup from './components/ServicesPages/Makeup';
import Mesotherapy from './components/ServicesPages/Mesotherapy';
import MoroccanBath from './components/ServicesPages/MoroccanBath';
import PeelingSkin from './components/ServicesPages/PeelingSkin';
import Sauna from './components/ServicesPages/Sauna';
import SkinCare from './components/ServicesPages/SkinCarePage';
import TherapeuticMassage from './components/ServicesPages/TherapeuticMassage';
import TurkishBath from './components/ServicesPages/TurkishBath';

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
          {/* Services Pages */}
          <Route path="/BackandNeckMassagePage" element={<BackandNeckMassage/>} />
          <Route path="/BodyHydrationPage" element={<BodyHydration />} />
          <Route path="/CellRegenerationPage" element={<CellRegeneration />} />
          <Route path="/FaceLaserPage" element={<FaceLaser />} />
          <Route path="/FullBodyPage" element={<FullBody />} />
          <Route path="/HandsLaserPage" element={<HandsLaser/>} />
          <Route path="/LegsLaserPage" element={<LegsLaser />} />
          <Route path="/MakeupPage" element={<Makeup />} />
          <Route path="/MesotherapyPage" element={<Mesotherapy />} />
          <Route path="/MoroccanBathPage" element={<MoroccanBath/>} />
          <Route path="/PeelingSkinPage" element={<PeelingSkin />} />
          <Route path="/SaunaPage" element={<Sauna />} />
          <Route path="/SkinCarePage" element={<SkinCare />} />
          <Route path="/TherapeuticMassagePage" element={<TherapeuticMassage/>} />
          <Route path="/TurkishBathPage" element={<TurkishBath />} />
        </Routes>
    
    </Router>
  );
}

