// import Shopping from "../Shopping";
import '../Shopping/ShoppingPage.css'
import React, { useState } from "react";
import Footer from "../common/Footer";
import Services from '../ServicesPage/Services';
import HeaderPage from '../common/HeaderPage';
import Navbar from '../common/Navbar';

const ServicesPage = () => {
  const [category, setCategory] = useState("skin-care");
  const eventHandler = (event) =>
  {
    setCategory (event.target.id);
  }

  return (
    <>
   <Navbar/>
      <HeaderPage title =" Services "/>

      <div className="container">
        <div className="row">
       
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
            <div className="card2 border shadow p-3 group d-flex ">
              <div className="card-body ">
                <div className=" btn-group-vertical d-flex justify-content-center" role="group" aria-label="Vertical button group" >
                  < h6 className = "headercategory">PRODUCT CATEGORIES</h6>
                  <button type="button" onClick={eventHandler} className="btn p-4 " id="skin-care">Skin Care </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="salon-services">Salon Services </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="massage">Massage </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="body-care"> Body Care </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="laser-servises"> Laser Services </button>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="col-12 col-md-8 col-lg-9 col-xxl-10 ">
            <div className="row mt-5">
            <Services categorytype = {category} />
            </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
};




export default ServicesPage;