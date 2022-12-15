//import

//function
const ServicesHome= (props) =>{

  return(
      
    
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
              <div className="services-card" >
                  <img src="images/care.jpg"  alt="skin care"></img>
                  <div className="card-body">
                    <h5 className="ser-card-title">{props.ser_card_title}</h5>
                    <p className="ser-card-text">{props.ser_card_text}</p>
                    
                  </div>
                </div>
          </div>
  )
}

//export
export default ServicesHome