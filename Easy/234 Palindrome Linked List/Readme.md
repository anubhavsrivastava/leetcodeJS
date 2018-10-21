## Problem

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2

Output: false

Example 2:

Input: 1->2->2->1

Output: true

Follow up:
Could you do it in O(n) time and O(1) space?

## Pre analysis

Will put it into an array and check if its a palindrome. Will Take space Complexity of O(n);

## Another solution

fast - slow variant

    var isPalindrome = function(head) {
        let slow = fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (fast) {
            slow = slow.next;
        }

        let prev = null;
        while (slow) {
            let next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;

        }

        slow = prev;
        fast = head;
        while (slow) {
            if (slow.val !== fast.val) return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    };
