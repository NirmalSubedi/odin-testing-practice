import { calculator } from "./calculator.js";

test("calculator exists", () => {
  expect(calculator).toBeDefined();
});
test("calculator is an object", () => {
  expect(typeof calculator).toBe("object");
});
test("calculator is not an array", () => {
  expect(Array.isArray(calculator)).toBe(false);
});
test("calculator is not null", () => {
  expect(calculator).not.toBeNull();
});

test("calculator has add method", () => {
  expect(calculator.add).toBeDefined();
  expect(typeof calculator.add).toBe("function");
});
test("calculator has subtract method", () => {
  expect(calculator.subtract).toBeDefined();
  expect(typeof calculator.subtract).toBe("function");
});
test("calculator has multiply method", () => {
  expect(calculator.multiply).toBeDefined();
  expect(typeof calculator.multiply).toBe("function");
});
test("calculator has divide method", () => {
  expect(calculator.divide).toBeDefined();
  expect(typeof calculator.divide).toBe("function");
});

test("non-number arguments should throw an exception", () => {
  expect(() => calculator.add("", null)).toThrow(TypeError);
  expect(() => calculator.subtract("", null)).toThrow(TypeError);
  expect(() => calculator.multiply("", null)).toThrow(TypeError);
  expect(() => calculator.divide("", null)).toThrow(TypeError);
});

test("adds to 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test("adds to 10,500", () => {
  expect(calculator.add(5_250, 5_250)).toBe(10_500);
});
test("adds close to 0.3", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtracts to 0", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test("subtracts to 92", () => {
  expect(calculator.subtract(0, -92)).toBe(92);
});
test("subtracts close to 0.3", () => {
  expect(calculator.subtract(0.4, 0.1)).toBeCloseTo(0.3);
});

test("multiplies to -35", () => {
  expect(calculator.multiply(7, -5)).toBe(-35);
});
test("multiplies to 49", () => {
  expect(calculator.multiply(7, 7)).toBe(49);
});
test("multiplies close to 1.5", () => {
  expect(calculator.multiply(0.5, 3)).toBe(1.5);
});

test("divides to 35", () => {
  expect(calculator.divide(350, 10)).toBe(35);
});
test("divides to -62", () => {
  expect(calculator.divide(124, -2)).toBe(-62);
});
test("divides to 10", () => {
  expect(calculator.divide(-100, -10)).toBe(10);
});
test("divides close to ", () => {
  expect(calculator.divide(0.3, 1)).toBeCloseTo(0.3);
});
test("dividend 0 is 0", () => {
  expect(calculator.divide(0, 5)).toBe(0);
});

test("division by zero", () => {
  expect(() => calculator.divide(1, 0)).toThrow(Error);
});
