import '../ServicesPage/ServicesPage.css'
import BookButton from './BookButton';
import ReadButton from './ReadButton';
const ServicesCard = (props) =>{
    return(
      <>
    <div className="servicess">
      <div className="container" id="services-item">
     <div className="card mb-2" >
      <div className="row g-0">
        {/* <div className="col-md-4"> */}
          <img src={props.ImgServices} className="img-fluid rounded-start" alt="..."/>
        {/* </div> */}
        {/* <div className="col-md-8"> */}
          <div className="card-body">
            <h5 className="serv-title">{props.title}</h5>
            <p className="serv-desc">{props.content}</p>
            <p className="serv-price">
              <small className="text-muted">{props.price}</small></p>
          </div>
        {/* </div> */}
      </div>
      <div className='text-center'>
    <BookButton/><ReadButton link = {props.serlink}/></div>
      </div>
      </div>
      </div>
    
    </>
    )
    }
    export default ServicesCard;