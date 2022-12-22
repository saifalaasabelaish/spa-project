import './ShoppingCard.css'
import './ShoppingPage.css'
import { useCart } from 'react-use-cart'
const ShoppingCard =(props)=>
{
  const {addItem}=useCart()
return(
<div className="card  border w-100 ">
  <img src ={props.imgshoping}  className="card-img-top img-fluid"  alt="product"/>
  <div className="card-body">
    <p className=" card-text d-flex justify-content-center productcard">  {props.content}  </p> 
    <p className='d-flex justify-content-center'> {props.price} </p>
   <div className='text-center'> <button type="submit" className=" btn btncart" > Add To Cart </button> </div>
  </div>
</div>
);
}

export default ShoppingCard;