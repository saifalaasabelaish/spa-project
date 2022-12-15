import ServicesCard from "./ServicesCard";
import servicesData from "./Services_Data";
const Services = (props) =>
 {
  const typee = props.categorytype;
    return (
      <>
        {
          servicesData
          .filter
          (
              service => (service.cat == typee) // product as pointer to the objects in array 
          )
          .map(
            (service) => 
          {
              return (
              <div className ="col-12 col-md-6 col-lg-6 col-xxl-8 mb-5">
              <ServicesCard  ImgServices={service.servimg} altt={service.altt} key= {service.number} title = {service.sername} content={service.description} price ={service.rate} serlink = {service.pagelink}/>
              </div>
               )
          }
          )
        }
      </>
    )
  }
export default Services; 