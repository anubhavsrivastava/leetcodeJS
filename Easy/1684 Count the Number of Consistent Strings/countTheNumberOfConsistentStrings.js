/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    const ald = allowed.split("")
    let count = 0

    for(let i=0;i<words.length;i++){
        if(words[i].split("").some(c=>!ald.includes(c)))
        {
            continue
        }
        count++
    }

    return count
};