/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {}

    for(var i=0;i<this.length;i++){
        const key = fn(this[i])

        result[key] = result[key] || []
         result[key].push(this[i])
    }
    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */