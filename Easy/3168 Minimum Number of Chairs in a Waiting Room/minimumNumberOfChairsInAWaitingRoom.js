/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let max = 0;
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "E") {
      c = c + 1;

      if (c > max) {
        max = c;
      }
    } else {
      c = c - 1;
    }
  }

  return max;
};
