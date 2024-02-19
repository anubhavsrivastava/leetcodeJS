/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = (words, separator)=>   words.map(word=>word.split(separator)).flat().filter(Boolean)