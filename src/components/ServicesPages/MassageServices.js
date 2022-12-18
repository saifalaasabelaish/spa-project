import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const MassageServices= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Massage Services"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg='./images/Moroccan Bath.png'  alt="MassageServices" servicename="-Skin Care"
        title1="There’s a difference between feeling better and living better" Paragraph1="Have a kink in your neck that refuses to leave?
         We’ll help evict it.Our unique approach to massage therapy will help your body work better so you can live better. "
        title2="  Sometimes you just need a little somethin' extra" Paragraph2="
        Add Rapid Tension Relief service or Total Body Stretch to your appointment to address specific areas and achieve greater “ahhh.”" 
        title4="Every body is different, every massage should be too" Paragraph4="No two people are the same. That’s why no two massages should be the same.
         Your massage therapist will pull from various massage techniques – trigger point, deep tissue, etc.
         – and incorporate them into your massage to address your needs. At Massage Envy , it’s all about you."
        title3="Aromatherapy" Paragraph3="Add even more rest and relaxation to your massage with an aromatherapy enhancement.
         These essential oils extracted from herbs, fruits, and flowers can enhance 
        your physical and emotional wellbeing by soothing the mind, body, and spirit."/> 
    </div>
     
    </>)
            }
            
 export default  MassageServices