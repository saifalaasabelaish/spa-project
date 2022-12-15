import './components/ServicesHome/ServicesHome.css';
    import ServicesHome from './components/ServicesHome/ServicesHome.js';
    
    
    
    function App() {
      return(
        <>
        <section className="all-card-services">
        <div className="servises-home">
            <div className="row-services">
                <div className="services-title">
                    <h1>SERVICES WE PROVIDE</h1>
                    <p>The spa is first of its kind in palestine in services we provide and profisseinal services we have</p>
                </div>
            </div>
          </div>
          <div className="container" id="con-services-card">
               <div className="row ">
          
       <ServicesHome ser_card_title="SKIN CARE" ser_card_text="Have you thought before buying cosmetics and skin care products, whether they are suitable for your skin or not?"/>
       <ServicesHome ser_card_title="BODY CARE" ser_card_text="Whether you're looking for the perfect gift or to treat yourself, shop our Body Care Sale to find all the products you need!" />
       <ServicesHome ser_card_title="FACE CARE" ser_card_text="A facial is a family of skin care treatments for the face, including steam,  creams, lotions, facial masks,and message"/>
       <ServicesHome ser_card_title="HAIR CARE" ser_card_text="Proper and adequate hair care ultimately leads to positive and guaranteed results for your hair and scalp share"/>
       </div>
        </div>
    
      </section>
       </>
      );
      
    }
    
    export default App;