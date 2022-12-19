import ShoppingCard from "./ShoppingCard";
import productsData from "./products_data";
const Products = (props) =>
 {
  const typee = props.categorytype;
    return (
      <>
       {productsData.filter(
                    product => (product.cat === typee) // product as pointer to the objects in array 
                    )
                .map((product) => {
                    return (
                    <div className ="col-12 col-md-6 col-lg-4 col-xxl-3 ">
                      <div className = "mb-3">
                        <ShoppingCard photo={product.photo} Content={product.name} Price ={product.price} product={product} key= {product.id}/>
                      </div>
                    </div>
                    )
                })
              }
      </>
    )
  }
export default Products; 