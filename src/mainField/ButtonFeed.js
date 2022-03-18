import React, { useEffect } from "react";

const ButtonFeed = ({
  setFoodPercent,
  setAge,
  age,
  setButtonFeedEnabled,
  stateIndicator,
  state,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedEnabled(true);
    setFoodPercent(state.initialFoodPercent);
    setAge(age + 1);
  };
  let button;

  if (stateIndicator === "sick" || stateIndicator === "dead") {
    button = (
      <button onClick={handleSubmit} disabled>
        Feed
      </button>
    );
  } else button = <button onClick={handleSubmit}>Feed</button>;

  return <div>{button}</div>;
};

export default ButtonFeed;
