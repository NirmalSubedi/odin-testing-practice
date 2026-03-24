import { caesarCipher } from "./caesarCipher.js";

test("caesarCipher function exists", () => {
  expect(caesarCipher).toBeDefined();
  expect(typeof caesarCipher).toBe("function");
});

test("shifts right", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("shifts left", () => {
  expect(caesarCipher("yqtnf", -2)).toBe("world");
});

test("wraps right overflow", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("wraps left overflow", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("preserves letter case", () => {
  expect(caesarCipher("AbC", 5)).toBe("FgH");
});

test("punctuation remain unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
