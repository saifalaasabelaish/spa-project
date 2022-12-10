import './ServicesPageTemplete.css'
const ServicesPageTemplete = (props) => 
{ 
    return (
    <>
<div className='ServicesPage  p-5 w-12   top-50 start-50 bg-white justify-content-center align-items-xl-center align-items-xxl ' >
        <div className="  shadow h-10 w-100 p-4 mb-200 bg-white rounded justify-conten tbg-body callout">
          <div className=' container start-4 col-12 '>
            <div className="ServicesPageTemplete ">
                <img src={props.imgg} className="img img-fluid " alt={props.img}></img>
              </div></div>
            <div className="item-wrapper text-start">
              <div className="title ">
                <h5>{props.title1}</h5></div>
              <p>{props.Paragraph1}
              </p></div>
            <div className="item-wrapper text-start">
              <div className="title">
                <h5>{props.title2}</h5></div>
              <div className="text-area">
                <p>{props.Paragraph2}</p>
              </div></div>  <div className="item-wrapper text-start">
              <div className="title"><h5> {props.title3}</h5></div>
              <div className="text-area">
                <p>{props.Paragraph3}
                </p>
              </div></div><div className="item-wrapper text-start">
              <div className="title"><h5>{props.title4}</h5></div>
              <div className="text-area">
                <p>{props.Paragraph4 }
                 </p>
              </div></div></div></div>
    </>
    )
    }
    
   
    export default ServicesPageTemplete

