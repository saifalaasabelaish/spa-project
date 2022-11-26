import './Head.css';
const Header= (props) => {
    return(
    <>
    {/* Here I designed the presentation slide because it is the same,
     with different sentences, to prevent repetition in the main file */}
     <div className='head'>
    <img src='images\head.png' className="d-block w-100" alt="homeslider"></img>
    <div className='container position-absolute top-50 start-50 translate-middle justify-content-center col-6'>
    <h1 className="d-flex fs-2 fw-semibold justify-content-center mb-4">{props.sentence}</h1>
    <h2 className="btn rounded-0 shadow p-3 d-flex justify-content-center fs-4 border">{props.btntitle}</h2>
    {/* I have a problem with the size , I will solve it later */}
   </div></div></> 
    )}
    export default Header;
