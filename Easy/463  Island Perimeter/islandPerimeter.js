/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let peri = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                peri += 4 - getTotalNeighbours(grid, i, j)
            }
        }

    }
    return peri;
};

var getTotalNeighbours = function (grid, i, j) {
    var t = 0;
    if (grid[i - 1]) {
        t += grid[i - 1][j];
    }
    if (grid[i + 1]) {
        t += grid[i + 1][j];
    }
    t += grid[i][j - 1] || 0;
    t += grid[i][j + 1] || 0;

    return t;
}