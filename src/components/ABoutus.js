const AboutuS = () =>
{ return (<>
<div className="container text-center">
      <div className="row justify-content-start">
      <div className="para">
<div className="title h2">History</div>
<p>At Centre Spa & Wellness, we believe in providing our luxury day spa, hair salon, and wellness guests with the best experience possible.
   Focused on your satisfaction, our experienced team of the Kalamazoo area’s best hair stylists, nail technicians, estheticians, 
   and massage therapists create a relaxing and comforting atmosphere for all of our guests. 
  To learn more about Centre Spa and our team or to apply for a career with us, select an item from the options below.</p>
</div></div>
<div className="row justify-content-center">
        <div className="col-4">
    <img src="images\teamspa.png" className="d-block w-100" alt="teamspa"/>
        </div>
         <div className="col-4">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images\team1.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\team2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images\team3.png" className="d-block w-100" alt="..."/>
    </div> 
    <div className="carousel-item">
      <img src="images\team4.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className=" but carousel-control-prev"  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className=" but carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" but carousel-control-next"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className=" but carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> 
</div>
        </div>
        </div></div>

</>
)

}
export default AboutuS;