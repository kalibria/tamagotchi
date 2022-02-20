import React from 'react';
import style from "../App.module.css";

import {StateIndicator} from "../indicators/StateIndicator";
import {FoodIndicator} from "../indicators/FoodIndicator";
import {AgeIndicator} from "../indicators/AgeIndicator";

export const MainField = ({indicators}) => {
    return <div>
        <div>
            <img className={style.image} alt="tamagotchi"
                 src='https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001555/15841024-3d-monstre-mignon-de-bande-dessin%C3%A9e.jpg'/>
        </div>

        <div>Life Indicators:
            <StateIndicator stateIndicator={indicators.states}/>
            <FoodIndicator foodIndicator={indicators.foodPercents.moreThanAHalf}/>
            <AgeIndicator ageIndicator={indicators.age}/>
        </div>
    </div>
}