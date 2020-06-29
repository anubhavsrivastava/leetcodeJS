/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = start;
    for(let i=1;i<n;i++){
        result = result ^ (start + 2*i);
    }
    return result;
};