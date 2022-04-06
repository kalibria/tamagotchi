export const arrIllnesses = process.env.REACT_APP_ILLNESSES.split(",");

export const getIllness = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
