import React, { useState } from "react";
import style from "./App.module.css";

import EnterName from "./components/EnterName";
import { MainField } from "./components/MainField";
import PetName from "./components/PetName";

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
