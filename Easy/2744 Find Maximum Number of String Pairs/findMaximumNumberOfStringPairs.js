/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let h = {};
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    h[words[i].split("").reverse().join("")] = i;
  }

  for (let i = 0; i < words.length; i++) {
    if (h[words[i]] !== undefined && h[words[i]] !== i) count++;
  }

  return count / 2;
};
