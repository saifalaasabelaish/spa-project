import './ServicesPageTemplete.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const ServicesPageTemplete3= () =>
{ 
    return(
    <><Navbar/>
    <div className='ServicesPage  p-5 w-12   top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl  ' >
    <div className=" shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout "> 
       <div className=' container start-10 col-12 '>
     <div className="ServicesPageTemplete "> 
<div className="titil-services">
        <img src='./images/Hair care1.png' className="img img-fluid" alt="Hair care "/>
        {/* <div className='titlepage2'><h4>Hair Care</h4></div> */}
       </div>  </div>  
         <div className="item-wrapper">
            <div className="title"><h5>About Us</h5></div>
              <p>
              Hair care is an overall term for hygiene and cosmetology involving the hair which grows from the human scalp,
               and to a lesser extent facial, pubic and other body hair. Hair care routines differ according to an individual's
                culture and the physical characteristics of one's hair. Hair may be colored, trimmed, shaved, plucked or otherwise
                 removed with treatments such as waxing, sugaring and threading. Hair care services are offered in salons, barbershops and day spas,
                  and products are available commercially for home use. Laser hair removal and electrolysis are also available, 
              though these are provided (in the US) by licensed professionals in medical offices or speciality spas
                </p></div>  
                 <div className="item-wrapper">
                <div className="title">
                    <h5>Hair cleaning</h5></div>
                <div className="text-area">
                                 <p>Washing hair removes excess sweat and oil, as well as unwanted products from the hair and scalp. 
                                    Often hair is washed as part of a shower or bathing with shampoo, a specialized surfactant. Shampoos work by 
                                    applying water and shampoo to the hair. The shampoo breaks the surface tension of the water, allowing the hair
                                     to become soaked.6 7 This is known as the wetting action. The wetting action is caused by the head of the shampoo 
                                     molecule attracting the water to the hair shaft. Conversely, the tail of the shampoo molecule is attracted to the grease,
                                      dirt and oil on the hair shaft. The physical action of shampooing makes the grease and dirt become an emulsion that is then 
                                      rinsed away with the water. This is known as the emulsifying action. Sulfate free shampoos are less harming on color treated hair
                                       than normal shampoos that contain sulfates. Sulfates strip away natural oils as well as hair dye. Sulfates are also responsible for
                                        the foaming effect of shampoos. Shampoos have a pH of between 4 & 6. Acidic shampoos are the most common type used and maintain or
                                     improve the condition of the hair as they don't swell the hairshaft and don't strip the natural oils.</p>
                                 </div></div>  <div className="item-wrapper">
                <div className="title"><h5>Hair Coloring</h5></div>
                <div className="text-area">
                                 <p>
                                 Hair coloring is the process of adding pigment to or removing pigment from the hair shaft. Hair coloring processes may be referred 
                                 to as coloring or bleaching, depending on whether pigment is being added or removed.
                                 Temporary hair tints simply coat the shaft with pigments which later wash off.
                                 Most permanent color changes require that the cuticle of the hair be opened so the color change can take place within the cuticle.
                                  This process, which uses chemicals to alter the structure of the hair, can damage the cuticle or internal structure of the hair, 
                                  leaving it dry, weak, or prone to breakage. After the hair processing, the cuticle may not fully close, which results in coarse hair 
                                  or an accelerated loss of pigment. Generally, the lighter the chosen color from one's initial hair color, the more damaged it may be.
                                   Other options for applying color to hair besides chemical dyes include the use of such herbs as henna and indigo, or choosing 
                                   ammonia-free solutions.</p>
                                 </div></div><div className="item-wrapper">
                <div className="title"><h5>Chemical Alteration</h5></div>
                <div className="text-area">
                                 <p>
                                 Chemical alterations like perming, coloring can be carried out to change the perceived color and texture of hair. All of these are temporary
                                  alterations because permanent alterations are not possible at this time.Chemical alteration of hair only affects the hair above the scalp;
                                   unless the hair roots are damaged, new hair will grow in with natural color and texture.</p>
                                 </div></div></div></div>
                     </div>
                     <Footer/>
                   
    </>)
}

export default ServicesPageTemplete3
