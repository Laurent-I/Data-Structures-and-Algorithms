// function BinaryTreeNode(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// Calculating nodes at level
// Level 0: 2^0= 1
// Level 1: 2^1= 2
// Level 2: 2^2= 4
// Level 3: 2^3= 8

// number of nodes = 2^height - 1
// log nodes = height

//Binary Search Tree Node
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

//Binary Search Tree Class

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // function to be implemented
  // insert(data)
  // remove(data)

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)

  insert(data) {
    // Initialise new node with the node class
    let newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
