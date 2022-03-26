import React, { useEffect } from "react";
import style from "../App.module.css";

export const FoodIndicator = ({
  foodPercent,
  setFoodPercent,
  buttonFeedEnabled,
  setButtonFeedEnabled,
  stateIndicator,
  animation,
  setAnimation,
}) => {
  const getWidthEl = () => {
    const whiteBlockEl = document.getElementById("whiteBlock");
    let widthWhiteBlockEl = window
      .getComputedStyle(whiteBlockEl)
      .getPropertyValue("width");

    return widthWhiteBlockEl;
  };

  useEffect(() => {
    if (stateIndicator === "sick") setAnimation("paused");

    const interval = setInterval(() => {
      let widthEl = getWidthEl();

      if (
        widthEl === "100px" ||
        foodPercent === 0 ||
        buttonFeedEnabled === true ||
        stateIndicator === "sick" ||
        stateIndicator === "dead"
      ) {
        setButtonFeedEnabled(false);
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
        {buttonFeedEnabled ? (
          <div>
            {/*<div className={style.whiteBlock} id="whiteBlock"></div>*/}
            <div
              className={style.whiteBlock + " " + style.animation}
              style={{ animationPlayState: animation }}
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
