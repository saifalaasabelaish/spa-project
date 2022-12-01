import Carousel from "./Carousel";
import Shopping from "./Shopping";
import './Shoppinglabel.css'

const Shoppinglabel = () =>
 {
    return(
        <>
<Shopping/>

<h3 className = " header2 d-flex justify-content-center" > S H O P P I N G &nbsp; P A G E </h3>
<div className ="countiner">
 <div className = "row" > 
    <div className = "col-2 border shadow p-3 mb-5 bg-body rounded group"> 
<div class=" btn-group-vertical " role="group" aria-label="Vertical button group" >
<h6> PRODUCT <br/> CATEGORIES</h6>
  <button type="button" class="btn p-3 ">Face masks</button>
  <button type="button" class="btn p-3 "> Foundation </button>
  <button type="button" class="btn p-3"> Make up</button>
  <button type="button" class="btn p-3">Body products </button>
  <button type="button" class="btn p-3"> Perfumes </button>
  <button type="button" class="btn p-3"> Hair products </button>
  </div>
  </div>
</div>
  </div>
 



</>
    )
};

   export default Shoppinglabel;