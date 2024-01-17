/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = [...arr1,...arr2].reduce((acc,next)=> {
        acc[next.id] = acc[next.id] || {}
        acc[next.id] = {...acc[next.id], ...next}
        return acc
    }, {})

    return Object.values(map)
};