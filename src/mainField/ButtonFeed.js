import React, { useEffect } from "react";

const ButtonFeed = ({
  setFoodPercent,
  setAge,
  age,
  setButtonFeedEnabled,
  stateIndicator,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedEnabled(true);
    setFoodPercent(100);
    setAge(age + 1);
  };
  let button;

  if (stateIndicator === "sick") {
    button = (
      <button onClick={handleSubmit} disabled>
        Feed
      </button>
    );
  } else button = <button onClick={handleSubmit}>Feed</button>;

  return <div>{button}</div>;
};

export default ButtonFeed;
