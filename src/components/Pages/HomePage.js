import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Head from "../HomeHead/Header";
import Carousel from "../Offerpage/Carousel";
import ServApp from "../ServicesHome/ServApp";
import Staff from "../StaffHome/Staff";

function HomePage() {
  return (
<>
<Navbar/>
<Head/>
<ServApp/>
<Carousel/>
<Staff/>
<Footer/>
</> 
  );
}

export default HomePage;