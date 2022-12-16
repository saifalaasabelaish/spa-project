import '../ServicesPage/ServicesPage.css'
import BookButton from './BookButton';
import ReadButton from './ReadButton';
const ServicesCard = (props) => {
  return (
    <>
      <div className="ser">
        <div className="d-flex position-relative servicecard p-2">
          <img src={props.ImgServices} className="img-fluid flex-shrink-0 me-3" alt={props.altt} />
          <div>
            <h5 className="mt-0">{props.title}</h5>
            <small className="text-muted">{props.star}</small>
            <p>{props.content}</p>
            <small className="text-muted">{props.price}</small>
            <div className='text-center'>
              <BookButton />
              <ReadButton link={props.serlink} /></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ServicesCard;