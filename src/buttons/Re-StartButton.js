import React from "react";
import style from "../App.module.css";

const ReStartButton = ({
  setShowDivWithModal,
  setPetName,
  initialName,
  setFoodPercent,
  initState,
  initFoodPercent,
  setStateIndicator,
  initAge,
  setAge,
}) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    setShowDivWithModal("none");
    // setPetName(initialName);
    setFoodPercent(initFoodPercent);
    setStateIndicator(initState);
    setAge(initAge);

    return setShowDivWithModal("block");
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
