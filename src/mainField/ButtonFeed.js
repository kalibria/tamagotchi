import React from "react";

const ButtonFeed = ({
  setFoodPercent,
  setAge,
  age,
  setButtonFeedEntered,
  initialFoodPercent,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedEntered(true);
    setFoodPercent(initialFoodPercent);
    setAge(age + 1);
  };

  return <button onClick={handleSubmit}>Feed</button>;
};

export default ButtonFeed;
