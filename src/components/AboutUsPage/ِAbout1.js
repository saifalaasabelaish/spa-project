import { GalleryData } from "./GalleryData";
const Aboutt = (props) =>
 {
  const typee = props.categorytype;
    return (
      <>
        {
          GalleryData
          .filter
          (
              Aboutt => (Aboutt.cat === typee)
          )
          .map(
            (Aboutt) => 
          {
              return (
              <div className ="col-12 col-md-6 col-lg-6 col-xxl-8 mb-5">
              <ServicesCard  images={Aboutt.images} altt={Aboutt.altt} id= {Aboutt.id}/>
              </div>
               )
          }
          )
        }
      </>
    )
  }
export default Aboutt; 