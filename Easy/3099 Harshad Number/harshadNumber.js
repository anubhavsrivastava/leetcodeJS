/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = `${x}`.split("").reduce((p, s) => p + +s, 0);

  if (x % sum === 0) {
    return sum;
  }

  return -1;
};
