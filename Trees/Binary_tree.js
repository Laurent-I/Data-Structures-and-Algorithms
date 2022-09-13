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
    // Initialize new node with the node class
    let newNode = new Node(data);

    // if root is null then the newNode becomes the root
    if (this.root == null) {
      this.root = newNode;
      //If the root is not null call the insertNode method for proper insertion of the node
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }
    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
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

  // findMinNode(right) {
  //   return Math.min(right);
  // }

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
  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  //Helper Functions

  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node;
  }
}

// create an object for the BinarySearchTree
let BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

let root = BST.getRootNode();
BST.inorder(root);

// Removing node with no children
BST.remove(5);
// 15
// / \
// 10 25
// / \ / \
// 7 13 22 27
// \ /
// 9 17
root = BST.getRootNode();
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
// Removing node with one child
BST.remove(7);
// 15
// / \
// 10 25
// / \ / \
// 9 13 22 27
// /
// 17
root = BST.getRootNode();
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
// Removing node with two children
BST.remove(15);
// 17
// / \
// 10 25
// / \ / \
// 9 13 22 27
root = BST.getRootNode();
console.log("inorder traversal");
// prints 9 10 13 17 22 25 27
BST.inorder(root);
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
