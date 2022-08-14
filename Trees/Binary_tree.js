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

    // if root is null then the newNode becomes the root
    if (this.root == null) {
      this.root = newNode;
      //If the root is not null call the insertNode method for proper insertion of the node
    } else {
      this.insertNode(this.root, data);
    }
  }

  insertNode(node, newNode) {
    // if the newNode is less than the root or current node then we move left until we find a null space to insert the new node
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
        // we recur until we find a null value
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

  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(right) {
    return Math.min(right);
  }

  // Tree Traversal
  //Performs inorder traversal in a tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
}
