import React from "react";
import style from "../App.module.css";

export const AgeIndicator = ({ age }) => {
  return (
    <div>
      <p className={style.text}>Age: {age} </p>
    </div>
  );
};
