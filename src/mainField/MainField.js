import React, { useState } from "react";
import style from "../App.module.css";

import { StateIndicator } from "../indicators/StateIndicator";
import { FoodIndicator } from "../indicators/FoodIndicator";
import { AgeIndicator } from "../indicators/AgeIndicator";
import ButtonFeed from "./ButtonFeed";

export const MainField = ({ state, indicators }) => {
  const [foodPercent, setFoodPercent] = useState(state.initialFoodPercent);
  const [age, setAge] = useState(state.initialAge);
  const [buttonFeedEntered, setButtonFeedEntered] = useState(false);

  return (
    <div>
      <div>
        <img
          className={style.image}
          alt="tamagotchi"
          src="https://previews.123rf.com/images/albertzig/albertzig1210/albertzig121001555/15841024-3d-monstre-mignon-de-bande-dessin%C3%A9e.jpg"
        />
      </div>
      <ButtonFeed
        foodIndicator={indicators.foodPercents}
        setFoodPercent={setFoodPercent}
        setAge={setAge}
        age={age}
        setButtonFeedEntered={setButtonFeedEntered}
      />
      <div>
        Life Indicators:
        <StateIndicator
          stateIndicator={indicators.states}
          foodPercent={foodPercent}
        />
        <FoodIndicator
          foodPercent={foodPercent}
          setFoodPercent={setFoodPercent}
          buttonFeed={buttonFeedEntered}
          setButtonFeedEntered={setButtonFeedEntered}
          colors={indicators.foodPercents}
        />
        <AgeIndicator age={age} maxAge={indicators.age.maxAge} />
      </div>
    </div>
  );
};
