import '../ServicesPage/ServicesPage.css'
import BookButton from './BookButton';
import ReadButton from './ReadButton';
const ServicesCard = (props) => {
  return (
    <>
      <div className="ser servicecard p-2">
        <div class="d-flex position-relative">
          <img src={props.ImgServices} className="img-fluid imgg me-3" alt={props.altt} />
          <div>
            <div className="h5 mt-0">{props.title}</div>
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
