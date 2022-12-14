import HeaderPage from '../common/HeaderPage';
import './Contact.css'
import Social from './Social'
import Footer from '../common/Footer'
const Contact = () => {
  return (
    <>


      <HeaderPage title=" Contact Us" />

      <div className="container ">
        <div className='row'>
          <div className=" col-6">
            <h1 className='text'>message us</h1>
            <div className='containerr'>

              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-5 m-3 ">
                  <label htmlFor="validationCustom01" className="form-label  ">First name</label>
                  <input type="text" className="form-control " id="validationCustom01" required />
                  <div className="valid-feedback">
                  </div>
                </div>
                <div className="col-md-5 m-3 ">
                  <label htmlFor="validationCustom02" className="form-label  ">Last name</label>
                  <input type="text" className="form-control " id="validationCustom02" required />
                  <div className="valid-feedback">
                  </div>
                </div>
                <div>
                  <input className="form-control w-100" type="text" value="phone" aria-label="readOnly input example" readOnly></input>
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit form</button>
                </div>

              </form></div></div></div>
      </div>
      <div>
        <div className="row-3 col-12 ">
          <h1 className=' textt position-absolute '>Follow Us</h1>
          <h1 className=' texttt position-absolute'>Branches</h1>
          <h3 className=' text1 position-absolute'>-Nablus</h3>
          <h5 className=' text2 position-absolute'>-Palestine Complex</h5>
          <h5 className=' text3 position-absolute'>-059-234-2353</h5>
          <h5 className=' text4 position-absolute'>-059-445-0940</h5>

        </div>

      </div>
      <Social />
      <div className='container text-center col-6 col-xxl-6 col-xl-12 mt-2 '>
        <iframe className="gmap_iframe w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

      </div>
      <Footer />
    </>)
}
export default Contact;

