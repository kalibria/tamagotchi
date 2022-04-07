import React from "react";
import style from "../App.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { useInterval } from "usehooks-ts";
import { INTERVAL_TIME } from "../variables/variables";

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

export const FoodIndicator = ({
  foodPercent,
  setFoodPercent,
  stateIndicator,
}) => {
  const condition_for_clearUseInterval =
    foodPercent === 0 || stateIndicator === "sick" || stateIndicator === "dead";

  useInterval(
    () => {
      setFoodPercent(foodPercent - 1);
    },
    condition_for_clearUseInterval ? null : INTERVAL_TIME
  );

  return (
    <div className={style.progressLine}>
      <ProgressLine foodPercent={foodPercent} />
    </div>
  );
};
