const BookingForm = (props) => {
    return (
        <><div className='booking'>
          <form className="was-validated">
                <div className="row">
                    <div className="col-md-6 mb-3 mt-2">
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input type="name" className="form-control" aria-describedby="nameHelp" placeholder="Required Name"required/>
                    </div>
                    <div className="col-md-6 mb-3 mt-2">
                        <label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
                        <input type="name" className="form-control" aria-describedby="numberHelp" placeholder="Required Number"required/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Required Email"required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="address" className="form-control" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Required Address"required/>
                </div>
                <div>
                    <label htmlFor="services">The service you want to book : </label>
                    <select name="services" className="col-md-6 mb-3 mx-1">
                        <option value="massage">Massage </option>
                        <option value="face">Face Care </option>
                        <option value="hand">Hand Care </option>
                        <option value="wellness">Wellness </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Pick A Day :</label>
                    <input type="date" name="date" className="col-md-6 mb-3 mx-2" />
                </div>
                <div>
                    <label htmlFor="appt">Select a time:</label>
                    <input type="time" id="appt" name="appt" className="mx-2 mb-3"/>
                </div>
                {props.children}
            </form>
</div>
        </>
    )
}
export default BookingForm;