import React, { useState } from "react";
import Footer from "../common/Footer";
import Services from '../ServicesPage/Services';
import HeaderPage from '../common/HeaderPage';
import Navbar from '../common/Navbar';

const ServicesPage = () => {
  const [category, setCategory] = useState("skin-care");
  const eventHandler = (event) => {
    setCategory(event.target.id);
  }
  return (
    <>
      <Navbar />
      <HeaderPage title=" Services " />
      <div className="ser container">
        <div className="row">
          <div className="col-12 ">
            <div className="filser w-100 border shadow p-1 group d-flex ">
              <div className="card-body ">
                <div className=" btn-group d-flex justify-content-center" role="group" aria-label="button group" >
                  <button onClick={eventHandler} className="btn p-4 " id="skin-care">Skin Care </button>
                  <button onClick={eventHandler} className="btn p-4" id="salon-services">Salon Services </button>
                  <button onClick={eventHandler} className="btn p-4" id="massage">Massage </button>
                  <button onClick={eventHandler} className="btn p-4" id="body-care"> Body Care </button>
                  <button onClick={eventHandler} className="btn p-4" id="laser-servises"> Laser Services </button>
                </div>
              </div>
            </div>
            {/* products */}
            <div className="row mt-5">
              <Services categorytype={category} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};
export default ServicesPage;