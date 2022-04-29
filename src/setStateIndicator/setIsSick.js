import {
  SICKNESS_PROBABILITY,
  time_between_run_function_getRandomNumber_ms,
} from "../variables/variables";

const noOp = function () {};

export const setIsSick = (setIndicator) => {
  let timerId = setInterval(() => {
    Math.random() > SICKNESS_PROBABILITY ? noOp() : setIndicator("sick");
  }, time_between_run_function_getRandomNumber_ms);
  return timerId;
};
