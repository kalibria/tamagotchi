import { setStateDependingFoodPercent } from "./stateDependingFoodPercent";
import { setStateDependingRandomNum } from "./petIllness";

import * as _getRandomNumber from "./petIllness";

describe("setStateIndicator", () => {
  describe("setState depending on foodPercent", function () {
    it('should call setIndicator with "hungry" if food percent is less than 35', function () {
      const mockSetIndicator = jest.fn();
      const foodPercent = 34;
      setStateDependingFoodPercent(foodPercent, mockSetIndicator);
      expect(mockSetIndicator).toHaveBeenCalledWith("hungry");
      expect(mockSetIndicator).toHaveBeenCalledTimes(1);
    });

    it('should call setIndicator with "dead" if food percent is 0', function () {
      const mockSetIndicator = jest.fn();
      const foodPercent = 0;
      setStateDependingFoodPercent(foodPercent, mockSetIndicator);
      expect(mockSetIndicator).toHaveBeenCalledWith("dead");
      expect(mockSetIndicator).toHaveBeenCalledTimes(1);
    });

    it('should call setIndicator with "fine" if food percent is 35 and above', function () {
      const mockSetIndicator = jest.fn();
      const foodPercent = 35;
      setStateDependingFoodPercent(foodPercent, mockSetIndicator);
      expect(mockSetIndicator).toHaveBeenCalledWith("fine");
      expect(mockSetIndicator).toHaveBeenCalledTimes(1);
    });
  });

  // describe("timers", () => {
  //   it('should call setIndicator with "sick" if the random number is 1', () => {
  //     jest.useFakeTimers();
  //
  //     jest.spyOn(_getRandomNumber, "getRandomNumber").mockReturnValue(1);
  //
  //     const mockSetIndicator = jest.fn();
  //
  //     setStateDependingRandomNum(999, mockSetIndicator);
  //
  //     jest.advanceTimersByTime(7000);
  //
  //     expect(mockSetIndicator).toHaveBeenCalledWith("sick");
  //   });
  // });

  // describe("setStateDependingDuration", () => {
  //   it('should call setIndicator with "dead" if durationIllness more than 15', () => {
  //     const mockSetInterval = jest.fn();
  //     jest.runAllTimers();
  //     setStateDependingDuration(mockSetInterval);
  //
  //     expect(mockSetInterval).toHaveBeenCalledWith("dead");
  //   });
  // });
});
