import './Imagelist.css'
import Imageshow from "./Imageshow";
import LightGallery from 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
function Imagelist({images}){
    const renderimages=images.map((images)=>{
      return (
      <div>
        <LightGallery plugins={[lgThumbnail,lgZoom]} speed={600} zoom={true}>
          <a href={images.urls.small} key={images.id}>
        <Imageshow images={images} key={images.id}/>
        </a>
        </LightGallery>
        </div>
     )
    });
    return <div className='imagelist'>{renderimages}</div>     
  }
  export default Imagelist;