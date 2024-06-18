/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      c++;
    }
  }

  return Math.floor((c / s.length) * 100);
};
