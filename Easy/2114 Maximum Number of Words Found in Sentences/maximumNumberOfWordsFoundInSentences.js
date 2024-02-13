/**
 * @param {string[]} sentences
 * @return {number}
 */

var getWordsInSentence = function(sentence) {
    let count = 0
    let prev = ' '

    for(let i=0;i<sentence.length;i++){
          if(sentence[i]===' ' && prev!==' '){
              count++
          }
          prev = sentence[i]
     }

     return ++count

 }
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(getWordsInSentence))
};