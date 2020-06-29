/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let target = candies.reduce((prev,next)=>{
        if(prev<next){
            prev=next;
        }
        return prev;
    });
    
    return candies.map(c => (c+extraCandies)>=target)
};