/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let result = new Set();

  let l = {};

  for (let i of word) {
    let isUpper = i === i.toUpperCase();
    let cLower = i.toLowerCase();
    if (l[cLower] && isUpper && !l[i]) {
      result.add(cLower);
    }
    if (!isUpper) {
      result.delete(cLower);
    }

    l[i] = 1;
  }

  return result.size;
};
