import Shopping from "../Shopping";
import './ShoppingPage.css'
import ShoppingCard from "./ShoppingCard"
import React, { useState } from "react";
import Products from "./Products";
import Footer from "../Footer";

const Cart = (onClick , props) =>
  {
  return (
    <>
    <div className="cart  justify-content-end d-flex me-4 mt-3">
      <button  className ="cart-btn " onClick={() => onClick()}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAdJJREFUWEftl70uBFEYhp9N0KJW+GloJOIG0GjFFfgp6GQvgJBwAego/NwBrQY3IBENjZ9Cr0ZCXjmzOTO7M3PmzBm7xU63O+f7vme+95v3nKnRYVetw3joAuUpkuzQDvBjBd0At3lJQt5PAtkwUZ0zYCVk0axcLkCKXwQu/gOqlWRR3SlgwfyQdHPtALJrjgAv1h+jwGvVUHmvveZnyUCcA8vtBpoFrg3EB7BfAZAetNH5vA6pvhYPVwASpVR+jcPf5QIkmU4rBHoDNK/OQAOmS/0VQR0A9SJAWmsPd2iu2NvrIpkAkhYQCuoekN81LlcgBcgcZ0KRmDzaktR9L6AqhnsQkJ14ASkopAW0NNoikglIx5PtQLK13LCLAoUa7pj3lJEslAXEvKcskL2/+aqXenIoKlkEUGa4m7ynbIcUX8YCmrwnBFAE1dgUHbVTZ2NGmIzzlcyxfvFlZYCOzNfIM7ABXKWUnwcOgTFzjFnPwvQF0hycWImfgImUQo/AuHVvNet85Qu0CexaRb6AvhSgT6DXurcF7KV1yRdoErgDekziYyBNCkm7ZtZ9A9PAQ2gg5ROUvtveHY64kngIuMyCUVLfDhV/fRwjukB5jeq4Dv0CIkZFJZM8NK0AAAAASUVORK5CYII=" />
      <span className="badge text-bg-secondary border-5">  { props.datap } </span>
      </button>
    </div>
    </>
    
  )
}
const ShoppingPage = () => {
  const [category, setCategory] = useState("skincare");
  const eventHandler = (event) =>
  {
    setCategory (event.target.id);
  }

  return (
    <>
      <Shopping />
      <h3 className=" header2 d-flex justify-content-center" > S H O P P I N G &nbsp; P A G E </h3>
      <Cart/>
      <div className="container">
        <div className="row">
          {/* categories */}
          <div className="col-12 col-md-4 col-lg-3 col-sm-6 col-xxl-2">
            <div className="card2  border shadow p-3 group d-flex ">
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
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 ">
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