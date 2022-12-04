const BookingForm = (props) => {
    return (

        <>
            <form>
                <div className="row">
                    <h1> Customer Information</h1>
                    <div className="col-md-6 mb-3">
                        <label for="exampleInputName" className="form-label">Full Name</label>
                        <input type="name" className="form-control" aria-describedby="nameHelp" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="exampleInputNumber" className="form-label">Phone Number</label>
                        <input type="name" className="form-control" aria-describedby="numberHelp" />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" class="form-label">Address</label>
                    <input type="address" class="form-control" id="exampleInputAddress" aria-describedby="addressHelp" />
                </div>
                <div>
                    <label for="services">The service you want to book : </label>
                    <select name="services" className="col-md-6 mb-3">
                        <option value="massage">Massage </option>
                        <option value="face">Face Care </option>
                        <option value="hand">Hand Care </option>
                        <option value="wellness">Wellness </option>
                    </select>
                </div>
                <div>
                    <label for="date">Pick A Day :</label>
                    <input type="date" name="date" className="col-md-6 mb-3" />
                </div>
                <div>
                    <label for="appt">Select a time:</label>
                    <input type="time" id="appt" name="appt" />
                </div>
                {props.children}
            </form>

        </>
    )
}

export default BookingForm;