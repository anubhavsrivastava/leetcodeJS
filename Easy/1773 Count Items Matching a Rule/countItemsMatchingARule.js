/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const matchingIndex = ['type', 'color', 'name'].findIndex((s)=>s===ruleKey)
    return items.filter((item)=>item[matchingIndex]===ruleValue).length
};