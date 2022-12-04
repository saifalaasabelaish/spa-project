import './ServicesPageTemplete.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const ServicesPageTemplete2= () =>
{ 
    return(

    <>
    <Navbar/>
    <div className='ServicesPage w-12 top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl ' >
    <div className=" shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout "> 
       <div className=' container start-10 col-12 '>
     <div className="ServicesPageTemplete "> 
<div className="titil-services"> 
        <img src='./images/bady care.png' className="img img-fluid" alt="Body care"></img>
        {/* <div className='titlepage2'> <h4>Body care</h4></div> */}
        </div>  </div>
      
       <div className="item-wrapper ">
           <div className="title">
              <h5>About Us</h5>
              </div>
              <p>
              Whether you have oily, normal, sensitive, or dry skin, Savers have all you need to take care of your body from head to toe. 
              You’ll be able to find everything from body moisturiser, moisturising creams and lotions to body oils, body butter and dry scalp treatments
               to help your skin look and feel its best
                </p></div>  
                 <div className="item-wrapper">
                <div className="title">
                    <h5>Body Care Routine</h5></div>
                <div className="text-area">
                                 <p>What better place to start a body care routine than with a body moisturiser? A lotion is an effective body moisturiser for those that want
                                   a lighter textured, easily absorbed dose of hydration. Moisturising creams are thicker and have great hydration benefits. Moisturising creams
                                    also create a barrier to protect the skin and relieve any dry patches or flakiness on the body, perfect for dryer skin types.
                                   No matter your skin type, find exactly what you’re looking for at Savers from brands you can trust, like Nivea, Garnier and E45.</p>
                                 </div></div>  <div className="item-wrapper">
                <div className="title"><h5>Hair Care Routine</h5></div>
                <div className="text-area">
                                 <p>
                                 When we said you need to take care of the skin on your body from top to toe, we meant it! Our scalp health is just as important as any other 
                                 area on the body, and those who are suffering from dry and flaky scalps can find just what you need at Savers.
                                  Choose from a range of dry scalp treatments to offer relief and combat flakes and itchiness.</p>
                                 </div></div>
                                 <div className="item-wrapper">
                <div className="title"><h5>Hydrate From Head To Toe</h5></div>
                <div className="text-area">
                                 <p>
                                 Cleansing, exfoliating, and shaving all have one thing in common—you should moisturize afterward. While your skin is still wet from your shower activities,
                                  it’s an ideal time to hydrate your skin. Smooth a hydrating cream or lotion over your body from your neck to your toes 
                                 (hello, soft feet!), letting it absorb before putting your clothes on.</p>
                                 </div></div></div></div>
                     </div>
                     <Footer/>
                   
    </>)
}

export default ServicesPageTemplete2