/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let result = head;

    while (head && (head.next !== null || head.child !== null)) {
        if (head.child) {
            let children = flatten(head.child);
            delete head.child;
            let nlist = head.next;
            head.next = children;
            children.prev = head
            while (head && head.next != null) { head.child = null; head = head.next };
            head.next = nlist
            if (nlist) {
                nlist.prev = head
            }

        }
        head = head.next
    }
    return result
};