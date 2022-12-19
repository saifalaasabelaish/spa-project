import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarr">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid"> 
            <a className="navbar-brand logo">
              <Link to="/"><img src="/images/spalogo.png" alt="Logo" /></Link></a>
              <div className="justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav justify-content-end">
              <div className="rightfloat">
                <li className="nav-item">
                  <Link to="/BookingPage" className="bookingbtn">Book Now</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ShoppingPage">Shopping</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ServicesPage">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                </div>
            </div></div>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
