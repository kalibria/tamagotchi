import React, { useEffect } from "react";

const ButtonFeed = ({
  setFoodPercent,
  setAge,
  age,
  setButtonFeedDisabled,
  buttonFeedDisabled,
  stateIndicator,
  state,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedDisabled(false);
    setFoodPercent(state.initialFoodPercent);
    setAge(age + 1);
  };
  useEffect(() => {
    if (stateIndicator === "sick" || stateIndicator === "dead") {
      setButtonFeedDisabled(true);
    } else setButtonFeedDisabled(false);
  }, [stateIndicator]);

  return (
    <div>
      <button disabled={buttonFeedDisabled} onClick={handleSubmit}>
        Feed
      </button>
    </div>
  );
};

export default ButtonFeed;
