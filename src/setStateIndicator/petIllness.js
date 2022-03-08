export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const setStateDependingRandomNum = (maxNum, setIndicator) => {
  let timerId = setInterval(() => {
    let randomNumber = getRandomNumber(maxNum);
    if (randomNumber === 1) {
      setIndicator("sick");
      clearInterval(timerId);
    }
  }, 7000);
};

export const calcDuration = (indicator, setIndicator) => {
  if (indicator === "sick") {
    let startTimeSickness = new Date().getSeconds();
    let timerId = setInterval(() => {
      let startCountDuration = new Date().getSeconds();
      if (startCountDuration < startTimeSickness) {
        return Math.round(startCountDuration);
      }
      let durationIllness = startCountDuration - startTimeSickness;
      console.log("duration", durationIllness);
      if (durationIllness > 15) {
        setIndicator("dead");
        clearInterval(timerId);
      }
    }, 1000);
  }
};
