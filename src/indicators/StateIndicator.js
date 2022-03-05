import React, { useEffect } from "react";

export const StateIndicator = ({
  stateIndicator,
  foodPercent,
  setStateIndicator,
}) => {
  useEffect(() => {
    if (foodPercent < 35) {
      setStateIndicator("hungry");
      if (foodPercent === 0) setStateIndicator("dead");
    } else {
      setStateIndicator("fine");
    }
  }, [foodPercent]);
  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
