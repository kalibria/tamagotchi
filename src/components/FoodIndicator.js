import React from "react";
import style from "../App.module.css";


export const FoodIndicator = ({foodIndicator}) => {
    console.log("percent",foodIndicator);
    let foodPercent = foodIndicator[2];
    let colorIndicator;
    if(foodPercent <= 20){
        colorIndicator = "red"
    }else if(foodPercent > 20 && foodPercent <= 60){
        colorIndicator = "yellow"
    } else {
        colorIndicator = "green"
    }

    const styleFoodIndicator = {
        height: "20px",
        width: `${foodPercent}%`,
        backgroundColor: colorIndicator,
    };

    return <div>
        Food: <div className={style.foodIndicatorLine}>
        <div style={styleFoodIndicator} ></div>
    </div>{styleFoodIndicator.width}
    </div>
}

