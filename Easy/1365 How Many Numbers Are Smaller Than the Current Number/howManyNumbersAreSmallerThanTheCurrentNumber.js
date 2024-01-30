/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let mapS = {}
    const sorted = [...nums].sort((a,b)=>b-a)
    
    for(let i=0;i<sorted.length;i++){
        let offset = 0
        let j = i;
        while(sorted[j]===sorted[i]){
            offset++;j++
        }
        mapS[sorted[i]] = sorted.length-j
    }

    return nums.map(n=>mapS[n])
};