

import CardOffer from "./CardOffer"
import './Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container  ">
            <div className="row" >
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer1.jpg ' offers='offer 1'  />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer2.jpg' offers='offer 2' />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer3.jpg' offers='offer 3' />
              </div> 
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer5.jpg' offers='offer 4' />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container">
            <div className="row " >
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer6.jpg' offers='offer 5'  />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer8.jpg' offers='offer 6' />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer10.jpg' offers='offer 7' />
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                <CardOffer image='./offer12.jpg' offers='offer 8' />
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
  )
}

export default Carousel
