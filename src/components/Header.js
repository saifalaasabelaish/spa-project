import './Head.css';
import headimg from './img/head.png';
const Header= (props) => {
    return(
    <>
     <div className='head'>
    <img src={headimg} className="d-block w-100" alt="homeslider"></img>
    <div className='container position-absolute top-50 start-50 translate-middle justify-content-center w-50'>
    <h1 className="d-flex fs-2 fw-semibold justify-content-center mb-5">{props.sentence}</h1>
    <h2 className="btn rounded-0 shadow p-3 d-flex justify-content-center fs-4 border">{props.btntitle}</h2>
   </div></div></> 
    )}
    export default Header;
