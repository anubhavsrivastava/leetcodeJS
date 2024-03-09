/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const nMap1 = nums1.reduce((acc,next)=>{
        acc[next] = (acc[next] ||0) +1
        return acc
    },{})

    const nMap2 = nums2.reduce((acc,next)=>{
        acc[next] = (acc[next] ||0) +1
        return acc
    },{})

    const a = new Set()
    for(let i=0;i<nums1.length;i++){
        if(nMap2[nums1[i]]){
            
            continue
        }
        
        a.add(nums1[i])
    }

    const b = new Set()
    for(let i=0;i<nums2.length;i++){
        if(nMap1[nums2[i]]){
            
            continue
        }
        b.add(nums2[i])
    }

    return [[...a],[...b]]
};