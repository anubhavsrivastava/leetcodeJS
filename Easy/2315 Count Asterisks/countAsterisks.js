/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let output = 0;
    let countOn = true

    for(let i=0;i<s.length;i++){
        if(s[i]==='|'){
            countOn = !countOn
            continue
        }
        if(s[i]==='*' && countOn){
            output++
        }
    }

    return output
};