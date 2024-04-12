/**
 * @param {number} n
 * @return {boolean}
 */
let isPalindrome = (n) => {
  return n === n.split("").reverse().join("");
};
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    if (!isPalindrome(n.toString(i))) {
      return false;
    }
  }

  return true;
};
