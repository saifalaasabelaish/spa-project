import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarr col-12">
        <nav className="navbar navbar-expand-lg navbar-expand-md text-end">
          <div className="navbar-brand logo ms-2">
            <Link to="/">
              <img src="/images/spalogo.png" alt="Logo" />
            </Link>
          </div>
          <button className="navbar-toggler hidden-lg-up m-3 border-white" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/ShoppingPage">Shopping</Link>
              </li>
              <li className="nav-item">
                <Link to="/ServicesPage">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="nav-item pb-1">
                <Link to="/BookingPage" className="bookingbtn">Book Now</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;