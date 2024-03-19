/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let result = []
    let e = false
    for(let i=0;i<word.length;i++){
        if(e){
            result.push(word[i])
            continue
        }

        result.push(word[i])
        
        if(word[i]===ch){     
            result.reverse()
            e = true
            continue
        }
    }

    return result.join('')
};
