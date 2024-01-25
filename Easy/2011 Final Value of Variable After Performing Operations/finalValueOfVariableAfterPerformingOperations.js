/**
 * @param {string[]} operations
 * @return {number}
 */

const LANGUAGE = () => {
  let num = 0;

  return {
    "X++": () => num++,
    "X--": () => num--,
    "++X": () => num++,
    "--X": () => num--,
    getNumber: () => num,
  };
};
var finalValueAfterOperations = function (operations) {
  let lang = LANGUAGE();

  operations.forEach((op) => lang[op]());
  return lang.getNumber();
};
