//import 
import './Card.css'
//function 
const Card = (props) => {
return (
<div class="card" >
  <div class="card-body">
    <img src= {props.imag} class="img-fluid" alt={props.Offers}/>

  </div>
</div>

)
}


//Export
export default Card 