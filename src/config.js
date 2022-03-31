export const config = {
  state: {
    name: "",
    initialStatus: "fine",
    initialFoodPercent: 100,
    initialAge: 0,
  },
  indicators: {
    states: {
      fine: {
        uiText: "fine",
        nextStatus: ["sick", "hungry", "dead"],
      },
      sick: {
        uiText: "sick",
        prevStatus: ["fine"],
        nextStatus: ["hungry", "dead"],
      },
      hungry: {
        uiText: "hungry",
        prevStatus: ["fine", "sick"],
        nextStatus: ["dead"],
      },
      dead: {
        uiText: "dead",
        prevStatus: ["fine", "sick", "dead"],
      },
    },
    foodPercents: {
      0: "red",
      35: "orange",
      70: "yellow",
      100: "green",
    },
    age: {
      maxAge: 4,
    },
  },
};
