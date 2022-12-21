import './Booking.css'
import {UserData} from "../Admin/UserData"
const Check=()=>{
    const day=document.getElementById("day-select").value;
    const bookedDays=UserData.filter((element)=> element.serviceDay===day);
    console.log(bookedDays);
    if(bookedDays.length!==0)
    return(
        alert("Already Booked , Please Choose another day")
    )



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