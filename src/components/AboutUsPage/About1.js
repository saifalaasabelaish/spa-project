import './AboutPage.css'
const About1 = (props) => {
    return (
        <div className='container p-3 '>
            <div className='row d-sm-flex'>
                <div className='col col-md-12 col-lg-6 d-flex text-capitalize text-center justify-content-center needInfo'>
                    <div className=' title h4'>{props.title}</div>
                    <p className='lead mx-3'>
                        {props.Paragraph }
                    </p>
                </div>
                <div className='col col-md-12 col-lg-6 '>
                    <img className=' teamimg w-50 h-75 img-fluid '
                        src={props.imga}
                        alt={props.alt} />
                </div>
            </div>
        </div>
    );
}
export default  About1 ;