const AddCart = (props) => {
    
    const btnTitle = (props.title) ? props.title : "Book Now"

    return (

        <button type="button" className="btn btn-outline-danger"> {btnTitle}</button>

    );
}

export default AddCart;