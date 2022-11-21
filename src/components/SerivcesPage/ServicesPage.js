import Texts from "./ServicesPageTexts";
import "./ServicesPage.css"
import hand from "../images/hand.jpg"
import hair from "../images/hair.jpg"
import massage from "../images/massage.jpg"
import face from "../images/face.jpg"

import ServicesPageCard from "../components/ServicesPageCards";
const ServicesPage = () => {

    return (
        <section>
            <Texts></Texts>
            <div className="container">
                <div className="row pt-5">
                    <ServicesPageCard imgsrc={massage}></ServicesPageCard>
                    <ServicesPageCard imgsrc={face}></ServicesPageCard>
                    <ServicesPageCard imgsrc={hair}></ServicesPageCard>
                    <ServicesPageCard imgsrc={hand}></ServicesPageCard>

                    
                </div>
            </div>


        </section>


    )
}

export default ServicesPage;

