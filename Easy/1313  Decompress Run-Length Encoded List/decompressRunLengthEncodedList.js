/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i+=2){
        for(let j =0;j<nums[i];j++){
            result.push(nums[i+1])
        }  
        
    }
    return result;
};