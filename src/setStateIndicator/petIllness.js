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

export const findDurationSickness = (startTimeSickness) => {
  let startCountDuration = new Date().getSeconds();

  if (startCountDuration < startTimeSickness) {
    startCountDuration = Math.round(startCountDuration);
  }

  let durationSickness = startCountDuration - startTimeSickness;
  return durationSickness;
};

export const setStateDependingDuration = (setIndicator) => {
  let startTimeSickness = new Date().getSeconds();
  let arrDurations = [];

  let timerId = setInterval(() => {
    let durationIllness = findDurationSickness(startTimeSickness);
    arrDurations.push(durationIllness);
    console.log("arrDurations", arrDurations);

    if (arrDurations.length > 15) {
      setIndicator("dead");
      clearInterval(timerId);
    }
  }, 1000);
};
