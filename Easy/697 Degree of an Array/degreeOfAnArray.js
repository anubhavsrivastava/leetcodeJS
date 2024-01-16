/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let maxN = nums[0]
    let dict = {}

    for(let i = 0 ; i< nums.length; i++){
        dict[nums[i]] = dict[nums[i]] || {
            times: 0,
            firstIndex: i,
            lastIndex: i
        }
        let c = dict[nums[i]]

        c.times++
        c.lastIndex = i
        if(c.times > dict[maxN].times){
             
            maxN = nums[i]
        }
        if(c.times === dict[maxN].times && (c.lastIndex - c.firstIndex) < (dict[maxN].lastIndex - dict[maxN].firstIndex)){
             
            maxN = nums[i]
        }
    }

    return dict[maxN].lastIndex - dict[maxN].firstIndex+1
};