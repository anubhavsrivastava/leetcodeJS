/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var unit = n % 10;
    var pd = unit;
    var sum = unit;
    n = (n - unit)/10;
    
    
    while(n!==0){
        unit = n%10;
        n=(n-unit)/10;
        pd *=unit;
        sum +=unit
    }
    
    return pd-sum;
    
};