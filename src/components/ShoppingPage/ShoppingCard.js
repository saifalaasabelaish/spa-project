
import './ShoppingCard.css'
import { useCart } from 'react-use-cart';

const ShoppingCard =(props)=>
{
  const {addItem}=useCart()
return(
<div className="card3 border ">
  <img src ={props.photo}  className="card-img-top imgeproduct "  alt="..."/>
  <div className=" card-body">
    <p className=" card-text d-flex justify-content-center">  {props.Content}  </p> 
    <p className='d-flex justify-content-center'>{Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format( props.Price)}</p>
    <button className="btncart mb-2 ms-4" onClick={()=>addItem(props.product)}>Add to cart</button>
  </div>
</div>
);
}

export default ShoppingCard