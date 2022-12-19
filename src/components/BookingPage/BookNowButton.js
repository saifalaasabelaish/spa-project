import './Booking.css'
const BookNowButton = () => {

    const check = () => {

        let x = document.getElementById("day-selector").value
        if (x === "saturday")
            return (alert("error"))


    }


    return (
        <> <div className='booking'>
            <button type="submit" className="btn btn-spa" onClick={check}>Book Now</button>
        </div>
        </>
    )
}

export default BookNowButton;