
import React from "react"
import {useCart} from "react-use-cart"
const Cart=(props)=>{
    const{
        isEmpty,
        items,
        updateItemsQuantity, 
        removeItem,
    }=useCart();
    if(isEmpty) return(<h4 className="fw-normal mb-0 text-black">Yor Cart is Empty</h4>)
    return(
            {items.map((item,index)=>{
            return(

                <div className="card rounded-3 mb-4">
                    {/*onClick for add to cart button*/}
        
                        <div className="card-body p-4" key={index}>
                                    <div className="row d-flex justify-content-between align-item-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img src="/images/Shampo_noLabel.jpg" alt="Product" className="img-fluid rounded-3"/>{/*{item.img}*/}
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <h4 className="lead fw-normal mb-2">{item.content}</h4>{/*Shampo*/}
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button className="btn btn-link px-2" onClick={()=>updateItemsQuantit(item.id,item.quantity-1)}>
                                                <i id="minusIcon" className="fas fa-minus"/>
                                            </button>
                                            <input id="quantityBox" className="form-control form-control-sm" name="quantity" type="number" min={1}/>
                                            <button className="btn btn-link px-2"
                                            onClick={()=>updateItemsQuantit(item.id,item.quantity+1)}>
                                                <i className="fas fa-plus"/></button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">$15.99</h5>{/*${item.price}*/}
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" className="text-danger" onClick={removeItem(item.id)}><i className="fas fa-trash fa-lg"/></a> 
                                        </div>
                                    </div>
                                </div>
                                </div>
                    )
                    })}
            )
            
}

export default Cart