import Texts from "./ServicesPageTexts"
import "./ServicesPage.css"
import ServicesPageCard from "../SerivcesPage/ServicesPageCards";
const ServicesPage = () => {

    return (
        <section>
            <Texts></Texts>
            <div className="container">
                <div className="row pt-5">
                    <ServicesPageCard imgsrc="/images/face.jpg" ></ServicesPageCard>
                    <ServicesPageCard imgsrc="/images/hair.jpg" ></ServicesPageCard>
                    <ServicesPageCard imgsrc="/images/massage.jpg"></ServicesPageCard>
                    <ServicesPageCard imgsrc="/images/hand.jpg"></ServicesPageCard>

                    
                </div>
            </div>


        </section>


    )
}

export default ServicesPage;

