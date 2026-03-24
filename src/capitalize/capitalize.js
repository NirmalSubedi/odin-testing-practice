export const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new TypeError(`Expected a string type, received type ${str}.`);
  }
  if (str.length === 0) return str;
  const result = str.at(0).toUpperCase() + str.slice(1);
  return result;
};
