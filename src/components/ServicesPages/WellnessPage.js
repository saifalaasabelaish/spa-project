import './ServicesPageTemplete.css'
import ServicesPageTemplete from './ServicesPageTemplete'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const Wellness = () =>
{ 
    return(
    <>
   
    <div className="ServicesPageTemplete "> <Navbar/>
    < ServicesPageTemplete imgg= './images/wellness2.png'  alt="wellness"
        title1="About Us" Paragraph1="  Wellness involves the awareness of our current state of health in multiple
        dimensions with the initiative, 
       tools and support to make lasting changes towards a more optimal life."
        title2="Wellness Consultation" Paragraph2="It fortified with keratin which can lengthen and protect your lashes from day to day.
        It not only stimulates growth for healthy and strong eyelashes; but also add strength and support to those weak ones.
        Plumps up thin, sparse lashes to full, lushest look in just 21 days! Seals and protects weak lashes against splitting and 
        breaking. The high performance brush is made of many rigid bristles to lengthen every little hard-to-reach lashes, 
        so all lashes look their longest!" 
        title3=">WELLNESS FOLLOW-UP" Paragraph3=" W A 30-minute fine tuning session. A time to ask questions, note progress and adjust goals.
        Only available after initial consultation."
        title4="WELLNESS PACKAGE" Paragraph4="  Includes a 60-minute consultation on topics of your choice and four follow-up sessions that can be scheduled
        at your convenience (weekly, bi-monthly, monthly)"/> 
    <Footer/> </div>
                   
               </>)
            }
            
            export default  Wellness