## Problem

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:

Input:

      3
     / \
    9  20
      /  \
     15   7

Output: [3, 14.5, 11]

Explanation:

The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

Note:

The range of node's value is in the range of 32-bit signed integer.

## Pre analysis

Will keep an array of array of elements at each level and return sum of level/count on that level

## Post analysis

Either of BFS/DFS should do

## Another solution

    var averageOfLevels = function(root) {
        let q = root ? [root] : [], output = [];
        while(q.length) {
            let size = q.length;
            let sum = 0;
            for(let i = 0; i < size; i++) {
                let node = q.shift();
                sum += node.val;
                node.left && q.push(node.left);
                node.right && q.push(node.right);
            }
            output.push(sum/size);
        }
        return output;
    };
