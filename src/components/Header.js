import './Head.css';
import headimg from './img/head.png';
const Header= (props) => {
    return(
    <>
    <img src={headimg} className="d-block w-100" alt="homeslider"></img>
    <h1 className="position-absolute top-50 start-50 translate-middle d-inline-flex justify-content-center fs-2 fw-semibold">{props.sentence}</h1>
    <h2 type ="button" className="position-fixed top-50 start-50 translate-middle-x shadow p-3 col-3 d-inline-flex justify-content-center fs-4">{props.btntitle}</h2>
    </>
    )}
    export default Header;