/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var result = [...num.toString()];
    
    for(let i=0;i<result.length;i++){
        
        if(result[i]==='6'){
            result[i]="9";
            return +result.join('')
        }
    }
        
       return +result.join('')
};