const NON_NUMERIC_MESSAGE = "Invalid arguments: non-numbers.";

export const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new TypeError(NON_NUMERIC_MESSAGE);
    return a + b;
  },
  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new TypeError(NON_NUMERIC_MESSAGE);
    return a - b;
  },
  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new TypeError(NON_NUMERIC_MESSAGE);
    return a * b;
  },
  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new TypeError(NON_NUMERIC_MESSAGE);
    if (b === 0) throw new Error("Division by Zero.");

    return a / b;
  },
};
