import './AboutUs.css'
const About= (props) =>
{
 return(
 <> 
  <div className='container'>
 <div className='center'>
    
    <div className="card">
    <img src={props.img1} className="img card-img-top w-60" alt={props.img1}></img>
    <div  className='write'>
   
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.Paragraph}</p>
      </div>
    </div>
  </div>
    </div>
  
    
    

 </>
 )
 }
 export default About 