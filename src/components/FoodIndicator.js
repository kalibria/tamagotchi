import React from "react";
import style from "../App.module.css";


export const FoodIndicator = ({foodIndicator}) => {
    const widthFoodIndicator = {
        width: `${foodIndicator[4]}%`
    };
    return <div>
        Food: <div className={style.foodIndicatorLine}>
        <div className={style.foodIndicator} style={widthFoodIndicator} ></div>
    </div>{widthFoodIndicator.width}
    </div>
}

