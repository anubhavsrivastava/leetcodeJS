## Problem

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2

Output: 1->2

Example 2:

Input: 1->1->2->3->3

Output: 1->2->3

## Pre analysis

Will keep iterator, and move to next if next value is not same, else will point next to hopped next.
Time Complexity: O(n) and space Complexity: O(1)

## Another solution

Another fast-slow approach

    var deleteDuplicates = function(head) {
        if(head === null) return head;

        var slower = head;
        var faster = head.next;
        while(slower !== null){
            while(faster !== null && faster.val == slower.val)
                faster = faster.next;
            slower.next = faster;
            slower = slower.next
            faster = slower !== null? slower.next : null;
        }
        return head;
    };
