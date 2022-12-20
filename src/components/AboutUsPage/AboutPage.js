import './AboutPage.css'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import About1 from './About1'
import About2 from './About2'
import HeaderPage from '../common/HeaderPage'
const AboutPage = () => {
        return (
                <>
                        <Navbar />
                        <div className="About us">
                                <div className="col ">
                                        <img src="./images/teamspa.png" className=" img-fluid w-100 aboutimg" alt="teamspa" />
                                        <HeaderPage title="About Us" />
                                </div>
                                <div className=" m-5 About us ">
                                        <div className="row ">
                                                <div className="para">
                                                        <div className="title h2">About Centre Spa: </div>
                                                        <p>At Centre Spa , we believe in providing our luxury day spa, hair salon, and wellness guests with the best experience possible.
                                                                Focused on your satisfaction, our experienced team of the Kalamazoo area’s best hair stylists, nail technicians, estheticians,
                                                                and massage therapists create a relaxing and comforting atmosphere for all of our guests.
                                                                To learn more about Centre Spa and our team or to apply for a career with us, select an item from the options below.</p>
                                                </div></div></div>
                                <About1 title="Emily MacInnis" Paragraph="Aesthetician experience at three other spas before joining the Spa team in April of 2014.
 Emily grew up in St. Peter’s Bay and currently resides in China Point. Her favourite services are facials and body treatments" imga="./images/team1.png" alt="team" />
                                <About2 src="./images/team2.png" alt="team" title="Mike Zimmerman" Paragraph="
Registered Massage Therapist
He received a diploma in Massage Therapy at Foothills College of Massage Therapy in Calgary, AB. Mike has always enjoyed the spa setting 
and brings a listening ear in order to adjust his massage to your specific needs on that day"/>
                                <About1 title="Jillian Drake" Paragraph="Aesthetician experience with notable spas in both Charlottetown and Halifax.
 She is passionate about her chosen career and cares about the well being of her clients." imga="./images/team3.png" alt="team" />
                                <About2 src="./images/team4.png" alt="team" title="Drew Dalziel" Paragraph="
Aesthetician
Drew has always had a passion for helping people and realizes the importance of self care. She has gained valuable experience in the industry before joining the Spa team."/>
                        </div>
                        {/* <div className="about">
            <div className='container justify-content-center'>
                    <h1 className='text-center m-4'>History</h1>
                    <div className='text-center fs-5 w-100 mx-4'>
                            <p >Whilst many people associate traditional spas with Roman baths,
                                    there is evidence of spa-type therapies dating back thousands of years when there was a
                                    belief in the curative powers of mineral waters. Paul Joseph, co-founder of Health and
                                    Fitness Travel explains: “Spas, healing waters, thalassotherapy, hydrotherapy and hot
                                    springs date back thousands of years - an ancient practice conducted long before the Greeks and Romans!”</p>
                            <h1 className='text-center m-3'>Team of spa</h1></div></div>

            <div className='d-flex w-100 justify-content-center '>
                    < AboutCard img1="./images/nn.webp" alt="1" title="Iyla Sam" Paragraph="grew up on PEI and moved to Halifax to pursue a diploma in Massage Therapy." />
                    < AboutCard img1="./images/man3.jpg" alt="1" title="Othman Ahmad" Paragraph="is an experienced Registered Massage Therapist.  Having come from away (in most recent years Edmonton, AB)." />
                    < AboutCard img1="./images/nn2.jpg" alt="1" title="Cortny Dan" Paragraph="attained her goal in 2017 of completing her studies at the Private Institute of Hair Design and Aesthetics…." />

            </div>
            <h1 className='text-center mt-5 mb-5'>Founders of spa</h1>
            <div className='d-flex w-100 justify-content-center '>

                    < AboutCard img1="./images/nj.jpg" alt="1" title="Lele Mart" Paragraph="business woman" />
                    < AboutCard img1="./images/ni.jpg" alt="1" title="Jo kateb" Paragraph="investor" />
            </div>
            <div className='container text-center col-12 col-xxl-6 col-xl-6 mt-5'>
                    <h2>Location</h2>
                    <iframe className="gmap_iframe w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
    </div> */}
                        <Footer />

                </>
        )
}
export default AboutPage;