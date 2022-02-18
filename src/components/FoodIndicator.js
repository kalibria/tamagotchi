import React from "react";
import style from "../App.module.css";


export const FoodIndicator = ({foodIndicator}) => {
    let colorIndicator;
    if(foodIndicator <= 20){
        colorIndicator = "red"
    }else if(foodIndicator > 20 && foodIndicator <= 60){
        console.log("color")
        colorIndicator = "yellow"
    } else {
        colorIndicator = "green"
    }

    const styleFoodIndicator = {
        height: "20px",
        width: `${foodIndicator}%`,
        backgroundColor: colorIndicator,
    };

    return <div>
        Food: <div className={style.foodIndicatorLine}>
        <div style={styleFoodIndicator} ></div>
    </div>{styleFoodIndicator.width}
    </div>
}

