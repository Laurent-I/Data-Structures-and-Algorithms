/////////////// Merge Multi-Level Doubly Linked List //////////////////
// Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list,
// These child lists can have one or more child doubly linked lists of their own, and so on

const flatten = function (head) {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
};
flatten();

// Space O(1)
// Time O(n)
