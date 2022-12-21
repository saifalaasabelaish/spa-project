import './Booking.css'
<<<<<<< HEAD
import UserData from "../Admin/UserData"
=======
import {UserData} from "../Admin/UserData"
const Check=()=>{
    const day=document.getElementById("day-select").value;
    const bookedDays=UserData.filter((el)=> el.serviceDay===day);
    if(day===bookedDays)
    return(
        alert("Already Booked , Please Choose another day")
    )



}
>>>>>>> c180b9e8a651bd790c43d7810d16dfcfed05e101
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
        if (filteredJson === true)
            alert("Already Booked , Please Choose another day");
        else
            alert("Succesful");
    }




    return (
        <> <div className='booking'>
<<<<<<< HEAD
            <button type="submit" className="btn btn-spa" onClick={Check} >Book Now</button>
=======
            <button type="submit" className="btn btn-spa" onClick={Check}>Book Now</button>
>>>>>>> c180b9e8a651bd790c43d7810d16dfcfed05e101
        </div>
        </>
    )
}

export default BookNowButton;