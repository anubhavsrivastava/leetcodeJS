/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    var result = new Array(arr.length)
    for(var i=0;i<arr.length;i++){
        result[i] = fn(arr[i], i, arr)
    }

    return result

};