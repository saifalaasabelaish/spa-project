import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ReadButton = (props) => {
    return (
        <>
             <Link to={props.link} className="btnser btn mb-2" type="submit">Read More </Link>
        </>
    )
}

export default ReadButton ;  