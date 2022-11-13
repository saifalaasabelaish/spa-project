//import


import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


//function
const Card = (props) =>{

    return(
        
        <div className="card">
        <div className="content">
            <div className="imgBx">
                <img src= {props.src} alt="" ></img>
            </div>
            <div className="contentBx">
                <h4>{props.name}</h4>
                <h5>{props.desc}</h5>
            </div>
        <div className="sci">
                
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />

             </div>
            </div>
        </div>
    
            
        
    )
}

//export
export default Card