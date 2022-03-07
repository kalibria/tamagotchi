import React, { useEffect } from "react";
import { getRandomNumber } from "../illnessTreatment/randomSickness";

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

  const maxNumForGetRandomNumber = 2;

  useEffect(() => {
    let timerId = setInterval(() => {
      let randomNumber = getRandomNumber(maxNumForGetRandomNumber);
      console.log("randomNumber", randomNumber);
      if (randomNumber === 1) {
        setStateIndicator("sick");
        clearInterval(timerId);
      }
    }, 7000);
  }, [stateIndicator]);

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
