import { SICKNESS_PROBABILITY } from "../variables/variables";

const noOp = function () {};

export const setIsSick = (setIndicator) => {
  const time_between_run_function_getRandomNumber_ms = 5000;
  let timerId = setInterval(() => {
    let randomNumber =
      Math.random() > SICKNESS_PROBABILITY ? noOp() : setIndicator("sick");
  }, time_between_run_function_getRandomNumber_ms);
  return timerId;
};
