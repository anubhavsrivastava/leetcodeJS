/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let map = {}

    for(let i=0;i<nums.length;i++){
        map[nums[i]] = (map[nums[i]] || 0) +1
         if(map[nums[i]]>2){
             return false
         }
    }

    return true
};