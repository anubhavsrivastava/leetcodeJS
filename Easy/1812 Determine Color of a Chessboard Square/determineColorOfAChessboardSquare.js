const oddBase = ["a", "c", "e", "g"];
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (c) {
  let [base, num] = c.split("");
  num = !!(num % 2);
  base = oddBase.includes(base) ? "a" : "b";

  return base === "a" ? !num : num;
};
