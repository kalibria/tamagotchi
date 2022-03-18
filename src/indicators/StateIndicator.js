import React, { useEffect } from "react";
import {
  findDurationSickness,
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
      findDurationSickness(setStateIndicator);
    }
  }, [stateIndicator]);

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
