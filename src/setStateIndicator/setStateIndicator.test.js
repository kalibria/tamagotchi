import { setStateDependingFoodPercent } from "./stateDependingFoodPercent";

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

  //   test("allows dashes", () => {
  //     const result = isValid("John-Jack");
  //     expect(result).toBe(true);
  //   });
  //
  //   test("allows upper and lower case letters", () => {
  //     const result = isValid("John");
  //     expect(result).toBe(true);c   });
  //
  //   test("disallows special symbols", () => {
  //     const result = isValid("#$%kjh");
  //     expect(result).toBe(false);
  //   });
  // });
});
