/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let smallerNumsCount = 0;
    let totalCount = 0
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            totalCount++
            continue
        }
        if(nums[i]<target){
            smallerNumsCount++
        }
    }

    return new Array(totalCount).fill(0).map((_,i)=>i+smallerNumsCount)
};