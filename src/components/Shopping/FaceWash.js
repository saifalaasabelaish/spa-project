
import CardContent from "./CardContent";

const   FaceWash =()=>
{
    return(
<div className="row mt-5">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-3 ">
          <CardContent ImgShoping = './mask3.jpg' Price = "43.00$" Content = "Face Wash"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
        <CardContent ImgShoping = './mask5.jpg' Price = "28.00$" Content = "Face Toner"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
        <CardContent ImgShoping = './mask7.jpg' Price = "18.00$" Content = "Face Serum"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
        <CardContent ImgShoping = './maskg1.jpg' Price = "50.00$" Content = "Face Cream"/>

        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
        <CardContent ImgShoping = './mask6.jpg' Price = "30.00$" Content = "Face Scrab"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
        <CardContent ImgShoping = './mask4.jpg' Price = "19.00$" Content = "Face Oli"/>
        </div>
      </div>
    )
};

export default FaceWash ;