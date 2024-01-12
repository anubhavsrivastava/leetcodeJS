/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev=0;
    let current=1

    yield prev
    yield current
    while(true){
        const result = prev+current
        prev = current
        current = result
        yield result
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */