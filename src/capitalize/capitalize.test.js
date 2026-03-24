import { capitalize } from "./capitalize.js";

// Edge Cases
test("capitalize function should exist", () => {
  expect(capitalize).toBeDefined();
});

test("non-string type should throw an exception", () => {
  expect(() => capitalize(null)).toThrow(TypeError);
});

test("empty string should return empty string", () => {
  expect(capitalize("")).toBe("");
});

test("string with only whitespaces should return with whitespaces preserved", () => {
  expect(capitalize("  ")).toBe("  ");
});

test("string with one character should return the character capitalize", () => {
  expect(capitalize("a")).toBe("A");
});

// Standard Cases
test("'hello world!' should return 'Hello world!'", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});

test("'i am' should return 'I am'", () => {
  expect(capitalize("i am")).toBe("I am");
});

test("'tESTING' should return TESTING", () => {
  expect(capitalize("tESTING")).toBe("TESTING");
});
