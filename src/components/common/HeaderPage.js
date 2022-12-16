import './HeaderPage.css'
const HeaderPage = (props) => {
    return (
        <h3 className=" navbar-expand-lg  header2 d-flex justify-content-center p-3" >{props.title}</h3>
    )
}

export default HeaderPage;