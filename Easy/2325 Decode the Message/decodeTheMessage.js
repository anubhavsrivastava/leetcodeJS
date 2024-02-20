/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let char = 97
    let map = { ' ': 32 }

    for(let i=0;i<key.length;i++){
        if(!map[key[i]]){
           map[key[i]] = char
           char++ 
        }
    } 
    return message.split('').map(c=>String.fromCharCode(map[c])).join('')

};