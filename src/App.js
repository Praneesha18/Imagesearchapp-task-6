import { useState } from "react";
import Searchbar from "./Components/Searchbar";
import Imagelist from "./Components/Imagelist"
import searchimage from "./api";
import './App.css'
function App(){
  const [images,setImages]=useState([])
  const handlesubmit=async(text)=>{
    const result= await searchimage(text); 
    setImages(result)
  }
  return (<div className="container"> <Searchbar onSubmit={handlesubmit}/>
  <Imagelist images={images}/>
  </div>
  );
}
export default App;