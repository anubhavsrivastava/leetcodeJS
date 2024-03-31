/**
 * @param {string} sentence
 * @return {boolean}
 */

const totalSum = 351;
var checkIfPangram = function (sentence) {
  let currentCount = 0;
  const visited = {};
  const l = sentence.length;
  for (let i = 0; i < l; i++) {
    if (visited[sentence[i]]) {
      continue;
    }
    visited[sentence[i]] = true;
    currentCount = currentCount + sentence[i].charCodeAt(0) - 96;
  }

  return currentCount === totalSum;
};
