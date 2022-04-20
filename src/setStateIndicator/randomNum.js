export const setStateDependingRandomNum = (setIndicator) => {
  const time_between_run_function_getRandomNumber_ms = 5000;
  let timerId = setInterval(() => {
    let randomNumber = Math.random() > 0.2 ? null : setIndicator("sick");
    console.log("randomNum", randomNumber);
  }, time_between_run_function_getRandomNumber_ms);
  return timerId;
};
