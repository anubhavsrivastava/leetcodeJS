/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let valArray = [];
	while (head) {
		valArray.push(head.val);
		head = head.next;
	}

	return valArray.toString() === valArray.reverse().toString();
};
