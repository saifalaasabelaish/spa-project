//import
import'./Wellpage.css'
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
         
         
     <h3> <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput">Email address</label>
</div>
</h3>
<h4>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
</div>
</h4>

<h5>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" height=" 300px "
  ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
</h5>

<h6 type = "Button">Send Message</h6>
<div className="footer"><a href="#" class="link-light">FACEBOOK</a>
<a href="#" class="link-light">TWITTER</a>
<a href="#" class="link-light"> INSTAGRAME</a>


</div>




        </div>
        

    )
}

export default Wellpage;