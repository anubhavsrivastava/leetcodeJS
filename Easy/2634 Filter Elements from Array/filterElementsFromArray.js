/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = new Array()

    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i,arr)){
            result.push(arr[i])
        }
    }

    return result;

};