import { setIsSick } from "./setIsSick";

jest.useFakeTimers();

describe("setIsSick", () => {
  it("calls callback", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.1);
    setIsSick(callback);

    jest.advanceTimersByTime(5000);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("sick");
  });

  it("don't call callback", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
    setIsSick(callback);

    jest.advanceTimersByTime(5000);

    expect(callback).not.toBeCalled();
  });

  it("must return timerId not undefined", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
    const result = setIsSick(callback);

    jest.advanceTimersByTime(5000);

    expect(result).toEqual(expect.any(Number));
  });
});
