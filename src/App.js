import React, { useState } from "react";
import style from "./App.module.css";

import PetName from "./name/PetName";
import {MainField} from "./mainField/MainField";
import EnterName from "./name/EnterName";



export const App = ({
  config: {
    state: { name },
    indicators,
  },
}) => {
  const [petName, setPetName] = useState(name);
  if (petName) {
    return (
      <div className={style.field}>
        <PetName petName={petName} />
        <MainField indicators={indicators} />
      </div>
    );
  } else {
    return <EnterName name={petName} setPetName={setPetName} />;
  }
};

export default App;
