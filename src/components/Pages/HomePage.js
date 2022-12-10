import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import Carousel from "../HomePage/Offerpage/Carousel";
import ServApp from "../HomePage/ServicesHome/ServApp";

function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <ServApp />
      <Carousel />
      <Footer />
    </>
  );
}

export default HomePage;