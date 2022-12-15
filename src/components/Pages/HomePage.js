import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HomeHeader from "../HomeHeader/HomeHeader";
import Carousel from "../Offerpage/Carousel";
import ServApp from "../ServicesHome/ServApp";
import Staff from "../StaffHome/Staff"
function HomePage() {
  return (
<>
<Navbar/>
<HomeHeader/>
<ServApp/>
<Carousel/>
<Staff/>
<Footer/>
</> 
  );
}

export default HomePage;