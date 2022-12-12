import './AboutUs.css'
const  AboutCard= (props) =>
{
 return(
 <> 
    <div className='about-card col-lg-3 col-md-3 col-sm-3 mx-4'>
           <img src={props.img1} className="img card-img-topsix-col img-fluid " alt={props.img1}></img>
           <div  className='write'>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.Paragraph}</p>
             </div>
      </div>
   
 </>
 )
 }
 export default  AboutCard 