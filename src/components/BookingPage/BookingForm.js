import './Booking.css'
import ServiceBooking from './ServicesBooking'
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
                <ServiceBooking/>
                <div class="form-check form-check-inline">
         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
           <label class="form-check-label" for="inlineCheckbox1">remind me</label></div>
                {props.children}
            </form>
</div>
        </>
    )
}
export default BookingForm;