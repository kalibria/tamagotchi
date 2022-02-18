import React from 'react';
import style from './App.module.css';

import EnterName from "./components/EnterName";
import {StateIndicator} from "./components/StateIndicator";
import {FoodIndicator} from "./components/FoodIndicator";
import {AgeIndicator} from "./components/AgeIndicator";


const App = ({store: {state: {name}, indicators}}) => {
    return <div className={style.mainField}>
        <EnterName name={name}/>
        <div>
            <img className={style.image} alt="tamagotchi"
                 src='https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001555/15841024-3d-monstre-mignon-de-bande-dessin%C3%A9e.jpg'/>
        </div>
        <div>Live Indicators:
            <StateIndicator stateIndicator={indicators.states}/>
            <FoodIndicator foodIndicator={indicators.foodPercent}/>
            <AgeIndicator ageIndicator={indicators.age}/>
        </div>
    </div>

}

export default App;