
import './CardContent.css'

const CardContent =(props)=>
{
return(
<div className="card3 border ">
  <img src ={props.ImgShoping}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">  {props.Content}  </p>
    <p> {props.Price} </p>
  </div>
</div>
);
}

export default CardContent