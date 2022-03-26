export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const setStateDependingRandomNum = (maxNum, setIndicator) => {
  let timerId = setInterval(() => {
    let randomNumber = getRandomNumber(maxNum);
    console.log("randomNum", randomNumber);
    if (randomNumber === 1) {
      setIndicator("sick");
      clearInterval(timerId);
      return;
    }
  }, 7000);
};
