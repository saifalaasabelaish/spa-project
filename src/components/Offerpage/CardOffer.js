//import 
import './CardOffer.css'
//function 
const CardOffer = (props) => { // props For Dynimc Data 
return (
  <div className="offers">
<div className="card border-white d-flex">
  <div className="card-body d-flex">
    <img src= {props.imag} className ="img-fluid" alt={props.offers}/> 
  </div>
</div>
</div>
)
}
//Export
export default CardOffer