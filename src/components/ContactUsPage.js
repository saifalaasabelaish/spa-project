//import
import './Contact.css'
import background from './img/image.png';

const Wellpage  = () => {
    const classes = "Wellpage"
    return(
        
 <div className ={classes}>
   <div className= "back">
 <img src ={background} alt = "back"></img> 
</div>
 <h1> CONTACT US</h1>
  <h2>ADDRESS OF THE SPA</h2>
         
         
 <h3> <div className="form-floating mb-3">
 <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
 <label for="floatingInput">Email address</label>
 </div>
</h3>
<h4>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
</div>
</h4>

<h5>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" 
  ></textarea>
  <label for="floatingTextarea2">Message</label>
</div>
</h5>

<h6 type = "Button">Send Message</h6>

<div className="footer">
<footer className="margin">
<div class="container-fluid">
                <span class="navbar-toggler-icon"></span>
<ul className="navbar-nav">
<li><a href="#" className="link-light">FACEBOOK</a></li>
<li><a href="#" className="link-light">TWITTER </a></li>
<li><a href="#" className="link-light"> INSTAGRAME</a></li></ul></div></footer>
</div>

        </div>
    )
}
export default Wellpage;