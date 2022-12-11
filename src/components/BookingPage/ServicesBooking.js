import './Booking.css'

const ServiceBooking = () => {
    return (
        <>
            <div className='booking col-12'>
                <div className="mb-3 mt-2">
                    <label htmlFor="services">Choose the service you want to book : </label>
                    <select name="services" className="col-3 col-md-3 mx-3 mt-2">
                        <option value="massage">Massage </option>
                        <option value="face">Face Care </option>
                        <option value="hand">Hand Care </option>
                        <option value="body">body care </option>
                        <option value="feet">feet care</option>
                        <option value="bridal">bridal care</option>
                        <option value="laser">laser hair</option>
                        <option value="salon">salon services</option></select></div>

                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="date">Pick A Day :</label>
                        <select name="days" className="col-3 col-md-3 mb-3 mx-3 mt-2">
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                        </select></div>
                    <div className="mb-3">
                        <label htmlFor="appt">Select a time :</label>
                        <input type="time" id="appt" name="appt" className="col-3 col-md-3 mx-2 mb-2" />
                        {/* we will have a selector and options for the day that user choosen before
        "available times in this day" */}
                    </div></div></div></>
    );
}
export default ServiceBooking;