import React, { useEffect } from "react";
import { setStateDependingRandomNum } from "../setStateIndicator/randomNum";
import { setStateDependingFoodPercent } from "../setStateIndicator/stateDependingFoodPercent";
import { useTimeout } from "usehooks-ts";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
  buttonTreatDisabled,
  isRecovered,
  age,
  maxAge,
}) => {
  useEffect(() => {
    setStateDependingFoodPercent(foodPercent, setStateIndicator);
  }, [foodPercent]);

  useEffect(() => {
    if (age > maxAge) setStateIndicator("dead");
  }, [age]);

  const maxNumForGetRandomNumber = 2;
  const SICK_PET_TIME_TILL_DEATH_MS = 15000;

  useEffect(() => {
    if (stateIndicator === "fine" || stateIndicator === "hungry") {
      if (!isRecovered) {
        setStateDependingRandomNum(maxNumForGetRandomNumber, setStateIndicator);
      }
    }
  }, [stateIndicator]);

  useTimeout(
    () => {
      if (stateIndicator === "sick") setStateIndicator("dead");
    },
    buttonTreatDisabled ? null : SICK_PET_TIME_TILL_DEATH_MS
  );

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
