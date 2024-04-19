/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let h = {};
  let d = -1;
  let sum = 0;
  let order = grid.length;

  for (let i = 0; i < order; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      h[grid[i][j]] = (h[grid[i][j]] || 0) + 1;
      if (h[grid[i][j]] === 2) {
        d = grid[i][j];
      }
      sum += grid[i][j];
    }
  }
  let s = order * order;
  let total = (s * (s + 1)) / 2;
  return [d, total - sum + d];
};
