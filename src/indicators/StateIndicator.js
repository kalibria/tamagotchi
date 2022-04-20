import React, { useEffect, useState } from "react";
import { setIsSick } from "../setStateIndicator/setIsSick";
import { setStateDependingFoodPercent } from "../setStateIndicator/stateDependingFoodPercent";
import { useTimeout } from "usehooks-ts";
import { SICK_PET_TIME_TILL_DEATH_MS } from "../variables/variables";
import style from "../App.module.css";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
  buttonTreatDisabled,
  isRecovered,
  age,
  maxAge,
  illness,
}) => {
  const [colorAttention, setColorAttention] = useState("#132a13");
  useEffect(() => {
    setStateDependingFoodPercent(foodPercent, setStateIndicator);
  }, [foodPercent, setStateIndicator]);

  useEffect(() => {
    if (age >= maxAge) {
      setStateIndicator("dead");
    }
  }, [age, maxAge, setStateIndicator]);

  useEffect(() => {
    if (stateIndicator === "fine" || stateIndicator === "hungry") {
      let timerID = setIsSick(setStateIndicator);
      return () => clearInterval(timerID);
    }
  }, [stateIndicator, isRecovered, setStateIndicator]);

  useEffect(() => {
    if (stateIndicator === "sick") {
      setColorAttention("yellow");
    } else if (stateIndicator === "hungry") {
      setColorAttention("orange");
    } else if (stateIndicator === "dead") {
      setColorAttention("red");
    } else setColorAttention("#132a13");
  }, [stateIndicator]);

  useTimeout(
    () => {
      if (stateIndicator === "sick") setStateIndicator("dead");
    },
    buttonTreatDisabled ? null : SICK_PET_TIME_TILL_DEATH_MS
  );

  const petIllness = <span>illness: {illness}</span>;

  return (
    <div>
      {stateIndicator === "sick" ? (
        <p>
          State: <span style={{ color: colorAttention }}>{stateIndicator}</span>{" "}
          <span> {petIllness} </span>
        </p>
      ) : (
        <p className={style.text}>
          State:{" "}
          <span style={{ color: colorAttention }}>{stateIndicator} </span>{" "}
        </p>
      )}
    </div>
  );
};
