/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    
    let order = mat.length;

    let p = 0
    let s = 0

    for(let i=0;i<order;i++){ 
        p = p+mat[i][i]
        if(i!==order-1-i){
        s = s + mat[i][order-1-i]
        }
    } 
    return p+s
};