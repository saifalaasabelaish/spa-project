import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import ServApp from "../HomePage/ServicesHome/ServicesHome";
import StaffCards from "../HomePage/StaffHome/StaffCards";
import OfferCarousel from "../HomePage/OfferHome/OfferCarousel";

function HomePage() {
  return (
<>
<Navbar/>
<HomeHeader/>
<ServApp/>
<OfferCarousel/>
<StaffCards/>
<Footer/>
</> 
  );
}

export default HomePage;