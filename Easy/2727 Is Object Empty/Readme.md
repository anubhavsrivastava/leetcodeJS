## Problem

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.

Constraints:

obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 105

Can you solve it in O(1) time?

## Pre analysis

Simple JS implementation og `Object.keys` should do the trick.

## Post analysis

Time complexity: O(n), where n is the size of object
Space complexity: O(n), where n is the size of object

## Another solution

Another solution is to use `for in` loop and check if any key is present.

```javascript
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
```
