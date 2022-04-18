import React, { useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { config } from "./config";
import { CountContext } from "./count-context";
import style from "./App.module.css";

ReactDOM.render(
  <React.StrictMode>
    <WrapperApp />
  </React.StrictMode>,
  document.getElementById("root")
);

function WrapperApp() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider
      value={{ initialCount: count, setGamesCount: setCount }}
    >
      <App config={config} key={count} className={style.fieldWrapper} />
    </CountContext.Provider>
  );
}
