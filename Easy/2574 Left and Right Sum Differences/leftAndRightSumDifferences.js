/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    // finding left sum
    let leftsum=[];
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=0;j<i;j++){
            sum+=nums[j]
        }
        leftsum.push(sum)
    }
    // finding right sum
    let rightsum=[];
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=i+1;j<nums.length;j++){
            sum+=nums[j]
        }
        rightsum.push(sum)
    }
    // finding the modulas of sum by Math.abs operator
    let result=[]
    for(let i=0;i<leftsum.length;i++){
        result.push(Math.abs(leftsum[i]-rightsum[i]))
    }
    return result
};