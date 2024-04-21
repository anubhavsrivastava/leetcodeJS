/**
 * @param {string} word
 * @return {number}
 */

var numberOfSpecialChars = function (word) {
  let result = new Set();

  let h = {};

  for (let i of word) {
    h[i] = 1;
    if (h[i.toLowerCase()] && h[i.toUpperCase()]) {
      result.add(i.toLowerCase());
    }
  }

  return result.size;
};
