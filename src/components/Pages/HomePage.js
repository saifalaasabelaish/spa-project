import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import Carousel from "../Offerpage/Carousel";
import ServApp from "../HomePage/ServicesHome/ServicesHome";
import StaffCards from "../HomePage/StaffHome/StaffCards";

function HomePage() {
  return (
<>
<Navbar/>
<HomeHeader/>
<ServApp/>
<Carousel/>
<StaffCards/>
<Footer/>
</> 
  );
}

export default HomePage;