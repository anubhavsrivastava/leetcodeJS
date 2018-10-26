## Problem

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:

Input: [1,2,2,3]

Output: true

Example 2:

Input: [6,5,4,4]

Output: true

Example 3:

Input: [1,3,2]

Output: false

Example 4:

Input: [1,2,4,5]

Output: true

Example 5:

Input: [1,1,1]

Output: true

Note:

1 <= A.length <= 50000
-100000 <= A[i] <= 100000

## Pre analysis

Will check whether the order remains same for every elements upto second last elements

## Another Solution

    var isMonotonic = function(A) {
        if(A.length === 1) {
            return true;
        }

        let t1 = true;
        let t2 = true;
        for(let i = 0; i < A.length - 1; i++){
            if(A[i] > A[i+1]) t1 = false;
            if(A[i] < A[i+1]) t2 = false;
        }

        return t2 || t1;
    };
