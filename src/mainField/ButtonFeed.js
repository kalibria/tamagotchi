import React, { useEffect } from "react";

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
  }, [stateIndicator]);

  return (
    <div>
      <button disabled={buttonFeedEnabled} onClick={handleSubmit}>
        Feed
      </button>
    </div>
  );
};

export default ButtonFeed;
