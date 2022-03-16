export const setStateDependingFoodPercent = (foodPercent, setIndicator) => {
  if (foodPercent < 35) {
    if (foodPercent === 0) {
      setIndicator("dead");
      return;
    }
    setIndicator("hungry");
  } else {
    setIndicator("fine");
  }
};
