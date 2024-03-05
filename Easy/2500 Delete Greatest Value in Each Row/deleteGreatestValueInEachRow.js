/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let result = 0
    for(let i=0;i<grid.length;i++){
        grid[i] = grid[i].sort((a,b)=>b-a)
    }
 
    for(let j=0;j<grid[0].length;j++){
        let currentMax = -Infinity
        for(let k=0;k<grid.length;k++){
            if(grid[k][j]>currentMax){
                currentMax = grid[k][j]
            }
           
           
        } 
         result = result + currentMax
    }

    return result
};