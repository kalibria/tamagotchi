import React, { useEffect } from "react";
import {
  findDurationSickness,
  setStateDependingDuration,
  setStateDependingRandomNum,
} from "../setStateIndicator/petIllness";
import { setStateDependingFoodPercent } from "../setStateIndicator/stateDependingFoodPercent";
import { useTimeout } from "usehooks-ts";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
  buttonTreatDisabled,
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

  useTimeout(
    () => {
      if (stateIndicator === "sick") setStateIndicator("dead");
    },
    !buttonTreatDisabled ? null : 15000
  );

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
