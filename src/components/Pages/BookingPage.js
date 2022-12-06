
import "../BookingPage/Booking.css"
import BookingTexts from "../BookingPage/BookingTexts"
import BookingForm from "../BookingPage/BookingForm"
import BookNowButton from "../BookingPage/BookNowButton"

const BookingPage = () => {
    return (
        <>
            <BookingTexts></BookingTexts>
            <div className="container ">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-12 col-md-8 col-sm-8 col-lg-5 bg-white rounded p-4 shadow">
                        <BookingForm>
                            <BookNowButton></BookNowButton>
                        </BookingForm>
                    </div>
                </div>
            </div>
        </>




    );

}
export default BookingPage;