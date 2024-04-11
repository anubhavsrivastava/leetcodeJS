/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  return (start ^ goal)
    .toString(2)
    .toString()
    .split("")
    .reduce((p, n) => p + +n, 0);
};
