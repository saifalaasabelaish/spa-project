import './ServicesPageTemplete.css'
import ServicesPageTemplete from './ServicesPageTemplete'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
const PeelingSkin= () =>
{ 
    return(
    <>
     <div className="ServicesPageTemplete "> <Navbar/>
    < ServicesPageTemplete imgg= './images/PeelingSkin.png'  alt=" PeelingSkin"
        title1="Causes" Paragraph1="Your skin is regularly exposed to environmental elements that can irritate 
        and damage it. These include sun, wind, heat, dryness and high humidity. Repeated irritation can lead to
         skin peeling. In babies born past their due date, it's not unusual for them to experience some painless 
         skin peeling.Skin peeling can also result from a disease or condition, which may start someplace other than your skin.
          This type of skin peeling is often accompanied by itching "
        title2="cause skin peeling include:" Paragraph2="*Allergic reactions
*Infections, including some types of staph and fungal infections
*Immune system disorders
*Cancer and cancer treatment
*Genetic disease, including a rare skin disorder called acral peeling skin syndrome that causes painless peeling of the top layer of skin" 
        title3="Specific diseases and conditions that can cause peeling skin include:" Paragraph3="*Athlete's foot
        *Atopic dermatitis (eczema)
        *Contact dermatitis
        *Dry skin
        *Jock itch
        *Kawasaki disease
        *Medication side effects
        *Non-Hodgkin's lymphoma
        *Pemphigus
        *Psoriasis
        *Ringworm (body)
        *Ringworm (scalp)
        *Seborrheic dermatitis
        *Stevens-Johnson syndrome
        *Sunburn"
       /> 
    <Footer/> </div>
     
    </>)
            }
            
 export default   PeelingSkin