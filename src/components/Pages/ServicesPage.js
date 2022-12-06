import Texts from "../SerivcesPage/ServicesPageTexts"
import "../SerivcesPage/ServicesPage.css"
import ServicesPageCards from "../SerivcesPage/ServicesPageCards";
const ServicesPage = () => {

    return (
        <>
            <Texts></Texts>
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