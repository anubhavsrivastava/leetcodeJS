/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise( (resolved, rejected)=>{
            
            const timer = setTimeout(()=>{
                rejected("Time Limit Exceeded")
            },t)

           fn(...args)
            .then(resolved)
            .catch(rejected)
            .finally(() => clearTimeout(timer));

        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */