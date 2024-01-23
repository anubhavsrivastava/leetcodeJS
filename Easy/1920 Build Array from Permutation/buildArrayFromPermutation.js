/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = []

    for(let i=0;i<nums.length;i++){
        result[i] = nums[nums[i]]
      
    }

    return result
};