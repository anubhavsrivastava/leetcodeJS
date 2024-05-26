/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let h = {};
  let d = 0;
  for (let i = 0; i < s.length; i++) {
    h[s[i]] = i;
  }

  for (let i = 0; i < t.length; i++) {
    d = d + Math.abs(i - h[t[i]]);
  }

  return d;
};
