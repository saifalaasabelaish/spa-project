import Shopping from "./Shopping";
import './Shoppinglabel.css'
import CardContent from "./CardContent"
import FaceWash from "./FaceWash";
const Shoppinglabel = () =>
 {
    return(
        <>
<Shopping/>

<h3 className = " header2 d-flex justify-content-center" > S H O P P I N G &nbsp; P A G E </h3>
<div className="container">
  <div className="row">
    {/* categories */}
    <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
      <div className="card2  border shadow p-3 group d-flex ">
        <div className="card-body ">
          <div className=" btn-group-vertical " role="group" aria-label="Vertical button group" >
            <h6> PRODUCT <br /> CATEGORIES</h6>
            <button type="button" className="btn p-4 " id="Skincare">Skin Care </button>
            <button type="button" className="btn p-4 " id= "Foundation"> Foundation </button>
            <button type="button" className="btn p-4" id="MakeUP"> Make up</button>
            <button type="button" className="btn p-4" id="Bodyproducts">Body products </button>
            <button type="button" className="btn p-4" id="perfumes"> Perfumes </button>
            <button type="button" className="btn p-4" id="Hairproducts"> Hair products </button>
          </div>
        </div>
      </div>
    </div>
    {/* products */}
    <div className="col-12 col-md-8 col-lg-9 col-xxl-10">
      <FaceWash/>
    </div>
  </div>
</div>

</>
    )
};

   export default Shoppinglabel;