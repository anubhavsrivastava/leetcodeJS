## Problem

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
 Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
   15   7


return its level order traversal as:


[
  [3],
  [9,20],
  [15,7]
]


## Pre analysis
Will do recursive traversal

## Another solution

  var levelOrder = function(root) {
      const res = [];
      if (!root) return res;
      const q = [root];
      let level = 0;
      while (q.length) {
          res.push([]);
          const level_length = q.length;
          for (let i = 0; i < level_length; i++) {
              const n = q.shift();
              res[level].push(n.val);
              if (n.left) q.push(n.left);
              if (n.right) q.push(n.right);
          }
          level++;
      }
      return res;
  };