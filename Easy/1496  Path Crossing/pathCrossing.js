/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let count = [0,0];
    const hash = {'00':1}
    
    for(let item of path) {
        if(item === 'N') {
            count[1]++;
        } else if(item === 'E') {
            count[0]--;
        } else if(item === 'S') {
            count[1]--;
        } else if( item === 'W') {
            count[0]++;
        }
        const ch = `${count[0]}${count[1]}`;
        if(hash[ch]) return true;
        hash[ch] = 1;
    }
    
    return false;
};