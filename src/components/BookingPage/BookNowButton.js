import UserData from '../Admin/UserData';
import './Booking.css'

const day = document.getElementById("day-select");

var filteredJson = UserData.filter(function (row) {
    if (row.serviceDay == day) {
        return true;
    } else {
        return false;
    }
});

const Check = () => {
if (filteredJson)
    alert("Already Booked , Please Choose another day");
else 
alert("Succesful");
}

const BookNowButton = () => {
    return (
        <> <div className='booking'>
            <button type="submit" className="btn btn-spa" onClick={Check}>Book Now</button>
        </div>
        </>
    )
}

export default BookNowButton;