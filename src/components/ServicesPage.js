import Texts from "./ServicesPageTexts";
import "./ServicesPage.css"

import SerivcesPageCard from "../components/ServicesPageCards";
const ServicesPage = () => {

    return (
        <section>
            <Texts></Texts>
            <div className="container">
                <div className="row pt-5">
                    <SerivcesPageCard></SerivcesPageCard>
                    <SerivcesPageCard></SerivcesPageCard>
                    <SerivcesPageCard></SerivcesPageCard>
                    <SerivcesPageCard></SerivcesPageCard>
                </div>
            </div>


        </section>


    )
}

export default ServicesPage;