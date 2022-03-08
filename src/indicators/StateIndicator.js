import React, { useEffect } from "react";
import {
  calcDuration,
  setStateDependingRandomNum,
  setStateDependingStateIndicator,
} from "../illnessTreatment/petIllness";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
}) => {
  useEffect(() => {
    setStateDependingStateIndicator(foodPercent, setStateIndicator);
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
