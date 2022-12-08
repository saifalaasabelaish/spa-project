import './Staff.css'
import SocialMedia1 from './SocialMedia1'
import SocialMedia2 from './SocialMedia2'
const Staff= () =>
{ 
    return(  
    <section>
    <div className="staff align-items-center col-12 d-flex p-5">
      <h1 className='p-4'>MEET OUR BEAUTIFUL TEAM</h1>
      <div className="full-width-wrapper flex-content">
      <div className="row align-items-center">
      <div className="col-sm-6 col-md-4 col-lg-3">  
      <img src='./images/shayne.jpeg' className=" img-fluid six-col rounded-circle  mx-5" alt="first "></img>
      <h5 className="title text-center mt-3">Shayne Crocker</h5>
      <p className="desca ">I'm Shane Crocker,48 years old.work in massage ,Skilled in various modalities of massage including Swedish, Deep Tissue/Neuromuscular</p><div className='text-center' ><SocialMedia1/></div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <img src= './images/megan.jpg' className="img-fluid six-col rounded-circle mx-5" alt="scond"></img>
  <h5 className="title text-center mt-3">Megan Martin</h5>
  <p className="desca">I am Megan Martin,27 years old working in makeup ,Skilled in Swedish Massage, Deep Tissue Massage and Sports Massage.
Practices integrative massage that combines techniques to form. </p> <div className='text-center' ><SocialMedia2/></div>
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
        <img src='./images/amanda.jpg' className="six-cols img-fluid rounded-circle mx-5 " alt="three"></img>
   <h5 className="title text-center mt-3">Amanda Mollett</h5>
  <p className="desca">I am Amanda Mollett,35 years old working in massage ,Specialize in Craniosacral, Neuromuscular, Swedish, Deep Tissue, migraine and TMJD work.</p> <div className='text-center' ><SocialMedia1/></div>
  </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
   <img src='./images/lydia.jpg' className="six-cols img-fluid rounded-circle  mx-5" alt="four "></img>
    <h5 className="title text-center mt-3">Lydia Smothers</h5>
    <p className="desca"> I am Lydia Smothers ,30 years old I have been working in massage for 10 years,Skilled in Swedish Massage, Deep Tissue Massage and Sports Massage.
Practices integrative massage that combines techniques to form.  </p> <div className='text-center' ><SocialMedia2/></div>
   </div></div></div></div>
 </section>
    )
    
}
export default Staff;
