/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    let count = 1;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        count = count + 1;
      }
    }
    if (count === grid[i].length) {
      return i;
    }
  }
};
