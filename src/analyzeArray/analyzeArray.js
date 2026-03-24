export const analyzeArray = (array) => {
  if (!Array.isArray(array)) throw new TypeError("Input in not an array.");

  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;
  const average = array.reduce((sum, val) => sum + val, 0) / length;

  return { min, max, length, average };
};
