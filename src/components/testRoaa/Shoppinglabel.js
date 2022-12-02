import Shopping from "./Shopping";


const Shoppinglabel = () => {
  return (
    <>
      <Shopping />

      <h3 className=" header2 d-flex justify-content-center" > S H O P P I N G &nbsp; P A G E </h3>


      <div className="container">
        <div className="row">
          {/* categories */}
          <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
            <div className="card2  border shadow p-3 group d-flex ">
              <div className="card-body ">
                <div className=" btn-group-vertical " role="group" aria-label="Vertical button group" >
                  <h6> PRODUCT <br /> CATEGORIES</h6>
                  <button type="button" className="btn p-3 ">Skin Care </button>
                  <button type="button" className="btn p-3 "> Foundation </button>
                  <button type="button" className="btn p-3"> Make up</button>
                  <button type="button" className="btn p-3">Body products </button>
                  <button type="button" className="btn p-3"> Perfumes </button>
                  <button type="button" className="btn p-3"> Hair products </button>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="col-12 col-md-8 col-lg-9 col-xxl-10">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                <div className="card3 border">
                  <img src=" ./mask3.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text ">  Face Wash  </p>
                    <p > 48.00 $</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Shoppinglabel;