import { setIsSick } from "./setIsSick";
import { time_between_run_function_getRandomNumber_ms } from "../variables/variables";

describe("setIsSick", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("calls callback", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.1);
    setIsSick(callback);

    jest.advanceTimersByTime(5000);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("sick");
  });

  it("don't call callback", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
    setIsSick(callback);

    jest.advanceTimersByTime(time_between_run_function_getRandomNumber_ms);

    expect(callback).not.toBeCalled();
  });

  it("must return timerId not undefined", () => {
    const callback = jest.fn();
    jest.spyOn(global.Math, "random").mockReturnValue(0.3);
    const result = setIsSick(callback);

    jest.advanceTimersByTime(time_between_run_function_getRandomNumber_ms);

    expect(result).toEqual(expect.any(Number));
  });
});
