import React from "react";
import style from "../App.module.css";

const PetName = ({ petName }) => {
  return <div className={style.petName}>Name: {petName}</div>;
};

export default PetName;
