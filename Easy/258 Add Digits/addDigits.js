/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    while(num>9){
        num = num.toString().split('').reduce((sum,next)=> sum+(+next),0)

    }
    return num
};