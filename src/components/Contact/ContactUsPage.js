import HeaderPage from '../common/HeaderPage';
import './Contact.css'

import Social from './Social' 

const Contact = () => {
      return (
            <>

                 
                  <HeaderPage title = " Contact Us"/>

                  <div classname = "container ">
                    <div className='row'>
                  <div classname = " col-6">
                    
                  <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4 ">
    <label htmlFor="validationCustom01" className="form-label  ">First name</label>
    <input type="text" className="form-control col-6" id="validationCustom01"  required/>
    <div className="valid-feedback"> 
    </div>
  </div>
  <div className="col-md-4 ">
    <label htmlFor="validationCustom02" className="form-label  ">Last name</label>
    <input type="text" className="form-control col-6" id="validationCustom02" required/>
    <div className="valid-feedback">
    </div>
  </div>
<div>
  <input className="form-control w-50" type="text" value="phone" aria-label="readonly input example" readonly></input>
  </div>
  <div>
  <input className="form-control w-50" type="text" value="message" aria-label="readonly input example" readonly></input>
  </div>


  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
  
</form></div></div>
</div>
                  
                                    <div classname = "row-2 col-12 ">
                                    <h1 className=' textt position-absolute '>Follow Us</h1>
                                    <Social/>

                                    <h1 className=' texttt position-absolute'>Branches</h1>
                                    <h3 className=' text1 position-absolute'>-Nablus</h3>
                                    <h5 className=' text2 position-absolute'>-Palestine Complex</h5>
                                    <h5 className=' text3 position-absolute'>-059-234-2353</h5>
                                    <h5 className=' text4 position-absolute'>-059-445-0940</h5>

</div>
  <div className='container text-center col-6 col-xxl-6 col-xl-12 mt-2 '>
                                          <iframe className="gmap_iframe w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                                    </div> 

</>)}
export default Contact;

 