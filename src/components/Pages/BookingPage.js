import "../BookingPage/Booking.css"
import BookingForm from "../BookingPage/BookingForm"
import BookNowButton from "../BookingPage/BookNowButton"
import HeaderPage from "../common/HeaderPage"

const BookingPage = () => {
    return (
        <>
            <HeaderPage title = "BOOKING PAGE"/>
            <div className="container ">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-12 col-md-8 col-sm-8 col-lg-5 bg-white rounded p-4 shadow">
                        <BookingForm>
                       <div className="text-end"><BookNowButton/></div>
                       </BookingForm>
                    </div>
                </div>
            </div>
            <div className="row vh-100 align-items-center justify-content-center m-5">
                    <div className="col-12 col-md-8 col-sm-8 col-lg-5 bg-white rounded p-4 shadow">
                        <BookingForm>
                       <div className="text-end"><BookNowButton/></div>
                       </BookingForm>
                    </div>
                </div>

        </>




    );

}
export default BookingPage;