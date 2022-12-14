import { Link } from 'react-router-dom';
import './ServicesPage.css';

const BookButton = () => {
    return (
        <>
            <Link to="/BookingPage" className="btnser btn mb-2" type="submit">Book Now </Link>
        </>
    )
}

export default BookButton;  