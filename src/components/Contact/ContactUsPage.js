import './Contact.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const Contact  = () => {
    return(
      <>
      <Navbar/> 
     
<div className= "contact">
<div className=' container'>
<div className='container position-absolute start-50  translate-middle justify-content-center '>

            <div>
             <h1 className="d-flex fs-3 fw-semibold justify-content-center text-center mb-4"> CONTACT US</h1>
             <h2 className="d-flex justify-content-center fs-4">ADDRESS OF THE SPA</h2>
            </div>

<div className='containerr position-absolute justify-content-center col-6 '>

       <h3> <div className="d-flex form-floating fs-6 rounded-0 shadow ">
       <input type="email" className="d-flex form-control" id="floatingInput" placeholder="name@example.com"></input>
       <label htmlFor="floatingInput">Email address</label>
       </div></h3>

       <h3><div className="d-flex form-floating fs-6 rounded-0 ">
       <input type="password" className="d-flex form-control mb-2" id="floatingPassword" placeholder="Password"></input>
       <label htmlFor="floatingPassword">Password</label>
       </div></h3>

       <h3><div className="form-floating fs-6 rounded-0 shadow">
       <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
       <label htmlFor="floatingTextarea2 text-light">Message</label></div></h3>

       <h4 className='btn rounded-3 shadow p-3 d-flex justify-content-center fs-4 border'>Send Message</h4>

       <div className="mt-5 w-100 position-absolute top-100">
       <Footer/>
       </div>
 </div>

</div>
</div>
</div>

</>)}
export default Contact;

