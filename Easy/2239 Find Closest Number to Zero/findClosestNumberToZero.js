/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let cl = Infinity

    for(let i=0;i<nums.length;i++){
         if(Math.abs(nums[i])===Math.abs(cl))
         {
            cl = nums[i] > cl? nums[i]: cl
         }
        if(Math.abs(nums[i])<Math.abs(cl)){
            cl = nums[i]
        }
    }

    return cl
};