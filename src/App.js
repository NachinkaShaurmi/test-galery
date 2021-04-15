import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import "./App.css";
import ImagesField from "./components/imagesField/ImagesField";
import Popup from "./components/popup/Popup";

const initGallery = localStorage.getItem("gallery")
  ? JSON.parse(localStorage.getItem("gallery"))
  : [];

function App() {
  const [gallery, setGallery] = useState(initGallery);
  const [selectImg, setSelectImg] = useState('');

  const handleDelImg = () => {

    setGallery((prev) => prev.filter(el => el.url !== selectImg))
    setSelectImg('')
  }

  useEffect(() => {
    localStorage.setItem("gallery", JSON.stringify(gallery));
    console.log(gallery);
  }, [gallery]);

  return (
    <div className="App">
      <Header setGallery={setGallery} />
      <ImagesField gallery={gallery} setSelectImg={setSelectImg} />
      <Popup selectImg={selectImg} setSelectImg={setSelectImg} handleDelImg={handleDelImg}/>
    </div>
  );
}

export default App;
