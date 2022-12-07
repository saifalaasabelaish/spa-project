import './Staff.css'
import SocialMedia1 from './SocialMedia1'
import SocialMedia2 from './SocialMedia2'
const Staff= () =>
{ 
    return(  
    <section>
    <div className="staff   align-items-center col-12 d-flex ">
      <div className="Staff-bady">
      <h1>MEET OUR BEAUTIFUL TEAM</h1></div>
      <div className="full-width-wrapper flex-content">
      <div className="container">
      <div className="row my-3">
      <div className="col-sm-6 col-md-4 col-lg-3">  
      <div className="staff">
      <img src='./images/shayne.jpeg' className="img  img-fluid six-cols w-100 h-100 rounded-circle " alt="first "></img>
      <div className="staff-body"><div className="stafftile">
      <h5 className="title ">Shayne Crocker</h5>
      <p className="desca">I'm Shane Crocker,48 years old.work in massage </p><SocialMedia2/>
    </div></div></div></div>
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="staff">
    <img src= './images/megan.jpg' className="img   six-cols  w-100 h-100 rounded-circle" alt="scond"></img>
    <div className="staff-body">
  <div className="stafftile">
  <h5 className="title">Megan Martin</h5>
  <p className="desca">I am Megan Martin,27 years old working in makeup  </p> <SocialMedia1/>
    </div></div></div></div>
    <div className="col-sm-6 col-md-4 col-lg-3">
     <div className="staff" >
        <img src='./images/amanda.jpg' className="img six-cols img-fluid  w-100 h-100 rounded-circle " alt="three"></img>
   <div className="staf-body">
   <div className="stafftile">
   <h5 className="title">Amanda Mollett</h5>
  <p className="desca">I am Amanda Mollett,35 years old working in massage </p> <SocialMedia2/>
  </div></div></div></div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="staff" >
   <img src='./images/lydia.jpg' className="img  img-fluid six-cols w-100 h-100 rounded-circle" alt="four "></img>
   <div className="staff-body">
   <div className="stafftile">
    <h5 className="title">Lydia Smothers</h5>
    <p className="desca"> I am Lydia Smothers ,30 years old I have been working in massage for 10 years  </p><SocialMedia1/>
   </div></div></div></div></div></div></div></div>
 </section>
    )
    
}
export default Staff;
