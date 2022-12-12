

import CardOffer  from "./CardOffer"
import './Carousel.css'

const Carousel = () => {
return (
  <div className="offers">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
    <div className = "container d-flex justify-content-center"> 
      <div className = "row align-items-center " >
        <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
          <CardOffer imag= 'images\offer1.jpg '  offers ='offer 1'/> 
         </div>
           <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
        <CardOffer imag = './offer2.jpg'  offers ='offer 2'/> 
           </div>
         <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
          <CardOffer imag ='./offer3.jpg' offers ='offer 3'/> 
            </div>
           <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
           <CardOffer imag = './offer5.jpg'  offers ='offer 4'/> 
           </div>
    </div>  
  </div>
</div>

    <div className="carousel-item">
      <div className="countainer d-flex justify-content-center">
      <div className = "row " >
     <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
    <CardOffer imag = './offer6.jpg'  offers ='offer 5'/> 
    </div>
    <div className = "col-12 col-md-4  col-lg-3 col-xxl-2">
    <CardOffer imag = './offer8.jpg'  offers ='offer 6' /> 
    </div>
    <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
    <CardOffer imag = './offer10.jpg' offers ='offer 7'  /> 
    </div>
    <div className = "col-12 col-md-4 col-lg-3 col-xxl-2">
    <CardOffer imag = './offer12.jpg'  offers ='offer 8'/> 
         </div>
    </div>
    </div>
    </div>
      </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon border-white rounded-circle  " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon rounded-circle border-white  " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
)
}

export default Carousel
