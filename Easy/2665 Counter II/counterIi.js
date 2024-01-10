/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initialValue = init;
    return  {
     decrement: ()=> --init,
     increment: ()=> ++init,
     reset: ()=> {
         init = initialValue
         return init
     }    
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */