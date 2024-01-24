/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const result = []
      for(let i=0;i<words.length;i++){
          if(words[i].indexOf(x)>=0){
              result.push(i)
          }
      }
    return result  
  };