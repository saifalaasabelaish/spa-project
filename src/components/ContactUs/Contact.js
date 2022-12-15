import { Link } from "react-router-dom";
import HeaderPage from "../common/HeaderPage";
import Navbar from "../common/Navbar";
import "./Contact.css"

const Contact = () => {

  return (
    <>
      <Navbar />
      <HeaderPage title="CONTACT US" />
      <div className="contact">
        <img src='images/background.png ' className='d-flex d-block w-100 ' alt="back"></img>
        <div className='container position-absolute start-50 translate-middle justify-content-center '>
          <h1 className="d-flex fs-3 fw-semibold justify-content-center text-center mb-4 mt-5"> CONTACT US</h1>
          <h2 className="d-flex justify-content-center fs-4">ADDRESS OF THE SPA</h2></div>
        <div className='containerr position-absolute justify-content-center col-6'>
          <h3> <div className="d-flex form-floating fs-6 rounded-0 shadow">
            <input type="email" className="d-flex form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label htmlfor="floatingInput">Email address</label></div></h3>
          <h3><div className="d-flex form-floating fs-6 rounded-0 ">
            <input type="password" className="d-flex form-control mb-2" id="floatingPassword" placeholder="Password"></input>
            <label htmlfor="floatingPassword">Password</label></div></h3>
          <h3><div className="form-floating fs-6 rounded-0 shadow">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
            ></textarea>
            <label htmlfor="floatingTextarea2 text-light">Message</label></div></h3>
          <h4 className='btn rounded-3 shadow p-3 d-flex justify-content-center fs-4 border'>Send Message</h4>
        </div>
        {/* Areen Work  */}
        <footer>
          <h5 className="container-fluid d-flex justify-content-center">
            <ul className="navbar-nav mt-5">
              <li>
                <Link to="https://www.facebook.com/" className="me-5 text-light">FACEBOOK</Link>
                <Link to="https://twitter.com/home" className="me-5 text-light">TWITTER </Link>
                <Link to="https://www.instagram.com/" className="me-5 text-light">INSTAGRAME</Link>
              </li>
            </ul>
          </h5>
        </footer>
      </div></>)
}
export default Contact;