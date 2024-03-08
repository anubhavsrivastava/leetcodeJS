/**
 * @param {string[]} words
 * @return {number}
 */

const c = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

var uniqueMorseRepresentations = function(words) {
    const m = {}
    words.forEach(word=>{
        const encode = []
        for(let char of word){
            encode.push(c[char.charCodeAt(0)-97])
        }
        const w = encode.join('')
        m[w] = (m[w]|| 0)+1
    })

    return Object.values(m).length


};