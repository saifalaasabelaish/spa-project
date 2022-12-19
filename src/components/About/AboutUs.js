//  import Footer from "../common/Footer";
//import Navbar from "../common/Navbar";
import HeaderPage from "../common/HeaderPage";
 import './About.css'
import About1 from "./About1";
import About2 from "./About2";
const AboutUs = () =>
{
   return (<>
 {/* <Navbar/>  */}
 
 <div className="About us ">
 <div className="col ">
    <img src="./images/teamspa.png" className=" img-fluid w-100 " alt="teamspa"/>
     <HeaderPage title="About Us"/>
       </div>
<div className="About us ">
      <div className="row ">
      <div className="para">
<div className="title h2">About Centre Spa:- </div>
<p>At Centre Spa , we believe in providing our luxury day spa, hair salon, and wellness guests with the best experience possible.
   Focused on your satisfaction, our experienced team of the Kalamazoo area’s best hair stylists, nail technicians, estheticians, 
   and massage therapists create a relaxing and comforting atmosphere for all of our guests. 
  To learn more about Centre Spa and our team or to apply for a career with us, select an item from the options below.</p>
</div></div></div>
 <About1 title="Emily MacInnis" Paragraph ="Aesthetician experience at three other spas before joining the Spa team in April of 2014.
 Emily grew up in St. Peter’s Bay and currently resides in China Point. Her favourite services are facials and body treatments" imga="./images/team1.png" alt="team"/>
 <About2 src="./images/team2.png" alt="team" title="Mike Zimmerman"Paragraph ="
Registered Massage Therapist
He received a diploma in Massage Therapy at Foothills College of Massage Therapy in Calgary, AB. Mike has always enjoyed the spa setting 
and brings a listening ear in order to adjust his massage to your specific needs on that day"/>
<About1 title="Jillian Drake" Paragraph ="Aesthetician experience with notable spas in both Charlottetown and Halifax.
 She is passionate about her chosen career and cares about the well being of her clients." imga="./images/team3.png" alt="team"/> 
<About2 src="./images/team4.png" alt="team"  title="Drew Dalziel"Paragraph ="
Aesthetician
Drew has always had a passion for helping people and realizes the importance of self care. She has gained valuable experience in the industry before joining the Spa team."/>
</div>
{/* < Footer/> */}
</>
)

}
export default AboutUs;