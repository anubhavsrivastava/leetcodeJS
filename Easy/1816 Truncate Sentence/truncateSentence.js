/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    const result = []
    let w= []
    for(let i=0;i<s.length;i++){
         

        if(s[i]===' '){
            result.push(w.join(''))
            w =[]

            if(result.length===k){
               
             return result.join(' ')
            }

        }
        else {
            w.push(s[i])
        }
    }

 if(w.length){
     result.push(w.join(''))
 }
    return result.join(' ')
};