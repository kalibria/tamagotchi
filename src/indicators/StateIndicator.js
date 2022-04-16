import React, { useEffect } from "react";
import { setStateDependingRandomNum } from "../setStateIndicator/randomNum";
import { setStateDependingFoodPercent } from "../setStateIndicator/stateDependingFoodPercent";
import { useTimeout } from "usehooks-ts";
import {
  MAX_NUM_FOR_GetRandomNumber,
  SICK_PET_TIME_TILL_DEATH_MS,
} from "../variables/variables";

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
      if (!isRecovered) {
        let timerID = setStateDependingRandomNum(
          MAX_NUM_FOR_GetRandomNumber,
          setStateIndicator
        );
        return () => clearInterval(timerID);
      }
    }
  }, [stateIndicator, isRecovered, setStateIndicator]);

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
          State: {stateIndicator} {petIllness}
        </p>
      ) : (
        <p>State: {stateIndicator} </p>
      )}
    </div>
  );
};
