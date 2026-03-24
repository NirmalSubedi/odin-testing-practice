export const reverseString = (str) => {
  if (typeof str !== "string")
    throw new TypeError(`Expected a string. Received ${typeof str} type.`);
  const result = str.split("").reverse().join("");
  return result;
};
