import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    // Areen work 
    <div className="navbarr col-12 ">
      <nav>
        <ul>
          <div className='navbar-brand logo position-absolute start-0 m-3'>
            <img img src="/images/spalogo.png" alt="Logo"></img>
          </div>
          <div className="rightfloat">
            <li>
              <Link to="/Contact">Contact</Link>
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
      </nav>
    </div>
  );
};
export default Navbar;