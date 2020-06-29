## Problem

Given a m \* n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]

Output: [15]

Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]

Output: [12]

Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:

Input: matrix = [[7,8],[1,2]]

Output: [7]

Constraints:

m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct.

## Pre analysis

Will need to iterate through each element and store corresponding rowMin and ColMax array. Eventually find the common number between both rowMin and ColMax.

Max(O(mn), O(n^2))

## Another solution

Another way would be to find row mins and keep search in col, if you encounter the same number return it.

    var luckyNumbers  = function(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            // find the smallest number
            let smallest = matrix[row][0];
            let smallestIndex = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] < smallest) {
                    smallest = matrix[row][col];
                    smallestIndex = col;
                }
            }

            // find if the number is the largest in the row
            let found = true;
            for (let r = 0; r < matrix.length; r++) {
                if (smallest < matrix[r][smallestIndex]) {
                found = false;
                break;
                };
            }

            if (found) {
            return [smallest];
            }
        }

        return [];
    };
