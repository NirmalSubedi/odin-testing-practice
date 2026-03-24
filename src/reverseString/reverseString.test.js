import { reverseString } from "./reverseString.js";

// Edge Cases
test("reverseString function should exist", () => {
  expect(reverseString).toBeDefined();
  expect(typeof reverseString).toBe("function");
});

test("non-string should throw exception", () => {
  expect(() => reverseString(null)).toThrow(TypeError);
  expect(() => reverseString(undefined)).toThrow(TypeError);
  expect(() => reverseString(1n)).toThrow(TypeError);
  expect(() => reverseString(1)).toThrow(TypeError);
  expect(() => reverseString(true)).toThrow(TypeError);
  expect(() => reverseString({})).toThrow(TypeError);
  expect(() => reverseString([])).toThrow(TypeError);
});

// Standard Cases
test("string should be 'Hello'", () => {
  expect(reverseString("olleH")).toBe("Hello");
});

test("string should be 'testing'", () => {
  expect(reverseString("gnitset")).toBe("testing");
});

test("string should be 'world!'", () => {
  expect(reverseString("!dlrow")).toBe("world!");
});

test("string should be 'This is wonderful :)'", () => {
  expect(reverseString("): lufrednow si sihT")).toBe("This is wonderful :)");
});
