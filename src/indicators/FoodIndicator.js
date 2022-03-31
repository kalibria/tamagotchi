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

export const FoodIndicator = ({
  foodPercent,
  setFoodPercent,
  stateIndicator,
}) => {
  const intervalTime = 500;

  useInterval(
    () => {
      setFoodPercent(foodPercent - 1);
    },
    foodPercent === 0 || stateIndicator === "sick" || stateIndicator === "dead"
      ? null
      : intervalTime
  );

  return (
    <div className={style.progressLine}>
      <ProgressLine foodPercent={foodPercent} />
    </div>
  );
};
