/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (str) {
  return str.split(" ").map(capitalizeWord).join(" ");
};

var capitalizeWord = (word) => {
  if (word.length > 2) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  return word.toLowerCase();
};
