export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const setStateDependingRandomNum = (maxNum, setIndicator) => {
  const time_between_run_function_getRandomNumber_ms = 5000;
  let timerId = setInterval(() => {
    let randomNumber = getRandomNumber(maxNum);
    if (randomNumber === 1) {
      setIndicator("sick");
      clearInterval(timerId);
      return;
    }
  }, time_between_run_function_getRandomNumber_ms);
  return timerId;
};
