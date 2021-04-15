import React from "react";
import "./popup.scss";

const Popup = ({ selectImg, setSelectImg, handleDelImg }) => {
  const activeClass = selectImg ? "active" : null;

  return (
    <div className={`popup ${activeClass}`} onClick={() => setSelectImg("")}>
      <div
        className={`popup__content ${activeClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`popup__image-wrapper`}>
          <img className="popup__image" src={selectImg} alt="" />
        </div>
        <button className="popup__button" onClick={handleDelImg}>
          Удалить из галереи
        </button>
      </div>
    </div>
  );
};

export default Popup;
