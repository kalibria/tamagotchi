import React, { useEffect, useState } from "react";

export const ButtonTreat = ({
  stateIndicator,
  setStateIndicator,
  setAnimation,
  setButtonFeedEnabled,
  buttonTreatDisabled,
  setButtonTreatDisabled,
  setIsRecovered,
}) => {
  useEffect(() => {
    if (stateIndicator === "sick") {
      setButtonTreatDisabled(false);
    } else if (stateIndicator === "dead") {
      setButtonTreatDisabled(true);
    }
  }, [stateIndicator]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStateIndicator("fine");
    setAnimation("running");
    setButtonFeedEnabled("false");
    setButtonTreatDisabled(true);
    setIsRecovered(true);
  };

  return (
    <div>
      <button disabled={buttonTreatDisabled} onClick={handleSubmit}>
        Treat
      </button>
    </div>
  );
};
