/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -Infinity

    accounts.forEach(acc=>{
        let a = acc.reduce((sum, next)=> sum+next,0)
        if(a>max){
            max= a
        }
    })

return max
};