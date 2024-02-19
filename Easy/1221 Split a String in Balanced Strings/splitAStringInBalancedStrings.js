/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let totalCount = 0
    let [l,r,i] = [0,0,0]
    while(i<s.length){
        if(s[i]==='L'){
            l++
        }
        else {
            r++
        }

        if(l===r){
            totalCount++
            l=0
            r=0
        }

        i++
    }
    return totalCount
};