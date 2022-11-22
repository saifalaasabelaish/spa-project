import './Staf.css'
import AddStaf from './AddStaf'
import AdStaf from './AdStaf'
import first from './img-staff/uu.jpeg'
import scond from './img-staff/qq.jpg'
import three from './img-staff/qw.jpg'
import four from './img-staff/ee.jpg'
const Staf= (props) =>
{ 
    return(
    <section>
    <div className="Staf">
        <div className="Staf-bady">
            <div className="Staf-title">
             <h1>MEET OUR <u>BEAUT</u>IFUL TEAM</h1>
            </div>
        </div>
        <div className="full-width-wrapper flex-content">
        <div className="container">
           <div className="row my-3">
             <div className="col-sm-6 col-md-4 col-lg-3">  
       
       
    <div className="staf">
    <img src={first} className="img six-cols" alt="first "></img>
    <div className="staf-body"><div className="stafftile">
                      <h5 className="title1">Shayne Crocker</h5>
                      <p className="desca">I'm Shane Crocker,48 years old.work in massage </p><AddStaf/>
                     </div>
                    </div> 
   </div> </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
  
      <div className="staf" >
   
                    <img src={scond} className="img six-cols" alt="scond"></img>
                    <div className="staf-body">
                    <div className="stafftile">
                      <h5 className="title">Megan Martin</h5>
                      
                      <p className="desca">I am Megan Martin,27 years old working in makeup  </p> <AdStaf/>
                    </div></div>
                   
                    
                  </div></div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                  
                  <div className="staf" >
                  
                    <img src={three} className="img six-cols" alt="three"></img>
                    <div className="staf-body">
                    <div className="stafftile">
                      <h5 className="title">Amanda Mollett</h5>
                   
                      <p className="desca">I am Amanda Mollett,30 years old working in massage </p> <AddStaf/>
                     </div>
                     
                      </div>
                   
                  </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="staf" >
                    <img src={four} className="img six-cols" alt="four "></img>
                    <div className="staf-body">
                       <div className="stafftile">
                      <h5 className="title">Lydia Smothers</h5>
                      <p className="desca"> I am Lydia Smothers ,50 years old I have been working in massage for 20 years  </p>
                     <AdStaf/> 
                 </div>
                    </div>
                    </div>
                    </div>
                    </div>

                  </div>
 </div> </div>
 </section>
    )
    
}
export default Staf 
