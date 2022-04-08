import React, { useEffect, useState } from "react";
import style from "../App.module.css";

export const Modal = ({
  petName,
  age,
  stateIndicator,
  prevStateIndicator,
  illness,
}) => {
  const config = {
    title: "Sorry your pet died!",
    text: {
      naturalDeath: `Your pet has lived a long great life… Rest in peace, ${petName}!`,
      sicknessDeath: `${petName} died due to illness ${illness}`,
      hungryDeath: `${petName} died due to starvation`,
    },
    deathAge: `Age of death ${age}`,
  };

  const [showModal, setShowModal] = useState("block");
  const [textModalWindow, setTextModalWindow] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal("none");
  };

  useEffect(() => {
    if (prevStateIndicator === "sick") {
      setTextModalWindow(config.text.sicknessDeath);
    } else if (prevStateIndicator === "hungry") {
      setTextModalWindow(config.text.hungryDeath);
    } else {
      setTextModalWindow(config.text.naturalDeath);
    }
  }, [
    stateIndicator,
    config.text.hungryDeath,
    config.text.naturalDeath,
    config.text.sicknessDeath,
    prevStateIndicator,
  ]);

  return (
    <>
      <div className={style.modalWindow} style={{ display: showModal }}>
        <div className={style.wrapperCloseButton}>
          <div>
            <p>{config.title}</p>
            <p>{textModalWindow}</p>
            <p>{config.deathAge}</p>
          </div>
          <div className={style.closeButton}>
            <button onClick={handleSubmit}>
              <img
                className={style.imgCloseButton}
                alt={"close"}
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
