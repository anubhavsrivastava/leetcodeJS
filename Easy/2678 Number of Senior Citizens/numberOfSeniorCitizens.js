/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  return details.filter((entry) => {
    return +entry[11] * 10 + +entry[12] > 60;
  }).length;
};
