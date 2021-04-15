import React, { useState } from "react";
import ImageEl from "../imageEl/ImageEl";
import "./imagesField.scss";
const { v4: uuidv4 } = require("uuid");

const ImagesField = ({ gallery, setSelectImg }) => {
  
  const gallerySet = gallery.map((el) => (
    <ImageEl path={el.url} key={el.url} setSelectImg={setSelectImg} />
  ));
  return gallery.length ? (
      <div className="gallery-set">
        {gallerySet}
      </div>
  ) : (
    <p>Gallery is empty</p>
  );
};

export default ImagesField;
