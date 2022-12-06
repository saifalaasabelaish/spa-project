import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import './ServicesPageTemplete.css'
const ServicesPageTemplete1 = () => {
  return (

    <>

      <Navbar />

      <div className='ServicesPage w-12 top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl ' >
        <div className=" shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout ">
          <div className=' container start-4 col-12 '>
            <div className="ServicesPageTemplete ">
              <div className="titil-services">
                <img src='./images/skin care2.png' className="img img-fluid" alt="skin care"></img>
                {/* <div className='titlepage2'>
          <h4>skin care</h4></div> */}
              </div></div>
            <div className="item-wrapper">
              <div className="title">
                <h5>About Us</h5></div>
              <p>d-white
                is a range of practices that support skin integrity, enhance its appearance, and relieve skin conditions.
                They can include nutrition, avoidance of excessive sun exposure, and appropriate use of emollients.
                Practices that enhance appearance include the use of cosmetics, botulinum, exfoliation, fillers, laser resurfacing,
                microdermabrasion, peels, retinol therapy, and ultrasonic skin treatment. Skin care is a routine daily procedure in many settings,
                such as skin that is either too dry or too moist, and prevention of dermatitis
                and prevention of skin injuries
              </p></div>
            <div className="item-wrapper">
              <div className="title">
                <h5>Background</h5></div>
              <div className="text-area">
                <p>Skin care is at the interface of cosmetics and dermatology.
                  The US Federal Food, Drug, and Cosmetic Act defines cosmetics as products intended to cleanse or beautify
                  (for instance, shampoos and lipstick). A separate category exists for medications, which are intended to diagnose, cure, mitigate, treat, or prevent disease, or to affect the structure or function of the body (for instance, sunscreens and acne creams), although some products, such as moisturizing sunscreens and anti-dandruff shampoos, are regulated within both categories.
                  Skin care differs from dermatology by its inclusion of non-physician professionals, such as estheticians and wound care nursing staff.Skin care includes modifications of individual behavior and of environmental and working conditions.</p>
              </div></div>  <div className="item-wrapper">
              <div className="title"><h5> Neonate</h5></div>
              <div className="text-area">
                <p>
                  Guidelines for neonatal skin care have been developed.
                  Nevertheless, the pediatric and dermatological communities have not reached a consensus on best cleansing practices,
                  as good quality scientific evidence is scarce. Immersion in water seems superior to washing alone, and use of synthetic
                  detergents or mild liquid baby cleansers seems comparable or superior to water alone. Add from .</p>
              </div></div><div className="item-wrapper">
              <div className="title"><h5>Radiation</h5></div>
              <div className="text-area">
                <p>
                  Radiation induces skin reactions in the treated area, particularly in the axilla, head and neck, perineum and skin fold regions.Formulations with moisturising, anti-inflammatory, anti-microbial and wound healing properties are often used, but no preferred approach or individual product has been identified as best practice. Soft silicone dressings that act as barriers to friction may be helpful.
                  In breast cancer, calendula cream may reduce the severity of radiation effects on the dark spot corrector.Deodorant use after completing radiation treatment has been controversial but is now recommended for practice.Add from</p>
              </div></div></div></div>
      </div>
      <Footer />

    </>)
}

export default ServicesPageTemplete1