import { Link } from 'react-router-dom';
import './HomeHeader.css';
const HeadCarousel = (props) => {
    return (
        <>
            {/* Here I designed the Carousel because it is the same,
     with different sentences, to prevent repetition in the main file */}
            <div className='head'>
                <img src='images\head.png' className="d-block mx-auto w-100" alt="homeslider"/>
                <div className='container justify-content-center position-absolute top-50 start-50 translate-middle d-flex align-items-center'>
                    <h1 className="fs-2 fw-semibold text-center mb-4 col-8">{props.sentence}</h1>
                    <Link to={props.link} className="btn headbtn rounded-0 shadow p-3 fs-4 border">{props.btntitle}</Link>
                </div></div></>
    )
}
export default HeadCarousel;
