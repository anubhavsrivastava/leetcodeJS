/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const answer = []
    for(let i =0;i<s.length;i++){
        if(i%2===0){
            answer.push(s[i])
        }
        else{
            answer.push(String.fromCharCode(s[i-1].charCodeAt(0)+ Number(s[i],10)))
        }
    }
    return answer.join('')
};