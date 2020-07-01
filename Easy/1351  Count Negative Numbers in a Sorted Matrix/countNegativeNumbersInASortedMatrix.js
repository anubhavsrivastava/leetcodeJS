/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let rowLength = grid.length;
    let colLength = grid[0].length;
    let count = 0;
    for(let i=rowLength-1;i>=0;i--){
        for(let j=colLength-1;j>=0;j--){
            if(grid[i][j]<0){count++}
            }
    }
    
    return count;
};