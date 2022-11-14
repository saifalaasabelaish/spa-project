// imports
import back1 from './img/img.jpeg';
import back2 from './img/img1.webp';
import back3 from './img/img2.jpg';
import back4 from './img/img3.jpg';
import back5 from './img/img4.jpeg';

const Wellness = () => {

  const classes = "Wellness" 
  return (
  <> <div className='wellness'>
  <body>
<div className={classes}>
<div id="carouselExampleDark" className='carousel carousel-dark slide' data-bs-ride="carousel">
  <div className='carousel-indicators'>
    <button  data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
    <button  data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className='carousel-inner'>
    <div className='carousel-item active' data-bs-interval="10000">
      <img src={back1} className='d-block w-100' alt="spaimg"></img>
      <div className='carousel-caption d-none d-md-block'>
        <h5>WELLNESS CONSULTATION</h5>
        <p>A 60-minute discussion spent reviewing your health history as well as current eating and lifestyle habits. We will work together on ways to enhance your daily activities and create goals to guide you toward your best self. One week of follow-up email support is included.

Individuals
100
Couples
175.</p>
      </div>
    </div>
    <div className='carousel-item' data-bs-interval="2000">
      <img src={back2} className='d-block w-100' alt="spaimg"></img>
      <div classNmae='carousel-caption d-none d-md-block'>
        <h5>WELLNESS FOLLOW-UP</h5>
        <p>A 30-minute fine tuning session. A time to ask questions, note progress and adjust goals. Only available after initial consultation.

55.</p>
      </div>
    </div>
    <div className='carousel-item'>
    <h5><img src={back3} classNmae='d-block w-100' alt="spaimg"></img></h5>
      <div className='carousel-caption d-none d-md-block'>
        <h5>WELLNESS PACKAGE</h5>
        <p>Includes a 60-minute consultation on topics of your choice and four follow-up sessions that can be scheduled at your convenience (weekly, bi-monthly, monthly).

300.</p>
      </div></div>
      <div className='carousel-item'>
      <img src={back4} classNmae='d-block w-100' alt="spaimg"></img>
      <div className='carousel-caption d-none d-md-block'>
        <h5>WELLNESS PACKAGE</h5>
        <p>Includes a 60-minute consultation on topics of your choice and four follow-up sessions that can be scheduled at your convenience (weekly, bi-monthly, monthly).

300.</p>
      </div></div>
      <div className='carousel-item'>
      <img src={back5} classNmae='d-block w-100' alt="spaimg"></img>
      <div className='carousel-caption d-none d-md-block'>
        <h5>WELLNESS PACKAGE</h5>
        <p>Includes a 60-minute consultation on topics of your choice and four follow-up sessions that can be scheduled at your convenience (weekly, bi-monthly, monthly).

300.</p>
      </div>
    </div>
  </div>
   {/* no edit */}
  <button className='carousel-control-prev' data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Previous</span>
  </button>
  <button className='carousel-control-next' data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className='carousel-control-next-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Next</span>
  </button>
</div>
  </div>
  </body>
           </div> </>)
            }

// exports
export default Wellness;
{/* 
HERE'S A SNEAK PEAK &amp; </h2></h1><p>At Centre Spa &amp; 
            We are bombarded with information all day, every day on ways to look and feel better. You can look up recipes, workouts, and healthy tips from just about anywhere, but what do you do with all that information? As a wellness mentor, Centre Spa & Wellness’ Registered Dietician, Robin Neeb is here to help you sort through all the information and improve your quality of life by approaching your health from lifestyle changes.

Everyone wants a quick fix, but making lasting changes takes time. Often goals change and evolve throughout your journey and lead to much more than weight loss, including stress management, healthy sleep, and relationships. At your wellness consultation, we will discuss strengths, challenges, and personal goals and discover strategies to achieve goals. Follow-up sessions allow us to discuss actions taken toward goals and methods for successfully continuing them. Robin will help you take charge of your life, provide non-judgmental feedback, and offer encouragement and ideas that help you reach your own conclusions and solutions.

Contact the spa and schedule a Wellness Consultation with Robin Neeb, RD, your personal mentor, to guide you on your path to feeling great.</p>
     */}