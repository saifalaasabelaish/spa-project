import SocialMedia1 from "./SocialMedia1"
import "./Tast.css"
const StaffHome1= (props) =>
{ 
    return(
    <>
    <div className="card staff col-12 d-flex ">
    <div class="image opacity-100 overflow-hidden "><img src={props.img} className="img-top carousel-control-opacity opacity-50 img-fluid   " alt={props.alt1}></img></div>
    <div className="titleStaff text-center mt-3"><div className="center"><h5 >{props.title}</h5><p> {props.paragraph1}{props.children}</p></div></div></div>
</>
    
     
    )}

export default StaffHome1