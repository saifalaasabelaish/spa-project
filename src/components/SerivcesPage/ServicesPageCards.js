const ServicesPageCards = (props) => {

    const classes = "card"

    return (

        <div className="col-md-3">
            <div className={classes}>
                <img src={props.imgsrc} />
            </div>
        </div>


    );
}

export default ServicesPageCards;