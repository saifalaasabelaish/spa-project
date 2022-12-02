const BookingForm = (props) => {


    return (

        <>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-sm-8 col-lg-6 bg-white rounded p-4 shadow">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputName" className="form-label">Full Name</label>
                                    <input type="name" className="form-control" aria-describedby="nameHelp" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputNumber" className="form-label">Phone Number</label>
                                    <input type="name" className="form-control" aria-describedby="numberHelp" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            {props.children}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingForm;