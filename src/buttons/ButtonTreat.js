import React, { useEffect } from "react";
import style from "../App.module.css";

export const ButtonTreat = ({
  stateIndicator,
  setStateIndicator,
  setButtonFeedEnabled,
  buttonTreatDisabled,
  setButtonTreatDisabled,
}) => {
  useEffect(() => {
    if (stateIndicator === "sick") {
      setButtonTreatDisabled(false);
    } else if (stateIndicator === "dead") {
      setButtonTreatDisabled(true);
    }
  }, [stateIndicator, setButtonTreatDisabled]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStateIndicator("fine");
    setButtonFeedEnabled(false);
    setButtonTreatDisabled(true);
  };

  return (
    <div>
      <button
        disabled={buttonTreatDisabled}
        onClick={handleSubmit}
        className={style.button}
      >
        Treat
      </button>
    </div>
  );
};
