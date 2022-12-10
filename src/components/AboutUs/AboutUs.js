import './AboutUs.css'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import  About from './About'
const AboutUs = () =>
{
 return(
 <> 
 <Navbar/>
 <div className='container'>
 <div className='center'>
 <h1 className='text-center'>History</h1>
 <div className='text-center fs-5 justify-content-center w-150 mx-4'>
 <p >Whilst many people associate traditional spas with Roman baths,
   there is evidence of spa-type therapies dating back thousands of years when there was a
    belief in the curative powers of mineral waters. Paul Joseph, co-founder of Health and
     Fitness Travel explains: “Spas, healing waters, thalassotherapy, hydrotherapy and hot 
     springs date back thousands of years - an ancient practice conducted long before the Greeks and Romans!”</p>
</div>
<div className="about">
 <h1 className='text-center'>Team of spa</h1></div></div>
 <div className="card-group ">
 <div className='d-flex w-100 '>
        <About img1="./images/nn.webp" alt ="1" title="Iyla Sam" Paragraph="grew up on PEI and moved to Halifax to pursue a diploma in Massage Therapy."/>
       <About img1="./images/man3.jpg" alt ="1" title="Othman Ahmad" Paragraph="is an experienced Registered Massage Therapist.  Having come from away (in most recent years Edmonton, AB)."/>
  <About img1="./images/nn2.jpg" alt ="1" title="Cortny Dan" Paragraph="attained her goal in 2017 of completing her studies at the Private Institute of Hair Design and Aesthetics…."/>
  
</div>
</div>
<h1 className='text-center'>Founders of spa</h1>
<div className='d-flex w-100'>
      
        <About img1="./images/nj.jpg" alt ="1" title="Lele Mart" Paragraph="business woman"/>
  
    
  <About img1="./images/ni.jpg" alt ="1" title="Jo kateb" Paragraph="investor"/>
  
      

</div>
<h2 className='text-center'>Location</h2>
<iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


</div>
<Footer/>

 </>
 )
}
export default AboutUs;