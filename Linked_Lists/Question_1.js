/**
 * ///////////// M, N Reversals /////////////////////////////
 * Given a linked list and numbers m and n, return it back with only position m to n in reverse
 */

const reverseBetween = function (head, m, n) {
  let currentPos = 1,
    currentNode = head,
    start = head;
  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }
  let newList = null,
    tail = currentNode;
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

reverseBetween();
// time : O(n)
// space : O(1)
