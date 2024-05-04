/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let d = {};

  for (let c of s) {
    d[c] = (d[c] || 0) + 1;
  }

  return new Set(Object.values(d)).size === 1;
};
