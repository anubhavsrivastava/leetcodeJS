## Problem

Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

## Pre analysis

Will simply add 0 and combine array

## Another solution

Not worrying about space complexity, two pointer approach

```javascript
var duplicateZeros = function(arr) {
	let j = 0;
	let i = 0;
	let newArr = arr.slice();
	while (j < newArr.length) {
		if (newArr[i] === 0) {
			arr[j++] = 0;
			if (j >= arr.length) break;
		}
		arr[j++] = newArr[i];
		i++;
	}
	arr = arr;
};
```
