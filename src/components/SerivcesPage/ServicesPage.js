import Texts from "./ServicesPageTexts"
import "./ServicesPage.css"
import ServicesPageCards from "../SerivcesPage/ServicesPageCards";
const ServicesPage = () => {

    return (
        <>
            <Texts></Texts>
            <div className="container">
                <div className="row pt-5">
                    <ServicesPageCards imgsrc="/images/face.jpg" ></ServicesPageCards>
                    <ServicesPageCards imgsrc="/images/hair.jpg" ></ServicesPageCards>
                    <ServicesPageCards imgsrc="/images/massage.jpg"></ServicesPageCards>
                    <ServicesPageCards imgsrc="/images/hand.jpg"></ServicesPageCards>
                </div>
            </div>

        
        </>

    )
}

export default ServicesPage;

