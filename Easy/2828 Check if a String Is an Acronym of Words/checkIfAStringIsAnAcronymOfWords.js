/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return s.length===words.length && s.split('').every((char,i)=> words[i][0]===char)
 };
 
 