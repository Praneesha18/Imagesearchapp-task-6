import './Imageshow.css'
function Imageshow({images}){
  return <div>
    <img src={images.urls.small} alt={images.description}/>
  </div>
}
export default Imageshow;