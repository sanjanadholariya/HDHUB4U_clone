import Header from "./Header"
import Slider from "./Slider";
import Content from "./Content";
import { header } from "./data";
import { slider } from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/data.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";


function App() {

  const [menuState, setMenuState] = useState("");


  return (
    
    <>
      <Header headerData = {header[0]}
              setMenuState = {setMenuState}
      />
      <Slider sliderData = {slider}/>
      <Content menuState = {menuState}/>
    </>
  )
}

export default App
