import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbarr navbar-expand-lg ">
        <ul>
          <div className='navbar-brand logo position-absolute start-0 m-3'>
            <img src="/images/spalogo.png" alt="Logo"/>
          </div>
          <div className="rightfloat">
          <li>
              <Link to="/BookingPage" className="bookingbtn">Book Now</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/ShoppingPage">Shopping</Link>
            </li>
            <li>
              <Link to="/ServicesPage">Services</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        </ul>
    {/* </div> */}
    </nav>
  );
};
export default Navbar;