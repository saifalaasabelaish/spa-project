import './AboutUs.css'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
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
 <h1 className='text-center'>Team of spa</h1>
        <div className="card-group w-50">
  <div className="card">
    <img src='./images/nn.webp' className="card-img-top w-60 " alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Iyla Sam</h5>
      <p className="card-text">grew up on PEI and moved to Halifax to pursue a diploma in Massage Therapy.</p>
      
    </div>
  </div>
  <div className="card">
    <img src='./images/man3.jpg' className="card-img-top w-60" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Othman Ahmad</h5>
      <p className="card-text">is an experienced Registered Massage Therapist.  Having come from away (in most recent years Edmonton, AB).</p>
  
    </div>
  </div>
  <div className="card">
    <img src='./images/nn2.jpg' className="card-img-top w-60" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Cortny Dan</h5>
      <p className="card-text">attained her goal in 2017 of completing her studies at the Private Institute of Hair Design and Aesthetics…..</p>
      
    </div>
  </div>
</div>
<h1 className='text-center'>Founders of spa</h1>
        <div className="card-group w-50 ">
  <div className="card">
    <img src='./images/nj.jpg ' className="card-img-top w-60 " alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Lele Mart</h5>
      <p className="card-text">business woman</p>
      
    </div>
  </div>
  <div className="card">
    <img src='./images/ni.jpg' className="img " alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Jo kateb</h5>
      <p className="card-text">investor</p>
  
    </div>
  </div>
      
</div> 

<h2 className='text-center'>Location</h2>
<iframe className="gmap_iframe"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

</div>
</div>
</div>
<Footer/>

 </>
 )
}
export default AboutUs;





          