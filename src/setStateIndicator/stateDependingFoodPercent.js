export const setStateDependingFoodPercent = (foodPercent, setIndicator) => {
  if (foodPercent < 35) {
    setIndicator("hungry");
    if (foodPercent === 0) setIndicator("dead");
  } else {
    setIndicator("fine");
  }
};
