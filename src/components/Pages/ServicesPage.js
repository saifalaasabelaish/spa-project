
import "../ServicesPage/ServicesPage.css"
import ServicesPageCards from "../ServicesPage/ServicesPageCards";
import Navbar from "../common/Navbar";
import HeaderPage from "../common/HeaderPage";
import ServicesPageTexts from "../ServicesPage/ServicesPageTexts";
const ServicesPage = () => {

    return (
        <>
        <Navbar/>
        <HeaderPage title = "Services we provide"/>
           <ServicesPageTexts/>
            <div className="container">
                <div className="row pt-5 d-flex justify-content-center">
                    <ServicesPageCards imgsrc="/images/face.jpg" ></ServicesPageCards>
                    <ServicesPageCards imgsrc="/images/hair.jpg" ></ServicesPageCards>
                </div>
                <div className="row pt-5 d-flex justify-content-center">
                    <ServicesPageCards imgsrc="/images/massage.jpg"></ServicesPageCards>
                    <ServicesPageCards imgsrc="/images/hand.jpg"></ServicesPageCards>
                </div>
            </div>
        </>
    )
}

export default ServicesPage;