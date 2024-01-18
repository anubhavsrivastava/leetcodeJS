var TimeLimitedCache = function() {
    this.map = {}
    this.handles = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let alreadyExists = false
    if(this.map[key] !== undefined){
        alreadyExists = true
        clearTimeout(this.handles[key])
    }
    this.map[key] = value
    this.handles[key] = setTimeout(()=>{
        delete this.map[key]
    }, duration)
    return alreadyExists
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map[key] !==undefined) return this.map[key]
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    
    return Object.keys(this.map).length 
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */