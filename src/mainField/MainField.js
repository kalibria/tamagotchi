import React, { useState } from "react";
import style from "../App.module.css";

import { StateIndicator } from "../indicators/StateIndicator";
import { FoodIndicator } from "../indicators/FoodIndicator";
import { AgeIndicator } from "../indicators/AgeIndicator";
import ButtonFeed from "../buttons/ButtonFeed";
import { ButtonTreat } from "../buttons/ButtonTreat";
import { Modal } from "../modal/Modal";
import usePreviousValue from "../customHooks/usePreviousHook";
import { getRandomEl } from "../getRandomEl/getRandomEl";
import { arrIllnesses } from "../variables/variables";
import ReStartButton from "../buttons/Re-StartButton";

export const MainField = ({ state, indicators, petName }) => {
  const [foodPercent, setFoodPercent] = useState(state.initialFoodPercent);
  const [age, setAge] = useState(state.initialAge);
  const [buttonFeedEnabled, setButtonFeedEnabled] = useState(false);
  const [stateIndicator, setStateIndicator] = useState(state.initialStatus);
  const [buttonTreatDisabled, setButtonTreatDisabled] = useState(true);
  const [isRecovered, setIsRecovered] = useState(false);
  const [showDivWithModal, setShowDivWithModal] = useState("block");

  const prevStateIndicator = usePreviousValue(stateIndicator);
  const illness = getRandomEl(arrIllnesses);

  return (
    <div className={style.mainField}>
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
          buttonFeedEnabled={buttonFeedEnabled}
        />
        <ButtonTreat
          stateIndicator={stateIndicator}
          setStateIndicator={setStateIndicator}
          setButtonFeedEnabled={setButtonFeedEnabled}
          buttonTreatDisabled={buttonTreatDisabled}
          setButtonTreatDisabled={setButtonTreatDisabled}
          setIsRecovered={setIsRecovered}
        />
      </div>
      <div>
        Life Indicators:
        <StateIndicator
          stateIndicator={stateIndicator}
          foodPercent={foodPercent}
          setStateIndicator={setStateIndicator}
          buttonTreatDisabled={buttonTreatDisabled}
          isRecovered={isRecovered}
          age={age}
          maxAge={indicators.age.maxAge}
          illness={illness}
        />
        <FoodIndicator
          foodPercent={foodPercent}
          setFoodPercent={setFoodPercent}
          stateIndicator={stateIndicator}
        />
        <AgeIndicator age={age} />
      </div>

      {stateIndicator === "dead" ? (
        <div
          className={style.modalWrapper}
          style={{ display: showDivWithModal }}
        >
          <Modal
            age={age}
            state={stateIndicator}
            petName={petName}
            stateIndicator={stateIndicator}
            prevStateIndicator={prevStateIndicator}
            illness={illness}
          />
          <ReStartButton setShowDivWithModal={setShowDivWithModal} />
        </div>
      ) : null}
    </div>
  );
};
