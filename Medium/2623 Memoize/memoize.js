/**
 * @param {Function} fn
 */
function memoize(fn) {
     
    let existingMaps = {}
    return function(...args) {
        
        const argKeys = JSON.stringify(args)
        if(existingMaps[argKeys]!==undefined){
            return existingMaps[argKeys]
        }

        const result = fn.apply(this, args)
        existingMaps[argKeys] = result
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */