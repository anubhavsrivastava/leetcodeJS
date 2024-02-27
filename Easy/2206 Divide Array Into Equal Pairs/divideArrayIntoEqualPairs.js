/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const map = {}
    for(let i=0;i<nums.length;i++){
        map[nums[i]] =  map[nums[i]] || 0
        map[nums[i]] = map[nums[i]]+1 
        map[nums[i]] = map[nums[i]] % 2  
    }  
    return Object.values(map).every(s=>[0,2].includes(s))
  };