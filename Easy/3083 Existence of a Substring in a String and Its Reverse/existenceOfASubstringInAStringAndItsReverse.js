/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  let h = {};

  for (let i = 0; i < s.length - 1; i++) {
    let key = s[i] + s[i + 1];
    let key2 = s[i + 1] + s[i];
    if (h[key] || h[key2] || key === key2) {
      return true;
    }

    h[key] = true;
    h[key2] = true;
  }

  return false;
};
