import React, { useEffect, useState } from "react";

export const ButtonTreat = ({ stateIndicator }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log("state", stateIndicator);
    if (stateIndicator === "sick" || stateIndicator === "dead") {
      setDisabled(false);
    }
  }, [stateIndicator]);

  console.log("disabled", disabled);

  return (
    <div>
      <button disabled={disabled}>Treat</button>
    </div>
  );
};
