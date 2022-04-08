import React from "react";
import style from "../App.module.css";

const ReStartButton = ({ setShowDivWithModal }) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    setShowDivWithModal("none");
  };

  return (
    <div className={style.reStartDiv}>
      <button className={style.reStartBtn} onClick={handleSubmit}>
        Re-start game
      </button>
    </div>
  );
};

export default ReStartButton;
