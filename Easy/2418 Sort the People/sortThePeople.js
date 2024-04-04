/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  return Object.entries(names)
    .sort((a, b) => {
      return heights[b[0]] - heights[a[0]];
    })
    .map((h) => h[1]);
};
