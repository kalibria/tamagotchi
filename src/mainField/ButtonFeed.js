import React from "react";

const ButtonFeed = ({ setFoodPercent, setAge, age, setButtonFeedEntered }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonFeedEntered(true);
    setFoodPercent(100);
    setAge(age + 1);
  };

  return <button onClick={handleSubmit}>Feed</button>;
};

export default ButtonFeed;
