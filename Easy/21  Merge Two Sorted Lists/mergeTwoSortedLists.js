/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	let n = new ListNode(0);
	let head = n;
	while (l1 != null && l2 != null) {
		if (l1.val < l2.val) {
			n.next = l1;
			l1 = l1.next;
		} else {
			n.next = l2;
			l2 = l2.next;
		}
		n = n.next;
	}

	if (l1 != null) {
		n.next = l1;
	}
	if (l2 != null) {
		n.next = l2;
	}

	return head.next;
};
