const ServicesCard = (props) => {
  return (
    <div className=" col-sm-6 col-md-4 col-lg-3">
      <div className="services-card" >
        <img src={props.imag} alt="spa sevices"></img>
        <div className="card-body">
          <h5 className="ser-card-title">{props.ser_card_title}</h5>
          <p className="ser-card-text">{props.ser_card_text}</p>
        </div>
      </div>
    </div>
  )
}
export default ServicesCard;