## Problem

Find the sum of all left leaves in a given binary tree.

Example:

        3
       / \
      9  20
        /  \
       15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

## Pre analysis

Will take recursive approach

## Another solution

    function sumOfLeftLeaves(root) {
      let sum = 0;
      let queue = [root];

      while (queue.length) {
        let currNode = queue.shift();
        if (!currNode) continue;

        if (currNode.left) {
          if (isLeafNode(currNode.left) === true) sum += currNode.left.val;
          queue.push(currNode.left);
        }
        if (currNode.right) {
          queue.push(currNode.right);
        }
      }

      return sum;
    };

    function isLeafNode(node) {
      return !node.left && !node.right;
    };
