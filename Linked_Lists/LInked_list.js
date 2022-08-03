///////////////////// Reverse Linked List //////////////////////////
// Given a Linked List, return it in  reverse

const ReverseLinkedList = function (head) {
  let prev = null;
  let currentNode = head;
  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
};

ReverseLinkedList();
//Time = 0(n)
//Space = 0(1)
