import React, { createRef, useEffect, useRef, useState } from "react";
import style from "../App.module.css";

export const FoodIndicator = ({
  foodPercent,
  setFoodPercent,
  buttonFeed,
  setButtonFeedEntered,
  stateIndicator,
}) => {
  const getWidthEl = () => {
    const whiteBlockEl = document.getElementById("whiteBlock");
    let widthWhiteBlockEl = window
      .getComputedStyle(whiteBlockEl)
      .getPropertyValue("width");

    return widthWhiteBlockEl;
  };

  const [animation, setAnimation] = useState("running");
  useEffect(() => {
    if (stateIndicator === "sick") setAnimation("paused");

    const interval = setInterval(() => {
      let widthEl = getWidthEl();

      if (
        widthEl === "100px" ||
        foodPercent === 0 ||
        buttonFeed === true ||
        stateIndicator === "sick" ||
        stateIndicator === "dead"
      ) {
        setButtonFeedEntered(false);
        clearInterval(interval);
      } else {
        setFoodPercent(foodPercent - 1);
      }
    }, 495);

    return () => clearInterval(interval);
  });

  return (
    <div>
      Food:{" "}
      <div className={style.foodIndicatorLine}>
        {buttonFeed ? (
          <div>
            <div className={style.whiteBlock} id="whiteBlock"></div>
            <div
              className={style.whiteBlock + " " + style.animation}
              id="whiteBlock"
            ></div>
          </div>
        ) : (
          <div
            className={style.whiteBlock + " " + style.animation}
            style={{ animationPlayState: animation }}
            id="whiteBlock"
          ></div>
        )}
      </div>
      {foodPercent} %
    </div>
  );
};
