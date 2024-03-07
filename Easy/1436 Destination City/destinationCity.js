/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let hash = {}

    for(let index in paths){
        hash[paths[index][0]] = paths[index][1]
    }

    let c = paths[0][0]
    while(true){
        if(hash[c]){
            c = hash[c]
        }
        else{
            return c
        }
    }
};