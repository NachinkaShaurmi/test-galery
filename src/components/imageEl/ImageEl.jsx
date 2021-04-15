import React, { useState } from "react";
import bg from "../../img/amc_loading.gif";
import "./imageEl.scss";

const ImageEl = ({ path, setSelectImg }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className="image" onClick={() => setSelectImg(path)}>
      <img
        src={!load ? bg : path}
        className="image__source"
        alt=""
        onLoad={() => setLoad(true)}
      />
    </div>
  );
};

export default ImageEl;
