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
              <div className ="col-12 col-md-6 col-lg-4 col-xxl-3 ">
              <ServicesCard  ImgServices={service.servimg} key= {service.number} title = {service.sername} content={service.description} price ={service.rate} serlink = {service.pagelink}/>
              </div>
               )
          }
          )
        }
      </>
    )
  }
export default Services; 