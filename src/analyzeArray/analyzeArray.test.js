import { analyzeArray } from "./analyzeArray.js";

test("analyzeArray function exists", () => {
  expect(analyzeArray).toBeDefined();
  expect(typeof analyzeArray).toBe("function");
});

test("non-arrays throw exception", () => {
  expect(() => analyzeArray({})).toThrow(TypeError);
  expect(() => analyzeArray(null)).toThrow(TypeError);
  expect(() => analyzeArray(undefined)).toThrow(TypeError);
  expect(() => analyzeArray(false)).toThrow(TypeError);
  expect(() => analyzeArray(1)).toThrow(TypeError);
  expect(() => analyzeArray(1n)).toThrow(TypeError);
  expect(() => analyzeArray("")).toThrow(TypeError);
  expect(() => analyzeArray(() => {})).toThrow(TypeError);
});

test("array returns object", () => {
  expect(typeof analyzeArray([])).toBe("object");
  expect(Array.isArray(analyzeArray([]))).toBe(false);
  expect(analyzeArray([])).not.toBeNull();
});

test("object has correct values 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("object has correct values 2", () => {
  expect(analyzeArray([5, 100, 25, 75, 50])).toStrictEqual({
    average: 51,
    min: 5,
    max: 100,
    length: 5,
  });
});

test("object has correct values 3", () => {
  expect(analyzeArray([1, -100, 38, -61, 161])).toStrictEqual({
    average: 7.8,
    min: -100,
    max: 161,
    length: 5,
  });
});
