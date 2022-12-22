import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarr">
        <nav className="navbar navbar-expand-lg navbar-expand-md">
          <div className="container-fluid">
            <div className="navbar-brand logo">
              <Link to="/"><img src="/images/spalogo.png" alt="Logo" /></Link></div>
            <div className="justify-content-end">
              <button className="navbar-toggler border-white" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse show navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <li className="nav-item">
                    <Link to="/BookingPage" className="bookingbtn">Book Now</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;