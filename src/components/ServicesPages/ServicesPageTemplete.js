import { Link } from 'react-router-dom'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import './ServicesPageTemplete.css'

const ServicesPageTemplete = (props) => {
  return (
    <>
    <Navbar/>
   
      <div className='ServicesPage p-5 w-12 top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl ' >
        <div className="shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout">
          <div className=' container start-4 col-12 '>

          <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
   <Link to="/ServicesPage"><li className="breadcrumb-item text-dark"><div>Services </div></li></Link>
    <li className="breadcrumb-item active" aria-current="page">{props.servicename}</li>
  </ol>
</nav>
            <div className="ServicesPageTemplete ">
              <img src={props.imgg} className="img img-fluid " alt={props.alt}></img>
            </div></div>
          <div className="item-wrapper text-start">
            <div className="h5 title font-weight-bold">
              {props.title1}</div>
            <p>{props.Paragraph1}
            </p></div>
          <div className="item-wrapper text-start">
            <div className="h5 title">
              {props.title2}</div>
            <div className="text-area">
              <p>{props.Paragraph2}</p>
            </div></div>  <div className=" item-wrapper text-start">
            <div className="h5 title"> {props.title3}</div>
            <div className="text-area">
              <p>{props.Paragraph3}
              </p>
            </div></div><div className="item-wrapper text-start">
            <div className="title"><h5>{props.title4}</h5></div>
            <div className="text-area">
              <p>{props.Paragraph4}
              </p>
            </div>
          </div>
           <Link to = "/BookingPage"className='btn buttonn p-3'>Do you want to experiment, go ahead?</Link></div></div>
          <Footer/>


    </>
  )
}


export default ServicesPageTemplete

