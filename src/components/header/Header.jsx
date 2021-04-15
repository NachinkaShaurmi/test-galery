import React, { useState } from "react";
import { FileDrop } from "react-file-drop";
import dndBg from "../../img/drag-and-drop-icon-11.jpg"
import "./header.scss"

const Header = ({ setGallery }) => {
  const [fileField, setFileField] = useState(null);
  const [urlPath, setUrlPath] = useState("");

  const handleSubmitFile = async (e) => {
    if (!e?.target) return;
    const res = await fetch(window.URL.createObjectURL(e.target.files[0]));
    let data = await res.json();
    setGallery((prev) => [...data.galleryImages, ...prev]);
    e.target.value = "";
    setFileField(null);
  };

  const handleSubmitDND = async (f) => {
    const path = window.URL.createObjectURL(f);
    setGallery((prev) => [{ url: path }, ...prev]);
  };

  const handleSubmitUrl = () => {
    if(!urlPath.trim()) return;
    setGallery((prev) => [{ url: urlPath }, ...prev]);
    setUrlPath("");
  };

  return (
    <div className="header">
      <div className="header__file file">
        <div className="file__container url-path">
          <input
            className="file__input file__input_url"
            type="text"
            value={urlPath}
            onChange={(e) => setUrlPath(e.target.value)}
          />
          <button className="file__button" onClick={handleSubmitUrl}>Add URL</button>
        </div>
        <div className="file__container file-path">
          <label htmlFor="jsonFile" className="file__label">{fileField ? "Файл выбран" : "Выбрать файл"}</label>
          <input
            className="file__input file__input_json hidden"
            type="file"
            name="jsonFile"
            id="jsonFile"
            accept="application/json"
            onChange={(e) => setFileField(e)}
          />
          <button className="file__button" onClick={() => handleSubmitFile(fileField)}>Add file</button>
        </div>
      </div>
      <div className="header__dnd drag-and-drop">
        <input
          className="drag-and-drop__input hidden"
          type="file"
          name="dndFile"
          id="dndFile"
        />
        <FileDrop
          onDrop={(files) => handleSubmitDND(files[0])}
        >
          <div className="drag-and-drop__area" style={{backgroundImage: `url(${dndBg})`}}></div>
        </FileDrop>
      </div>
    </div>
  );
};

export default Header;
