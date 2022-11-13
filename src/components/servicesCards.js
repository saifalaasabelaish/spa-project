import "./Card.css"
import img1 from '../images/img1.jpg';
const Card = (props) => {

    const classes = "card"

    return (

        <div className="col-4">
            <div className={classes}>
                <img src={img1} alt ='image 1'/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.desc}
                    </p>
                </div>
                {props.children}
            </div>
        </div>


    );
}

export default Card;