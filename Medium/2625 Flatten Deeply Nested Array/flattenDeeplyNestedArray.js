/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    const result = [];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) && n>0){
            let subArr = [];
            subArr = flat(arr[i], n-1)
            result.push(...subArr)
        }
        else {
        result.push(arr[i])
        }
    }

    return result
};