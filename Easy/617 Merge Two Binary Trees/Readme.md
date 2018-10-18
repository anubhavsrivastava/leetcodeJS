## Problem

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input:

    Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7

Output:

Merged tree:

         3
        / \
       4   5
      / \   \
     5   4   7

Note: The merging process must start from the root nodes of both trees.

## Pre analysis

A simple walk over tree should create resultant tree.

## Post analysis

Had to have two checks for t1 and t2 on mergeTree and mergeSubTree for test case to pass, there was difference of node being null and root parent being [] incase of emptiness.
Need to have some idea about BFS/DFS with both iterative/recusive approach `#todo`

## Another solution

Another JS specific quick solution

    var mergeTrees = function(t1, t2) {
        if(!t1) return t2;
        if(!t2) return t1;

        t1.val += t2.val;
        // continue merging
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);

        return t1;
    };
