/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) {
      count++;
    }
  }
  return count;
};
