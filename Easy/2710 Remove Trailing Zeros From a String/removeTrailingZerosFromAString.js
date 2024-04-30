/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let count = 0;
  for (let i = num.length - 1; i > 0; i--) {
    if (num[i] === "0") {
      count++;
    } else {
      break;
    }
  }

  return num.substring(0, num.length - count);
};
