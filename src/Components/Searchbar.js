import { useState } from "react";
import './Searchbar.css'
function Searchbar({onSubmit}){
  const [text,setText]=useState('')
  const handleSubmit=(event)=>{
    event.preventDefault();
    onSubmit(text)
  };
  const handleChange=(event)=>{
       setText(event.target.value)
  }
    return <div>
      <form onSubmit={handleSubmit} className="search">
      <input value={text} onChange={handleChange} className="text" placeholder="Search Images here....."/>
      </form>
      </div>
  }
  export default Searchbar;