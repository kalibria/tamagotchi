import React from "react";
import style from "../App.module.css";
import { CountContext } from "../count-context";

const ReStartButton = () => {
  return (
    <CountContext.Consumer>
      {({ setGamesCount }) => (
        <div className={style.reStartDiv}>
          <button
            className={style.reStartBtn}
            onClick={() => {
              setGamesCount((prev) => {
                return prev + 1;
              });
            }}
          >
            Re-start game
          </button>
        </div>
      )}
    </CountContext.Consumer>
  );
};

export default ReStartButton;
