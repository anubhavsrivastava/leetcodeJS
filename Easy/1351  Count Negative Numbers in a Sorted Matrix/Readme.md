## Problem

Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

Output: 8

Explanation: There are 8 negatives number in the matrix.


Example 2:

Input: grid = [[3,2],[1,0]]

Output: 0


Example 3:

Input: grid = [[1,-1],[-1,-1]]

Output: 3


Example 4:

Input: grid = [[-1]]

Output: 1


 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100

## Pre analysis
Will iterate the matrix from bottom right to bottom up.

## Another Solution

    var countNegatives = function (grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let lastNeg = grid[0].length - 1;
        let res = 0;

        for (let row = 0; row < rows; row++) {
            if (grid[row][0] < 0) {
                res += cols;
                continue;
            }
            if (grid[row][cols - 1] > 0) {
                continue;
            }
            let l = 0, r = lastNeg;
            while (l <= r) {
                let m = l + (r - l) / 2;
                m = Math.floor(m);
                if (grid[row][m] < 0) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            res += (cols-l); lastNeg = l;
        }
        return res;
    };
