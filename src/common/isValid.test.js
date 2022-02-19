import { render, screen } from "@testing-library/react";
import isValid from "./isValid";

describe("isValid", () => {
  describe("result true", function () {
    test("allows Latin letters", () => {
      const result = isValid("latin");
      expect(result).toBe(true);
    });

    test("allows dashes", () => {
      const result = isValid("John-Jack");
      expect(result).toBe(true);
    });

    test("allows upper and lower case letters", () => {
      const result = isValid("John");
      expect(result).toBe(true);
    });

    test("allows spase between latin letters", () => {
      const result = isValid("John Smith");
      expect(result).toBe(true);
    });
  });

  describe("result false", function () {
    test("disallows multiple spaces", () => {
      const result = isValid("   ");
      expect(result).toBe(false);
    });

    test("disallows only spaces without latin letters", () => {
      const result = isValid(" ");
      expect(result).toBe(false);
    });

    test("disallows not latin letters", () => {
      const result = isValid("тест");
      expect(result).toBe(false);
    });

    test("disallows digits", () => {
      const result = isValid("234pkh");
      expect(result).toBe(false);
    });

    test("disallows special symbols", () => {
      const result = isValid("#$%kjh");
      expect(result).toBe(false);
    });
  });
});
