## Problem

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:

         1         1
        / \       / \
       2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:

Input:

           1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:

Input:

           1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

## Pre analysis

A simple walk should tell whether tree are same

## Another solution

Transforming into array representation and comparing it

        var isSameTree = function(p, q) {
            var qArr = [];
            var pArr = [];
            toArr(q, qArr);
            toArr(p, pArr);
            console.log(qArr);
            console.log(pArr);
            if (qArr.length !== pArr.length) return false;
            for (var i = 0; i < qArr.length; i++) {
                if (qArr[i] !== pArr[i]) return false;
            }
            return true;
        };

        var toArr = function(node, acc) {
            if (!node) {
                return;
            }
            acc.push(node.val);
            acc.push(toArr(node.right, acc));
            acc.push(toArr(node.left, acc));
        }
