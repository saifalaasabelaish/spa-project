const ServicesPageCard = (props) => {

    const classes = "card"

    return (

        <div className="col-md-3">
            <div className={classes}>
                <img src={props.imgsrc}/>
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

export default ServicesPageCard;