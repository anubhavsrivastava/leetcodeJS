/**
 * @param {number[]} nums
 * @return {number}
 */
const getDS = (num)=>{
    return num.toString().split('').reduce((s,n)=>{
        s= s + (+n)
        return s
    },0)
}
var differenceOfSum = function(nums) {
   let es = 0
   let ds = 0
   for(let i=0;i<nums.length;i++){
       es = es + nums[i]
       ds = ds + getDS(nums[i])
   }

   return Math.abs(es-ds)
};