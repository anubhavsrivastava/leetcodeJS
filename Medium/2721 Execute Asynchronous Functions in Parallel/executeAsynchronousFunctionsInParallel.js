/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(fun) {
    let results = []
    let resultCount = 0


    return new Promise((resolve, reject)=>{
        for(let i=0;i<fun.length;i++){
            fun[i]().then(result=>{
                results[i]=result;
                resultCount++
                if(resultCount===fun.length){
                    resolve(results)
                }

            }).catch(reject)

        }

    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */