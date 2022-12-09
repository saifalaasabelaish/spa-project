import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HomeHeader from "../HomeHeader/HomeHeader";
import Carousel from "../Offerpage/Carousel";
import ServApp from "../ServicesHome/ServApp";

function HomePage() {
  return (
<>
<Navbar/>
<HomeHeader/>
<ServApp/>
<Carousel/>
<Footer/>
</> 
  );
}

export default HomePage;