/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const hash = new Map()

    for(let i=0;i<nums.length; i++){
        if(hash.has(nums[i])){
            return nums[i]
        }

        hash.set(nums[i])
    }

    return null
};