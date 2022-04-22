const { getRandomEl } = require("./getRandomEl");

describe("getRandomEl", () => {
  it("get first El", () => {
    const mathRandomSpy = jest.spyOn(global.Math, "floor").mockReturnValue(0);
    const result = getRandomEl([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });
  it("get second El", () => {
    const mathRandomSpy = jest.spyOn(global.Math, "floor").mockReturnValue(1);
    const result = getRandomEl([1, 2, 3, 4, 5]);
    expect(result).toEqual(2);
  });
  it("get last El", () => {
    const mathRandomSpy = jest.spyOn(global.Math, "floor").mockReturnValue(4);
    const result = getRandomEl([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });
});
