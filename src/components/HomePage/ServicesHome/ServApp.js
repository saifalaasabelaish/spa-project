import ServicesHome from "./ServicesHome";
import './ServicesHome.css';
function ServApp() {
  return (
    <>
      <div className="services d-flex w-100">
        <div className="container">
          <div className="row-services ">
            <div className="services-title p-3">
              <h1>SERVICES WE PROVIDE</h1>
              <p>The spa is first of its kind in palestine in services we provide and profisseinal services we have</p>
            </div>
          </div>
          <div className="container">
            <div className="row my-3">

              <ServicesHome imag="./images/skincare.jpg" ser_card_title="SKIN CARE" ser_card_text="Choose from a variety of treatments that can help repair, rejuvenate, and refresh your skin. SPA curated selection of medical grade products and services are the gateway to the “Fountain Of You”." />
              <ServicesHome imag="./images/bodycare.jpg" ser_card_title="BODY CARE" ser_card_text="Having a spa body treatment yields a number of great benefits, from preventing the signs of aging and creating a sense of relaxation to flushing out toxins and promoting the appearance of glowing, radiant skin." />
              <ServicesHome imag="./images/facecare.jpg" ser_card_title="FACE CARE" ser_card_text="Aiming to help correct sun damage, limit the effects of environmental factors, and reduce stress, facials are a great way to kick back, relax, and unwind after a long day… or long couple of days! " />
              <ServicesHome imag="./images/haircare.jpg" ser_card_title="HAIR CARE" ser_card_text="Offering an unmatched assortment of Kalamazoo’s best salon services, including hair coloring, styling, treatments, and finishes, we utilize the industry’s best hair care products." />
            </div>
          </div></div></div>
    </>
  );

}

export default ServApp;  
