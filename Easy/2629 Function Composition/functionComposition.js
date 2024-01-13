/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = (funcs) => (x) => funcs.reduceRight((acc, next)=> next(acc), x)


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */