//import
import'./components/Wellness.css'
import background from './img/image.png';

const Welln =() =>{
    const classes = "Wellpage"
    return(
        <>
        <div className = {classes}>
        <div className= "back">
    <img src ={background} alt = "back"></img> </div>
       <div ><p><h2>CON<u>TAC</u>T US</h2></p>
       <p><h5>ADRESS OF THE SPA</h5></p>
         </div> 
       <div className="">

        <div className="row">
<div class="col">
  <input type="text" className="form-control" placeholder="Your Name" aria-label="Your Name"></input>
</div>
<div className="col">
  <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email"></input>
</div>
</div>   
</div>

<div className="">
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Your Message</label>
</div>
</div>

<div className="">
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">SEND MASSAGE</button>
</div>
</div>

<div classNmam="">
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div classNmam="container-fluid">
      <a classNmam="navbar-brand" href="#">Facebook</a>
    </div>
  </nav>
</div>
</div>



        </div>
        

</>

    )
}

export default Welln;