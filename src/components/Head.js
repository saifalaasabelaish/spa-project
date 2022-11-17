import './Headd.css';
import headimg from './img/head.png';
const Head = () => {
    const classes = "head" 
    return(
        <div class="d-flex justify-content-center">
        <div class={classes}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={headimg} class="d-block w-100" alt="aboutusslide">
      </img>
      <div class="carousel-caption d-none d-md-block">
      <div class='headd'>
       <h1>if you are looking about beuty you are in the right way!</h1>
           <h2 type = "Button">Read More About SPA</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={headimg} class="d-block w-100" alt="bookingslide"></img>
      <div class="carousel-caption d-none d-md-block">
      <div class='headd'>
       <h1>havent booked yet?</h1>
           <h2 type = "Button">Book Now</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={headimg} class="d-block w-100" alt="servicesslide"></img>
      <div class="carousel-caption d-none d-md-block">
      <div class='headd'>
       <h1>Enjoy a Facial Treatment at Our Day Spa</h1>
           <h2 type = "Button">See Oue Services</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={headimg} class="d-block w-100" alt="productsslide"></img>
      <div class="carousel-caption d-none d-md-block">
      <div class='headd'>
       <h1>We have Many special products for you!</h1>
           <h2 type = "Button">See Our Products</h2>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={headimg} class="d-block w-100" alt="offersslide"></img>
      <div class="carousel-caption d-none d-md-block">
      <div class='headd'>
       <h1>What about a gift for yourself?</h1>
           <h2 type = "Button">Mane offers waits you!</h2>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        </div>
        </div>

    )
}

export default Head;
