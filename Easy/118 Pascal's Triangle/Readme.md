## Problem

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5

Output:

        [
                 [1],
                [1,1],
               [1,2,1],
              [1,3,3,1],
             [1,4,6,4,1]
        ]

## Pre analysis

Would take heuristic approach, iterative, will check for previous row same index and index-1 values.
