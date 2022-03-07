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
    // let timerId = setTimeout(getRandomNumber,10000,maxNumForGetRandomNumber)

    //   let timerId = setTimeout(() => {
    //     let randomNumber = getRandomNumber(maxNumForGetRandomNumber);
    //     console.log("randomNumber", randomNumber);
    //     if (randomNumber === 1) {
    //       setStateIndicator("sick");
    //       clearTimeout(timerId)
    //     } else {
    //       let timerId2 = setInterval(() => {
    //         let randomNumber2 = getRandomNumber(maxNumForGetRandomNumber);
    //         console.log("randomNumber2", randomNumber2);
    //         if (randomNumber2 === 1) {
    //           setStateIndicator("sick");
    //           clearInterval(timerId2);
    //         }
    //       }, 3000);
    //     }
    //   }, 7000);
    // }, [stateIndicator]);

    let timerId = setTimeout(() => {
      let randomNumber = getRandomNumber(maxNumForGetRandomNumber);
      console.log("randomNumber", randomNumber);
      if (randomNumber === 1) {
        setStateIndicator("sick");
        clearTimeout(timerId);
      }
    }, 7000);
  }, [stateIndicator]);

  return (
    <div>
      <p>State: {stateIndicator} </p>
    </div>
  );
};
