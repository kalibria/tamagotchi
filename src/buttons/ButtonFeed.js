import React, { useEffect } from "react";
import style from "../App.module.css";

const ButtonFeed = ({
  setFoodPercent,
  setAge,
  age,
  setButtonFeedEnabled,
  buttonFeedEnabled,
  stateIndicator,
  state,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedEnabled(false);
    setFoodPercent(state.initialFoodPercent);
    setAge(age + 1);
  };
  useEffect(() => {
    if (stateIndicator === "sick" || stateIndicator === "dead") {
      setButtonFeedEnabled(true);
    } else setButtonFeedEnabled(false);
  }, [stateIndicator, setButtonFeedEnabled]);

  return (
    <div>
      <button
        disabled={buttonFeedEnabled}
        onClick={handleSubmit}
        className={style.button}
      >
        Feed
      </button>
    </div>
  );
};

export default ButtonFeed;
