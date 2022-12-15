import Shopping from "../Shopping/Shopping";
import '../Shopping/Shoppinglabel.css';
import FaceWash from "../Shopping/FaceWash";
import React from "react";


const Shoppinglabel = () => {
  return (
    <>
      <Shopping />
      <h3 className=" header2 d-flex justify-content-center" > S H O P P I N G &nbsp; P A G E </h3>
      <Cart/>
      <div className="container">
        <div className="row">
          {/* categories */}
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
            <div className="card2 border shadow p-3 group d-flex ">
              <div className="card-body ">
                <div className=" btn-group-vertical d-flex justify-content-center" role="group" aria-label="Vertical button group" >
                  < h6 className = "headercategory">PRODUCT <br/> CATEGORIES</h6>
                  <button type="button" onClick={eventHandler} className="btn p-4 " id="skincare">Skin Care </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="makeup"> Make up</button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="body-products">Body products </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="perfumes"> Perfumes </button>
                  <button type="button" onClick={eventHandler} className="btn p-4" id="hair-products"> Hair products </button>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="col-12 col-md-8 col-lg-9 col-xxl-10 ">
            <div className="row mt-5">
            <Products categorytype = {category} />
            </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
};




export default ShoppingPage;