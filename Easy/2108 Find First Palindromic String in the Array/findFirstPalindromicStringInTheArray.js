/**
 * @param {string[]} words
 * @return {string}
 */
const isPalindrome = (word) => {
  return word === word.split("").reverse().join("");
};
var firstPalindrome = function (words) {
  return words.find(isPalindrome) || "";
};
