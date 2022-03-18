import React, { useEffect, useState } from "react";

export const ButtonTreat = ({
  stateIndicator,
  setStateIndicator,
  setAnimation,
  setButtonFeedEnabled,
}) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("state", stateIndicator);
    if (stateIndicator === "sick") {
      setDisabled(false);
    } else if (stateIndicator === "dead") {
      setDisabled(true);
    }
  }, [stateIndicator]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStateIndicator("fine");
    setAnimation("running");
    setButtonFeedEnabled("false");
    setDisabled(true);
  };

  console.log("disabled", disabled);

  return (
    <div>
      <button disabled={disabled} onClick={handleSubmit}>
        Treat
      </button>
    </div>
  );
};
