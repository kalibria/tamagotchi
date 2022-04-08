import React from "react";
import style from "../App.module.css";

const ReStartButton = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
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
