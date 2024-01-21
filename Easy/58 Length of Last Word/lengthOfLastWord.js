/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastCount = 0
    let lastWord = ''
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===' ' && lastCount===0){
            continue
        }

        if(s[i]===' '){
            return lastCount
        }
        
        lastCount++
    }

    return lastCount
};