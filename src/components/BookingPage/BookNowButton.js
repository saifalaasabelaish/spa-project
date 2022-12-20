import './Booking.css'
import UserData from "../Admin/UserData"
const BookNowButton = () => {

    const day = document.getElementById("day-select");

    var filteredJson = UserData.filter(function (row) {
        if (row.serviceDay === day) {
            return true;
        } else {
            return false;
        }
    });

    const Check = () => {
        if (filteredJson === 1)
            alert("Already Booked , Please Choose another day");
        else
            alert("Succesful");
    }


    return (
        <> <div className='booking'>
            <button type="submit" className="btn btn-spa" onClick={Check} >Book Now</button>
        </div>
        </>
    )
}

export default BookNowButton;