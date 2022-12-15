

import "./ShoppingCart.css"

const ShoppingCart=()=>
{
return(
    <div className="h-100" id="wholePage">
        <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="fw-normal mb-0 text-black">Shopping Cart</h5>
                        <div>
                            <p className="mb-0 text-muted" id="sortList">Sort by:<a className="text-body" href="#!">Price<i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                    </div>
                    <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-item-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src="/images/Shampo_noLabel.jpg" alt="Product" className="img-fluid rounded-3"/>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">Shampo</p>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button className="btn btn-link px-2">
                                        <i id="minusIcon" className="fas fa-minus"/>
                                    </button>
                                    <input id="quantityBox" className="form-control form-control-sm" name="quantity" type="number" min={1}/>
                                    <button className="btn btn-link px-2">
                                        <i className="fas fa-plus"/></button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">$15.99</h5>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"/></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-item-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src="/images/Shampo_noLabel.jpg" alt="Product" className="img-fluid rounded-3"/>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">Shampo</p>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button className="btn btn-link px-2">
                                        <i id="minusIcon" className="fas fa-minus"/>
                                    </button>
                                    <input id="quantityBox" className="form-control form-control-sm" name="quantity" type="number" min={1}/>
                                    <button className="btn btn-link px-2">
                                        <i className="fas fa-plus"/></button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">$15.99</h5>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"/></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-item-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src="/images/Shampo_noLabel.jpg" alt="Product" className="img-fluid rounded-3"/>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">Shampo</p>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button className="btn btn-link px-2">
                                        <i id="minusIcon" className="fas fa-minus"/>
                                    </button>
                                    <input id="quantityBox" className="form-control form-control-sm" name="quantity" type="number" min={1}/>
                                    <button className="btn btn-link px-2">
                                        <i className="fas fa-plus"/></button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">$15.99</h5>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"/></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body p-4 d-flex flex-row">
                            <div className="form-ouline flex-fill">
                                <input placeholder="Discound Code" className="form-control form-control-lg" type="text"/>
                            </div>
                                <button id="buyBtn" type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <button id="buyBtn" type="button" className="btn btn-outline-warning btn-block btn-lg">Buy Items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}


export default ShoppingCart