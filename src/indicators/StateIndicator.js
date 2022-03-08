import React, { useEffect } from "react";
import {
  calcDuration,
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
    setStateDependingRandomNum(maxNumForGetRandomNumber, setStateIndicator);
  }, [stateIndicator]);

  useEffect(() => {
    calcDuration(stateIndicator, setStateIndicator);
  }, [stateIndicator]);

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
