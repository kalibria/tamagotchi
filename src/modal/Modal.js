import React, { useState } from "react";
import style from "../App.module.css";

export const Modal = ({ petName, age, maxAge }) => {
  const config = {
    title: "Sorry your pet died!",
    text: {
      naturalDeath: `Your pet has lived a long great life… Rest in peace, ${petName}!`,
      sicknessDeath: `${petName} died due to illness`,
      hungryDeath: `${petName} died due to starvation`,
    },
  };

  const [showModal, setShowModal] = useState("block");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal("none");
  };

  return (
    <>
      <div className={style.modalWindow} style={{ display: showModal }}>
        <div className={style.wrapperCloseButton}>
          <div>
            <p>{config.title}</p>
            {age > maxAge ? <p>{config.text.naturalDeath}</p> : null}
          </div>
          <div className={style.closeButton}>
            <button onClick={handleSubmit}>
              <img
                className={style.imgCloseButton}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
                }
              ></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
