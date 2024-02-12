/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisibleSum = 0;
    let notDivisibleSum  = 0;
    for(let i = 1 ; i <= n ; i++){
        if(i%m == 0){
            divisibleSum += i
        } else {
            notDivisibleSum += i
        }
    }
    return  notDivisibleSum -divisibleSum 
};