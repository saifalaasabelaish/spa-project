import './ServicesPageTemplete.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const ServicesPageTemplete4= () =>
{ 
    return(
    <>
    <Navbar/>
    <div className='ServicesPage w-12 top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl ' >
    <div className=" shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout "> 
       <div className=' container start-10 col-12'>
     <div className="ServicesPageTemplete "> 
<div className="titil-services">
        <img src='./images/wellness2.png' className="img img-fluid" alt="wellness "/>
        {/* <div className='titlepage2'><h4>Wellness</h4></div> */}
        </div>  </div>  
          <div className="item-wrapper">
            <div className="title"><h5>About Us</h5></div>
              <p>
                Wellness involves the awareness of our current state of health in multiple
                 dimensions with the initiative, 
                tools and support to make lasting changes towards a more optimal life.
                </p></div>  
                 <div className="item-wrapper">
                <div className="title">
                    <h5>Wellness Consultation</h5></div>
                <div className="text-area">
                                 <p>It fortified with keratin which can lengthen and protect your lashes from day to day.
                                 It not only stimulates growth for healthy and strong eyelashes; but also add strength and support to those weak ones.
                                 Plumps up thin, sparse lashes to full, lushest look in just 21 days! Seals and protects weak lashes against splitting and 
                                 breaking. The high performance brush is made of many rigid bristles to lengthen every little hard-to-reach lashes, 
                                 so all lashes look their longest!</p>
                                 </div></div>  <div className="item-wrapper">
                <div className="title"><h5>WELLNESS FOLLOW-UP</h5></div>
                <div className="text-area">
                                 <p>
                                  A 30-minute fine tuning session. A time to ask questions, note progress and adjust goals.
                                   Only available after initial consultation.</p>
                                 </div></div><div className="item-wrapper">
                <div className="title"><h5>WELLNESS PACKAGE</h5></div>
                <div className="text-area">
                                 <p>
                                 Includes a 60-minute consultation on topics of your choice and four follow-up sessions that can be scheduled
                                  at your convenience (weekly, bi-monthly, monthly)</p>
                                 </div></div></div></div>
                     </div>
                     <Footer/>
                   

    </>)
}

export default ServicesPageTemplete4 

