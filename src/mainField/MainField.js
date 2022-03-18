import React, { useState } from "react";
import style from "../App.module.css";

import { StateIndicator } from "../indicators/StateIndicator";
import { FoodIndicator } from "../indicators/FoodIndicator";
import { AgeIndicator } from "../indicators/AgeIndicator";
import ButtonFeed from "./ButtonFeed";
import { ButtonTreat } from "./ButtonTreat";

export const MainField = ({ state, indicators }) => {
  const [foodPercent, setFoodPercent] = useState(state.initialFoodPercent);
  const [age, setAge] = useState(state.initialAge);
  const [buttonFeedEnabled, setButtonFeedEnabled] = useState(false);
  const [stateIndicator, setStateIndicator] = useState(state.initialStatus);
  const [animation, setAnimation] = useState("running");
  return (
    <div>
      <div>
        <img
          className={style.image}
          alt="tamagotchi"
          src="https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001555/15841024-3d-monstre-mignon-de-bande-dessin%C3%A9e.jpg"
        />
      </div>
      <div>
        <ButtonFeed
          foodIndicator={indicators.foodPercents}
          setFoodPercent={setFoodPercent}
          setAge={setAge}
          age={age}
          setButtonFeedEnabled={setButtonFeedEnabled}
          stateIndicator={stateIndicator}
          state={state}
        />
        <ButtonTreat
          stateIndicator={stateIndicator}
          setStateIndicator={setStateIndicator}
          setAnimation={setAnimation}
          setButtonFeedEnabled={setButtonFeedEnabled}
        />
      </div>
      <div>
        Life Indicators:
        <StateIndicator
          stateIndicator={stateIndicator}
          foodPercent={foodPercent}
          setStateIndicator={setStateIndicator}
        />
        <FoodIndicator
          foodPercent={foodPercent}
          setFoodPercent={setFoodPercent}
          buttonFeedEnabled={buttonFeedEnabled}
          setButtonFeedEnabled={setButtonFeedEnabled}
          colors={indicators.foodPercents}
          stateIndicator={stateIndicator}
          animation={animation}
          setAnimation={setAnimation}
        />
        <AgeIndicator age={age} maxAge={indicators.age.maxAge} />
      </div>
    </div>
  );
};
