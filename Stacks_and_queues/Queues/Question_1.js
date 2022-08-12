//////////////////////////Implement Queue With Stacks ///////////////////////
//Implement the class Queue using Stacks. The queue methods you need to implement are
// enqueue, dequeue, peek, empty

//enqueue: append a value to the end of the queue
//dequeue: remove a value to the start of the queue
// peek: return the value at the start of the queue
// empty: return a boolean if a queue is empty

class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }
  enqueue(value) {
    this.in.push(value);
  }
  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

// Space: O(n)
// Time: O(n)
