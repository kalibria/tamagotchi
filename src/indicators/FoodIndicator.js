import React, { useEffect } from "react";
import style from "../App.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { useInterval } from "usehooks-ts";

const ProgressLine = ({ foodPercent }) => (
  <>
    <Progress
      strokeWidth={15}
      strokeColor={{
        "0%": "red",
        "100%": "green",
      }}
      percent={foodPercent}
    />
  </>
);

export const FoodIndicator = ({ foodPercent, setFoodPercent }) => {
  console.log("foodPer", foodPercent);
  useInterval(
    () => {
      setFoodPercent(foodPercent - 1);
    },
    foodPercent === 0 ? null : 500
  );

  return (
    <div>
      <ProgressLine foodPercent={foodPercent} />
    </div>
  );
};

// export const FoodIndicator = ({
//   foodPercent,
//   setFoodPercent,
//   buttonFeedEnabled,
//   setButtonFeedEnabled,
//   stateIndicator,
//   animation,
//   setAnimation,
// }) => {
//   const getWidthEl = () => {
//     const whiteBlockEl = document.getElementById("whiteBlock");
//     let widthWhiteBlockEl = window
//       .getComputedStyle(whiteBlockEl)
//       .getPropertyValue("width");
//
//     return widthWhiteBlockEl;
//   };
//
//   useEffect(() => {
//     if (stateIndicator === "sick") setAnimation("paused");
//
//     const interval = setInterval(() => {
//       let widthEl = getWidthEl();
//
//       if (
//         widthEl === "100px" ||
//         foodPercent === 0 ||
//         buttonFeedEnabled === true ||
//         stateIndicator === "sick" ||
//         stateIndicator === "dead"
//       ) {
//         setButtonFeedEnabled(false);
//         clearInterval(interval);
//       } else {
//         setFoodPercent(foodPercent - 1);
//       }
//     }, 495);
//
//     return () => clearInterval(interval);
//   });
//
//   return (
//     <div>
//       Food: <ProgressLine foodPercent={foodPercent} />
//       {/*<div className={style.foodIndicatorLine}>*/}
//       {/*  {buttonFeedEnabled ? (*/}
//       {/*    <div>*/}
//       {/*      /!*<div className={style.whiteBlock} id="whiteBlock"></div>*!/*/}
//       {/*      <div*/}
//       {/*        className={style.whiteBlock + " " + style.animation}*/}
//       {/*        style={{ animationPlayState: animation }}*/}
//       {/*        id="whiteBlock"*/}
//       {/*      ></div>*/}
//       {/*    </div>*/}
//       {/*  ) : (*/}
//       {/*    <div*/}
//       {/*      className={style.whiteBlock + " " + style.animation}*/}
//       {/*      style={{ animationPlayState: animation }}*/}
//       {/*      id="whiteBlock"*/}
//       {/*    ></div>*/}
//       {/*  )}*/}
//       {/*</div>*/}
//       {foodPercent} %
//     </div>
//   );
// };
