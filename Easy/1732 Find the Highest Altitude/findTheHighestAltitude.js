/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentMax = 0
    let sum = 0
    for(let i=0;i<gain.length;i++){
        sum = sum+gain[i]
        if(sum>currentMax){
            currentMax=sum
        }
    }

    return currentMax
};