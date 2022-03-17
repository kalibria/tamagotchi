import React, { useEffect } from "react";
import {
  setStateDependingDuration,
  setStateDependingRandomNum,
} from "../setStateIndicator/petIllness";
import { setStateDependingFoodPercent } from "../setStateIndicator/stateDependingFoodPercent";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
}) => {
  useEffect(() => {
    setStateDependingFoodPercent(foodPercent, setStateIndicator);
  }, [foodPercent]);

  const maxNumForGetRandomNumber = 2;

  useEffect(() => {
    if (stateIndicator === "fine" || stateIndicator === "hungry") {
      setStateDependingRandomNum(maxNumForGetRandomNumber, setStateIndicator);
    }
  }, [stateIndicator]);

  useEffect(() => {
    if (stateIndicator === "sick") {
      setStateDependingDuration(setStateIndicator);
    }
  }, [stateIndicator]);

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
