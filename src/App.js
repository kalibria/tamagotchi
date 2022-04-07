import React, { useState } from "react";
import style from "./App.module.css";

import PetName from "./name/PetName";
import { MainField } from "./mainField/MainField";
import EnterName from "./name/EnterName";

export const App = ({ config: { state, indicators } }) => {
  const [petName, setPetName] = useState(state.name);
  if (indicators.age.maxAge) {
    if (indicators.age.maxAge > 20) {
      console.log("REACT_APP_MAX_AGE is greater than 20");
      return (
        <div>
          <p className={style.error}>ERROR</p>
        </div>
      );
    } else {
      if (petName) {
        return (
          <div className={style.field}>
            <PetName petName={petName} />
            <MainField
              indicators={indicators}
              state={state}
              petName={petName}
            />
          </div>
        );
      } else {
        return <EnterName name={petName} setPetName={setPetName} />;
      }
    }
  } else {
    console.log("don’t supply REACT_APP_MAX_AGE to the app");
    return (
      <div>
        <p className={style.error}>ERROR</p>
      </div>
    );
  }
};

export default App;
