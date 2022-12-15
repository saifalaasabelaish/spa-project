import './StaffCards.css'
import SocialMedia1 from './SocialMedia1'
import SocialMedia2 from './SocialMedia2'
import StaffCard from './StaffCard'
const StaffCards = () => {
  return (
    <section>
    <div className="staff align-items-center col-12 d-flex p-5">
      <h1 className='p-4'>MEET OUR BEAUTIFUL TEAM</h1>
      <div className="row">
      <div className=" col-lg-3 col-md-3 col-sm-3"> 
        <StaffCard img='./images/shayne.jpeg' alt1="first" title="Shayne Crocker" paragraph1 ="I'm Shane Crocker,48 years old.work in massage ,Skilled in various modalities 
      of massage including Swedish, Deep Tissue/Neuromuscular"><SocialMedia1/></StaffCard></div>
     <div className=" col-lg-3 col-md-3 col-sm-3"> 
     <StaffCard  img='./images/megan.jpg' alt1="scond" title="Megan Martin" paragraph1 ="I am Megan Martin,27 years old working in makeup ,Skilled in Swedish Massage, Deep Tissue Massage and Sports Massage.
Practices integrative massage that combines techniques to form." ><SocialMedia2/></StaffCard></div>
 <div className=" col-lg-3 col-md-3 col-sm-3"> 
     <StaffCard  img='./images/amanda.jpg' alt1="three" title="Amanda Mollett" paragraph1 ="I am Amanda Mollett,35 years old working in massage ,Specialize in Craniosacral, Neuromuscular,
   Swedish, Deep Tissue, migraine and TMJD work."><SocialMedia1/></StaffCard></div>
  <div className=" col-lg-3 col-md-3 col-sm-3"> 
   <StaffCard  img='./images/lydia.jpg' alt1="four" title="Lydia Smothers" paragraph1 ="I am Lydia Smothers ,30 years old I have been working in massage for 10 years,Skilled in Swedish Massage, Deep Tissue Massage and Sports Massage."><SocialMedia2/></StaffCard></div>
  </div></div>
 </section>
  )

}
export default StaffCards;