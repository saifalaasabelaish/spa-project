import './Headd.css';
import headimg from './img/head.png';
const Head = () => {
    const classes = "headd" 
    return(
      <div className={classes}>
        <div className='headd'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          {/* when i change the id i have problems */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={headimg} className="d-block w-100" alt="aboutusslide"></img>
      <div class="position-absolute top-50 start-50 translate-middle">
      <h1>Hi there! If you are looking for beauty , you are in the right place! Welcome to SPA center</h1>
      <h2 type ="button" class="shadow p-3 mb-5 ">Read More About SPA</h2>
      </div></div>

    <div className="carousel-item">
      <img src={headimg} className="d-block w-100" alt="bookingslide"></img>
      <div class="position-absolute top-50 start-50 translate-middle">
           <h1>You can book at any time! And you only need <ul> small deposit of the amount!</ul></h1>
           <h2 type ="button" class="shadow p-3 mb-5 ">Book Now!</h2>
    </div></div>
    <div className="carousel-item">
      <img src={headimg} className="d-block w-100" alt="servicesslide"></img>
      <div class="position-absolute top-50 start-50 translate-middle">
       <h1>Enjoy a Facial Treatment at Our Day Spa and <ul>Enhance Your Look with Our Salon Services</ul></h1>
       <h2 type ="button" class="shadow p-3 mb-5 ">See Oue Services</h2>
    </div></div>
    <div className="carousel-item">
      <img src={headimg} className="d-block w-100" alt="productsslide"></img>
      <div class="position-absolute top-50 start-50 translate-middle">
       <h1>We have a lot of reliable global products <ul>that will suit everyone!</ul></h1>
       <h2 type ="button" class="shadow p-3 mb-5 ">See Our Products</h2>
    </div></div>
    <div className="carousel-item">
      <img src={headimg} className="d-block w-100" alt="offersslide"></img>
      <div class="position-absolute top-50 start-50 translate-middle">
       <h1>What if you took a gift for yourself that <ul>includes a variety of everything we own?</ul></h1>
       <h2 type ="button" class="shadow p-3 mb-5 ">See our offers</h2>
     </div></div>
    </div>
   </div>
  </div>
  </div>
    )
}

export default Head;
