/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const nMap = nums.reduce((prev,next)=> {prev[next]=true; return prev}, {})
    let newResult = original
    while(nMap[newResult]){
        newResult =newResult*2
    }

    return newResult
};