## Problem

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

Example 1:

Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Example 2:

Input: left = 47, right = 85
Output: [48,55,66,77]

Constraints:

1 <= left <= right <= 104

## Pre analysis

Will have a function to check whether a number is self dividing or not. Then will iterate over the range and check for each number. Plus add custom memoinisation to avoid recalculating for same number.

## Post analysis

### Another approach

```javascript
var selfDividingNumbers = function (left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    String(i)
      .split("")
      .every((number) => +number && !(i % number)) && result.push(i);
  }

  return result;
};
```
