
import Addtocart from './Addtocart';
import './ShoppingCard.css'

const ShoppingCard =(props)=>
{
return(
<div className="card3 border ">
  <img src ={props.ImgShoping}  className="card-img-top imgeproduct "  alt="..."/>
  <div className=" card-body">
    <p className=" card-text d-flex justify-content-center">  {props.Content}  </p> 
    <p className='d-flex justify-content-center'> {props.Price} </p>
    <Addtocart/>
  </div>
</div>
);
}

export default ShoppingCard