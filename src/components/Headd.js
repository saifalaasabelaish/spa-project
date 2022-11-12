import './Headd.css';
import image1 from './img/1.png';
import image2 from './img/2.png';
import image3 from './img/3.png';
import image4 from './img/4.png';
import image5 from './img/5.png';
const Headd = () => {
    const classes = "headd" 
    return(
            <div className={classes}>
            <div id='carouselExampleSlidesOnly' className='carousel slide' data-bs-ride="carousel">
              <div className = 'carousel-inner'>
                <div className='carousel-item active'>   
                   <img src = {image1} alt = "first"></img> 
                   <h1>SPA Centre</h1>
                   <p>Find Your Centre with Massage Therapy</p>
                   <h2>Massage therapy is an excellent way to improve your overall health and wellness.</h2>
                  </div>
                   <div className='carousel-item'>  
                   <img src = {image2} alt = "sec"></img>                  
                   <h1>SPA Centre</h1>
                   <p>Enjoy a Facial Treatment at Our Day Spa</p> 
                   </div>
                   <div className='carousel-item'>
                   <img src = {image3} alt = "th"></img>
                    <h1>SPA Centre</h1>
                   <p>Massage therapy is an excellent way to improve your overall health and wellness.</p> 
                   </div>
                   <div className='carousel-item'>
                   <img src = {image4} alt = "fo"></img>
                   <h1>SPA Centre</h1>
                   <p>Improve the radiance and smoothness of your skin with a facial treatment.</p>
                   </div>
                   <div className='carousel-item'>
                   <img src = {image5} alt = "fifth"></img>
                   <h1>SPA Centre</h1>
                   <p>Whether you desire a cut, color, or styling, our talented hair stylists have you covered.</p> 
                   </div>
              </div>
              </div>
              </div>
  )
  }
  
  //Export
  export default Headd


